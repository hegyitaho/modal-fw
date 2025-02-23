import { PropsWithChildren, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalContext, ModalContextTypes } from './ModalContext'
import { Modal } from './Modal'
import { useCreatePortal } from './utils/useCreatePortal'
import { ModalProps, NewModal } from './modal.types'

type ModalState = NewModal & {
  id: string
}

export function ModalProvider(props: PropsWithChildren) {
  const { portalRoot } = useCreatePortal()

  const [
    modals,
    setModals,
  ] = useState<ModalState[]>([])

  const openNewModal: ModalContextTypes['openNewModal'] = useCallback((modal) => {
    const id = modal.id || self.crypto.randomUUID()
    setModals(modals =>
      [...modals, { ...modal, id }],
    )
    return id
  }, [])

  const close: ModalContextTypes['close'] = useCallback((idToRemove) => {
    setModals(modals =>
      modals.filter(({ id }) => id !== idToRemove))
  }, [])

  const moveToBack: ModalContextTypes['moveToFront'] = useCallback((idLookup) => {
    setModals((modals) => {
      const modalToMove = modals.find(({ id }) => id === idLookup)
      return modalToMove ? [modalToMove, ...modals.filter(({ id }) => id !== idLookup)] : modals
    })
  }, [])

  const moveToFront: ModalContextTypes['moveToBack'] = useCallback((idLookup) => {
    setModals((modals) => {
      const modalToMove = modals.find(({ id }) => id === idLookup)
      return modalToMove ? [...modals.filter(({ id }) => id !== idLookup), modalToMove] : modals
    })
  }, [])

  return (
    <ModalContext.Provider value={{ openNewModal, close, moveToBack, moveToFront }}>
      {props.children}
      {portalRoot.current && createPortal(
        modals
          .filter((modalProps, index) => onlyRenderTopIfModalType(modalProps, modals, index))
          .map(modalProps => (
            <Modal
              {...{
                ...modalProps,
                onClose: () => {
                  modalProps.onClose?.()
                  close(modalProps.id)
                },
                ...(modalProps.onConfirmed && {
                  onConfirmed: () => {
                    modalProps.onConfirmed?.(modalProps.id)
                  },
                }) as { onConfirmed: ModalProps['onConfirmed'] }, // not sure why TS won't understand this syntax
              }}
              key={modalProps.id}
            >
              { modalProps.children }
            </Modal>
          )),
        portalRoot.current)}
    </ModalContext.Provider>
  )
}

/** `<dialog>` behaves buggy if multiple modal types are opened and moved around */
function onlyRenderTopIfModalType(modalProps: ModalState, modals: NewModal[], index: number) {
  return !modalProps.isModal || isLast(modals, index)
}

function isLast(modals: NewModal[], index: number): boolean | undefined {
  return modals.length - 1 === index
}
