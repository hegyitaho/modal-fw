export declare const openModalButtonText = "open modal";
export declare const closeModalButtonText = "close";
export declare const confirmModalButtonText = "confirm";
export declare function openModal(root: HTMLElement): Promise<void>;
export declare function closeModal(root: HTMLElement): Promise<void>;
export declare function confirmModal(root: HTMLElement): Promise<void>;
export declare function assertContent(root: HTMLElement): Promise<void>;
/** @param visibility should have keys for `data-testid` ids */
export declare function visibilityObserverByTestId(visibility: Record<string, boolean>): IntersectionObserver;
