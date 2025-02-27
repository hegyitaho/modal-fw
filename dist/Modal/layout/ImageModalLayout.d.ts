import { OpenedModalProps } from '../modal.types';
type ImageModalLayoutProps = {
    src: string;
    altText: string;
    title: string;
} & Pick<OpenedModalProps, 'onClose'>;
export declare function ImageModalLayout({ src, altText, onClose, title }: ImageModalLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
