(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{135:function(t,n,e){var a=e(397);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,r);a.locals&&(t.exports=a.locals)},17:function(t,n,e){"use strict";var a={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=(e(244),e(0)),i=Object(r.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"button outline"},[e("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"59e2dfc0",null);n.a=i.exports},21:function(t,n,e){"use strict";var a={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},r=e(0),i=Object(r.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return this.isVisible?n("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);n.a=i.exports},22:function(t,n,e){"use strict";var a={name:"AuthContentWrapper"},r=(e(248),e(0)),i=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);n.a=i.exports},244:function(t,n,e){"use strict";var a=e(58);e.n(a).a},245:function(t,n,e){(t.exports=e(4)(!1)).push([t.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #111314;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},248:function(t,n,e){"use strict";var a=e(60);e.n(a).a},249:function(t,n,e){(t.exports=e(4)(!1)).push([t.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},396:function(t,n,e){"use strict";var a=e(135);e.n(a).a},397:function(t,n,e){(t.exports=e(4)(!1)).push([t.i,'.form.inline-form[data-v-481cb2cd] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-481cb2cd] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-481cb2cd] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-481cb2cd] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-481cb2cd] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-481cb2cd]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-481cb2cd] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-481cb2cd] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-481cb2cd] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-481cb2cd] {\n  width: 100%;\n}\ntextarea[data-v-481cb2cd],\ninput[type="password"][data-v-481cb2cd],\ninput[type="text"][data-v-481cb2cd],\ninput[type="email"][data-v-481cb2cd] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-481cb2cd],\ninput[type="password"].is-error[data-v-481cb2cd],\ninput[type="text"].is-error[data-v-481cb2cd],\ninput[type="email"].is-error[data-v-481cb2cd] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-481cb2cd]::-webkit-input-placeholder, input[type="password"][data-v-481cb2cd]::-webkit-input-placeholder, input[type="text"][data-v-481cb2cd]::-webkit-input-placeholder, input[type="email"][data-v-481cb2cd]::-webkit-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-481cb2cd]::-moz-placeholder, input[type="password"][data-v-481cb2cd]::-moz-placeholder, input[type="text"][data-v-481cb2cd]::-moz-placeholder, input[type="email"][data-v-481cb2cd]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-481cb2cd]:-ms-input-placeholder, input[type="password"][data-v-481cb2cd]:-ms-input-placeholder, input[type="text"][data-v-481cb2cd]:-ms-input-placeholder, input[type="email"][data-v-481cb2cd]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-481cb2cd]::-ms-input-placeholder, input[type="password"][data-v-481cb2cd]::-ms-input-placeholder, input[type="text"][data-v-481cb2cd]::-ms-input-placeholder, input[type="email"][data-v-481cb2cd]::-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-481cb2cd]::placeholder,\ninput[type="password"][data-v-481cb2cd]::placeholder,\ninput[type="text"][data-v-481cb2cd]::placeholder,\ninput[type="email"][data-v-481cb2cd]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-481cb2cd]:focus,\ninput[type="password"][data-v-481cb2cd]:focus,\ninput[type="text"][data-v-481cb2cd]:focus,\ninput[type="email"][data-v-481cb2cd]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-481cb2cd],\ninput[type="password"][disabled][data-v-481cb2cd],\ninput[type="text"][disabled][data-v-481cb2cd],\ninput[type="email"][disabled][data-v-481cb2cd] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-481cb2cd] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-481cb2cd], .additional-link a[data-v-481cb2cd] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-481cb2cd]:hover, .additional-link a[data-v-481cb2cd]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-481cb2cd] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-481cb2cd], .form textarea[data-v-481cb2cd] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-481cb2cd] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-481cb2cd] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-481cb2cd] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-481cb2cd] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-481cb2cd] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-481cb2cd] {\n    padding: 14px 32px;\n}\ntextarea[data-v-481cb2cd],\n  input[type="password"][data-v-481cb2cd],\n  input[type="text"][data-v-481cb2cd],\n  input[type="email"][data-v-481cb2cd] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-481cb2cd] {\n    color: #bec6cf;\n}\ntextarea[data-v-481cb2cd],\n  input[type="password"][data-v-481cb2cd],\n  input[type="text"][data-v-481cb2cd],\n  input[type="email"][data-v-481cb2cd] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-481cb2cd]::-webkit-input-placeholder, input[type="password"][data-v-481cb2cd]::-webkit-input-placeholder, input[type="text"][data-v-481cb2cd]::-webkit-input-placeholder, input[type="email"][data-v-481cb2cd]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-481cb2cd]::-moz-placeholder, input[type="password"][data-v-481cb2cd]::-moz-placeholder, input[type="text"][data-v-481cb2cd]::-moz-placeholder, input[type="email"][data-v-481cb2cd]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-481cb2cd]:-ms-input-placeholder, input[type="password"][data-v-481cb2cd]:-ms-input-placeholder, input[type="text"][data-v-481cb2cd]:-ms-input-placeholder, input[type="email"][data-v-481cb2cd]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-481cb2cd]::-ms-input-placeholder, input[type="password"][data-v-481cb2cd]::-ms-input-placeholder, input[type="text"][data-v-481cb2cd]::-ms-input-placeholder, input[type="email"][data-v-481cb2cd]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-481cb2cd]::placeholder,\n  input[type="password"][data-v-481cb2cd]::placeholder,\n  input[type="text"][data-v-481cb2cd]::placeholder,\n  input[type="email"][data-v-481cb2cd]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-481cb2cd],\n  input[type="password"][disabled][data-v-481cb2cd],\n  input[type="text"][disabled][data-v-481cb2cd],\n  input[type="email"][disabled][data-v-481cb2cd] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-481cb2cd] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-481cb2cd] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-481cb2cd] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-481cb2cd] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-481cb2cd] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-481cb2cd] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-481cb2cd] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-481cb2cd] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-481cb2cd] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-481cb2cd] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-481cb2cd] {\n    width: 100%;\n}\n.auth-form h1[data-v-481cb2cd] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-481cb2cd] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-481cb2cd] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-481cb2cd] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-481cb2cd] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-481cb2cd] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-481cb2cd], .auth-form h2[data-v-481cb2cd], .auth-form .additional-link[data-v-481cb2cd] {\n    color: #bec6cf;\n}\n}\n.legal-agreement[data-v-481cb2cd] {\n  font-size: 1em;\n  padding: 55px 0 0;\n  max-width: 400px;\n  font-weight: 700;\n  line-height: 1.6;\n  margin: 0 auto;\n}\n.legal-agreement a[data-v-481cb2cd] {\n  color: #00BC7E;\n}\n',""])},58:function(t,n,e){var a=e(245);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,r);a.locals&&(t.exports=a.locals)},60:function(t,n,e){var a=e(249);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,r);a.locals&&(t.exports=a.locals)},607:function(t,n,e){"use strict";e.r(n);var a=e(9),r=e.n(a),i=e(22),o=e(8),c=e(21),s=e(17),d=e(10),p=e(6),l=e(3),u=e(7),m=e.n(u);function b(t,n,e,a,r,i,o){try{var c=t[i](o),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(a,r)}function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var g={name:"SignUp",components:{AuthContentWrapper:i.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,AuthContent:c.a,AuthButton:s.a,required:d.a},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},Object(p.b)(["config"]),{privacyPolicy:function(){return this.config.legal.find((function(t){return"privacy-policy"===t.slug}))},termsOfService:function(){return this.config.legal.find((function(t){return"terms-of-service"===t.slug}))}}),data:function(){return{isLoading:!1,register:{name:"",email:"",password:"",password_confirmation:""}}},methods:{signUp:function(){var t,n=this;return(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$refs.sign_up.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:n.isLoading=!0,m.a.post("/api/user/register",n.register).then((function(){n.isLoading=!1,n.$store.commit("SET_AUTHORIZED",!0),n.$router.push({name:"Files"})})).catch((function(t){401==t.response.status&&"invalid_client"===t.response.data.error&&l.a.$emit("alert:open",{emoji:"🤔",title:n.$t("popup_passport_error.title"),message:n.$t("popup_passport_error.message")}),500==t.response.status&&l.a.$emit("alert:open",{emoji:"🤔",title:n.$t("popup_signup_error.title"),message:n.$t("popup_signup_error.message")}),422==t.response.status&&(t.response.data.errors.email&&n.$refs.sign_up.setErrors({"E-Mail":t.response.data.errors.email}),t.response.data.errors.password&&n.$refs.sign_up.setErrors({"Your New Password":t.response.data.errors.password})),n.isLoading=!1}));case 7:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function o(t){b(i,a,r,o,c,"next",t)}function c(t){b(i,a,r,o,c,"throw",t)}o(void 0)}))})()}},created:function(){this.$scrollTop()}},h=(e(396),e(0)),x=Object(h.a)(g,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"sign-up",visible:!0}},[t.config.app_logo?e("img",{staticClass:"logo",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():e("b",{staticClass:"auth-logo-text"},[t._v(t._s(t.config.app_name))]),t._v(" "),e("h1",[t._v(t._s(t.$t("page_registration.title")))]),t._v(" "),e("h2",[t._v(t._s(t.$t("page_registration.subtitle")))]),t._v(" "),e("ValidationObserver",{ref:"sign_up",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(n){return n.preventDefault(),t.signUp(n)}},scopedSlots:t._u([{key:"default",fn:function(n){n.invalid;return[e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("page_registration.label_email")))]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"E-Mail",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],class:{"is-error":a[0]},attrs:{placeholder:t.$t("page_registration.placeholder_email"),type:"email"},domProps:{value:t.register.email},on:{input:function(n){n.target.composing||t.$set(t.register,"email",n.target.value)}}}),t._v(" "),a[0]?e("span",{staticClass:"error-message"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("page_registration.label_name")))]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Full Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.name,expression:"register.name"}],class:{"is-error":a[0]},attrs:{placeholder:t.$t("page_registration.placeholder_name"),type:"text"},domProps:{value:t.register.name},on:{input:function(n){n.target.composing||t.$set(t.register,"name",n.target.value)}}}),t._v(" "),a[0]?e("span",{staticClass:"error-message"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("page_registration.label_pass")))]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Your New Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],class:{"is-error":a[0]},attrs:{placeholder:t.$t("page_registration.placeholder_pass"),type:"password"},domProps:{value:t.register.password},on:{input:function(n){n.target.composing||t.$set(t.register,"password",n.target.value)}}}),t._v(" "),a[0]?e("span",{staticClass:"error-message"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[t._v(t._s(t.$t("page_registration.label_confirm_pass")))]),t._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Confirm Your Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password_confirmation,expression:"register.password_confirmation"}],class:{"is-error":a[0]},attrs:{placeholder:t.$t("page_registration.placeholder_confirm_pass"),type:"password"},domProps:{value:t.register.password_confirmation},on:{input:function(n){n.target.composing||t.$set(t.register,"password_confirmation",n.target.value)}}}),t._v(" "),a[0]?e("span",{staticClass:"error-message"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),e("div",[t.config.isSaaS?e("i18n",{staticClass:"legal-agreement",attrs:{path:"page_registration.agreement",tag:"p"}},[e("router-link",{attrs:{to:{name:"DynamicPage",params:{slug:"terms-of-service"}},target:"_blank"}},[t._v(t._s(t.termsOfService.title))]),t._v(" "),e("router-link",{attrs:{to:{name:"DynamicPage",params:{slug:"privacy-policy"}},target:"_blank"}},[t._v(t._s(t.privacyPolicy.title))])],1):t._e(),t._v(" "),e("AuthButton",{attrs:{icon:"chevron-right",text:t.$t("page_registration.button_create_account"),loading:t.isLoading,disabled:t.isLoading}})],1)]}}])}),t._v(" "),e("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_registration.have_an_account"))+"\n            "),e("router-link",{attrs:{to:{name:"SignIn"}}},[t._v("\n                "+t._s(t.$t("page_forgotten_password.password_remember_button"))+"\n            ")])],1)],1)],1)}),[],!1,null,"481cb2cd",null);n.default=x.exports}}]);