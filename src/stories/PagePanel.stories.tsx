import { ComponentMeta, ComponentStory } from '@storybook/react';
import travelImage from '../asset/undraw_traveling_01tc.svg';
import { PageContent } from '../component/page-content/PageContent';
import { PagePanel } from '../component/page-panel/PagePanel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Page/PagePanel',
  component: PagePanel,
} as ComponentMeta<typeof PagePanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PagePanel> = (args) => <PagePanel {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <PageContent>{[
    <img alt='travel' height='128px' src={travelImage} />,
    <p>lorem ipsum</p>,
    <p>lorem ipsum</p>,
    <p>lorem ipsum</p>,
    <p>lorem ipsum</p>,
    <p>lorem ipsum</p>
  ]}</PageContent>,
  onClose: () => {},
  open: true,
  title: 'Title',
};
