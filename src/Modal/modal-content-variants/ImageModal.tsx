import { OpenedModalProps } from '../modal.types'
import notFoundImage from './image-not-found.png'
import { CloseButton } from './CloseButton'

export function ImageModal({ src, altText }: { src: string, altText: string }) {
  return ({ onClose, title }: OpenedModalProps) => (
    <>
      <h2>{title}</h2>
      <CloseButton onClose={onClose} />
      <object aria-label={altText} data={src}>
        <img src={notFoundImage} alt="image not found" />
      </object>
    </>
  )
}
