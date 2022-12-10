var a=Object.defineProperty;var o=(t,r)=>a(t,"name",{value:r,configurable:!0});import{a as n,P as s}from"./PagePanel.99366dd4.js";import{j as e}from"./jsx-runtime.ee224a06.js";import"./Button.bcb28738.js";import"./Icon.68421023.js";import"./iframe.7d664a14.js";const l="/starlight-react/assets/undraw_traveling_01tc.ac90b53d.svg",f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:51,line:13},endLoc:{col:84,line:13},startBody:{col:51,line:13},endBody:{col:84,line:13}}}}},title:"Page/PagePanel",component:n},p=o(t=>e(n,{...t}),"Template"),i=p.bind({});i.args={children:e(s,{children:[e("img",{alt:"travel",height:"128px",src:l}),e("p",{children:"lorem ipsum"}),e("p",{children:"lorem ipsum"}),e("p",{children:"lorem ipsum"}),e("p",{children:"lorem ipsum"}),e("p",{children:"lorem ipsum"})]}),onClose:()=>{},open:!0,title:"Title"};const h=["Default"];export{i as Default,h as __namedExportsOrder,f as default};
//# sourceMappingURL=PagePanel.stories.36a1b366.js.map
