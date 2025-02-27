import { createElement, useLayoutEffect as useEffect, useRef } from 'react'
import './modal.css'
import { DefaultModal } from './modal-content-variants'
import { ModalProps } from './modal.types'
import classNames from 'classnames'
import { testIds } from './utils/testingIds'
import { DefaultFooterButtons } from './modal-content-variants/DefaultFooterButtons'

export function Modal({
  onClose,
  children,
  title,
  onConfirmed,
  buttons,
  isModal,
  isFullScreen,
  contentComponentToRender,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const current = dialogRef?.current
    if (current) {
      if (isModal) {
        current.showModal()
      }
      else {
        current.show()
      }
    }
    return () => {
      if (current) {
        current.close()
      }
    }
  // shouldn't reopen even if modal type changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const buttonProps = { onClose, onConfirmed }
  return (
    <dialog
      ref={dialogRef}
      className={classNames('modal-fw', { 'modal-fw--full-screen': isFullScreen })}
      data-testid={testIds.modalContainer}
      onClose={onClose}
    >
      {
        createElement(contentComponentToRender ?? DefaultModal, {
          onClose,
          title,
          buttons: createElement((buttons ?? DefaultFooterButtons), buttonProps),
          onConfirmed },
        children)
      }
    </dialog>
  )
}
