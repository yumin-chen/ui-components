var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Box, Flex } from "@chen/design-system/jsx";
import React from "react";
export var Breadcrumbs = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (
    // @ts-ignore
    <Box as="nav" aria-label="breadcrumb" cursor="pointer">
			<Flex 
    // @ts-ignore
    as="ol" listStyleType="none" alignItems="center" padding={0} margin={0} whiteSpace="nowrap" {...props}>
				<Box 
    // @ts-ignore
    as="span" marginRight={3} marginBottom={1.5} fontSize="3xl">
					☰
				</Box>

				{React.Children.map(children, function (child, index) { return (<>
						{child}
						{index !== React.Children.count(children) - 1 && (
            // @ts-ignore
            <Box as="span" marginX={3}>
								{"➔"}
							</Box>)}
					</>); })}
			</Flex>
		</Box>);
};
