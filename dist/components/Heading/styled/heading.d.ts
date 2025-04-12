import { type TextVariantProps } from "@chen/design-system/recipes";
import type { ComponentProps, StyledComponent } from "@chen/design-system/types";
type TextProps = TextVariantProps & {
    as?: React.ElementType;
};
export type HeadingProps = ComponentProps<typeof Heading>;
export declare const Heading: StyledComponent<"h2", TextProps>;
export {};
