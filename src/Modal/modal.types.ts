import type { JSX, JSXElementConstructor, PropsWithChildren } from 'react'

export type ModalOptions = Partial<{
  title: string
  isFullScreen: boolean
  /** if provided primary button appears. modalId is passed so it's more convenient to close */
  onConfirmed: (modalId: string) => void
  /** override default buttons in the footer */
  buttons: JSXElementConstructor<Pick<OpenedModalProps, 'onClose' | 'onConfirmed'>>
  id: string
  /** covers the whole screen with a backdrop preventing interaction with the background */
  isBlocking: boolean
  onClose: () => void
  /** instead of DefaultModal which is used by default */
  contentComponentToRender: (props: Pick<OpenedModalProps, 'onClose'>) => JSX.Element
}>

export type NewModal = PropsWithChildren<ModalOptions>

export type ModalProps = Omit<NewModal, 'onConfirmed'> & {
  onConfirmed?: () => void
}

export type OpenedModalProps = Omit<ModalProps, 'isOpen' | 'isFullScreen' | 'isBlocking' | 'contentComponentToRender' | 'buttons'> & { buttons: JSX.Element }
