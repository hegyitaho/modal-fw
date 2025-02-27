import { createElement, PropsWithChildren, useCallback, useState } from 'react'
import { ModalContext, ModalContextTypes } from './ModalContext'
import { Modal } from './Modal'
import { useCreatePortal } from './utils/useCreatePortal'
import { ModalProps, NewModal } from './modal.types'
import { createPortal } from 'react-dom'

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
      [...modals, { ...modal, id, zIndex: 0 }],
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

  const setZIndex: ModalContextTypes['setZIndex'] = useCallback((idLookup, zIndex) => {
    setModals((modals) => {
      const modalToMove = modals.find(({ id }) => id === idLookup)
      return modalToMove
        ? [
            ...modals.filter(({ id }) => id !== idLookup),
            { ...modalToMove, zIndex },
          ]
        : modals
    })
  }, [])

  return (
    <ModalContext.Provider value={{ openNewModal, close, moveToBack, moveToFront, setZIndex }}>
      {props.children}
      {portalRoot.current && createPortal(
        modals
          .filter((modalProps, index) => onlyRenderTopIfModalType(modalProps, modals, index))
          .map(modalProps => (
            createElement(Modal,
              {
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
                key: modalProps.id,
              },
              modalProps.children)
          )),
        portalRoot.current)}
    </ModalContext.Provider>
  )
}

/** `<dialog>` behaves buggy if multiple modal types are opened and moved around */
function onlyRenderTopIfModalType(modalProps: ModalState, modals: NewModal[], index: number) {
  return !modalProps.isBlocking || isLast(modals, index)
}

function isLast(modals: NewModal[], index: number) {
  return modals.length - 1 === index
}
