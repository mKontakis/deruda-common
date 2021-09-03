import {Meta} from "@storybook/react";
import React from "react";
import CardHeader from "./CardHeader";
import flow from "../../../stories/assets/flow.svg"

const childrenOptions = {
    text: <p>Test</p>,
    icon: <img src={flow} alt="icon"/>,
}

export default {
    title: 'Containers/CardHeader',
    component: CardHeader,
    argTypes: {
        children: {
            control: {
                type: "select",
                options: childrenOptions
            },
        }
    },
} as Meta

// const Template: ComponentStory<typeof CardHeader> = (args) => <CardHeader {...args} />;
//
// export const Warning = Template.bind({})
// Warning.args = {
//     color: "warning",
//}
