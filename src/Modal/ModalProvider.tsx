import { PropsWithChildren, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalContent, ModalContext } from './ModalContext'
import { Modal } from './Modal'
import { useCreatePortal } from './utils/useCreatePortal'

export function ModalProvider(props: PropsWithChildren) {
  const { portalRoot } = useCreatePortal()
  const [
    modalContent,
    setModalContent,
  ] = useState<ModalContent>(getInitialModalContent())

  const openModalWith = (content: ModalContent) => {
    setModalContent(content)
  }

  const onClose = () => {
    setModalContent(getInitialModalContent())
  }

  return (
    <ModalContext.Provider value={{ openModalWith, onClose }}>
      {props.children}
      {portalRoot.current && createPortal(
        <Modal title={modalContent?.title} isOpen={!isEmpty(modalContent)} onClose={onClose}>
          {modalContent?.body}
        </Modal>,
        portalRoot.current)}
    </ModalContext.Provider>
  )
}

function isEmpty({ body, title }: ModalContent) {
  return !body || !title
}

function getInitialModalContent(): ModalContent {
  return { body: null, title: '' }
}
