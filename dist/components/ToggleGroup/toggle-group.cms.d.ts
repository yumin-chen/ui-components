export type ToggleGroupItemProps = {
    [key: string]: unknown;
    value?: string | null;
    ariaLabel?: string | null;
    _template?: string | null;
    children?: ({
        [key: string]: unknown;
        __typename?: string | null;
        _template?: string | null;
        content?: string | null;
    } | null)[] | null;
};
export type ToggleGroupProps = {
    __typename: string;
    key?: string;
    children?: (ToggleGroupItemProps | null)[] | null;
};
export declare const ToggleGroup: ({ __typename, key, children, ...props }: ToggleGroupProps) => import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
