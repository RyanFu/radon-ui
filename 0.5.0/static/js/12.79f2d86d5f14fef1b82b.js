webpackJsonp([12],{2:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.rdMark=void 0;var o=e(3),r=i(o);t.rdMark=r.default},3:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(4),r=i(o);t.default={functional:!0,render:function(n,t){var e="",i=!0,o=!1,a=void 0;try{for(var c,s=(0,r.default)(t.children);!(i=(c=s.next()).done);i=!0){var d=c.value;e+=d.text}}catch(n){o=!0,a=n}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n("div",{class:["marked"],domProps:{innerHTML:window.marked(e)}})}}},264:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(2),o=e(5);t.default={data:function(){return{code:'<!-- Vue root compoment template -->\n<div id="app">\n    <router-view></router-view>\n    <rd-notification></rd-notification>\n</div>'}},components:{rdButton:o.rdButton,rdMark:i.rdMark},methods:{success:function(){this.$Notification.success("编辑成功","",5e3)},info:function(){this.$Notification.info("info","",5e3)},warning:function(){this.$Notification.warning("warning","",5e3)},danger:function(){this.$Notification.failed("failed","",5e3)}}}},620:function(n,t,e){var i,o;i=e(264);var r=e(635);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,n.exports=i},635:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return t("div",{staticClass:"ex-content"},[t("div",{staticClass:"ex-card"},[t("rd-mark",["\n# Notification 通知\n\n\n>   在系统右上角显示通知提醒信息。经常用于以下情况：\n    较为复杂的通知内容。\n    带有交互的通知，给出用户下一步的行动点。\n    系统主动推送。\n\n\n`this.$Notification.success(title:String, content:String, wait:Number)`\n\n## 示例\n\n点击下面四个按钮试试\n    "])," ",t("p",[t("rd-button",{attrs:{type:"success"},on:{click:n.success}},["success"])," ",t("rd-button",{attrs:{type:"danger"},on:{click:n.danger}},["danger"])," ",t("rd-button",{attrs:{type:"warning"},on:{click:n.warning}},["warning"])," ",t("rd-button",{attrs:{type:"info"},on:{click:n.info}},["info"])])," ",t("rd-mark",["\n## 代码\n\n首先在项目的入口文件中引入 RadonUI, 调用 `Vue.use` 安装。\n\n```javascript\n// main.js\nimport { RadonInstall } from 'radon-ui'\n\nVue.use(RadonInstall, {\n    Notification: true\n})\n```\n\n在根组件添加 `rd-notification` 组件的位置\n\n```\n"+n._s(n.code)+"\n```\n\n可以在任何组件中调用 `vm.$Notification.success(title, content, delay)` 来创建一个对话框了\n\n```javascript\n// any vue components\nmethods: {\n    someAction () {\n        this.$Notification.success('编辑成功', '', 5000)\n    }\n}\n\n```\n\n## API\n\n`this.$Notification.create(type, title, content, delay)`\n\n| 参数            | 类型         | 说明           |\n| :------------- |:-------------|:--------------|\n| type           | String       | 消息类型 （info, warning, success, failed）|\n| title          | String       | 消息标题    |\n| content        | String       | 消息正文    |\n| delay          | Number       | 等待时间，为空不会自动移除 |\n    "])])])},staticRenderFns:[]}}});