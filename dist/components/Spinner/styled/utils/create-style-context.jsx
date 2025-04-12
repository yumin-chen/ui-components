import { cx } from "@chen/design-system/css";
import { isCssProperty, styled, } from "@chen/design-system/jsx";
import { createContext, forwardRef, useContext, } from "react";
var shouldForwardProp = function (prop, variantKeys, options) {
    var _a;
    if (options === void 0) { options = {}; }
    return ((_a = options.forwardProps) === null || _a === void 0 ? void 0 : _a.includes(prop)) ||
        (!variantKeys.includes(prop) && !isCssProperty(prop));
};
export var createStyleContext = function (recipe) {
    var StyleContext = createContext(null);
    var withRootProvider = function (Component) {
        var StyledComponent = function (props) {
            var _a = recipe.splitVariantProps(props), variantProps = _a[0], otherProps = _a[1];
            var slotStyles = recipe(variantProps);
            return (<StyleContext.Provider value={slotStyles}>
					<Component {...otherProps}/>
				</StyleContext.Provider>);
        };
        return StyledComponent;
    };
    var withProvider = function (Component, slot, options) {
        var StyledComponent = styled(Component, {}, {
            shouldForwardProp: function (prop, variantKeys) {
                return shouldForwardProp(prop, variantKeys, options);
            },
        });
        var StyledSlotProvider = forwardRef(function (props, ref) {
            var _a = recipe.splitVariantProps(props), variantProps = _a[0], otherProps = _a[1];
            var slotStyles = recipe(variantProps);
            return (<StyleContext.Provider value={slotStyles}>
					<StyledComponent {...otherProps} ref={ref} className={cx(slotStyles === null || slotStyles === void 0 ? void 0 : slotStyles[slot], props.className)}/>
				</StyleContext.Provider>);
        });
        StyledSlotProvider.displayName = Component.displayName || Component.name;
        return StyledSlotProvider;
    };
    var withContext = function (Component, slot) {
        var StyledComponent = styled(Component);
        var StyledSlotComponent = forwardRef(function (props, ref) {
            var slotStyles = useContext(StyleContext);
            return (<StyledComponent {...props} ref={ref} className={cx(slotStyles === null || slotStyles === void 0 ? void 0 : slotStyles[slot], props.className)}/>);
        });
        StyledSlotComponent.displayName = Component.displayName || Component.name;
        return StyledSlotComponent;
    };
    return {
        withRootProvider: withRootProvider,
        withProvider: withProvider,
        withContext: withContext,
    };
};
