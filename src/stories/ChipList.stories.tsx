import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChipList } from '../component/chip-list/ChipList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/ChipList',
  component: ChipList,
} as ComponentMeta<typeof ChipList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChipList> = (args) => <ChipList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  values: ['value 1', 'value 2', 'value 3', 'value 4', 'value 5'],
};
