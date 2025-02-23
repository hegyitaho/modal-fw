import { OpenedModalProps } from '../modal.types'
import { testIds } from '../utils/testingIds'
import { CloseButton } from './CloseButton'
import { DefaultButtons } from './DefaultFooterButtons'

export function DefaultModal({ onClose, title, buttons, onConfirmed, children }: OpenedModalProps) {
  return (
    <>
      <h2 className="modal-fw__title" data-testid={testIds.modalTitle}>{title}</h2>
      <CloseButton onClose={onClose} />
      <section className="modal-fw__content" data-testid={testIds.modalContent}>
        {children}
      </section>
      <div className="modal-fw__footer">
        {buttons ? buttons : <DefaultButtons {...{ onClose, onConfirmed }} />}
      </div>
    </>
  )
}
