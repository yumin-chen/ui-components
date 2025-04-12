var _a, _b;
import { accessibility } from "../Base/templates/base.advancedConfigs.accessibility.field";
import { textEfects } from "../Base/templates/base.advancedConfigs.textEffects.field";
import { text } from "../Text/text.template";
export var toggleGroupItem = {
    name: "toggleGroupItem",
    label: "Item (Toggle Group)",
    fields: [
        {
            type: "string",
            label: "Value",
            name: "value",
            description: "Value.",
        },
        {
            type: "string",
            label: "Label (ARIA)",
            name: "ariaLabel",
            description: "Human readable label for the item, in the event the content is not rendered.",
        },
        {
            type: "object",
            label: "Content",
            name: "children",
            description: "Main content of the item.",
            list: true,
            templates: [text],
            ui: { max: 1 },
        },
    ],
};
export var toggleGroup = {
    name: "toggleGroup",
    label: "Toggle Group",
    fields: [
        {
            type: "object",
            label: "Content",
            name: "children",
            description: "Main content of the toggle group.",
            list: true,
            templates: [toggleGroupItem],
        },
        {
            type: "boolean",
            label: "Multi-Selection",
            name: "multiple",
            description: "Whether to allow multiple toggles to be selected.",
        },
        {
            type: "string",
            label: "Orientation",
            name: "orientation",
            description: "The orientation of the toggle group.",
            options: [
                {
                    value: "horizontal",
                    label: "Horizontal",
                },
                {
                    value: "vertical",
                    label: "Vertical",
                },
            ],
        },
        {
            type: "string",
            label: "Default Value",
            name: "defaultValue",
            description: "Initial value of the toggle group.",
        },
        {
            type: "object",
            label: "Advanced Configurations",
            name: "advancedConfigs",
            description: "Additional configurations for the toggleGroup.",
            ui: {
                component: "group",
            },
            fields: [
                {
                    type: "boolean",
                    label: "Loop Focus",
                    name: "loopFocus",
                    description: "Whether to loop focus inside the toggle group.",
                },
                {
                    type: "boolean",
                    label: "Roving Focus",
                    name: "rovingFocus",
                    description: "Whether to use roving tab index to manage focus.",
                },
                textEfects,
                accessibility,
            ],
        },
    ],
    ui: {
        defaultItem: function () { return ({
            multiple: true,
            defaultValue: "b",
            children: [
                {
                    _template: "toggleGroupItem",
                    value: "x",
                    children: [{ _template: "text", type: "label", content: "X" }],
                },
                {
                    _template: "toggleGroupItem",
                    value: "i",
                    children: [{ _template: "text", type: "label", content: "I" }],
                },
                {
                    _template: "toggleGroupItem",
                    value: "b",
                    children: [{ _template: "text", type: "label", content: "B" }],
                },
                {
                    _template: "toggleGroupItem",
                    value: "v",
                    children: [{ _template: "text", type: "label", content: "V" }],
                },
            ],
        }); },
    },
};
export var toggleGroupDefaultItem = typeof ((_a = toggleGroup.ui) === null || _a === void 0 ? void 0 : _a.defaultItem) === "function" &&
    ((_b = toggleGroup.ui) === null || _b === void 0 ? void 0 : _b.defaultItem());
