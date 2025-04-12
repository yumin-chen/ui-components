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
import { Stack } from "@chen/design-system/jsx";
import { Button } from "../Button";
import { Dialog as DialogBase } from "./dialog";
var defaultConfirmButton = <Button>Confirm</Button>;
var defaultCancelButton = <Button variant="outline">Cancel</Button>;
var defaultCloseButton = (<Button aria-label="Close" variant="ghost" size="sm">
		{"×"}
	</Button>);
export var Dialog = function (_a) {
    var trigger = _a.trigger, title = _a.title, description = _a.description, _b = _a.confirmButton, confirmButton = _b === void 0 ? defaultConfirmButton : _b, _c = _a.cancelButton, cancelButton = _c === void 0 ? defaultCancelButton : _c, _d = _a.closeButton, closeButton = _d === void 0 ? defaultCloseButton : _d, _e = _a.context, context = _e === void 0 ? undefined : _e, _f = _a.lazyMount, lazyMount = _f === void 0 ? true : _f, props = __rest(_a, ["trigger", "title", "description", "confirmButton", "cancelButton", "closeButton", "context", "lazyMount"]);
    return (<DialogBase.Root {...props} lazyMount>
			{trigger && <DialogBase.Trigger asChild>{trigger}</DialogBase.Trigger>}
			<DialogBase.Backdrop />
			<DialogBase.Positioner>
				<DialogBase.Content>
					<Stack gap="8" p="6">
						<Stack gap="1">
							<DialogBase.Title>{title}</DialogBase.Title>
							<DialogBase.Description>{description}</DialogBase.Description>
						</Stack>
						<Stack gap="3" direction="row" width="full" justifyContent="flex-end">
							{confirmButton}
							{cancelButton && (<DialogBase.CloseTrigger asChild>
									{cancelButton}
								</DialogBase.CloseTrigger>)}
						</Stack>
					</Stack>
					{closeButton && (<DialogBase.CloseTrigger asChild position="absolute" top="2" right="2">
							{closeButton}
						</DialogBase.CloseTrigger>)}
				</DialogBase.Content>
			</DialogBase.Positioner>
			{context && <DialogBase.Context>{context}</DialogBase.Context>}
		</DialogBase.Root>);
};
export * from "./dialog";
