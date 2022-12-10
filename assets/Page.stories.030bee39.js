var h=Object.defineProperty;var p=(n,o)=>h(n,"name",{value:o,configurable:!0});import{P as l,a as g}from"./PagePanel.99366dd4.js";import{N as f}from"./Navbar.686a76b2.js";import{a as t,j as e}from"./jsx-runtime.ee224a06.js";import{S as u}from"./Sidenav.3d197d2f.js";import"./Button.bcb28738.js";import"./Icon.68421023.js";import"./iframe.7d664a14.js";import"./close.0730ccba.js";const a=p(({bottomDrawerElement:n,children:o,navbarContent:d,onCloseSidenav:S,onToggleSidenav:s,showBottomDrawer:c,showSidenav:r,sidenavElement:m})=>t("div",{className:"slr-page-container",children:[e("div",{className:`slr-page-sidenav-area ${r?"slr-page-sidenav-area-open":"slr-page-sidenav-area-closed"}`,children:e("div",{className:"slr-page-sidenav-container",children:m})}),t("div",{className:`slr-page-main-area ${r?"slr-page-main-area-sidenav-open":"slr-page-main-area-sidenav-closed"}`,children:[e("div",{className:`slr-page-main-overlay ${r?"slr-page-main-overlay-visible":"slr-page-main-overlay-invisible"}`}),e("div",{className:`slr-page-main-bottom-drawer ${c?"slr-page-main-bottom-drawer-open":"slr-page-main-bottom-drawer-closed"}`,children:n}),t("main",{className:"slr-page-main",children:[e(f,{onToggleSidenav:s,children:d}),o]})]})]}),"Page");try{a.displayName="Page",a.__docgenInfo={description:"",displayName:"Page",props:{bottomDrawerElement:{defaultValue:null,description:"",name:"bottomDrawerElement",required:!1,type:{name:"ReactNode"}},navbarContent:{defaultValue:null,description:"",name:"navbarContent",required:!1,type:{name:"ReactNode"}},onCloseSidenav:{defaultValue:null,description:"",name:"onCloseSidenav",required:!1,type:{name:"(() => any)"}},onToggleSidenav:{defaultValue:null,description:"",name:"onToggleSidenav",required:!1,type:{name:"(() => any)"}},showBottomDrawer:{defaultValue:null,description:"",name:"showBottomDrawer",required:!1,type:{name:"boolean"}},showSidenav:{defaultValue:null,description:"",name:"showSidenav",required:!1,type:{name:"boolean"}},sidenavElement:{defaultValue:null,description:"",name:"sidenavElement",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/page/Page.tsx#Page"]={docgenInfo:a.__docgenInfo,name:"Page",path:"src/component/page/Page.tsx#Page"})}catch{}const T={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:46,line:14},endLoc:{col:74,line:14},startBody:{col:46,line:14},endBody:{col:74,line:14}},"has-sidenav":{startLoc:{col:46,line:14},endLoc:{col:74,line:14},startBody:{col:46,line:14},endBody:{col:74,line:14}},"has-bottom-drawer":{startLoc:{col:46,line:14},endLoc:{col:74,line:14},startBody:{col:46,line:14},endBody:{col:74,line:14}}}}},title:"Page/Page",component:a},i=p(n=>e(a,{...n}),"Template"),v=i.bind({});v.args={children:e(l,{children:[e("p",{children:"1"}),e("p",{children:"2"}),e("p",{children:"3"}),e("p",{children:"4"}),e("p",{children:"5"}),e("p",{children:"6"}),e("p",{children:"7"}),e("p",{children:"8"}),e("p",{children:"9"}),e("p",{children:"10"}),e("p",{children:"11"}),e("p",{children:"12"})]}),showBottomDrawer:!1,showSidenav:!1};const w=i.bind({});w.args={children:e(l,{children:[e("p",{children:"1"}),e("p",{children:"2"}),e("p",{children:"3"}),e("p",{children:"4"}),e("p",{children:"5"}),e("p",{children:"6"}),e("p",{children:"7"}),e("p",{children:"8"}),e("p",{children:"9"}),e("p",{children:"10"}),e("p",{children:"11"}),e("p",{children:"12"})]}),showBottomDrawer:!1,showSidenav:!0,sidenavElement:e(u,{children:[e("p",{children:"1"}),e("p",{children:"2"}),e("p",{children:"3"}),e("p",{children:"4"}),e("p",{children:"5"}),e("p",{children:"6"}),e("p",{children:"7"}),e("p",{children:"8"}),e("p",{children:"9"}),e("p",{children:"10"})]})};const P=i.bind({});P.args={children:e(l,{children:[e("p",{children:"1"}),e("p",{children:"2"}),e("p",{children:"3"}),e("p",{children:"4"}),e("p",{children:"5"}),e("p",{children:"6"}),e("p",{children:"7"}),e("p",{children:"8"}),e("p",{children:"9"}),e("p",{children:"10"}),e("p",{children:"11"}),e("p",{children:"12"})]}),bottomDrawerElement:e(g,{onClose:()=>{},title:e("h1",{children:"Bottom drawer"})}),showBottomDrawer:!0,showSidenav:!1};const H=["Default","HasSidenav","HasBottomDrawer"];export{v as Default,P as HasBottomDrawer,w as HasSidenav,H as __namedExportsOrder,T as default};
//# sourceMappingURL=Page.stories.030bee39.js.map
