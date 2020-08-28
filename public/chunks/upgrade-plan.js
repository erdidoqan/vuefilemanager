(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{149:function(n,a,t){var e=t(425);"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(e,i);e.locals&&(n.exports=e.locals)},174:function(n,a,t){"use strict";var e=t(11),i=t(1),r=t(6),o=t(7),p=t.n(o);function l(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,e)}return t}function d(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}var s={name:"PlanPricingTables",components:{HardDriveIcon:i.v,ButtonBase:e.a},data:function(){return{plans:void 0}},computed:function(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){d(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}({},Object(r.b)(["user"])),methods:{selectPlan:function(n){this.$emit("selected-plan",n),this.$router.push({name:"UpgradeBilling"})}},created:function(){var n=this;p.a.get("/api/public/pricing").then((function(a){n.plans=a.data.filter((function(a){return a.data.attributes.capacity>n.user.data.attributes.storage_capacity})),n.$emit("load",!1)}))}},b=(t(294),t(0)),c=Object(b.a)(s,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return n.plans?t("div",{staticClass:"plans-wrapper"},n._l(n.plans,(function(a,e){return t("article",{key:e,staticClass:"plan"},[t("div",{staticClass:"plan-wrapper"},[t("header",{staticClass:"plan-header"},[t("div",{staticClass:"icon"},[t("hard-drive-icon",{attrs:{size:"26"}})],1),n._v(" "),t("h1",{staticClass:"title"},[n._v(n._s(a.data.attributes.name))]),n._v(" "),t("h2",{staticClass:"description"},[n._v(n._s(a.data.attributes.description))])]),n._v(" "),t("section",{staticClass:"plan-features"},[t("b",{staticClass:"storage-size"},[n._v(n._s(a.data.attributes.capacity_formatted))]),n._v(" "),t("span",{staticClass:"storage-description"},[n._v(n._s(n.$t("page_pricing_tables.storage_capacity")))])]),n._v(" "),t("footer",{staticClass:"plan-footer"},[t("b",{staticClass:"price"},[n._v("\n                    "+n._s(a.data.attributes.price)+"/"+n._s(n.$t("global.monthly_ac"))+"\n                    "),a.data.attributes.tax_rates.length>0?t("small",{staticClass:"vat-disclaimer"},[n._v(n._s(n.$t("page_pricing_tables.vat_excluded")))]):n._e()]),n._v(" "),t("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(t){return n.selectPlan(a)}}},[n._v("\n                    "+n._s(n.$t("global.get_it"))+"\n                ")])],1)])])})),0):n._e()}),[],!1,null,"8b2ebeb2",null);a.a=c.exports},20:function(n,a,t){"use strict";var e={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t(1).d}},i=(t(246),t(0)),r=Object(i.a)(e,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"page-header"},[n.canBack?t("div",{staticClass:"go-back",on:{click:function(a){return n.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):n._e(),n._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[n._v(n._s(n.title))])])])}),[],!1,null,"aafe7e24",null);a.a=r.exports},246:function(n,a,t){"use strict";var e=t(59);t.n(e).a},247:function(n,a,t){(n.exports=t(4)(!1)).push([n.i,".page-header[data-v-aafe7e24] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-aafe7e24] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-aafe7e24] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-aafe7e24] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-aafe7e24] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-aafe7e24] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-aafe7e24] {\n    background: #111314;\n}\n.page-header .title[data-v-aafe7e24] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-aafe7e24] {\n    fill: #00BC7E;\n}\n}\n",""])},294:function(n,a,t){"use strict";var e=t(84);t.n(e).a},295:function(n,a,t){(n.exports=t(4)(!1)).push([n.i,".plan[data-v-8b2ebeb2] {\n  text-align: center;\n  flex: 0 0 33%;\n  padding: 0 25px;\n  margin-bottom: 45px;\n}\n.plan .plan-wrapper[data-v-8b2ebeb2] {\n  box-shadow: 0 7px 20px 5px rgba(26, 36, 55, 0.03);\n  padding: 25px;\n  border-radius: 8px;\n  transition: 0.3s all ease;\n}\n.plan .plan-wrapper[data-v-8b2ebeb2]:hover {\n  transform: translateY(-20px) scale(1.05);\n  box-shadow: 0 15px 25px 5px rgba(26, 36, 55, 0.08);\n}\n.plan .plan-header .icon path[data-v-8b2ebeb2], .plan .plan-header .icon line[data-v-8b2ebeb2], .plan .plan-header .icon polyline[data-v-8b2ebeb2], .plan .plan-header .icon rect[data-v-8b2ebeb2], .plan .plan-header .icon circle[data-v-8b2ebeb2] {\n  color: #00BC7E;\n}\n.plan .plan-header .title[data-v-8b2ebeb2] {\n  font-size: 1.375em;\n  font-weight: 800;\n}\n.plan .plan-header .description[data-v-8b2ebeb2] {\n  font-size: 0.875em;\n  font-weight: 600;\n}\n.plan .plan-features[data-v-8b2ebeb2] {\n  margin: 65px 0;\n}\n.plan .plan-features .storage-size[data-v-8b2ebeb2] {\n  font-size: 3em;\n  font-weight: 900;\n  line-height: 1.1;\n}\n.plan .plan-features .storage-description[data-v-8b2ebeb2] {\n  display: block;\n  font-size: 0.9375em;\n  font-weight: 800;\n}\n.plan .plan-footer .sign-in-button[data-v-8b2ebeb2] {\n  width: 100%;\n  text-align: center;\n}\n.plan .plan-footer .price[data-v-8b2ebeb2] {\n  color: #00BC7E;\n  font-size: 1.125em;\n  display: block;\n  margin-bottom: 20px;\n}\n.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2] {\n  font-size: 0.6875em;\n  color: #1B2539;\n  display: block;\n  font-weight: 300;\n  opacity: 0.45;\n  margin-top: 5px;\n}\n.plans-wrapper[data-v-8b2ebeb2] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -25px;\n  justify-content: center;\n}\n@media only screen and (max-width: 960px) {\n.plans-wrapper[data-v-8b2ebeb2] {\n    display: block;\n    margin: 0;\n}\n}\n@media (prefers-color-scheme: dark) {\n.plan .plan-wrapper[data-v-8b2ebeb2] {\n    background: #1e2024;\n}\n.plan .plan-header .title[data-v-8b2ebeb2] {\n    color: #bec6cf;\n}\n.plan .plan-header .description[data-v-8b2ebeb2] {\n    color: #7d858c;\n}\n.plan .plan-features .storage-size[data-v-8b2ebeb2] {\n    color: #bec6cf;\n}\n.plan .plan-features .storage-description[data-v-8b2ebeb2] {\n    color: #bec6cf;\n}\n.plan .plan-footer .sign-in-button[data-v-8b2ebeb2] {\n    background: rgba(0, 188, 126, 0.1);\n}\n.plan .plan-footer .sign-in-button[data-v-8b2ebeb2] .content {\n    color: #00BC7E;\n}\n.plan .plan-footer .price .vat-disclaimer[data-v-8b2ebeb2] {\n    color: #bec6cf;\n}\n}\n",""])},424:function(n,a,t){"use strict";var e=t(149);t.n(e).a},425:function(n,a,t){(n.exports=t(4)(!1)).push([n.i,'.form[data-v-67317b10] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-67317b10] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-67317b10] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-67317b10] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-67317b10] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-67317b10] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-67317b10] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-67317b10] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-67317b10]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-67317b10] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-67317b10] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-67317b10] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-67317b10] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-67317b10] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-67317b10] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-67317b10] {\n  margin-left: 20px;\n}\n.error-message[data-v-67317b10] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-67317b10] {\n  width: 100%;\n}\ntextarea[data-v-67317b10],\ninput[type="password"][data-v-67317b10],\ninput[type="text"][data-v-67317b10],\ninput[type="number"][data-v-67317b10],\ninput[type="email"][data-v-67317b10] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-67317b10],\ninput[type="password"].is-error[data-v-67317b10],\ninput[type="text"].is-error[data-v-67317b10],\ninput[type="number"].is-error[data-v-67317b10],\ninput[type="email"].is-error[data-v-67317b10] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-67317b10]::-webkit-input-placeholder, input[type="password"][data-v-67317b10]::-webkit-input-placeholder, input[type="text"][data-v-67317b10]::-webkit-input-placeholder, input[type="number"][data-v-67317b10]::-webkit-input-placeholder, input[type="email"][data-v-67317b10]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-67317b10]::-moz-placeholder, input[type="password"][data-v-67317b10]::-moz-placeholder, input[type="text"][data-v-67317b10]::-moz-placeholder, input[type="number"][data-v-67317b10]::-moz-placeholder, input[type="email"][data-v-67317b10]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-67317b10]:-ms-input-placeholder, input[type="password"][data-v-67317b10]:-ms-input-placeholder, input[type="text"][data-v-67317b10]:-ms-input-placeholder, input[type="number"][data-v-67317b10]:-ms-input-placeholder, input[type="email"][data-v-67317b10]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-67317b10]::-ms-input-placeholder, input[type="password"][data-v-67317b10]::-ms-input-placeholder, input[type="text"][data-v-67317b10]::-ms-input-placeholder, input[type="number"][data-v-67317b10]::-ms-input-placeholder, input[type="email"][data-v-67317b10]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-67317b10]::placeholder,\ninput[type="password"][data-v-67317b10]::placeholder,\ninput[type="text"][data-v-67317b10]::placeholder,\ninput[type="number"][data-v-67317b10]::placeholder,\ninput[type="email"][data-v-67317b10]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-67317b10]:focus,\ninput[type="password"][data-v-67317b10]:focus,\ninput[type="text"][data-v-67317b10]:focus,\ninput[type="number"][data-v-67317b10]:focus,\ninput[type="email"][data-v-67317b10]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-67317b10],\ninput[type="password"][disabled][data-v-67317b10],\ninput[type="text"][disabled][data-v-67317b10],\ninput[type="number"][disabled][data-v-67317b10],\ninput[type="email"][disabled][data-v-67317b10] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-67317b10] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-67317b10], .additional-link a[data-v-67317b10] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-67317b10]:hover, .additional-link a[data-v-67317b10]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-67317b10] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-67317b10] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-67317b10], .form textarea[data-v-67317b10] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-67317b10] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-67317b10] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-67317b10] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-67317b10] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-67317b10] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-67317b10] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-67317b10] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-67317b10] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-67317b10],\n  input[type="password"][data-v-67317b10],\n  input[type="number"][data-v-67317b10],\n  input[type="text"][data-v-67317b10],\n  input[type="email"][data-v-67317b10] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-67317b10] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-67317b10] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-67317b10] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-67317b10] {\n    color: #bec6cf;\n}\ntextarea[data-v-67317b10],\n  input[type="password"][data-v-67317b10],\n  input[type="text"][data-v-67317b10],\n  input[type="number"][data-v-67317b10],\n  input[type="email"][data-v-67317b10] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-67317b10]::-webkit-input-placeholder, input[type="password"][data-v-67317b10]::-webkit-input-placeholder, input[type="text"][data-v-67317b10]::-webkit-input-placeholder, input[type="number"][data-v-67317b10]::-webkit-input-placeholder, input[type="email"][data-v-67317b10]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-67317b10]::-moz-placeholder, input[type="password"][data-v-67317b10]::-moz-placeholder, input[type="text"][data-v-67317b10]::-moz-placeholder, input[type="number"][data-v-67317b10]::-moz-placeholder, input[type="email"][data-v-67317b10]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-67317b10]:-ms-input-placeholder, input[type="password"][data-v-67317b10]:-ms-input-placeholder, input[type="text"][data-v-67317b10]:-ms-input-placeholder, input[type="number"][data-v-67317b10]:-ms-input-placeholder, input[type="email"][data-v-67317b10]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-67317b10]::-ms-input-placeholder, input[type="password"][data-v-67317b10]::-ms-input-placeholder, input[type="text"][data-v-67317b10]::-ms-input-placeholder, input[type="number"][data-v-67317b10]::-ms-input-placeholder, input[type="email"][data-v-67317b10]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-67317b10]::placeholder,\n  input[type="password"][data-v-67317b10]::placeholder,\n  input[type="text"][data-v-67317b10]::placeholder,\n  input[type="number"][data-v-67317b10]::placeholder,\n  input[type="email"][data-v-67317b10]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-67317b10],\n  input[type="password"][disabled][data-v-67317b10],\n  input[type="text"][disabled][data-v-67317b10],\n  input[type="number"][disabled][data-v-67317b10],\n  input[type="email"][disabled][data-v-67317b10] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.plan-title[data-v-67317b10] {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto 80px;\n}\n.plan-title path[data-v-67317b10], .plan-title line[data-v-67317b10], .plan-title polyline[data-v-67317b10], .plan-title rect[data-v-67317b10], .plan-title circle[data-v-67317b10] {\n  color: #00BC7E;\n}\n.plan-title h1[data-v-67317b10] {\n  font-size: 2.375em;\n  font-weight: 800;\n  margin-bottom: 5px;\n}\n.plan-title h2[data-v-67317b10] {\n  font-size: 1.25em;\n  font-weight: 500;\n}\n@media (prefers-color-scheme: dark) {\n.plan-title h1[data-v-67317b10] {\n    color: #bec6cf;\n}\n.plan-title h2[data-v-67317b10] {\n    color: #7d858c;\n}\n}\n',""])},59:function(n,a,t){var e=t(247);"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(e,i);e.locals&&(n.exports=e.locals)},609:function(n,a,t){"use strict";t.r(a);var e=t(174),i=t(19),r=t(20),o=t(18),p=t(1),l=(t(7),{name:"UpgradePlan",components:{PlanPricingTables:e.a,MobileHeader:i.a,PageHeader:r.a,CloudIcon:p.g,Spinner:o.a},data:function(){return{isLoading:!0}},methods:{onLoadPricingTables:function(n){this.isLoading=n},onSelectTable:function(n){this.$store.commit("STORE_REQUESTED_PLAN",n)}},beforeMount:function(){var n=document.createElement("script");n.setAttribute("src","https://js.stripe.com/v3/"),document.head.appendChild(n)},mounted:function(){this.$store.dispatch("getAppData")}}),d=(t(424),t(0)),s=Object(d.a)(l,(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{attrs:{id:"single-page"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!n.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:n.$router.currentRoute.meta.title}}),n._v(" "),t("div",{staticClass:"content-page"},[t("div",{staticClass:"plan-title"},[t("cloud-icon",{staticClass:"title-icon",attrs:{size:"42"}}),n._v(" "),t("h1",[n._v(n._s(n.$t("page_pricing_tables.title")))]),n._v(" "),t("h2",[n._v(n._s(n.$t("page_pricing_tables.description")))])],1),n._v(" "),t("PlanPricingTables",{on:{load:n.onLoadPricingTables,"selected-plan":n.onSelectTable}})],1)],1),n._v(" "),n.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):n._e()])}),[],!1,null,"67317b10",null);a.default=s.exports},84:function(n,a,t){var e=t(295);"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(5)(e,i);e.locals&&(n.exports=e.locals)}}]);