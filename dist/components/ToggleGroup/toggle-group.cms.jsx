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
import { ToggleGroup as ToggleGroupBase } from ".";
import { Base } from "../Base/base.cms";
import { Text } from "../Text/text.cms";
export var ToggleGroup = function (_a) {
    var __typename = _a.__typename, key = _a.key, children = _a.children, props = __rest(_a, ["__typename", "key", "children"]);
    var content = children === null || children === void 0 ? void 0 : children.map(function (item, i) {
        var _a, _b, _c;
        var __typename = (((_a = item === null || item === void 0 ? void 0 : item.children) === null || _a === void 0 ? void 0 : _a[0]) || { _template: "" }).__typename;
        var children = [
            "PageBodyToggleGroupChildrenToggleGroupItemChildrenText",
            "PageBodyStackChildrenToggleGroupChildrenToggleGroupItemChildrenText",
        ].includes(__typename || "") &&
            h(Text, {
                key: "".concat(key, "-TglGrp-").concat(i, "-").concat(item === null || item === void 0 ? void 0 : item.value, "-text"),
                content: ((_c = (_b = item === null || item === void 0 ? void 0 : item.children) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.content) || null,
            });
        return h(ToggleGroupBase.Item, {
            key: "".concat(key, "-TglGrp-").concat(i, "-").concat(item === null || item === void 0 ? void 0 : item.value),
            value: item === null || item === void 0 ? void 0 : item.value,
            "aria-label": item === null || item === void 0 ? void 0 : item.ariaLabel,
        }, children);
    });
    return h(Base, __assign({ as: function (_a) {
            var c = _a.children, defaultValue = _a.defaultValue, props = __rest(_a, ["children", "defaultValue"]);
            return h(ToggleGroupBase.Root, __assign({ defaultValue: [defaultValue] }, props), content);
        } }, props));
};
