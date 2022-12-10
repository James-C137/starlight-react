var i=Object.defineProperty;var e=(o,p)=>i(o,"name",{value:p,configurable:!0});import{S as t}from"./Sidenav.3d197d2f.js";import{j as n}from"./jsx-runtime.ee224a06.js";import"./close.0730ccba.js";import"./Icon.68421023.js";import"./iframe.7d664a14.js";const u={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

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
`,locationsMap:{default:{startLoc:{col:49,line:12},endLoc:{col:80,line:12},startBody:{col:49,line:12},endBody:{col:80,line:12}},overflow:{startLoc:{col:49,line:12},endLoc:{col:80,line:12},startBody:{col:49,line:12},endBody:{col:80,line:12}}}}},title:"Page/Sidenav",component:t},r=e(o=>n(t,{...o}),"Template"),a=r.bind({});a.args={open:!0};const s=r.bind({});s.args={children:[n("p",{children:"1"}),n("p",{children:"2"}),n("p",{children:"3"}),n("p",{children:"4"}),n("p",{children:"5"}),n("p",{children:"6"}),n("p",{children:"7"}),n("p",{children:"8"}),n("p",{children:"9"}),n("p",{children:"10"})],open:!0};const v=["Default","Overflow"];export{a as Default,s as Overflow,v as __namedExportsOrder,u as default};
//# sourceMappingURL=Sidenav.stories.8b5b6348.js.map
