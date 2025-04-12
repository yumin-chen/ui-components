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
import { Dialog as DialogBase } from ".";
import { Button } from "../Button/button.cms";
export var Dialog = function (_a) {
    var __typename = _a.__typename, confirmButton = _a.confirmButton, cancelButton = _a.cancelButton, closeButton = _a.closeButton, trigger = _a.trigger, advancedConfigs = _a.advancedConfigs, props = __rest(_a, ["__typename", "confirmButton", "cancelButton", "closeButton", "trigger", "advancedConfigs"]);
    var _b = advancedConfigs || {}, accessibility = _b.accessibility, advancedConfigurations = __rest(_b, ["accessibility"]);
    return h(DialogBase, __assign(__assign(__assign({ confirmButton: confirmButton && h(Button, confirmButton), cancelButton: cancelButton && h(Button, cancelButton), closeButton: closeButton && h(Button, closeButton), trigger: trigger && h(Button, trigger) }, accessibility), advancedConfigurations), props));
};
