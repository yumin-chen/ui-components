var _a, _b;
import { accessibility } from "../Base/templates/base.advancedConfigs.accessibility.field";
import { textEfects } from "../Base/templates/base.advancedConfigs.textEffects.field";
import { fontWeight } from "../Text/templates/text.fontWeight.field";
import { fontSize } from "../Text/templates/text.size.field";
export var heading = {
    name: "heading",
    label: "Heading",
    fields: [
        {
            type: "string",
            label: "Type",
            name: "type",
            options: [
                {
                    value: "h1",
                    label: "Heading 1",
                },
                {
                    value: "h2",
                    label: "Heading 2",
                },
                {
                    value: "h3",
                    label: "Heading 3",
                },
                {
                    value: "h4",
                    label: "Heading 4",
                },
                {
                    value: "h5",
                    label: "Heading 5",
                },
                {
                    value: "h6",
                    label: "Heading 6",
                },
            ],
        },
        {
            type: "string",
            label: "Content",
            name: "content",
            description: "Main content.",
        },
        fontSize,
        fontWeight,
        {
            type: "object",
            label: "Advanced Configurations",
            name: "advancedConfigs",
            description: "Additional configurations for the heading.",
            ui: {
                component: "group",
            },
            fields: [textEfects, accessibility],
        },
    ],
    ui: {
        defaultItem: function () { return ({
            type: "h1",
            content: "Heading 1",
        }); },
    },
};
export var headingDefaultItem = typeof ((_a = heading.ui) === null || _a === void 0 ? void 0 : _a.defaultItem) === "function" && ((_b = heading.ui) === null || _b === void 0 ? void 0 : _b.defaultItem());
