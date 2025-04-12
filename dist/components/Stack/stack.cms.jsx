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
import { Stack as StackBase } from ".";
import { Base } from "../Base/base.cms";
import { Button } from "../Button/button.cms";
import { Heading } from "../Heading/heading.cms";
import { Paragraph } from "../Text/paragraph.cms";
import { Text } from "../Text/text.cms";
import { ToggleGroup } from "../ToggleGroup/toggle-group.cms";
export var Stack = function (_a) {
    var __typename = _a.__typename, _b = _a.direction, direction = _b === void 0 ? "column" : _b, children = _a.children, advancedConfigs = _a.advancedConfigs, props = __rest(_a, ["__typename", "direction", "children", "advancedConfigs"]);
    var content = children === null || children === void 0 ? void 0 : children.map(function (child, i) {
        var typename = child === null || child === void 0 ? void 0 : child.__typename;
        switch (typename) {
            case "PageBodyStackChildrenHeading":
                return <Heading key={"-".concat(i, "-").concat(typename)} {...child}/>;
            case "PageBodyStackChildrenText":
                return <Text key={"-".concat(i, "-").concat(typename)} {...child}/>;
            case "PageBodyStackChildrenParagraph":
                return <Paragraph key={"-".concat(i, "-").concat(typename)} {...child}/>;
            case "PageBodyStackChildrenButton":
                return <Button key={"-".concat(i, "-").concat(typename)} {...child}/>;
            case "PageBodyStackChildrenToggleGroup":
                return <ToggleGroup key={"-".concat(i, "-").concat(typename)} {...child}/>;
        }
    });
    var _c = advancedConfigs || {}, backgroundColor = _c.backgroundColor, backgroundImage = _c.backgroundImage, advancedConfigurations = __rest(_c, ["backgroundColor", "backgroundImage"]);
    var styles = {};
    if (backgroundColor) {
        styles["--background-color"] = backgroundColor;
    }
    if (backgroundImage) {
        styles["--background-image"] = "url(".concat(backgroundImage, ")");
    }
    return (<Base as={function (_a) {
            var style = _a.style, p = __rest(_a, ["style"]);
            return (<StackBase direction={direction} aria-orientation={(direction === null || direction === void 0 ? void 0 : direction.startsWith("column")) ? "vertical" : "horizontal"} style={__assign(__assign({}, style), styles)} {...(backgroundColor && {
                backgroundColor: "var(--background-color)",
            })} {...(backgroundImage && {
                backgroundImage: "var(--background-image)",
            })} {...p}>
					{content}
				</StackBase>);
        }} advancedConfigs={advancedConfigurations} __typename={__typename} {...props}/>);
};
