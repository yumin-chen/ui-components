import type { PropsWithChildren } from "react";
import { type ButtonProps as BaseButtonProps } from "./button";
interface ButtonProps extends PropsWithChildren<BaseButtonProps> {
    tooltip?: string;
}
export declare const Button: ({ tooltip, children, ...props }: ButtonProps) => import("react").JSX.Element;
export * from "./button";
