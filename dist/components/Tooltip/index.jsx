import { Tooltip as TooltipBase } from "./tooltip";
export var Tooltip = function (_a) {
    var trigger = _a.trigger, content = _a.content, props = _a.props;
    return (<TooltipBase.Root {...props}>
		<TooltipBase.Trigger>{trigger}</TooltipBase.Trigger>
		<TooltipBase.Positioner>
			<TooltipBase.Arrow>
				<TooltipBase.ArrowTip />
			</TooltipBase.Arrow>
			<TooltipBase.Content>{content}</TooltipBase.Content>
		</TooltipBase.Positioner>
	</TooltipBase.Root>);
};
export * from "./tooltip";
