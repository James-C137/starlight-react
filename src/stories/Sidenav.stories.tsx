import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidenav } from '../component/sidenav/Sidenav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Page/Sidenav',
  component: Sidenav,
} as ComponentMeta<typeof Sidenav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidenav> = (args) => <Sidenav {...args} />;

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  open: true,
};
