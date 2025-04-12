import type { Assign } from "@ark-ui/react";
import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { type ToggleGroupVariantProps } from "@chen/design-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "@chen/design-system/types";
export type RootProviderProps = ComponentProps<typeof RootProvider>;
export declare const RootProvider: import("react").ForwardRefExoticComponent<Omit<Assign<Assign<HTMLStyledProps<"div">, ToggleGroup.RootProviderBaseProps>, ToggleGroupVariantProps & {
    className?: string;
}>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export type RootProps = ComponentProps<typeof Root>;
export declare const Root: import("react").ForwardRefExoticComponent<Omit<Assign<Assign<HTMLStyledProps<"div">, ToggleGroup.RootBaseProps>, ToggleGroupVariantProps & {
    className?: string;
}>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export declare const Item: import("react").ForwardRefExoticComponent<Omit<Assign<HTMLStyledProps<"button">, ToggleGroup.ItemBaseProps>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export { ToggleGroupContext as Context } from "@ark-ui/react/toggle-group";
