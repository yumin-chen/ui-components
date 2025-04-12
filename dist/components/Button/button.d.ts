import { type ButtonProps as StyledButtonProps } from "./styled/button";
interface ButtonLoadingProps {
    loading?: boolean;
    loadingText?: React.ReactNode;
}
export interface ButtonProps extends StyledButtonProps, ButtonLoadingProps {
}
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export {};
