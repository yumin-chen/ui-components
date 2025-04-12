import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import React, { createElement as h } from "react";
import { Link as LinkBase, type LinkProps as LinkBaseProps } from "./link";

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ color, content, translate, ...props }, ref) => {
		return h(
			LinkBase,
			{
				color,
				content,
				translate,
				...props,
				asChild: true,
			},
			h(NextLink, { ref, ...props }, props.children),
		);
	},
);
Link.displayName = "Link";

export type LinkProps = LinkBaseProps & NextLinkProps;
