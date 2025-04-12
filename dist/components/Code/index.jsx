import { Code as CodeBase } from "./code";
export var Code = function (props) { return (<CodeBase as="code" {...props}>
		{props === null || props === void 0 ? void 0 : props.children}
	</CodeBase>); };
export * from "./code";
