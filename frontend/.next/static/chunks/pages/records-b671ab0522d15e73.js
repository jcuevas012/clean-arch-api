(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{9255:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/records",function(){return n(5168)}])},9482:function(e,t,n){"use strict";var r=n(4051),a=n.n(r),i=n(5893),s=n(7294),c=n(9669),o=n.n(c);function l(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}t.Z=function(e){var t=e.onChange,n=(0,s.useState)([]),r=n[0],c=n[1],d=function(){var e,t=(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("/api/operations/types");case 3:t=e.sent.data,c(t||[]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error loading data",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){l(i,r,a,s,c,"next",e)}function c(e){l(i,r,a,s,c,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){d()}),[]),(0,i.jsxs)("div",{className:"flex-col py-20 ",children:[(0,i.jsx)("label",{children:"Operation Type:"}),(0,i.jsx)("br",{}),(0,i.jsxs)("select",{name:"cars",id:"cars",onChange:function(e){var n=e.target.value;t(n)},children:[(0,i.jsx)("option",{value:"",children:" Select Operation Type "}),r.length&&r.map((function(e){return(0,i.jsx)("option",{value:null===e||void 0===e?void 0:e.id,children:"".concat(null===e||void 0===e?void 0:e.description," -- Cost: ").concat(e.cost)},e.id)}))]})]})}},5168:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(4051),a=n.n(r),i=n(5893),s=n(9669),c=n.n(s),o=n(9008),l=n(7294),d=n(9482),u=function(e){var t=e.value,n=e.onClick;return(0,i.jsx)("li",{children:(0,i.jsx)("a",{onClick:function(){return n(t)},className:"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700",children:t})})},p=function(e){var t=e.value,n=e.onClick;return(0,i.jsx)("li",{children:(0,i.jsx)("a",{onClick:function(){return n(t)},className:"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",children:t})})},x=function(e){var t=e.currentPage,n=(e.totalItems,e.totalPages),r=e.onSelect,a=(0,l.useState)(t),s=a[0],c=a[1];(0,l.useEffect)((function(){c(t)}),[t]);var o=Array(n).fill("page"),d=function(e){if("increase"===e&&s<n){c(s+1)}else{var t=s-1;c(t&&t)}r(s)};return(0,i.jsxs)("ol",{className:"flex justify-center gap-1 text-xs font-medium py-3",children:[(0,i.jsx)("li",{children:(0,i.jsxs)("a",{onClick:function(){return d("decrease")},className:"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700",children:[(0,i.jsx)("span",{className:"sr-only",children:"Prev Page"}),(0,i.jsxs)("p",{id:"decrease",children:[" ","<"]})]})}),o.map((function(e,t){var n=t+1;return n===s?(0,i.jsx)(p,{onClick:r,value:n},t):(0,i.jsx)(u,{onClick:r,value:n},t)})),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{onClick:function(){return d("increase")},className:"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700",children:[(0,i.jsx)("span",{className:"sr-only",children:"Next Page"}),(0,i.jsx)("p",{id:"increase",children:">"})]})})]})},h=function(e){e.totalPages,e.currentPage;var t=e.onChange,n=Array(10).fill("page");return(0,i.jsx)("div",{className:"flex justify-end py-5",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Quantity"}),(0,i.jsx)("select",{name:"page",id:"page",onChange:function(e){var n=e.target.value;t(n)},children:n.length&&n.map((function(e,t){var n=10*(t+1);return(0,i.jsx)("option",{value:n,children:n},n)}))})]})})},f=function(e){var t,n,r=e.record;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 font-medium text-gray-900",children:(0,i.jsx)("p",{children:null===(t=r.operation)||void 0===t?void 0:t.description})}),(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:null===(n=r.operation)||void 0===n?void 0:n.cost}),(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:r.userBalance}),(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:r.operationResponse}),(0,i.jsx)("td",{className:"whitespace-nowrap px-4 py-2 text-gray-700",children:r.date?new Date(r.date).toDateString():"--"})]})},m=function(e){var t=e.result,n=t.records,r=t.totalItems,a=t.totalPages,s=t.currentPage,c=e.onPageSelect,o=e.onSizeSelect;return(0,i.jsxs)("div",{children:[(0,i.jsx)(h,{totalPages:a,currentPage:s,onChange:o}),(0,i.jsx)("div",{className:"my-5 overflow-x-auto rounded-lg border border-gray-200",children:(0,i.jsxs)("table",{className:"min-w-full divide-y-2 divide-gray-200 bg-white text-sm",children:[(0,i.jsx)("thead",{className:"ltr:text-left rtl:text-right",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 font-medium text-gray-900",children:"Operation"}),(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 font-medium text-gray-900",children:"Cost"}),(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 font-medium text-gray-900",children:"User Balance"}),(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 font-medium text-gray-900",children:"Operation Result"}),(0,i.jsx)("th",{className:"whitespace-nowrap px-4 py-2 font-medium text-gray-900",children:"Date"})]})}),(0,i.jsx)("tbody",{className:"divide-y divide-gray-200",children:n.length?n.map((function(e){return(0,i.jsx)(f,{record:e},e.id)})):(0,i.jsx)("tr",{children:(0,i.jsx)("p",{children:"NO RECORDS"})})})]})}),(0,i.jsx)(x,{totalItems:r,totalPages:a,currentPage:s,onSelect:c})]})};function v(e,t,n,r,a,i,s){try{var c=e[i](s),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){v(i,r,a,s,c,"next",e)}function c(e){v(i,r,a,s,c,"throw",e)}s(void 0)}))}}var j=(0,n(7425).Q)((function(){var e=(0,l.useState)({currentPage:0,totalItems:0,totalPages:0,records:[]}),t=e[0],n=e[1],r=(0,l.useState)({size:10,page:1,operationId:""}),s=(r[0],r[1],function(){var e=g(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("/api/records");case 3:t=e.sent.data,n(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()),u=function(){var e=g(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,c().get("/api/records?operationId=".concat(t));case 3:r=e.sent.data,n(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=g(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,c().get("/api/records?page=".concat(t));case 3:r=e.sent.data,n(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=g(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,c().get("/api/records?size=".concat(t));case 3:r=e.sent.data,n(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){s()}),[]),(0,i.jsxs)("div",{className:"min-h-full",children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:"Arithmetic Operation App - Records"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.jsxs)("main",{children:[(0,i.jsx)("div",{className:"py-6",children:(0,i.jsx)(d.Z,{onChange:u})}),(0,i.jsx)(m,{result:t,onPageSelect:p,onSizeSelect:x})]})]})}))},7425:function(e,t,n){"use strict";n.d(t,{Q:function(){return s}});var r=n(5893),a=n(1664),i=function(){return(0,r.jsx)("div",{className:"grid h-screen px-4 bg-white place-content-center",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h1",{className:"font-black text-gray-200 text-9xl",children:"401"}),(0,r.jsx)("p",{className:"text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Uh-oh!"}),(0,r.jsx)("p",{className:"mt-4 text-gray-500",children:"We can't access this page."}),(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",children:"Go Home"})})]})})},s=function(e){return function(t){return t.currentUser?(0,r.jsx)(e,{}):(0,r.jsx)(i,{})}}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=9255,e(e.s=t);var t}));var t=e.O();_N_E=t}]);