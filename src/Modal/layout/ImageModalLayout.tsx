import { OpenedModalProps } from '../modal.types'
import { CloseButton } from '../components'

type ImageModalLayoutProps = {
  src: string
  altText: string
  title: string
} & Pick<OpenedModalProps, 'onClose'>

export function ImageModalLayout({ src, altText, onClose, title }: ImageModalLayoutProps) {
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
