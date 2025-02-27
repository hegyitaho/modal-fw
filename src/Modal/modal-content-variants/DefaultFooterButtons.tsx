import { OpenedModalProps } from '../modal.types'

export function DefaultFooterButtons({ onClose, onConfirmed }: Pick<OpenedModalProps, 'onClose' | 'onConfirmed'>) {
  return (
    <>
      <button autoFocus onClick={onClose}>close</button>
      { !!onConfirmed && (
        <button
          className="is-primary"
          onClick={onConfirmed}
        >
          confirm
        </button>
      ) }
    </>
  )
}
