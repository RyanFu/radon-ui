webpackJsonp([11],{2:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.rdMark=void 0;var a=t(3),d=r(a);e.rdMark=d.default},3:function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var a=t(4),d=r(a);e.default={functional:!0,render:function(n,e){var t="",r=!0,a=!1,i=void 0;try{for(var o,u=(0,d.default)(e.children);!(r=(o=u.next()).done);r=!0){var s=o.value;t+=s.text}}catch(n){a=!0,i=n}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return n("div",{class:["marked"],domProps:{innerHTML:window.marked(t)}})}}},266:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(2),a=t(5);e.default={data:function(){return{code:{one:'<template>\n    <div class="container">\n         <rd-text :textfield="test"></rd-text>\n    </div>\n</template>'},test:{value:"",placeHolder:"请输入",state:"success",tip:"",inline:!0}}},components:{rdMark:r.rdMark,rdText:a.rdText}}},622:function(n,e,t){var r,a;r=t(266);var d=t(632);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=d.render,a.staticRenderFns=d.staticRenderFns,n.exports=r},632:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return e("div",{staticClass:"ex-content"},[e("div",{staticClass:"ex-card"},[e("rd-mark",["\n# Radon UI\n\n一个帮助你快速开发产品的Vue组件库，简洁好用，效率高，让你摆脱各种定制化的烦恼。\n\n## 特性\n\n- 基于 Vue 开发的高质量UI组件\n- 基于 npm + webpack + ES6 + postcss开发\n- 数据驱动，简单易使用\n\n## 安装\n\n### 使用 npm 安装\n\n推荐使用 npm 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。\n可以通过 npm 直接安装到项目中，使用 import 或 require 进行引用。\n\n```\nnpm install radon-ui\n```\n\n## 使用\n\n### 基本组件的使用\n\n\n引入 `rdText` 输入框组件并局部注册并定义输入框组件的数据对象及配置\n\n```javascript\nimport { rdText } from 'radon-ui'\nimport 'radon-ui/dist/radon-ui.css'\n\nexport default {\n    data () {\n        return {\n            test: {\n                value: '',\n                placeHolder: '请输入',\n                state: 'success',\n                tip: '',\n                inline: true\n            }\n        }\n    },\n    components: {\n        rdText\n    }\n}\n```\n\n在模板中任意位置放置日历组件并使用 `v-bind` 语法将数据动态绑定 `textfield` 属性上。\n\n```html\n"+n._s(n.code.one)+"\n```\n\n我们上面定义的组件：\n    "])," ",e("p",[e("rd-text",{attrs:{textfield:n.test}})])," ",e("rd-mark",["\n\n## 版本\n\nV 0.5.0\n\n\n## 浏览器支持\n\nChrome Safari\n\n\n## 如何贡献\n\n 我们欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request](https://github.com/luojilab/radon-ui/pulls)，或者给我们[提问](https://github.com/luojilab/radon-ui/issues)。\n    "])])])},staticRenderFns:[]}}});