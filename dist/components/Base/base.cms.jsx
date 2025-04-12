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
export var Base = function (_a) {
    var as = _a.as, content = _a.content, advancedConfigs = _a.advancedConfigs, props = __rest(_a, ["as", "content", "advancedConfigs"]);
    var _b = advancedConfigs || {}, accessibility = _b.accessibility, textEffects = _b.textEffects, advancedConfigurations = __rest(_b, ["accessibility", "textEffects"]);
    var _c = textEffects || {}, textTransform = _c.textTransform, textDecoration = _c.textDecoration, textOverflow = _c.textOverflow, wordWrap = _c.wordWrap, wordBreak = _c.wordBreak;
    var styles = {};
    if (textTransform) {
        styles["--text-transform"] = textTransform;
    }
    if (textDecoration) {
        styles["--text-decoration"] = textDecoration;
    }
    if (textOverflow) {
        styles["--text-overflow"] = textOverflow;
    }
    if (wordWrap) {
        styles["--word-wrap"] = wordWrap;
    }
    if (wordBreak) {
        styles["--word-break"] = wordBreak;
    }
    var Comp = as || "div";
    return (<Comp style={styles} {...(textTransform && { textTransform: "var(--text-transform)" })} {...(textDecoration && { textDecoration: "var(--text-decoration)" })} {...(textOverflow && { textOverflow: "var(--text-overflow)" })} {...(wordWrap && { wordWrap: "var(--word-wrap)" })} {...(wordBreak && { wordBreak: "var(--word-break)" })} {...__assign(__assign(__assign({}, ((accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaLabel) && {
        "aria-label": accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaLabel,
    })), ((accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaDescription) && {
        "aria-description": accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaDescription,
    })), ((accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaLevel) && {
        role: "heading",
        "aria-level": accessibility === null || accessibility === void 0 ? void 0 : accessibility.ariaLevel,
    }))} {...advancedConfigurations} {...props}>
			{content}
		</Comp>);
};
