import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chip } from '../component/chip/Chip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'value',
  onDelete: undefined,
};

export const Deletable = Template.bind({});
Deletable.args = {
  value: 'value',
  onDelete: () => {},
};
