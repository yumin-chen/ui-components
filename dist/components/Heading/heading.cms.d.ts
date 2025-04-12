export type HeadingProps = {
    __typename: string;
    type?: string | null;
    key?: string;
    content?: string | null;
};
export declare const Heading: ({ __typename, type, ...props }: HeadingProps) => import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
