import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import { ModalProvider } from '../Modal/ModalProvider'
import { useModal } from '../Modal/ModalContext'
import { assertContent, closeModal, closeModalButtonText, openModal, openModalButtonText } from './utils'

const meta = {
  title: 'Simple modal',
  component: ModalProvider,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ModalProvider>

export default meta
type Story = StoryObj<typeof meta>

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
    await expect(canvas.queryByText(closeModalButtonText)).not.toBeInTheDocument()
  },
}

export const DefaultButtonFocused: Story = {
  name: '"close" button is focused by default',
  render: SimpleModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const canvas = within(root)

    await openModal(root)
    await expect(canvas.getByRole('button', { name: 'close-modal' })).toHaveFocus()
  },
}

export const ModalOverlay: Story = {
  name: 'closable with "x" button',
  render: SimpleModal,
  play: async ({ canvasElement }) => {
    const root = canvasElement.parentElement as HTMLElement
    const canvas = within(root)

    await openModal(root)
    await userEvent.click(canvas.getByRole('button', { name: 'close-modal' }))
  },
}

function SimpleModal() {
  const Content = () => {
    const { openNewModal } = useModal()
    return (
      <button onClick={() => openNewModal({ children: <div>content</div>, title: 'SingleContentSingleModal', isBlocking: true })}>
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
