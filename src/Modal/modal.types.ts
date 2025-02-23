import type { JSXElementConstructor, PropsWithChildren, ReactElement } from 'react'

export type NewModalContent = PropsWithChildren<{ title: string }>

export type ModalOptions = Partial<{
  isFullScreen: boolean
  /** if provided primary button appears */
  onConfirmed: (modalId: string) => void
  /** override default buttons in the footer */
  buttons: ReactElement
  id: string
  isModal: boolean
  onClose: () => void
  /** DefaultModal is used by default */
  contentComponentToRender: JSXElementConstructor<OpenedModalProps>
}>

export type NewModal = ModalOptions & NewModalContent

export type ModalProps = Omit<NewModal, 'onConfirmed'> & {
  onClose: () => void
  onConfirmed?: () => void
}

export type OpenedModalProps = Omit<ModalProps, 'isOpen' | 'isFullScreen' | 'isModal' | 'contentComponentToRender'>
