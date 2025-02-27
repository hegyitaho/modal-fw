import type { JSX, JSXElementConstructor, PropsWithChildren } from 'react'

export type ModalOptions = Partial<{
  title: string
  isFullScreen: boolean
  /** if provided primary button appears. modalId is passed so it's more convenient to close */
  onConfirmed: (modalId: string) => void
  /** override default buttons in the footer */
  buttons: JSXElementConstructor<Pick<OpenedModalProps, 'onClose' | 'onConfirmed'>>
  /* same as the one returned if provided */
  id: string
  /** covers the whole screen with a backdrop preventing interaction with the background */
  isBlocking: boolean
  onClose: () => void
  /** alternative layout to the default one */
  getLayout: (props: Pick<OpenedModalProps, 'onClose'>) => JSX.Element
  zIndex: number
}>

export type NewModal = PropsWithChildren<ModalOptions>

export type ModalProps = Omit<NewModal, 'onConfirmed'> & {
  onConfirmed?: () => void
}

export type OpenedModalProps = Omit<ModalProps, 'isOpen' | 'isFullScreen' | 'isBlocking' | 'layout' | 'buttons'> & { buttons: JSX.Element }
