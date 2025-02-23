import { createContext, useContext } from 'react'

export interface ModalContent {
  body: React.ReactNode
  title: string
}

interface ModalContext {
  onClose: () => void
  openModalWith: (content: ModalContent) => void
}

export const ModalContext = createContext<ModalContext>(null as unknown as ModalContext)

export const useModal = () => {
  return useContext(ModalContext)
}
