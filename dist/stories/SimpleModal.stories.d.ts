import { StoryObj } from '@storybook/react';
import { ModalProvider } from '../';
declare const meta: {
    title: string;
    component: typeof ModalProvider;
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Modal: Story;
export declare const SingleContentSingleModal: Story;
export declare const ModalCanBeClosedWithEsc: Story;
export declare const DefaultButtonFocused: Story;
export declare const ModalOverlay: Story;
