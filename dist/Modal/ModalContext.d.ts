import { NewModal } from './modal.types';
export interface ModalContextTypes {
    close: (id: string) => void;
    openNewModal: (content: NewModal) => string;
    moveToFront: (id: string) => void;
    moveToBack: (id: string) => void;
    setZIndex: (id: string, zIndex: number) => void;
}
export declare const ModalContext: import('react').Context<ModalContextTypes>;
export declare const useModal: () => ModalContextTypes;
