var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { createElement as h } from "react";
import { Heading as HeadingBase } from "./heading";
export var Heading = function (_a) {
    var ariaLevel = _a.ariaLevel, props = __rest(_a, ["ariaLevel"]);
    return h(HeadingBase, __assign({ role: "heading", "aria-level": ariaLevel }, props), props === null || props === void 0 ? void 0 : props.children);
};
export var H1 = function (props) { return (<Heading as="h1" size="5xl" {...props}>
		{props === null || props === void 0 ? void 0 : props.children}
	</Heading>); };
export var H2 = function (props) { return (<Heading as="h2" size="4xl" {...props}>
		{props === null || props === void 0 ? void 0 : props.children}
	</Heading>); };
export var H3 = function (props) { return (<Heading as="h3" size="3xl" {...props}>
		{props === null || props === void 0 ? void 0 : props.children}
	</Heading>); };
export var H4 = function (props) { return (<Heading as="h4" size="2xl" {...props}>
		{props === null || props === void 0 ? void 0 : props.children}
	</Heading>); };
export var H5 = function (props) { return (<Heading as="h5" size="xl" {...props}>
		{props === null || props === void 0 ? void 0 : props.children}
	</Heading>); };
export var H6 = function (props) { return (<Heading as="h6" size="lg" {...props}>
		{props === null || props === void 0 ? void 0 : props.children}
	</Heading>); };
export * from "./heading";
