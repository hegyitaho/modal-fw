import { PropsWithChildren, useLayoutEffect, useRef } from 'react'
import './modal.css'
import { testIds } from './utils/testingIds'

interface ModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
}

export function Modal({ isOpen, onClose, children, title }: PropsWithChildren<ModalProps>) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useLayoutEffect(() => {
    if (!isOpen) {
      dialogRef?.current?.close()
    }
    else {
      dialogRef.current?.showModal()
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef} className="modal-container" data-testid={testIds.modalContainer} onClose={onClose}>
      <h2 data-testid={testIds.modalTitle}>{title}</h2>
      <section data-testid={testIds.modalContent}>
        {children}
      </section>
      <div className="modal-footer">
        <button autoFocus onClick={onClose}>close</button>
      </div>
    </dialog>
  )
}
