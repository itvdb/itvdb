import React from 'react';

import { AboutComponent } from './AboutComponent';

export default {
    title: 'General/About',
    component: AboutComponent,
};

const Template = (args) => <AboutComponent {...args} />;

export const Basic = Template.bind({});
