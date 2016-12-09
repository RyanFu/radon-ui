webpackJsonp([7],{2:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.rdMark=void 0;var r=e(3),o=a(r);t.rdMark=o.default},3:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var r=e(4),o=a(r);t.default={functional:!0,render:function(n,t){var e="",a=!0,r=!1,i=void 0;try{for(var s,d=(0,o.default)(t.children);!(a=(s=d.next()).done);a=!0){var c=s.value;e+=c.text}}catch(n){r=!0,i=n}finally{try{!a&&d.return&&d.return()}finally{if(r)throw i}}return n("div",{class:["marked"],domProps:{innerHTML:window.marked(e)}})}}},270:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(2),r=e(5);t.default={data:function(){return{code:'<rd-pagination @change="changePage" :total="pagination.total" :options="pagination.options"></rd-pagination>',list:[1,2,3],pagination:{total:10,options:{pageSize:10,remote:{pageIndexName:"pageIndex",pageSizeName:"pageSize",offset:0}}}}},components:{rdPagination:r.rdPagination,rdMark:a.rdMark},methods:{changePage:function(n){var t=this;this.$http.get("/mock/page",n).then(function(n){var e=n.data;t.list=e,t.pagination.total=e.total},function(n){console.error(n)})}}}},626:function(n,t,e){var a,r;a=e(270);var o=e(688);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,n.exports=a},688:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return t("div",{staticClass:"ex-card"},[t("rd-mark",["\n# Pagination分页插件\n> 作为分页插件使用，可以直接挂钩数据字段，不需要在手动自己更新数据和页面\n\n### 示例\n    "])," ",t("div",{staticClass:"list",staticStyle:{"margin-bottom":"10px"}},[n._l(n.list,function(e){return t("span",{staticStyle:{background:"#ccc","margin-right":"10px"}},[n._s(e)])})])," ",t("rd-pagination",{attrs:{total:n.pagination.total,options:n.pagination.options},on:{change:n.changePage}})," ",t("rd-mark",["\n### 代码\n```html\n "+n._s(n.code)+"\n```\n\n```javascript\nchangePage (params) {\n    this.$http.get('/mock/page', params)\n        .then((res) => {\n            let resData = res.data\n            this.list = resData\n            this.pagination.total = resData.total\n        }, (error) => {\n            console.error(error)\n        })\n}\n\n```\n\n### API \n\ntotal: Number\n\n\noptions: Object\n\n```\noptions: {\n    pageSize: 10,\n    remote: {\n        pageIndexName: 'pageIndex',\n        pageSizeName: 'pageSize',\n        offset: 0\n    }\n}\n```\n    "])])},staticRenderFns:[]}}});