var s=Object.defineProperty;var r=(n,o)=>s(n,"name",{value:o,configurable:!0});import{j as a}from"./jsx-runtime.ee224a06.js";import"./iframe.7d664a14.js";const e=r(n=>{const{children:o,...t}={...n};return a("div",{...t,className:`slr-banner ${t.className?t.className:""}`,children:o})},"Banner");try{e.displayName="Banner",e.__docgenInfo={description:"",displayName:"Banner",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/banner/Banner.tsx#Banner"]={docgenInfo:e.__docgenInfo,name:"Banner",path:"src/component/banner/Banner.tsx#Banner"})}catch{}const m={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Banner } from '../component/banner/Banner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Display/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Banner text'
};
`,locationsMap:{default:{startLoc:{col:48,line:11},endLoc:{col:78,line:11},startBody:{col:48,line:11},endBody:{col:78,line:11}}}}},title:"Display/Banner",component:e},c=r(n=>a(e,{...n}),"Template"),p=c.bind({});p.args={children:"Banner text"};const B=["Default"];export{p as Default,B as __namedExportsOrder,m as default};
//# sourceMappingURL=Banner.stories.a9490b9f.js.map
