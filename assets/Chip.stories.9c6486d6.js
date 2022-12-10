var r=Object.defineProperty;var o=(e,l)=>r(e,"name",{value:l,configurable:!0});import{C as t}from"./Chip.c6626eb2.js";import{j as a}from"./jsx-runtime.ee224a06.js";import"./close.0730ccba.js";import"./Icon.68421023.js";import"./iframe.7d664a14.js";const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

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
`,locationsMap:{default:{startLoc:{col:46,line:12},endLoc:{col:74,line:12},startBody:{col:46,line:12},endBody:{col:74,line:12}},deletable:{startLoc:{col:46,line:12},endLoc:{col:74,line:12},startBody:{col:46,line:12},endBody:{col:74,line:12}}}}},title:"Display/Chip",component:t},n=o(e=>a(t,{...e}),"Template"),i=n.bind({});i.args={value:"value",onDelete:void 0};const s=n.bind({});s.args={value:"value",onDelete:()=>{}};const y=["Default","Deletable"];export{i as Default,s as Deletable,y as __namedExportsOrder,C as default};
//# sourceMappingURL=Chip.stories.9c6486d6.js.map
