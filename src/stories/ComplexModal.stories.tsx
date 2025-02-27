import type { Meta, StoryObj } from '@storybook/react'
import { ModalProvider, useModal } from '../'
import { closeModal, confirmModal, openModal, openModalButtonText, visibilityObserverByTestId } from './utils'
import { useRef, useState } from 'react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { testIds } from '../Modal/utils/testingIds'
import { ImageModalLayout } from '../Modal/layout'

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
  name: 'change display order for blocking (modal) dialogs',
  render: BlockingModals,
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

export const setZIndexForNonBlockingModal: Story = {
  name: 'change display order for non-blocking dialogs with z index',
  render: NonBlockingModals,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const canvas = within(root)
    await openModal(root)
    await expect(canvas.getByText(secondModalContent)).toBeVisible()
    const secondModal = canvas.getByText(secondModalContent)
    secondModal.setAttribute('data-testid', 'secondModal')

    const visibility = { firstModal: false, secondModal: false }
    const observer = visibilityObserverByTestId(visibility)

    observer.observe(secondModal)
    await waitFor(() => expect(visibility).toStrictEqual({ firstModal: false, secondModal: true }))

    await userEvent.click(canvas.getByRole('button', { name: moveFirstModalToFront }))
    const firstModal = canvas.getByText(firstModalContent)
    firstModal.setAttribute('data-testid', 'firstModal')
    observer.observe(firstModal)

    await waitFor(() => expect(visibility).toStrictEqual({ firstModal: true, secondModal: false }))

    await userEvent.click(canvas.getByRole('button', { name: moveFirstModalToBack }))
    await waitFor(() => expect(visibility).toStrictEqual({ firstModal: false, secondModal: true }))

    observer.disconnect()
  },
}

const backgroundContentId = 'background-content'

export const FullScreenModalStory: Story = {
  name: 'full screen modal',
  render: FullScreenModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const visibility = { [backgroundContentId]: false, [testIds.modalContainer]: false }

    const observer = visibilityObserverByTestId(visibility)
    const backgroundContent = window.document.querySelector(`[data-testid=${backgroundContentId}]`)

    if (backgroundContent) {
      observer.observe(backgroundContent)
    }

    await assertOnlyBackgroundIsVisible(visibility)

    await openObservedModal(root, observer)

    await assertOnlyModalIsVisible(visibility)

    await closeModal(root)

    await assertOnlyBackgroundIsVisible(visibility)

    observer.disconnect()
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

function assertOnlyModalIsVisible(visibility: Record<string, boolean>) {
  return waitFor(() => expect(visibility).toStrictEqual({ [backgroundContentId]: false, [testIds.modalContainer]: true }))
}

function assertOnlyBackgroundIsVisible(visibility: Record<string, boolean>) {
  return waitFor(() => expect(visibility).toStrictEqual({ [backgroundContentId]: true, [testIds.modalContainer]: false }))
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
const fullScreenModalContent = 'should cover the whole screen'

function FullScreenModal() {
  const Content = () => {
    const { openNewModal } = useModal()
    const openModal = () => {
      openNewModal(
        {
          children: <p>{fullScreenModalContent}</p>,
          title: 'full screen',
          isFullScreen: true,
          isBlocking: true,
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
            isBlocking: true,
            getLayout: ({ onClose }) => (
              <ImageModalLayout {...{
                onClose,
                title: 'image',
                src: 'https://b9ac758c-3c84-40c5-8991-14a9d06a8c83.mdnplay.dev/shared-assets/images/examples/grapefruit-slice.jpg',
                altText: 'Grapefruit slice atop a pile of other slices',
              }}
              />
            ),
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

const moveFirstModalToBack = 'move first modal to back'
const firstModalContent = 'should be in the background initially'
const moveFirstModalToFront = 'move first modal to front'
const secondModalContent = 'should be in the foreground initially'

function BlockingModals() {
  const Content = () => {
    const { openNewModal, moveToFront, moveToBack } = useModal()
    return (
      <div>
        <button onClick={() => {
          const firstModalId = openNewModal(
            { children: <p>{firstModalContent}</p>,
              title: 'first modal',
              buttons: () => <button onClick={() => moveToBack(firstModalId)}>{moveFirstModalToBack}</button>,
              isBlocking: true,
            },
          )
          openNewModal(
            { children: <p>{secondModalContent}</p>,
              title: 'second modal',
              buttons: () => <button onClick={() => moveToFront(firstModalId)}>{moveFirstModalToFront}</button>,
              isBlocking: true,
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

function NonBlockingModals() {
  const Content = () => {
    const firstModalId = useRef<string>(null)
    const secondModalId = useRef<string>(null)
    const { openNewModal, setZIndex } = useModal()
    return (
      <div>
        <button onClick={() => {
          firstModalId.current = openNewModal(
            { children: <p>{firstModalContent}</p>,
              title: 'first modal',
              buttons: () => (
                <button onClick={() => {
                  setZIndex(secondModalId.current!, 1)
                  setZIndex(firstModalId.current!, 0)
                }}
                >
                  {moveFirstModalToBack}
                </button>
              ),
            },
          )
          secondModalId.current = openNewModal(
            { children: <p>{secondModalContent}</p>,
              title: 'second modal',
              buttons: () => (
                <button onClick={() => {
                  setZIndex(secondModalId.current!, 0)
                  setZIndex(firstModalId.current!, 1)
                }}
                >
                  {moveFirstModalToFront}
                </button>
              ),
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
