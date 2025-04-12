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
import { styled } from "@chen/design-system/jsx";
import { forwardRef } from "react";
import { Spinner as StyledSpinner, } from "./styled/spinner";
export var Spinner = forwardRef(function (props, ref) {
    var _a = props.label, label = _a === void 0 ? "Loading..." : _a, rest = __rest(props, ["label"]);
    return (<StyledSpinner ref={ref} borderBottomColor="transparent" borderLeftColor="transparent" {...rest}>
				{label && <styled.span srOnly>{label}</styled.span>}
			</StyledSpinner>);
});
Spinner.displayName = "Spinner";
