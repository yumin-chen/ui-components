var _a, _b;
import { accessibility } from "../Base/templates/base.advancedConfigs.accessibility.field";
import { textEfects } from "../Base/templates/base.advancedConfigs.textEffects.field";
export var button = {
    name: "button",
    label: "Button",
    fields: [
        {
            type: "string",
            label: "Variant",
            name: "variant",
            description: "Determines the look and feel of the button.",
            options: [
                {
                    value: "solid",
                    label: "Solid",
                },
                {
                    value: "outline",
                    label: "Outline",
                },
                {
                    value: "ghost",
                    label: "Ghost",
                },
                {
                    value: "link",
                    label: "Link",
                },
                {
                    value: "subtle",
                    label: "Subtle",
                },
            ],
        },
        {
            type: "string",
            label: "Label",
            name: "label",
        },
        {
            type: "string",
            label: "Tooltip",
            name: "tooltip",
        },
        {
            type: "object",
            label: "Advanced Configurations",
            name: "advancedConfigs",
            description: "Additional configurations for the button.",
            ui: { component: "group" },
            fields: [textEfects, accessibility],
        },
    ],
    ui: {
        defaultItem: function () { return ({
            variant: "solid",
            label: "Click Me",
        }); },
    },
};
export var buttonDefaultItem = typeof ((_a = button.ui) === null || _a === void 0 ? void 0 : _a.defaultItem) === "function" && ((_b = button.ui) === null || _b === void 0 ? void 0 : _b.defaultItem());
