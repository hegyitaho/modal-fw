import { createElement, useLayoutEffect as useEffect, useRef } from 'react'
import './modal.css'
import { ModalProps } from './modal.types'
import classNames from 'classnames'
import { testIds } from './utils/testingIds'
import { DefaultFooterButtons } from './components/DefaultFooterButtons'
import { DefaultModalLayout } from './layout'

export function Modal({
  onClose,
  children,
  title,
  onConfirmed,
  buttons,
  isBlocking,
  isFullScreen,
  getLayout,
  zIndex,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const current = dialogRef?.current
    if (current) {
      if (isBlocking) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps -- shouldn't reopen even if modal type changes
  }, [])
  const buttonProps = { onClose, onConfirmed }
  return (
    <dialog
      ref={dialogRef}
      className={classNames('modal-fw', { 'modal-fw--full-screen': isFullScreen })}
      data-testid={testIds.modalContainer}
      onClose={onClose}
      style={{ zIndex }}
    >
      {getLayout?.({ onClose })
        ?? createElement(DefaultModalLayout, {
          onClose,
          title,
          buttons: createElement((buttons ?? DefaultFooterButtons), buttonProps),
          onConfirmed },
        children)}
    </dialog>
  )
}
