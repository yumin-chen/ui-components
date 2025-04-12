export type ParagraphProps = {
    __typename: string;
    key?: string;
    content?: string | null;
};
export declare const Paragraph: ({ __typename, ...props }: ParagraphProps) => import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
