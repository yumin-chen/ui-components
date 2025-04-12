import { type TextVariantProps } from "@chen/design-system/recipes";
import type { ComponentProps, StyledComponent } from "@chen/design-system/types";
type ParagraphProps = TextVariantProps & {
    as?: React.ElementType;
};
export type TextProps = ComponentProps<typeof Text>;
export declare const Text: StyledComponent<"p", ParagraphProps>;
export {};
