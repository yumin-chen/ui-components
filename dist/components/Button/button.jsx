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
import { Center, styled } from "@chen/design-system/jsx";
import { forwardRef } from "react";
import { Spinner } from "../Spinner";
import { Button as StyledButton, } from "./styled/button";
export var Button = forwardRef(function (props, ref) {
    var loading = props.loading, disabled = props.disabled, loadingText = props.loadingText, children = props.children, rest = __rest(props, ["loading", "disabled", "loadingText", "children"]);
    var trulyDisabled = loading || disabled;
    return (<StyledButton disabled={trulyDisabled} ref={ref} {...rest}>
				{loading && !loadingText ? (<>
						<ButtonSpinner />
						<styled.span opacity={0}>{children}</styled.span>
					</>) : loadingText ? (loadingText) : (children)}
			</StyledButton>);
});
Button.displayName = "Button";
var ButtonSpinner = function () { return (<Center inline position="absolute" transform="translate(-50%, -50%)" top="50%" insetStart="50%">
		<Spinner width="1.1em" height="1.1em" borderWidth="1.5px" borderTopColor="fg.disabled" borderRightColor="fg.disabled"/>
	</Center>); };
