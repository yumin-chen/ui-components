import { type SpinnerProps as StyledSpinnerProps } from "./styled/spinner";
export interface SpinnerProps extends StyledSpinnerProps {
    /**
     * For accessibility, it is important to add a fallback loading text.
     * This text will be visible to screen readers.
     * @default "Loading..."
     */
    label?: string;
}
export declare const Spinner: import("react").ForwardRefExoticComponent<Omit<SpinnerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
