"use client";
import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { toggleGroup, } from "@chen/design-system/recipes";
import { createStyleContext } from "./utils/create-style-context";
var _a = createStyleContext(toggleGroup), withProvider = _a.withProvider, withContext = _a.withContext;
export var RootProvider = withProvider(ToggleGroup.RootProvider, "root");
export var Root = withProvider(ToggleGroup.Root, "root");
export var Item = withContext(ToggleGroup.Item, "item");
export { ToggleGroupContext as Context } from "@ark-ui/react/toggle-group";
