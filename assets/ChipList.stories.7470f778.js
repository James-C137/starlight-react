var u=Object.defineProperty;var o=(e,n)=>u(e,"name",{value:n,configurable:!0});import{C as d}from"./Chip.c6626eb2.js";import{j as i}from"./jsx-runtime.ee224a06.js";import"./close.0730ccba.js";import"./Icon.68421023.js";import"./iframe.7d664a14.js";const t=o(e=>{const{onDelete:n,values:r,...p}={...e};return i("div",{...p,className:"slr-chip-list",children:o(c=>{const s=[];return c.forEach(l=>{s.push(i(d,{onDelete:n,value:l},l))}),s},"renderChipList")(r)})},"ChipList");try{t.displayName="ChipList",t.__docgenInfo={description:"",displayName:"ChipList",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((value: string) => any)"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"string[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/chip-list/ChipList.tsx#ChipList"]={docgenInfo:t.__docgenInfo,name:"ChipList",path:"src/component/chip-list/ChipList.tsx#ChipList"})}catch{}const _={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChipList } from '../component/chip-list/ChipList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/ChipList',
  component: ChipList,
} as ComponentMeta<typeof ChipList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChipList> = (args) => <ChipList {...args} />;

export const Default = Template.bind({});
Default.args = {
  onDelete: undefined,
  values: ['value 1', 'value 2', 'value 3', 'value 4', 'value 5'],
};

export const Deletable = Template.bind({});
Deletable.args = {
  onDelete: () => {},
  values: ['value 1', 'value 2', 'value 3', 'value 4', 'value 5'],
};
`,locationsMap:{default:{startLoc:{col:50,line:12},endLoc:{col:82,line:12},startBody:{col:50,line:12},endBody:{col:82,line:12}},deletable:{startLoc:{col:50,line:12},endLoc:{col:82,line:12},startBody:{col:50,line:12},endBody:{col:82,line:12}}}}},title:"Display/ChipList",component:t},a=o(e=>i(t,{...e}),"Template"),m=a.bind({});m.args={onDelete:void 0,values:["value 1","value 2","value 3","value 4","value 5"]};const h=a.bind({});h.args={onDelete:()=>{},values:["value 1","value 2","value 3","value 4","value 5"]};const b=["Default","Deletable"];export{m as Default,h as Deletable,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=ChipList.stories.7470f778.js.map
