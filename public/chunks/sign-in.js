(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+3H6":function(t,n,a){var e=a("Pns1");"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,o);e.locals&&(t.exports=e.locals)},ASoH:function(t,n,a){"use strict";var e={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(a("s/ZW"),a("KHd+")),i=Object(o.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("button",{staticClass:"button outline"},[a("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"59e2dfc0",null);n.a=i.exports},GwTe:function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #131414;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},Jx8r:function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},NbAf:function(t,n,a){var e=a("GwTe");"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,o);e.locals&&(t.exports=e.locals)},Pns1:function(t,n,a){(t.exports=a("I1BE")(!1)).push([t.i,'.form.inline-form[data-v-ab5cfb80] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-ab5cfb80] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-ab5cfb80] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-ab5cfb80] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-ab5cfb80] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-ab5cfb80]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-ab5cfb80] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-ab5cfb80] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-ab5cfb80] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-ab5cfb80] {\n  width: 100%;\n}\ntextarea[data-v-ab5cfb80],\ninput[type="password"][data-v-ab5cfb80],\ninput[type="text"][data-v-ab5cfb80],\ninput[type="email"][data-v-ab5cfb80] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-ab5cfb80],\ninput[type="password"].is-error[data-v-ab5cfb80],\ninput[type="text"].is-error[data-v-ab5cfb80],\ninput[type="email"].is-error[data-v-ab5cfb80] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-ab5cfb80]::-webkit-input-placeholder, input[type="password"][data-v-ab5cfb80]::-webkit-input-placeholder, input[type="text"][data-v-ab5cfb80]::-webkit-input-placeholder, input[type="email"][data-v-ab5cfb80]::-webkit-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-ab5cfb80]::-moz-placeholder, input[type="password"][data-v-ab5cfb80]::-moz-placeholder, input[type="text"][data-v-ab5cfb80]::-moz-placeholder, input[type="email"][data-v-ab5cfb80]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-ab5cfb80]:-ms-input-placeholder, input[type="password"][data-v-ab5cfb80]:-ms-input-placeholder, input[type="text"][data-v-ab5cfb80]:-ms-input-placeholder, input[type="email"][data-v-ab5cfb80]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-ab5cfb80]::-ms-input-placeholder, input[type="password"][data-v-ab5cfb80]::-ms-input-placeholder, input[type="text"][data-v-ab5cfb80]::-ms-input-placeholder, input[type="email"][data-v-ab5cfb80]::-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-ab5cfb80]::placeholder,\ninput[type="password"][data-v-ab5cfb80]::placeholder,\ninput[type="text"][data-v-ab5cfb80]::placeholder,\ninput[type="email"][data-v-ab5cfb80]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-ab5cfb80]:focus,\ninput[type="password"][data-v-ab5cfb80]:focus,\ninput[type="text"][data-v-ab5cfb80]:focus,\ninput[type="email"][data-v-ab5cfb80]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-ab5cfb80],\ninput[type="password"][disabled][data-v-ab5cfb80],\ninput[type="text"][disabled][data-v-ab5cfb80],\ninput[type="email"][disabled][data-v-ab5cfb80] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-ab5cfb80] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-ab5cfb80], .additional-link a[data-v-ab5cfb80] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-ab5cfb80]:hover, .additional-link a[data-v-ab5cfb80]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-ab5cfb80] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-ab5cfb80], .form textarea[data-v-ab5cfb80] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-ab5cfb80] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-ab5cfb80] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-ab5cfb80] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-ab5cfb80] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-ab5cfb80] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-ab5cfb80] {\n    padding: 14px 32px;\n}\ntextarea[data-v-ab5cfb80],\n  input[type="password"][data-v-ab5cfb80],\n  input[type="text"][data-v-ab5cfb80],\n  input[type="email"][data-v-ab5cfb80] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-ab5cfb80] {\n    color: #bec6cf;\n}\ntextarea[data-v-ab5cfb80],\n  input[type="password"][data-v-ab5cfb80],\n  input[type="text"][data-v-ab5cfb80],\n  input[type="email"][data-v-ab5cfb80] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-ab5cfb80]::-webkit-input-placeholder, input[type="password"][data-v-ab5cfb80]::-webkit-input-placeholder, input[type="text"][data-v-ab5cfb80]::-webkit-input-placeholder, input[type="email"][data-v-ab5cfb80]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-ab5cfb80]::-moz-placeholder, input[type="password"][data-v-ab5cfb80]::-moz-placeholder, input[type="text"][data-v-ab5cfb80]::-moz-placeholder, input[type="email"][data-v-ab5cfb80]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-ab5cfb80]:-ms-input-placeholder, input[type="password"][data-v-ab5cfb80]:-ms-input-placeholder, input[type="text"][data-v-ab5cfb80]:-ms-input-placeholder, input[type="email"][data-v-ab5cfb80]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-ab5cfb80]::-ms-input-placeholder, input[type="password"][data-v-ab5cfb80]::-ms-input-placeholder, input[type="text"][data-v-ab5cfb80]::-ms-input-placeholder, input[type="email"][data-v-ab5cfb80]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-ab5cfb80]::placeholder,\n  input[type="password"][data-v-ab5cfb80]::placeholder,\n  input[type="text"][data-v-ab5cfb80]::placeholder,\n  input[type="email"][data-v-ab5cfb80]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-ab5cfb80],\n  input[type="password"][disabled][data-v-ab5cfb80],\n  input[type="text"][disabled][data-v-ab5cfb80],\n  input[type="email"][disabled][data-v-ab5cfb80] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-ab5cfb80] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-ab5cfb80] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-ab5cfb80] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-ab5cfb80] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-ab5cfb80] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-ab5cfb80] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-ab5cfb80] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-ab5cfb80] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-ab5cfb80] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-ab5cfb80] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-ab5cfb80] {\n    width: 100%;\n}\n.auth-form h1[data-v-ab5cfb80] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-ab5cfb80] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-ab5cfb80] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-ab5cfb80] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-ab5cfb80] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-ab5cfb80] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-ab5cfb80], .auth-form h2[data-v-ab5cfb80], .auth-form .additional-link[data-v-ab5cfb80] {\n    color: #bec6cf;\n}\n}\n',""])},bDRN:function(t,n,a){"use strict";var e={name:"AuthContentWrapper"},o=(a("iYAH"),a("KHd+")),i=Object(o.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);n.a=i.exports},iYAH:function(t,n,a){"use strict";var e=a("lh0Q");a.n(e).a},j8qy:function(t,n,a){"use strict";var e={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=a("KHd+"),i=Object(o.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return this.isVisible?n("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);n.a=i.exports},"l9/H":function(t,n,a){"use strict";a.r(n);var e=a("o0o1"),o=a.n(e),i=a("bDRN"),r=a("A5+z"),s=a("j8qy"),c=a("ASoH"),l=a("TJPC"),d=a("L2JU"),p=a("xCqy"),b=a("vDqi"),f=a.n(b);function u(t,n,a,e,o,i,r){try{var s=t[i](r),c=s.value}catch(t){return void a(t)}s.done?n(c):Promise.resolve(c).then(e,o)}function m(t){return function(){var n=this,a=arguments;return new Promise((function(e,o){var i=t.apply(n,a);function r(t){u(i,e,o,r,s,"next",t)}function s(t){u(i,e,o,r,s,"throw",t)}r(void 0)}))}}function v(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function h(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}var g={name:"SignIn",components:{AuthContentWrapper:i.a,ValidationProvider:r.ValidationProvider,ValidationObserver:r.ValidationObserver,AuthContent:s.a,AuthButton:c.a,required:l.a},computed:function(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?v(Object(a),!0).forEach((function(n){h(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}({},Object(d.b)(["config"])),data:function(){return{isLoading:!1,checkedAccount:void 0,loginPassword:"",loginEmail:""}},methods:{goToAuthPage:function(t){this.$refs.auth.$children.forEach((function(n){n.isVisible=!1,n.$props.name===t&&(n.isVisible=!0)}))},logIn:function(){var t=this;return m(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.log_in.validate();case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.isLoading=!0,f.a.post("/api/user/check",{email:t.loginEmail}).then((function(n){t.isLoading=!1,t.checkedAccount=n.data,t.goToAuthPage("sign-in")})).catch((function(n){404==n.response.status&&t.$refs.log_in.setErrors({"E-Mail":[n.response.data.message]}),500==n.response.status&&p.a.$emit("alert:open",{emoji:"🤔",title:t.$t("popup_signup_error.title"),message:t.$t("popup_signup_error.message")}),t.isLoading=!1}));case 7:case"end":return n.stop()}}),n)})))()},singIn:function(){var t=this;return m(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.sign_in.validate();case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.isLoading=!0,f.a.post("/api/user/login",{email:t.loginEmail,password:t.loginPassword}).then((function(){t.isLoading=!1,t.$store.commit("SET_AUTHORIZED",!0),t.$router.push({name:"Files"})})).catch((function(n){400==n.response.status&&t.$refs.sign_in.setErrors({"User Password":[t.$t("validation_errors.incorrect_password")]}),401==n.response.status&&"invalid_client"===n.response.data.error&&p.a.$emit("alert:open",{emoji:"🤔",title:t.$t("popup_passport_error.title"),message:t.$t("popup_passport_error.message")}),t.isLoading=!1}));case 7:case"end":return n.stop()}}),n)})))()}},created:function(){this.$scrollTop(),this.$store.commit("PROCESSING_POPUP",void 0)}},x=(a("sC6f"),a("KHd+")),w=Object(x.a)(g,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("AuthContentWrapper",{ref:"auth"},[a("AuthContent",{attrs:{name:"log-in",visible:!0}},[t.config.app_logo?a("img",{staticClass:"logo",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():a("b",{staticClass:"auth-logo-text"},[t._v(t._s(t.config.app_name))]),t._v(" "),a("h1",[t._v(t._s(t.$t("page_login.title")))]),t._v(" "),a("h2",[t._v(t._s(t.$t("page_login.subtitle")))]),t._v(" "),a("ValidationObserver",{ref:"log_in",staticClass:"form inline-form",attrs:{tag:"form"},on:{submit:function(n){return n.preventDefault(),t.logIn(n)}},scopedSlots:t._u([{key:"default",fn:function(n){n.invalid;return[a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"E-Mail",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var e=n.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginEmail,expression:"loginEmail"}],class:{"is-error":e[0]},attrs:{placeholder:t.$t("page_login.placeholder_email"),type:"email"},domProps:{value:t.loginEmail},on:{input:function(n){n.target.composing||(t.loginEmail=n.target.value)}}}),t._v(" "),e[0]?a("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)}),t._v(" "),a("AuthButton",{attrs:{icon:"chevron-right",text:t.$t("page_login.button_next"),loading:t.isLoading,disabled:t.isLoading}})]}}])}),t._v(" "),t.config.userRegistration?a("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_login.registration_text"))+"\n            "),a("router-link",{attrs:{to:{name:"SignUp"}}},[t._v("\n                "+t._s(t.$t("page_login.registration_button"))+"\n            ")])],1):t._e()],1),t._v(" "),a("AuthContent",{attrs:{name:"sign-in",visible:!1}},[t.checkedAccount?a("div",{staticClass:"user"},[a("img",{staticClass:"user-avatar",attrs:{src:t.checkedAccount.avatar,alt:t.checkedAccount.name}}),t._v(" "),a("h1",[t._v(t._s(t.$t("page_sign_in.title",{name:t.checkedAccount.name})))]),t._v(" "),a("h2",[t._v(t._s(t.$t("page_sign_in.subtitle")))])]):t._e(),t._v(" "),a("ValidationObserver",{ref:"sign_in",staticClass:"form inline-form",attrs:{tag:"form"},on:{submit:function(n){return n.preventDefault(),t.singIn(n)}},scopedSlots:t._u([{key:"default",fn:function(n){n.invalid;return[a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"User Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var e=n.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],class:{"is-error":e[0]},attrs:{placeholder:t.$t("page_sign_in.placeholder_password"),type:"password"},domProps:{value:t.loginPassword},on:{input:function(n){n.target.composing||(t.loginPassword=n.target.value)}}}),t._v(" "),e[0]?a("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)}),t._v(" "),a("AuthButton",{attrs:{icon:"chevron-right",text:t.$t("page_sign_in.button_log_in"),loading:t.isLoading,disabled:t.isLoading}})]}}])}),t._v(" "),a("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_sign_in.password_reset_text"))+"\n            "),a("router-link",{attrs:{to:{name:"ForgottenPassword"}}},[t._v("\n                "+t._s(t.$t("page_sign_in.password_reset_button"))+"\n            ")])],1)],1)],1)}),[],!1,null,"ab5cfb80",null);n.default=w.exports},lh0Q:function(t,n,a){var e=a("Jx8r");"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,o);e.locals&&(t.exports=e.locals)},"s/ZW":function(t,n,a){"use strict";var e=a("NbAf");a.n(e).a},sC6f:function(t,n,a){"use strict";var e=a("+3H6");a.n(e).a}}]);