import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidenav } from '../component/sidenav/Sidenav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Page/Sidenav',
  component: Sidenav,
} as ComponentMeta<typeof Sidenav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidenav> = (args) => <Sidenav {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  open: true,
};

export const Overflow = Template.bind({});
Overflow.args = {
  children: [
    <p>1</p>,
    <p>2</p>,
    <p>3</p>,
    <p>4</p>,
    <p>5</p>,
    <p>6</p>,
    <p>7</p>,
    <p>8</p>,
    <p>9</p>,
    <p>10</p>,
  ],
  open: true,
}
