import React from "react";

import { HeaderComponent } from "./HeaderComponent";

export default {
	title: "General/Header",
	component: HeaderComponent,
};

const Template = (args) => <HeaderComponent {...args} />;

export const Basic = Template.bind({});
