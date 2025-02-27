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
export declare const ConfirmationModalCloses: Story;
