export type ButtonProps = {
    __typename: string;
    variant?: string | null | undefined;
    tooltip?: string | null | undefined;
    key?: string;
    label?: string | null | undefined;
};
export declare const Button: ({ __typename, label, ...props }: ButtonProps) => import("react").FunctionComponentElement<import("../index.cms").BaseProps>;
