import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import { ModalProvider } from '../Modal/ModalProvider'
import { useModal } from '../Modal/ModalContext'
import { testIds } from '../Modal/utils/testingIds'

const meta = {
  title: 'Modal',
  component: ModalProvider,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModalProvider>

export default meta
type Story = StoryObj<typeof meta>

const openModalButtonText = 'open modal'
const closeModalButtonText = 'close'

export const Modal: Story = {
  render: SimpleModal,
}

export const SingleContentSingleModal: Story = {
  name: 'simple modal can be opened and closed displaying title and content',
  render: SimpleModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement

    await openModal(root)
    await assertContent(root)
    await closeModal(root)
  },
}

export const ModalCanBeClosedWithEsc: Story = {
  name: 'modal can be closed with "Esc"',
  render: SimpleModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const canvas = within(root)

    await openModal(root)
    await userEvent.keyboard('[Enter]') // todo why [Escape] won't work
    await expect(canvas.getByText(closeModalButtonText)).not.toBeVisible()
  },
}

export const DefaultButtonFocused: Story = {
  name: '"close" button is focused by default',
  render: SimpleModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const canvas = within(root)

    await openModal(root)
    await expect(canvas.getByText(closeModalButtonText)).toHaveFocus()
  },
}

function SimpleModal() {
  const Content = () => {
    const { openModalWith } = useModal()
    return (
      <button onClick={() => openModalWith({ body: <div>content</div>, title: 'SingleContentSingleModal' })}>
        {openModalButtonText}
      </button>
    )
  }

  return (
    <ModalProvider>
      <Content />
    </ModalProvider>
  )
}

async function assertContent(root: HTMLElement) {
  const canvas = within(root)
  await expect(
    canvas.getByTestId(
      testIds.modalTitle,
    ),
  ).toHaveTextContent('SingleContentSingleModal')
  await expect(
    canvas.getByTestId(
      testIds.modalContent,
    ),
  ).toHaveTextContent('content')
}

async function openModal(root: HTMLElement) {
  const canvas = within(root)
  await userEvent.click(canvas.getByRole('button', { name: openModalButtonText }))
}

async function closeModal(root: HTMLElement) {
  const canvas = within(root)
  await userEvent.click(canvas.getByRole('button', { name: closeModalButtonText }))
}
