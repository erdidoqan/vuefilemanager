(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ASoH:function(e,a,n){"use strict";var t={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(n("s/ZW"),n("KHd+")),o=Object(i.a)(t,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("button",{staticClass:"button outline"},[n("span",{staticClass:"text-label"},[e._v(e._s(e.text))]),e._v(" "),e.loading?n("span",{staticClass:"icon"},[n("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):e._e(),e._v(" "),!e.loading&&e.icon?n("span",{staticClass:"icon"},[n("FontAwesomeIcon",{attrs:{icon:e.icon}})],1):e._e()])}),[],!1,null,"59e2dfc0",null);a.a=o.exports},GwTe:function(e,a,n){(e.exports=n("I1BE")(!1)).push([e.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #131414;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},Idvm:function(e,a,n){var t=n("lig4");"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(t,i);t.locals&&(e.exports=t.locals)},Jx8r:function(e,a,n){(e.exports=n("I1BE")(!1)).push([e.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},NbAf:function(e,a,n){var t=n("GwTe");"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(t,i);t.locals&&(e.exports=t.locals)},Xk6H:function(e,a,n){"use strict";var t=n("Idvm");n.n(t).a},"aEI+":function(e,a,n){"use strict";n.r(a);var t=n("A5+z"),i=n("bDRN"),o=n("4TWA"),r=n("eZ9V"),l=n("KnjL"),d=n("j8qy"),p=n("ASoH"),s=n("zTYo"),c=n("CjXH"),u=n("TJPC"),m=n("vDqi"),v=n.n(m),f={name:"InstallationDisclaimer",components:{AuthContentWrapper:i.a,ValidationProvider:t.ValidationProvider,ValidationObserver:t.ValidationObserver,SettingsIcon:c.T,SelectInput:o.a,AuthContent:d.a,AuthButton:p.a,FormLabel:r.a,required:u.a,Spinner:s.a,InfoBox:l.a},data:function(){return{isLoading:!0,isError:!1,isExtended:void 0}},created:function(){var e=this;v.a.post("/api/setup/purchase-code",{purchaseCode:localStorage.getItem("purchase_code")}).then((function(a){e.$scrollTop(),e.isLoading=!1,"b6896a44017217c36f4a6fdc56699728"===a.data?(e.isExtended=!0,localStorage.setItem("license","Extended")):(e.isExtended=!1,localStorage.setItem("license","Regular"))})).catch((function(a){e.isLoading=!1,400==a.response.status&&e.$router.push({name:"PurchaseCode"})}))}},b=(n("lkNa"),n("KHd+")),h=Object(b.a)(f,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("AuthContentWrapper",{ref:"auth"},[n("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[n("div",{staticClass:"content-headline"},[n("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),e._v(" "),n("h1",[e._v("Setup Wizard")]),e._v(" "),n("h2",[e._v("Database was installed successfully. Let's set up application, Make sure you have these informations before continue:")])],1),e._v(" "),e.isLoading?n("div",{attrs:{id:"loader"}},[n("Spinner")],1):e._e(),e._v(" "),e.isLoading?e._e():n("div",{staticClass:"form block-form"},[n("InfoBox",[e.isExtended?n("ul",{staticClass:"information-list",staticStyle:{"margin-top":"0"}},[n("li",[e._v("\n                        1. Stripe API Credentials\n                    ")]),e._v(" "),n("li",[e._v("\n                        2. Billing details for Stripe Subscription Service\n                    ")]),e._v(" "),n("li",[e._v("\n                        3. You will create your subscription plans\n                    ")]),e._v(" "),n("li",[e._v("\n                        4. Email Account Credentials for sending emails to your users\n                    ")]),e._v(" "),n("li",[e._v("\n                        5. If you use external storage service, then you will need set your API credentials\n                    ")]),e._v(" "),n("li",[e._v("\n                        6. Some general settings for VueFileManager like Google Analytics, logo, favicon and application name\n                    ")]),e._v(" "),n("li",[e._v("\n                        7. You will create admin account\n                    ")])]):n("ul",{staticClass:"information-list",staticStyle:{"margin-top":"0"}},[n("li",[e._v("\n                        1. Email Account Credentials for sending emails to your users\n                    ")]),e._v(" "),n("li",[e._v("\n                        2. If you use external storage service, then you will need set your API credentials\n                    ")]),e._v(" "),n("li",[e._v("\n                        3. Some general settings for VueFileManager like Google Analytics, logo, favicon and application name\n                    ")]),e._v(" "),n("li",[e._v("\n                        4. You will create admin account\n                    ")])])]),e._v(" "),e.isExtended?n("router-link",{staticClass:"submit-wrapper",attrs:{to:{name:"SubscriptionService"},tag:"div"}},[n("AuthButton",{attrs:{icon:"chevron-right",text:"I Get It! Let's Set Up Application",loading:e.isLoading,disabled:e.isLoading}})],1):e._e(),e._v(" "),e.isExtended?e._e():n("router-link",{staticClass:"submit-wrapper",attrs:{to:{name:"EnvironmentSetup"},tag:"div"}},[n("AuthButton",{attrs:{icon:"chevron-right",text:"I Get It! Let's Set Up Application",loading:e.isLoading,disabled:e.isLoading}})],1)],1)])],1)}),[],!1,null,"e0a4915e",null);a.default=h.exports},bDRN:function(e,a,n){"use strict";var t={name:"AuthContentWrapper"},i=(n("iYAH"),n("KHd+")),o=Object(i.a)(t,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=o.exports},eZ9V:function(e,a,n){"use strict";var t={name:"FormLabel",components:{Edit2Icon:n("CjXH").q}},i=(n("Xk6H"),n("KHd+")),o=Object(i.a)(t,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=o.exports},iYAH:function(e,a,n){"use strict";var t=n("lh0Q");n.n(t).a},j8qy:function(e,a,n){"use strict";var t={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=n("KHd+"),o=Object(i.a)(t,(function(){var e=this.$createElement,a=this._self._c||e;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=o.exports},lVds:function(e,a,n){var t=n("sYZ/");"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(t,i);t.locals&&(e.exports=t.locals)},lh0Q:function(e,a,n){var t=n("Jx8r");"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(t,i);t.locals&&(e.exports=t.locals)},lig4:function(e,a,n){(e.exports=n("I1BE")(!1)).push([e.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},lkNa:function(e,a,n){"use strict";var t=n("lVds");n.n(t).a},"s/ZW":function(e,a,n){"use strict";var t=n("NbAf");n.n(t).a},"sYZ/":function(e,a,n){(e.exports=n("I1BE")(!1)).push([e.i,'.form[data-v-e0a4915e] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-e0a4915e] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-e0a4915e] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-e0a4915e] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-e0a4915e] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-e0a4915e] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-e0a4915e] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-e0a4915e] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-e0a4915e]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-e0a4915e] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-e0a4915e] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-e0a4915e] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-e0a4915e] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-e0a4915e] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-e0a4915e] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-e0a4915e] {\n  margin-left: 20px;\n}\n.error-message[data-v-e0a4915e] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-e0a4915e] {\n  width: 100%;\n}\ntextarea[data-v-e0a4915e],\ninput[type="password"][data-v-e0a4915e],\ninput[type="text"][data-v-e0a4915e],\ninput[type="number"][data-v-e0a4915e],\ninput[type="email"][data-v-e0a4915e] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-e0a4915e],\ninput[type="password"].is-error[data-v-e0a4915e],\ninput[type="text"].is-error[data-v-e0a4915e],\ninput[type="number"].is-error[data-v-e0a4915e],\ninput[type="email"].is-error[data-v-e0a4915e] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-e0a4915e]::-webkit-input-placeholder, input[type="password"][data-v-e0a4915e]::-webkit-input-placeholder, input[type="text"][data-v-e0a4915e]::-webkit-input-placeholder, input[type="number"][data-v-e0a4915e]::-webkit-input-placeholder, input[type="email"][data-v-e0a4915e]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e0a4915e]::-moz-placeholder, input[type="password"][data-v-e0a4915e]::-moz-placeholder, input[type="text"][data-v-e0a4915e]::-moz-placeholder, input[type="number"][data-v-e0a4915e]::-moz-placeholder, input[type="email"][data-v-e0a4915e]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e0a4915e]:-ms-input-placeholder, input[type="password"][data-v-e0a4915e]:-ms-input-placeholder, input[type="text"][data-v-e0a4915e]:-ms-input-placeholder, input[type="number"][data-v-e0a4915e]:-ms-input-placeholder, input[type="email"][data-v-e0a4915e]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e0a4915e]::-ms-input-placeholder, input[type="password"][data-v-e0a4915e]::-ms-input-placeholder, input[type="text"][data-v-e0a4915e]::-ms-input-placeholder, input[type="number"][data-v-e0a4915e]::-ms-input-placeholder, input[type="email"][data-v-e0a4915e]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e0a4915e]::placeholder,\ninput[type="password"][data-v-e0a4915e]::placeholder,\ninput[type="text"][data-v-e0a4915e]::placeholder,\ninput[type="number"][data-v-e0a4915e]::placeholder,\ninput[type="email"][data-v-e0a4915e]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-e0a4915e]:focus,\ninput[type="password"][data-v-e0a4915e]:focus,\ninput[type="text"][data-v-e0a4915e]:focus,\ninput[type="number"][data-v-e0a4915e]:focus,\ninput[type="email"][data-v-e0a4915e]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-e0a4915e],\ninput[type="password"][disabled][data-v-e0a4915e],\ninput[type="text"][disabled][data-v-e0a4915e],\ninput[type="number"][disabled][data-v-e0a4915e],\ninput[type="email"][disabled][data-v-e0a4915e] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-e0a4915e] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-e0a4915e], .additional-link a[data-v-e0a4915e] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-e0a4915e]:hover, .additional-link a[data-v-e0a4915e]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-e0a4915e] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-e0a4915e] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-e0a4915e], .form textarea[data-v-e0a4915e] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-e0a4915e] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-e0a4915e] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-e0a4915e] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-e0a4915e] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-e0a4915e] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-e0a4915e] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-e0a4915e] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-e0a4915e] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-e0a4915e],\n  input[type="password"][data-v-e0a4915e],\n  input[type="number"][data-v-e0a4915e],\n  input[type="text"][data-v-e0a4915e],\n  input[type="email"][data-v-e0a4915e] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-e0a4915e] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-e0a4915e] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-e0a4915e] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-e0a4915e] {\n    color: #bec6cf;\n}\ntextarea[data-v-e0a4915e],\n  input[type="password"][data-v-e0a4915e],\n  input[type="text"][data-v-e0a4915e],\n  input[type="number"][data-v-e0a4915e],\n  input[type="email"][data-v-e0a4915e] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-e0a4915e]::-webkit-input-placeholder, input[type="password"][data-v-e0a4915e]::-webkit-input-placeholder, input[type="text"][data-v-e0a4915e]::-webkit-input-placeholder, input[type="number"][data-v-e0a4915e]::-webkit-input-placeholder, input[type="email"][data-v-e0a4915e]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e0a4915e]::-moz-placeholder, input[type="password"][data-v-e0a4915e]::-moz-placeholder, input[type="text"][data-v-e0a4915e]::-moz-placeholder, input[type="number"][data-v-e0a4915e]::-moz-placeholder, input[type="email"][data-v-e0a4915e]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e0a4915e]:-ms-input-placeholder, input[type="password"][data-v-e0a4915e]:-ms-input-placeholder, input[type="text"][data-v-e0a4915e]:-ms-input-placeholder, input[type="number"][data-v-e0a4915e]:-ms-input-placeholder, input[type="email"][data-v-e0a4915e]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e0a4915e]::-ms-input-placeholder, input[type="password"][data-v-e0a4915e]::-ms-input-placeholder, input[type="text"][data-v-e0a4915e]::-ms-input-placeholder, input[type="number"][data-v-e0a4915e]::-ms-input-placeholder, input[type="email"][data-v-e0a4915e]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-e0a4915e]::placeholder,\n  input[type="password"][data-v-e0a4915e]::placeholder,\n  input[type="text"][data-v-e0a4915e]::placeholder,\n  input[type="number"][data-v-e0a4915e]::placeholder,\n  input[type="email"][data-v-e0a4915e]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-e0a4915e],\n  input[type="password"][disabled][data-v-e0a4915e],\n  input[type="text"][disabled][data-v-e0a4915e],\n  input[type="number"][disabled][data-v-e0a4915e],\n  input[type="email"][disabled][data-v-e0a4915e] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-e0a4915e] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-e0a4915e] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-e0a4915e] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-e0a4915e] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-e0a4915e] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-e0a4915e] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-e0a4915e] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-e0a4915e] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-e0a4915e] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-e0a4915e] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-e0a4915e] {\n    width: 100%;\n}\n.auth-form h1[data-v-e0a4915e] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-e0a4915e] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-e0a4915e] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-e0a4915e] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-e0a4915e] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-e0a4915e] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-e0a4915e], .auth-form h2[data-v-e0a4915e], .auth-form .additional-link[data-v-e0a4915e] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-e0a4915e] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-e0a4915e] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-e0a4915e] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-e0a4915e] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-e0a4915e] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-e0a4915e] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-e0a4915e] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-e0a4915e],\n.duplicator .duplicator-item textarea[data-v-e0a4915e] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-e0a4915e] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-e0a4915e] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-e0a4915e] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-e0a4915e] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-e0a4915e 5s linear infinite;\n          animation: spinner-data-v-e0a4915e 5s linear infinite;\n}\n.title-icon circle[data-v-e0a4915e], .title-icon path[data-v-e0a4915e] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-e0a4915e {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-e0a4915e {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-e0a4915e] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-e0a4915e],\n  .duplicator .duplicator-item textarea[data-v-e0a4915e] {\n    background: #131414;\n}\n}\n#loader[data-v-e0a4915e] {\n  position: relative;\n  margin-top: 80px;\n}\n.information-list li[data-v-e0a4915e] {\n  padding: 8px 0;\n  font-size: 1.0625em;\n  font-weight: 600;\n}\n.information-list li[data-v-e0a4915e]:first-child {\n  padding-top: 0;\n}\n.information-list li[data-v-e0a4915e]:last-child {\n  padding-bottom: 0;\n}\n',""])}}]);