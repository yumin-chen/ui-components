export type StackProps = {
    __typename: string;
    key?: string;
    direction?: string | null;
    gap?: number | null;
    backgroundColor?: string | null;
    backgroundImage?: string | null;
    children?: ({
        [k: string]: unknown | null;
        __typename: string;
    } | null)[] | null;
    advancedConfigs?: {
        backgroundColor?: string | null;
        backgroundImage?: string | null;
    } | null;
};
export declare const Stack: ({ __typename, direction, children, advancedConfigs, ...props }: StackProps) => import("react").JSX.Element;
