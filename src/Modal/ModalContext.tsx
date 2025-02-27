import { createContext, useContext } from 'react'
import { NewModal } from './modal.types'

export interface ModalContextTypes {
  close: (id: string) => void
  openNewModal: (content: NewModal) => string
  moveToFront: (id: string) => void
  moveToBack: (id: string) => void
  setZIndex: (id: string, zIndex: number) => void
}

export const ModalContext = createContext<ModalContextTypes>(null as unknown as ModalContextTypes)

export const useModal = () => {
  return useContext(ModalContext)
}
