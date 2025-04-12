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
import NextLink from "next/link";
import React, { createElement as h } from "react";
import { Link as LinkBase } from "./link";
export var Link = React.forwardRef(function (_a, ref) {
    var color = _a.color, content = _a.content, translate = _a.translate, props = __rest(_a, ["color", "content", "translate"]);
    return h(LinkBase, __assign(__assign({ color: color, content: content, translate: translate }, props), { asChild: true }), h(NextLink, __assign({ ref: ref }, props), props.children));
});
Link.displayName = "Link";
