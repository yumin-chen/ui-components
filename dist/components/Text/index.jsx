import { Text as TextBase } from "./text";
export var Paragraph = function (props) { return (<TextBase as="p" {...props}>
		{props === null || props === void 0 ? void 0 : props.children}
	</TextBase>); };
export var Text = function (props) { return (<TextBase {...props}>{props === null || props === void 0 ? void 0 : props.children}</TextBase>); };
export * from "./text";
