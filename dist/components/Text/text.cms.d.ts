import { type BaseProps } from "../Base/base.cms";
export type TextProps = {
    __typename: string;
    key?: string;
    type?: string | null;
    content?: string | null;
} & BaseProps;
export declare const Text: ({ __typename, type, ...props }: TextProps) => import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
