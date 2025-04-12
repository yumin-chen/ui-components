import { type LinkProps as NextLinkProps } from "next/link";
import React from "react";
import { type LinkProps as LinkBaseProps } from "./link";
export declare const Link: React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export type LinkProps = LinkBaseProps & NextLinkProps;
