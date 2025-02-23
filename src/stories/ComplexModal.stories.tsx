import type { Meta, StoryObj } from '@storybook/react'
import { ModalProvider } from '../Modal/ModalProvider'
import { useModal } from '../Modal/ModalContext'
import { closeModal, confirmModal, openModal, openModalButtonText } from './utils'
import { useState } from 'react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { testIds } from '../Modal/utils/testingIds'
import { ImageModal } from '../Modal/modal-content-variants'

const meta = {
  title: 'Complex modal',
  component: ModalProvider,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModalProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  render: ConfirmationModal,
}

const waitingForConfirmationText = 'waiting for confirmation'
const confirmedText = 'confirmed'

export const ConfirmationModalCloses: Story = {
  name: 'confirmation modal closes after confirmed',
  render: ConfirmationModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const canvas = within(root)
    await expect(canvas.getByText(waitingForConfirmationText)).toBeVisible()
    await openModal(root)
    await confirmModal(root)
    await expect(canvas.getByText(confirmedText)).toBeVisible()
    await expect(canvas.queryByTestId(testIds.modalContainer)).not.toBeInTheDocument()
  },
}

export const CustomButtonOpensMultipleModals: Story = {
  name: 'confirmation modal opens multiple modals then changes display order',
  render: CustomButtonsModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const canvas = within(root)
    await openModal(root)
    await expect(canvas.getByText(secondModalContent)).toBeVisible()

    await userEvent.click(canvas.getByRole('button', { name: moveFirstModalToFront }))
    await expect(canvas.getByText(firstModalContent)).toBeVisible()

    await userEvent.click(canvas.getByRole('button', { name: moveFirstModalToBack }))
    await expect(canvas.getByText(secondModalContent)).toBeVisible()
  },
}

const backgroundContentId = 'background-content'

export const FullScreenModalStory: Story = {
  name: 'full screen modal',
  render: FullScreenModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const visibility = { isModalVisible: false, isBackgroundVisible: false }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // @ts-expect-error IntersectionObserver v2 types missing https://w3c.github.io/IntersectionObserver/v2/#calculate-visibility-algo
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const isVisible: boolean = entry.isVisible
        if (entry.target.getAttribute('data-testid') === backgroundContentId) {
          visibility.isBackgroundVisible = isVisible
        }
        else {
          visibility.isModalVisible = isVisible
        }
      })
    }, {
      // @ts-expect-error IntersectionObserver v2 types missing https://w3c.github.io/IntersectionObserver/v2/#calculate-visibility-algo
      trackVisibility: true,
      delay: 100,
    })
    const backgroundContent = window.document.querySelector(`[data-testid=${backgroundContentId}]`)
    if (backgroundContent) {
      observer.observe(backgroundContent)
    }

    await assertOnlyBackgroundIsVisible(visibility)

    await openObservedModal(root, observer)

    await assertOnlyModalIsVisible(visibility)

    await closeModal(root)

    await assertOnlyBackgroundIsVisible(visibility)
  },
}

export const CustomContentComponentModal: Story = {
  name: 'can render components dynamically inside modal',
  render: ImageModalExample,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    await openModal(root)
  },
}

async function openObservedModal(root: HTMLElement, observer: IntersectionObserver) {
  const canvas = within(root)
  await openModal(root)
  await waitFor(() => expect(canvas.queryByTestId(testIds.modalContainer)).toBeInTheDocument())
  const modal = window.document.querySelector(`[data-testid=${testIds.modalContainer}]`)
  if (modal) {
    observer.observe(modal)
  }
}

function assertOnlyModalIsVisible(visibility: { isModalVisible: boolean, isBackgroundVisible: boolean }) {
  return waitFor(() => expect(visibility).toStrictEqual({ isBackgroundVisible: false, isModalVisible: true }))
}

function assertOnlyBackgroundIsVisible(visibility: { isModalVisible: boolean, isBackgroundVisible: boolean }) {
  return waitFor(() => expect(visibility).toStrictEqual({ isBackgroundVisible: true, isModalVisible: false }))
}

function ConfirmationModal() {
  const Content = () => {
    const [text, setText] = useState(waitingForConfirmationText)
    const { openNewModal, close } = useModal()
    return (
      <div>
        {text}
        <div>
          <button onClick={() => openNewModal(
            { children: <p>confirm modal content</p>,
              title: 'confirm modal',
              onConfirmed: (modalId) => {
                setText(confirmedText)
                close(modalId)
              },
            },
          )}
          >
            {openModalButtonText}
          </button>
        </div>
      </div>
    )
  }

  return (
    <ModalProvider>
      <Content />
    </ModalProvider>
  )
}

const textCoveredByFullScreenModal = 'this shouldn\'t be visible when modal is opened'

function FullScreenModal() {
  const Content = () => {
    const { openNewModal } = useModal()
    const openModal = () => {
      openNewModal(
        {
          children: <p>{fullScreenModalContent}</p>,
          title: 'full screen',
          isFullScreen: true,
          isModal: true,
          // onClose: () => { observer.disconnect() },
        },
      )
    }
    return (
      <div>
        <p data-testid={backgroundContentId}>
          {textCoveredByFullScreenModal}
        </p>
        <div>
          <button onClick={openModal}>
            {openModalButtonText}
          </button>
        </div>
      </div>
    )
  }

  return (
    <ModalProvider>
      <Content />
    </ModalProvider>
  )
}

function ImageModalExample() {
  const Content = () => {
    const { openNewModal } = useModal()
    return (
      <div>
        <button onClick={() => openNewModal(
          {
            title: 'image',
            contentComponentToRender: ImageModal({
              src: 'https://b9ac758c-3c84-40c5-8991-14a9d06a8c83.mdnplay.dev/shared-assets/images/examples/grapefruit-slice.jpg',
              altText: 'Grapefruit slice atop a pile of other slices',
            }),
          },
        )}
        >
          {openModalButtonText}
        </button>
      </div>
    )
  }

  return (
    <ModalProvider>
      <Content />
    </ModalProvider>
  )
}

const fullScreenModalContent = 'should cover the whole screen'

const moveFirstModalToBack = 'move first modal to back'
const firstModalContent = 'should be in the background initially'
const moveFirstModalToFront = 'move first modal to front'
const secondModalContent = 'should be in the foreground initially'

function CustomButtonsModal() {
  const Content = () => {
    const { openNewModal, moveToFront, moveToBack } = useModal()
    return (
      <div>
        <button onClick={() => {
          const firstModalId = openNewModal(
            { children: <p>{firstModalContent}</p>,
              title: 'first modal',
              buttons: <button onClick={() => moveToBack(firstModalId)}>{moveFirstModalToBack}</button>,
              isModal: true,
            },
          )
          openNewModal(
            { children: <p>{secondModalContent}</p>,
              title: 'second modal',
              buttons: <button onClick={() => moveToFront(firstModalId)}>{moveFirstModalToFront}</button>,
              isModal: true,
            },
          )
        }}
        >
          {openModalButtonText}
        </button>
      </div>
    )
  }

  return (
    <ModalProvider>
      <Content />
    </ModalProvider>
  )
}
