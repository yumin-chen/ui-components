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
import { Button } from "../Button";
import { Drawer as DrawerBase } from "./drawer";
var defaultCloseTrigger = <Button variant="ghost">✖️</Button>;
var defaultCancelButton = <Button variant="outline">Cancel</Button>;
export var Drawer = function (_a) {
    var trigger = _a.trigger, title = _a.title, description = _a.description, content = _a.content, _b = _a.footer, footer = _b === void 0 ? true : _b, _c = _a.footerCancelButton, footerCancelButton = _c === void 0 ? defaultCancelButton : _c, _d = _a.closeTrigger, closeTrigger = _d === void 0 ? defaultCloseTrigger : _d, props = __rest(_a, ["trigger", "title", "description", "content", "footer", "footerCancelButton", "closeTrigger"]);
    return (<DrawerBase.Root {...props}>
			<DrawerBase.Trigger asChild>{trigger}</DrawerBase.Trigger>
			<DrawerBase.Backdrop />
			<DrawerBase.Positioner>
				<DrawerBase.Content>
					<DrawerBase.Header>
						<DrawerBase.Title>{title}</DrawerBase.Title>
						{description && (<DrawerBase.Description>{description}</DrawerBase.Description>)}
						<DrawerBase.CloseTrigger asChild position="absolute" top="3" right="4">
							{closeTrigger}
						</DrawerBase.CloseTrigger>
					</DrawerBase.Header>
					<DrawerBase.Body>{content}</DrawerBase.Body>
					{footer && (<DrawerBase.Footer gap="3">
							{footer}
							<DrawerBase.CloseTrigger asChild>
								{footerCancelButton}
							</DrawerBase.CloseTrigger>
						</DrawerBase.Footer>)}
				</DrawerBase.Content>
			</DrawerBase.Positioner>
		</DrawerBase.Root>);
};
export * from "./drawer";
