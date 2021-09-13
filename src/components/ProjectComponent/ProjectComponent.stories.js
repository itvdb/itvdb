import React from 'react';

import { ProjectComponent } from './ProjectComponent';

export default {
    title: 'General/Project',
    component: ProjectComponent,
};

const Template = (args) => <ProjectComponent {...args} />;

export const Empty = Template.bind({});
