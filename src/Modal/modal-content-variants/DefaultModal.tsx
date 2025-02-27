import { OpenedModalProps } from '../modal.types'
import { testIds } from '../utils/testingIds'
import { CloseButton } from './CloseButton'

export function DefaultModal({ onClose, title, buttons, children }: OpenedModalProps) {
  return (
    <>
      {title && <h2 className="modal-fw__title" data-testid={testIds.modalTitle}>{title}</h2>}
      <CloseButton onClose={onClose} />
      <section className="modal-fw__content" data-testid={testIds.modalContent}>
        {children}
      </section>
      <div className="modal-fw__footer">
        {buttons}
      </div>
    </>
  )
}
