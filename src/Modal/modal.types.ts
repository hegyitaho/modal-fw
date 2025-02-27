import type { JSX, JSXElementConstructor, PropsWithChildren } from 'react'

export type ModalOptions = Partial<{
  title: string
  isFullScreen: boolean
  /** if provided primary button appears */
  onConfirmed: (modalId: string) => void
  /** override default buttons in the footer */
  buttons: JSXElementConstructor<Pick<OpenedModalProps, 'onClose' | 'onConfirmed'>>
  id: string
  /** covers the whole screen with a backdrop preventing interaction with the background */
  isBlocking: boolean
  onClose: () => void
  /** DefaultModal is used by default */
  contentComponentToRender: JSXElementConstructor<OpenedModalProps>
}>

export type NewModal = PropsWithChildren<ModalOptions>

export type ModalProps = Omit<NewModal, 'onConfirmed'> & {
  onConfirmed?: () => void
}

export type OpenedModalProps = Omit<ModalProps, 'isOpen' | 'isFullScreen' | 'isBlocking' | 'contentComponentToRender' | 'buttons'> & { buttons: JSX.Element }
