import { type ButtonProps } from "../Button/button.cms";
export type DialogProps = {
    __typename: "PageBodyDialog";
    key?: string;
    title?: string | null;
    description?: string | null;
    confirmButton?: ButtonProps | null;
    cancelButton?: ButtonProps | null;
    closeButton?: ButtonProps | null;
    trigger?: ButtonProps | null;
    advancedConfigs?: {
        defaultOpen?: boolean | null;
        lazyMount?: boolean | null;
        unmountOnExit?: boolean | null;
        accessibility?: {
            ariaLabel?: string | null;
        } | null;
    } | null;
};
export declare const Dialog: ({ __typename, confirmButton, cancelButton, closeButton, trigger, advancedConfigs, ...props }: DialogProps) => import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
