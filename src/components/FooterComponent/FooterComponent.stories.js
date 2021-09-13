import React from 'react';

import { FooterComponent } from './FooterComponent';

export default {
    title: 'General/Footer',
    component: FooterComponent,
};

const Template = (args) => <FooterComponent {...args} />;

export const Basic = Template.bind({});
