import { expect, userEvent, within } from '@storybook/test'
import { testIds } from '../src/Modal/utils/testingIds'

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

/** @param visibility should have keys for `data-testid` ids */
export function visibilityObserverByTestId(visibility: Record<string, boolean>) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // @ts-expect-error IntersectionObserver v2 types missing https://w3c.github.io/IntersectionObserver/v2/#calculate-visibility-algo
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      visibility[entry.target.getAttribute('data-testid') as unknown as never] = entry.isVisible
    })
  }, {
    // @ts-expect-error IntersectionObserver v2 types missing https://w3c.github.io/IntersectionObserver/v2/#calculate-visibility-algo
    trackVisibility: true,
    delay: 100,
  })
  return observer
}
