(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"/qpS":function(t,e,a){"use strict";a.r(e);var r=a("o0o1"),o=a.n(r),n=a("bDRN"),i=a("A5+z"),s=a("j8qy"),c=a("ASoH"),l=a("TJPC"),d=a("aSdZ"),p=a("L2JU"),u=a("vDqi"),f=a.n(u);function m(t,e,a,r,o,n,i){try{var s=t[n](i),c=s.value}catch(t){return void a(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h={name:"ForgottenPassword",components:{AuthContentWrapper:n.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,AuthContent:s.a,AuthButton:c.a,required:l.a,Headline:d.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(p.b)(["config"])),data:function(){return{isLoading:!1,recoverEmail:""}},methods:{goToAuthPage:function(t){this.$refs.auth.$children.forEach((function(e){e.isVisible=!1,e.$props.name===t&&(e.isVisible=!0)}))},forgottenPassword:function(){var t,e=this;return(t=o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.forgotten_password.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:e.isLoading=!0,f.a.post("/api/password/email",{email:e.recoverEmail}).then((function(){e.isLoading=!1,e.goToAuthPage("password-reset-link-sended")})).catch((function(t){422==t.response.status&&e.$refs.forgotten_password.setErrors({"E-Mail":t.response.data.message}),e.isLoading=!1}));case 7:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,o){var n=t.apply(e,a);function i(t){m(n,r,o,i,s,"next",t)}function s(t){m(n,r,o,i,s,"throw",t)}i(void 0)}))})()}}},g=(a("GOZe"),a("KHd+")),x=Object(g.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AuthContentWrapper",{ref:"auth"},[a("AuthContent",{attrs:{name:"forgotten-password",visible:!0}},[a("Headline",{attrs:{title:t.$t("page_forgotten_password.title"),description:t.$t("page_forgotten_password.subtitle")}}),t._v(" "),a("ValidationObserver",{ref:"forgotten_password",staticClass:"form inline-form",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),t.forgottenPassword(e)}},scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"E-Mail",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.recoverEmail,expression:"recoverEmail"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:t.$t("page_login.placeholder_email"),type:"email"},domProps:{value:t.recoverEmail},on:{input:function(e){e.target.composing||(t.recoverEmail=e.target.value)}}}),t._v(" "),r[0]?a("span",{staticClass:"error-message"},[t._v(t._s(r[0]))]):t._e()]}}],null,!0)}),t._v(" "),a("AuthButton",{attrs:{icon:"chevron-right",text:t.$t("page_forgotten_password.button_get_link"),loading:t.isLoading,disabled:t.isLoading}})]}}])}),t._v(" "),a("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_forgotten_password.password_remember_text"))+"\n                "),a("router-link",{staticClass:"text-theme",attrs:{to:{name:"SignIn"}}},[t._v("\n                    "+t._s(t.$t("page_forgotten_password.password_remember_button"))+"\n                ")])],1)],1),t._v(" "),a("AuthContent",{attrs:{name:"password-reset-link-sended",visible:!1}},[t.config.app_logo?a("img",{staticClass:"logo mx-auto",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():a("b",{staticClass:"auth-logo-text"},[t._v(t._s(t.config.app_name))]),t._v(" "),a("h1",[t._v(t._s(t.$t("page_forgotten_password.pass_sennded_title")))]),t._v(" "),a("h2",[t._v(t._s(t.$t("page_forgotten_password.pass_sennded_subtitle")))]),t._v(" "),a("span",{staticClass:"additional-link"},[t._v(t._s(t.$t("page_forgotten_password.password_remember_text"))+"\n                "),a("router-link",{staticClass:"text-theme",attrs:{to:{name:"SignIn"}}},[t._v("\n                    "+t._s(t.$t("page_forgotten_password.password_remember_button"))+"\n                ")])],1)])],1)}),[],!1,null,"486392c6",null);e.default=x.exports},"/tXI":function(t,e,a){var r=a("sgIv");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(t.exports=r.locals)},"9aPE":function(t,e,a){var r=a("E+jl");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(t.exports=r.locals)},ASoH:function(t,e,a){"use strict";var r={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(a("PCwK"),a("KHd+")),n=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[a("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?a("span",{staticClass:"icon"},[a("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"e69ac918",null);e.a=n.exports},"E+jl":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".logo{width:120px;margin-bottom:20px}h1{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px}h1,h2{color:#1b2539}h2{font-size:1.4375em;font-weight:500;margin-bottom:50px}@media only screen and (max-width:690px){h1{font-size:1.875em}h2{font-size:1.3125em}}@media only screen and (max-width:490px){h1{font-size:1.375em}h2{font-size:1.125em}}",""])},GOZe:function(t,e,a){"use strict";a("/tXI")},I9DQ:function(t,e,a){var r=a("x0Ai");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,o);r.locals&&(t.exports=r.locals)},PCwK:function(t,e,a){"use strict";a("I9DQ")},SjQP:function(t,e,a){"use strict";a("9aPE")},TJPC:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));function r(t){return null==t}function o(t){return Array.isArray(t)&&0===t.length}var n={validate:function(t,e){var a=(void 0===e?{allowFalse:!0}:e).allowFalse,n={valid:!1,required:!0};return r(t)||o(t)?n:!1!==t||a?(n.valid=!!String(t).trim().length,n):n},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},aSdZ:function(t,e,a){"use strict";var r=a("L2JU");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var i={name:"Headline",props:["description","title"],computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(r.b)(["config"]))},s=(a("SjQP"),a("KHd+")),c=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default"),t._v(" "),t.$slots.default?t._e():a("div",[t.config.app_logo?a("img",{staticClass:"logo mx-auto",attrs:{src:t.$getImage(t.config.app_logo),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():a("b",{staticClass:"auth-logo-text"},[t._v(t._s(t.config.app_name))])]),t._v(" "),a("h1",[t._v(t._s(t.title))]),t._v(" "),a("h2",[t._v(t._s(t.description))])],2)}),[],!1,null,null,null);e.a=c.exports},bDRN:function(t,e,a){"use strict";var r={name:"AuthContentWrapper"},o=a("KHd+"),n=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"h-screen flex justify-center items-center"},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},j8qy:function(t,e,a){"use strict";var r={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=a("KHd+"),n=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.isVisible?e("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);e.a=n.exports},sgIv:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".form.inline-form[data-v-486392c6]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-486392c6]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-486392c6]{position:absolute;left:0}.form.block-form.create-new-password .block-wrapper label[data-v-486392c6]{width:280px}.form.block-form .block-wrapper[data-v-486392c6]{display:flex;align-items:center;margin-top:25px;justify-content:center}.form.block-form .block-wrapper[data-v-486392c6]:first-child{margin-top:0}.form.block-form .block-wrapper label[data-v-486392c6]{white-space:nowrap;font-size:1.125em;font-weight:700;padding-right:20px;width:200px;text-align:right!important;color:#1b2539;text-align:right}.form.block-form .button[data-v-486392c6]{margin-top:50px}.input-wrapper .error-message[data-v-486392c6]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-486392c6]{width:100%}input[type=email][data-v-486392c6],input[type=password][data-v-486392c6],input[type=text][data-v-486392c6],textarea[data-v-486392c6]{background:#f4f5f6;border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}input[type=email].is-error[data-v-486392c6],input[type=password].is-error[data-v-486392c6],input[type=text].is-error[data-v-486392c6],textarea.is-error[data-v-486392c6]{border-color:#fd397a}input[type=email][data-v-486392c6]::-moz-placeholder,input[type=password][data-v-486392c6]::-moz-placeholder,input[type=text][data-v-486392c6]::-moz-placeholder,textarea[data-v-486392c6]::-moz-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-486392c6]:-ms-input-placeholder,input[type=password][data-v-486392c6]:-ms-input-placeholder,input[type=text][data-v-486392c6]:-ms-input-placeholder,textarea[data-v-486392c6]:-ms-input-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-486392c6]::placeholder,input[type=password][data-v-486392c6]::placeholder,input[type=text][data-v-486392c6]::placeholder,textarea[data-v-486392c6]::placeholder{color:#a4adb6;font-size:1em}input[type=email][disabled][data-v-486392c6],input[type=password][disabled][data-v-486392c6],input[type=text][disabled][data-v-486392c6],textarea[disabled][data-v-486392c6]{color:#a4adb6;cursor:not-allowed}.additional-link[data-v-486392c6]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-486392c6],.additional-link b[data-v-486392c6]{cursor:pointer}.additional-link a[data-v-486392c6]:hover,.additional-link b[data-v-486392c6]:hover{text-decoration:underline}@media only screen and (max-width:960px){.form .button[data-v-486392c6]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-486392c6],.form textarea[data-v-486392c6]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-486392c6]{display:block}.form.block-form .block-wrapper label[data-v-486392c6]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-486392c6]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-486392c6]{display:block}.form.inline-form .input-wrapper .error-message[data-v-486392c6]{position:relative;bottom:0}.form .button[data-v-486392c6]{padding:14px 32px}input[type=email][data-v-486392c6],input[type=password][data-v-486392c6],input[type=text][data-v-486392c6],textarea[data-v-486392c6]{padding:14px 20px}}.dark .form.block-form .block-wrapper label[data-v-486392c6]{color:#bec6cf}.dark input[type=email][data-v-486392c6],.dark input[type=password][data-v-486392c6],.dark input[type=text][data-v-486392c6],.dark textarea[data-v-486392c6]{background:#1e2024;color:#bec6cf}.dark input[type=email][data-v-486392c6]::-moz-placeholder,.dark input[type=password][data-v-486392c6]::-moz-placeholder,.dark input[type=text][data-v-486392c6]::-moz-placeholder,.dark textarea[data-v-486392c6]::-moz-placeholder{color:#7d858c}.dark input[type=email][data-v-486392c6]:-ms-input-placeholder,.dark input[type=password][data-v-486392c6]:-ms-input-placeholder,.dark input[type=text][data-v-486392c6]:-ms-input-placeholder,.dark textarea[data-v-486392c6]:-ms-input-placeholder{color:#7d858c}.dark input[type=email][data-v-486392c6]::placeholder,.dark input[type=password][data-v-486392c6]::placeholder,.dark input[type=text][data-v-486392c6]::placeholder,.dark textarea[data-v-486392c6]::placeholder{color:#7d858c}.dark input[type=email][disabled][data-v-486392c6],.dark input[type=password][disabled][data-v-486392c6],.dark input[type=text][disabled][data-v-486392c6],.dark textarea[disabled][data-v-486392c6]{color:#7d858c}.auth-logo-text[data-v-486392c6]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-486392c6]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-486392c6]{min-width:310px}.auth-form .additional-link a[data-v-486392c6]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-486392c6]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .block-form[data-v-486392c6]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-486392c6]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-486392c6]{width:100%}}@media only screen and (max-width:490px){.auth-form input[data-v-486392c6]{min-width:0}.auth-form .additional-link[data-v-486392c6]{font-size:.9375em}}.dark .auth-form .additional-link[data-v-486392c6],.dark .auth-form h1[data-v-486392c6],.dark .auth-form h2[data-v-486392c6]{color:#bec6cf}",""])},x0Ai:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".button[data-v-e69ac918]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-e69ac918]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-e69ac918]{margin-left:12px;font-size:1em}.button.solid[data-v-e69ac918]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-e69ac918]{color:#fff}.button.outline[data-v-e69ac918]{border:2px solid #1b2539}.button.outline .text-label[data-v-e69ac918]{color:#1b2539}.button.outline .icon path[data-v-e69ac918]{fill:inherit}.button.outline[data-v-e69ac918]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-e69ac918]{color:inherit}.dark .button.outline[data-v-e69ac918]{background:#151515;border-color:#bec6cf}.dark .button.outline .text-label[data-v-e69ac918]{color:#bec6cf}.sync-alt[data-v-e69ac918]{-webkit-animation:spin-data-v-e69ac918 1s linear infinite;animation:spin-data-v-e69ac918 1s linear infinite}@-webkit-keyframes spin-data-v-e69ac918{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-e69ac918{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])}}]);