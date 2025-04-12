import { Box, Flex } from "@chen/design-system/jsx";
import React, { createElement as h } from "react";

export const Breadcrumbs = ({ children, ...props }) => {
	return (
		// @ts-ignore
		<Box as="nav" aria-label="breadcrumb" cursor="pointer">
			<Flex
				// @ts-ignore
				as="ol"
				listStyleType="none"
				alignItems="center"
				padding={0}
				margin={0}
				whiteSpace="nowrap"
				{...props}
			>
				<Box
					// @ts-ignore

					as="span"
					marginRight={3}
					marginBottom={1.5}
					fontSize="3xl"
				>
					☰
				</Box>

				{React.Children.map(children, (child, index) => (
					<>
						{child}
						{index !== React.Children.count(children) - 1 && (
							// @ts-ignore
							<Box as="span" marginX={3}>
								{"➔"}
							</Box>
						)}
					</>
				))}
			</Flex>
		</Box>
	);
};
