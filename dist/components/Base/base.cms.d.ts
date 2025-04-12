import type { ComponentType } from "react";
export type BaseProps = {
    __typename: string;
    as?: ComponentType | null;
    content?: string | null;
    advancedConfigs?: {
        accessibility?: {
            ariaLabel?: string | null;
            ariaDescription?: string | null;
            ariaLevel?: number | null;
        } | null;
        textEffects?: {
            textTransform?: string | null;
            textDecoration?: string | null;
            textOverflow?: string | null;
            wordWrap?: string | null;
            wordBreak?: string | null;
        } | null;
    } | null;
};
export declare const Base: ({ as, content, advancedConfigs, ...props }: BaseProps) => import("react").JSX.Element;
