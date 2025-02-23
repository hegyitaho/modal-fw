import { OpenedModalProps } from '../modal.types'

export function CloseButton({ onClose }: Pick<OpenedModalProps, 'onClose'>) {
  return <button aria-label="close-modal" onClick={onClose} className="modal-fw__close-button">&#x2715;</button>
}
