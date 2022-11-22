import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BottomNav } from '../component/bottom-nav/BottomNav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Page/BottomNav',
  component: BottomNav,
} as ComponentMeta<typeof BottomNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomNav> = (args) => <BottomNav {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
