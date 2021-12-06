(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"0go1":function(t,a,e){"use strict";e("8j5K")},"4X4q":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"",""])},"8j5K":function(t,a,e){var r=e("qCtf");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,o);r.locals&&(t.exports=r.locals)},CtGM:function(t,a,e){"use strict";e.r(a);var r=e("Nv84"),o=e("h6vl"),n=e("qefO"),s=e("KnjL"),i=e("vDqi"),l=e.n(i);function b(t,a){return function(t){if(Array.isArray(t))return t}(t)||function(t,a){var e=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==e)return;var r,o,n=[],s=!0,i=!1;try{for(e=e.call(t);!(s=(r=e.next()).done)&&(n.push(r.value),!a||n.length!==a);s=!0);}catch(t){i=!0,o=t}finally{try{s||null==e.return||e.return()}finally{if(i)throw o}}return n}(t,a)||function(t,a){if(!t)return;if("string"==typeof t)return d(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,a)}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=t[e];return r}var c={name:"UserSubscription",props:["user"],components:{ProgressLine:o.a,ButtonBase:r.a,InfoBox:s.a,PageTab:n.a},computed:{status:function(){return{active:"Active until ".concat(this.subscription.attributes.renews_at),cancelled:"Active until ".concat(this.subscription.attributes.ends_at)}[this.subscription.attributes.status]},price:function(){return{month:"".concat(this.subscription.relationships.plan.data.attributes.price," Per Month"),year:"".concat(this.subscription.relationships.plan.data.attributes.price," Per Year")}[this.subscription.relationships.plan.data.attributes.interval]}},data:function(){return{subscription:void 0,isLoading:!0,limitations:[]}},created:function(){var t=this;l.a.get("/api/subscriptions/admin/users/".concat(this.$route.params.id,"/subscription")).then((function(a){t.subscription=a.data.data,Object.entries(t.user.data.meta.limitations).map((function(a){var e=b(a,2),r=e[0],o=e[1],n={color:{max_storage_amount:"warning",max_team_members:"purple"},message:{max_storage_amount:"Total ".concat(o.use," of ").concat(o.total," Used"),max_team_members:"Total ".concat(o.use," of ").concat(o.total," Members")},title:{max_storage_amount:"Storage",max_team_members:"Team Members"}};t.limitations.push({message:n.message[r],distribution:[{progress:o.percentage,color:n.color[r],title:n.title[r]}]})})),t.isLoading=!1})).catch((function(a){404===a.response.status&&(t.isLoading=!1)}))}},u=e("KHd+"),p=Object(u.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("PageTab",{attrs:{"is-loading":t.isLoading}},[t.subscription?e("div",{staticClass:"card shadow-card"},[e("div",{staticClass:"md:flex md:space-x-10 mb-8"},[e("div",{staticClass:"md:mb-0 mb-6"},[e("b",{staticClass:"block leading-5 text-lg"},[t._v("\n\t\t\t\t\t\t"+t._s(t.status)+"\n\t\t\t\t\t")]),t._v(" "),e("small",{staticClass:"text-gray-500"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("We will send you a notification upon Subscription expiration"))+"\n\t\t\t\t\t")])]),t._v(" "),e("div",[e("b",{staticClass:"block leading-5 text-lg"},[t._v("\n\t\t\t\t\t\t"+t._s(t.price)+"\n\t\t\t\t\t")]),t._v(" "),e("small",{staticClass:"text-gray-500"},[t._v("\n\t\t\t\t\t\t"+t._s(t.subscription.relationships.plan.data.attributes.name)+"\n\t\t\t\t\t")])])]),t._v(" "),t._l(t.limitations,(function(a,r){return e("div",{key:r,staticClass:"mb-6"},[e("b",{staticClass:"mb-3 block text-sm text-gray-400"},[t._v("\n\t\t\t\t\t"+t._s(a.message)+"\n\t\t\t\t")]),t._v(" "),e("ProgressLine",{attrs:{data:a.distribution}})],1)}))],2):t._e(),t._v(" "),t.subscription||t.isLoading?t._e():e("div",{staticClass:"card shadow-card"},[e("InfoBox",{staticStyle:{"margin-bottom":"0"}},[e("p",[t._v(t._s(t.$t("User don't have any subscription")))])])],1)])}),[],!1,null,null,null);a.default=p.exports},FPTY:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".chart-progress.success[data-v-6007c2ad]{background:#0abb87;box-shadow:0 3px 10px rgba(10,187,135,.5)}.chart-progress.danger[data-v-6007c2ad]{background:#fd397a;box-shadow:0 3px 10px rgba(253,57,122,.5)}.chart-progress.warning[data-v-6007c2ad]{background:#ffb822;box-shadow:0 3px 10px rgba(255,184,34,.5)}.chart-progress.info[data-v-6007c2ad]{background:#5578eb;box-shadow:0 3px 10px rgba(85,120,235,.5)}.chart-progress.purple[data-v-6007c2ad]{background:#9d66fe;box-shadow:0 3px 10px rgba(157,102,254,.5)}.chart-progress.secondary[data-v-6007c2ad]{background:#e1e1ef;box-shadow:0 3px 10px rgba(225,225,239,.5)}.dark .chart-progress.secondary[data-v-6007c2ad]{background:#282a2f!important;box-shadow:0 3px 10px rgba(40,42,47,.5)!important}",""])},KnjL:function(t,a,e){"use strict";var r={name:"InfoBox",props:["type"]},o=(e("0go1"),e("KHd+")),n=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"b202b3ae",null);a.a=n.exports},Nvvg:function(t,a,e){"use strict";e("gJIj")},ST7V:function(t,a,e){var r=e("FPTY");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,o);r.locals&&(t.exports=r.locals)},WXiT:function(t,a,e){"use strict";e("ST7V")},cJdj:function(t,a,e){"use strict";e("kRqW")},gJIj:function(t,a,e){var r=e("lkHs");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,o);r.locals&&(t.exports=r.locals)},h6vl:function(t,a,e){"use strict";var r={name:"DotLabel",props:["color","title"]},o=(e("Nvvg"),e("KHd+")),n={name:"ProgressLine",props:["data"],components:{DotLabel:Object(o.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"label"},[a("span",{class:["label-dot",this.color]}),this._v(" "),a("b",{staticClass:"label-title"},[this._v("\n        "+this._s(this.title)+"\n    ")])])}),[],!1,null,"65eb31b6",null).exports}},s=(e("WXiT"),Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"flex items-center mb-4 rounded dark:bg-2x-dark-foreground bg-light-300"},t._l(t.data,(function(a,r){return e("div",{key:r,staticClass:"chart-wrapper",style:{width:a.progress+"%"}},[1===t.data.length?e("span",{staticClass:"chart-progress w-full h-2.5 block",class:[{"border-r-2 dark:border-gray-800 border-white rounded-tl-lg rounded-bl-lg":a.progress<100,"border-none rounded-lg":a.progress>=100},a.color]}):t._e(),t._v(" "),t.data.length>1?e("span",{staticClass:"chart-progress w-full h-2.5 block",class:[{"rounded-tl-lg rounded-bl-lg border-r-2 dark:border-gray-800 border-white":0===r,"border-r-2 dark:border-gray-800 border-white":r<t.data.length-1,"rounded-tr-lg rounded-br-lg":r===t.data.length-1},a.color]}):t._e()])})),0),t._v(" "),e("footer",{staticClass:"flex items-center"},t._l(t.data,(function(t,a){return e("DotLabel",{key:a,staticClass:"mr-5",attrs:{color:t.color,title:t.title}})})),1)])}),[],!1,null,"6007c2ad",null));a.a=s.exports},kRqW:function(t,a,e){var r=e("4X4q");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,o);r.locals&&(t.exports=r.locals)},lkHs:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".label[data-v-65eb31b6]{display:flex;align-items:center}.label .label-dot[data-v-65eb31b6]{margin-right:10px;width:8px;height:8px;display:block;border-radius:8px;flex:none}.label .label-dot.success[data-v-65eb31b6]{background:#0abb87}.label .label-dot.danger[data-v-65eb31b6]{background:#fd397a}.label .label-dot.warning[data-v-65eb31b6]{background:#ffb822}.label .label-dot.info[data-v-65eb31b6]{background:#5578eb}.label .label-dot.primary[data-v-65eb31b6]{background:red}.label .label-dot.purple[data-v-65eb31b6]{background:#9d66fe}.label .label-dot.secondary[data-v-65eb31b6]{background:#e1e1ef}.label .label-title[data-v-65eb31b6]{font-size:16px;font-weight:700}",""])},qCtf:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".info-box[data-v-b202b3ae]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-b202b3ae]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-b202b3ae],.info-box.error p[data-v-b202b3ae]{color:#fd397a}.info-box.error a[data-v-b202b3ae]{text-decoration:underline}.info-box p[data-v-b202b3ae]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-b202b3ae],.info-box p[data-v-b202b3ae] a{font-size:15px}.info-box p[data-v-b202b3ae] b{font-size:15px;font-weight:700}.info-box a[data-v-b202b3ae],.info-box b[data-v-b202b3ae]{font-weight:700}.info-box a[data-v-b202b3ae]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-b202b3ae]{margin-top:15px}.info-box ul[data-v-b202b3ae],.info-box ul li[data-v-b202b3ae],.info-box ul li a[data-v-b202b3ae]{display:block}@media only screen and (max-width:690px){.info-box[data-v-b202b3ae]{padding:15px}}.dark .info-box[data-v-b202b3ae]{background:#1e2024}.dark .info-box p[data-v-b202b3ae],.dark .info-box ul li[data-v-b202b3ae]{color:#bec6cf}",""])},qefO:function(t,a,e){"use strict";var r={name:"PageTab",props:["isLoading"],components:{Spinner:e("zTYo").a}},o=(e("cJdj"),e("KHd+")),n=Object(o.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-tab"},[a("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[a("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"3dead278",null);a.a=n.exports}}]);