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
import { Tooltip } from "../Tooltip";
import { Button as ButtonBase, } from "./button";
export var Button = function (_a) {
    var tooltip = _a.tooltip, children = _a.children, props = __rest(_a, ["tooltip", "children"]);
    if (tooltip) {
        return (<Tooltip trigger={<ButtonBase {...props}>{children}</ButtonBase>} content={tooltip}/>);
    }
    return <ButtonBase {...props}>{children}</ButtonBase>;
};
export * from "./button";
