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
import { Button as ButtonBase } from ".";
import { Base } from "../Base/base.cms";
export var Button = function (_a) {
    var __typename = _a.__typename, label = _a.label, props = __rest(_a, ["__typename", "label"]);
    return h(Base, __assign({ __typename: __typename, as: function (_a) {
            var children = _a.children, restOfProps = __rest(_a, ["children"]);
            return h(ButtonBase, restOfProps, children);
        }, content: label }, props));
};
