import { expect, userEvent, within } from '@storybook/test'
import { testIds } from '../Modal/utils/testingIds'

export const openModalButtonText = 'open modal'
export const closeModalButtonText = 'close'
export const confirmModalButtonText = 'confirm'

export async function openModal(root: HTMLElement) {
  await clickButton(root, openModalButtonText)
}

export async function closeModal(root: HTMLElement) {
  await clickButton(root, closeModalButtonText)
}

export async function confirmModal(root: HTMLElement) {
  await clickButton(root, confirmModalButtonText)
}

async function clickButton(root: HTMLElement, name: string) {
  const canvas = within(root)
  await userEvent.click(canvas.getByRole('button', { name }))
}

export async function assertContent(root: HTMLElement) {
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
