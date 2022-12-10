import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageContent } from '../component/page-content/PageContent';
import { PagePanel } from '../component/page-panel/PagePanel';
import { Page } from '../component/page/Page';
import { Sidenav } from '../component/sidenav/Sidenav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Page/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <PageContent>{[<p>1</p>, <p>2</p>, <p>3</p>, <p>4</p>, <p>5</p>, <p>6</p>, <p>7</p>, <p>8</p>, <p>9</p>, <p>10</p>, <p>11</p>, <p>12</p>]}</PageContent>,
  showBottomDrawer: false,
  showSidenav: false,
};

export const HasSidenav = Template.bind({});
HasSidenav.args = {
  children: <PageContent>{[<p>1</p>, <p>2</p>, <p>3</p>, <p>4</p>, <p>5</p>, <p>6</p>, <p>7</p>, <p>8</p>, <p>9</p>, <p>10</p>, <p>11</p>, <p>12</p>]}</PageContent>,
  showBottomDrawer: false,
  showSidenav: true,
  sidenavElement: <Sidenav>{[<p>1</p>, <p>2</p>, <p>3</p>, <p>4</p>, <p>5</p>, <p>6</p>, <p>7</p>, <p>8</p>, <p>9</p>, <p>10</p>]}</Sidenav>,
};

export const HasBottomDrawer = Template.bind({});
HasBottomDrawer.args = {
  children: <PageContent>{[<p>1</p>, <p>2</p>, <p>3</p>, <p>4</p>, <p>5</p>, <p>6</p>, <p>7</p>, <p>8</p>, <p>9</p>, <p>10</p>, <p>11</p>, <p>12</p>]}</PageContent>,
  bottomDrawerElement: <PagePanel onClose={() => {}} title={<h1>Bottom drawer</h1>} />,
  showBottomDrawer: true,
  showSidenav: false,
};
