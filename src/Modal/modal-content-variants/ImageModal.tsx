import { OpenedModalProps } from '../modal.types'
import { CloseButton } from './CloseButton'

type ImageModalProps = {
  src: string
  altText: string
  title: string
} & Pick<OpenedModalProps, 'onClose'>

export function ImageModal({ src, altText, onClose, title }: ImageModalProps) {
  return (
    <>
      <h2>{title}</h2>
      <CloseButton onClose={onClose} />
      <object aria-label={altText} data={src}>
        <img src="/image-not-found.png?url" alt="image not found" />
      </object>
    </>
  )
}
