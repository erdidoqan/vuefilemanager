(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{12:function(t,a,n){"use strict";var e={name:"InfoBox",props:["type"]},d=(n(236),n(0)),r=Object(d.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);a.a=r.exports},13:function(t,a,n){"use strict";var e={name:"FormLabel",components:{Edit2Icon:n(1).m}},d=(n(238),n(0)),r=Object(d.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=r.exports},153:function(t,a,n){var e=n(433);"string"==typeof e&&(e=[[t.i,e,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};n(5)(e,d);e.locals&&(t.exports=e.locals)},17:function(t,a,n){"use strict";var e={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},d=(n(244),n(0)),r=Object(d.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("button",{staticClass:"button outline"},[n("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?n("span",{staticClass:"icon"},[n("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?n("span",{staticClass:"icon"},[n("FontAwesomeIcon",{attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"59e2dfc0",null);a.a=r.exports},21:function(t,a,n){"use strict";var e={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},d=n(0),r=Object(d.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=r.exports},22:function(t,a,n){"use strict";var e={name:"AuthContentWrapper"},d=(n(248),n(0)),r=Object(d.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=r.exports},236:function(t,a,n){"use strict";var e=n(54);n.n(e).a},237:function(t,a,n){(t.exports=n(4)(!1)).push([t.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])},238:function(t,a,n){"use strict";var e=n(55);n.n(e).a},239:function(t,a,n){(t.exports=n(4)(!1)).push([t.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},244:function(t,a,n){"use strict";var e=n(58);n.n(e).a},245:function(t,a,n){(t.exports=n(4)(!1)).push([t.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #111314;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},248:function(t,a,n){"use strict";var e=n(60);n.n(e).a},249:function(t,a,n){(t.exports=n(4)(!1)).push([t.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},432:function(t,a,n){"use strict";var e=n(153);n.n(e).a},433:function(t,a,n){(t.exports=n(4)(!1)).push([t.i,'.form[data-v-3d9c02d4] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-3d9c02d4] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-3d9c02d4] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-3d9c02d4] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-3d9c02d4] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-3d9c02d4] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-3d9c02d4] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-3d9c02d4] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-3d9c02d4]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-3d9c02d4] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-3d9c02d4] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-3d9c02d4] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-3d9c02d4] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-3d9c02d4] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-3d9c02d4] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-3d9c02d4] {\n  margin-left: 20px;\n}\n.error-message[data-v-3d9c02d4] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-3d9c02d4] {\n  width: 100%;\n}\ntextarea[data-v-3d9c02d4],\ninput[type="password"][data-v-3d9c02d4],\ninput[type="text"][data-v-3d9c02d4],\ninput[type="number"][data-v-3d9c02d4],\ninput[type="email"][data-v-3d9c02d4] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-3d9c02d4],\ninput[type="password"].is-error[data-v-3d9c02d4],\ninput[type="text"].is-error[data-v-3d9c02d4],\ninput[type="number"].is-error[data-v-3d9c02d4],\ninput[type="email"].is-error[data-v-3d9c02d4] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-3d9c02d4]::-webkit-input-placeholder, input[type="password"][data-v-3d9c02d4]::-webkit-input-placeholder, input[type="text"][data-v-3d9c02d4]::-webkit-input-placeholder, input[type="number"][data-v-3d9c02d4]::-webkit-input-placeholder, input[type="email"][data-v-3d9c02d4]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3d9c02d4]::-moz-placeholder, input[type="password"][data-v-3d9c02d4]::-moz-placeholder, input[type="text"][data-v-3d9c02d4]::-moz-placeholder, input[type="number"][data-v-3d9c02d4]::-moz-placeholder, input[type="email"][data-v-3d9c02d4]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3d9c02d4]:-ms-input-placeholder, input[type="password"][data-v-3d9c02d4]:-ms-input-placeholder, input[type="text"][data-v-3d9c02d4]:-ms-input-placeholder, input[type="number"][data-v-3d9c02d4]:-ms-input-placeholder, input[type="email"][data-v-3d9c02d4]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3d9c02d4]::-ms-input-placeholder, input[type="password"][data-v-3d9c02d4]::-ms-input-placeholder, input[type="text"][data-v-3d9c02d4]::-ms-input-placeholder, input[type="number"][data-v-3d9c02d4]::-ms-input-placeholder, input[type="email"][data-v-3d9c02d4]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3d9c02d4]::placeholder,\ninput[type="password"][data-v-3d9c02d4]::placeholder,\ninput[type="text"][data-v-3d9c02d4]::placeholder,\ninput[type="number"][data-v-3d9c02d4]::placeholder,\ninput[type="email"][data-v-3d9c02d4]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3d9c02d4]:focus,\ninput[type="password"][data-v-3d9c02d4]:focus,\ninput[type="text"][data-v-3d9c02d4]:focus,\ninput[type="number"][data-v-3d9c02d4]:focus,\ninput[type="email"][data-v-3d9c02d4]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-3d9c02d4],\ninput[type="password"][disabled][data-v-3d9c02d4],\ninput[type="text"][disabled][data-v-3d9c02d4],\ninput[type="number"][disabled][data-v-3d9c02d4],\ninput[type="email"][disabled][data-v-3d9c02d4] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-3d9c02d4] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-3d9c02d4], .additional-link a[data-v-3d9c02d4] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-3d9c02d4]:hover, .additional-link a[data-v-3d9c02d4]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-3d9c02d4] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-3d9c02d4] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-3d9c02d4], .form textarea[data-v-3d9c02d4] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-3d9c02d4] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-3d9c02d4] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-3d9c02d4] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-3d9c02d4] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-3d9c02d4] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-3d9c02d4] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-3d9c02d4] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-3d9c02d4] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-3d9c02d4],\n  input[type="password"][data-v-3d9c02d4],\n  input[type="number"][data-v-3d9c02d4],\n  input[type="text"][data-v-3d9c02d4],\n  input[type="email"][data-v-3d9c02d4] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-3d9c02d4] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-3d9c02d4] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-3d9c02d4] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-3d9c02d4] {\n    color: #bec6cf;\n}\ntextarea[data-v-3d9c02d4],\n  input[type="password"][data-v-3d9c02d4],\n  input[type="text"][data-v-3d9c02d4],\n  input[type="number"][data-v-3d9c02d4],\n  input[type="email"][data-v-3d9c02d4] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-3d9c02d4]::-webkit-input-placeholder, input[type="password"][data-v-3d9c02d4]::-webkit-input-placeholder, input[type="text"][data-v-3d9c02d4]::-webkit-input-placeholder, input[type="number"][data-v-3d9c02d4]::-webkit-input-placeholder, input[type="email"][data-v-3d9c02d4]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3d9c02d4]::-moz-placeholder, input[type="password"][data-v-3d9c02d4]::-moz-placeholder, input[type="text"][data-v-3d9c02d4]::-moz-placeholder, input[type="number"][data-v-3d9c02d4]::-moz-placeholder, input[type="email"][data-v-3d9c02d4]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3d9c02d4]:-ms-input-placeholder, input[type="password"][data-v-3d9c02d4]:-ms-input-placeholder, input[type="text"][data-v-3d9c02d4]:-ms-input-placeholder, input[type="number"][data-v-3d9c02d4]:-ms-input-placeholder, input[type="email"][data-v-3d9c02d4]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3d9c02d4]::-ms-input-placeholder, input[type="password"][data-v-3d9c02d4]::-ms-input-placeholder, input[type="text"][data-v-3d9c02d4]::-ms-input-placeholder, input[type="number"][data-v-3d9c02d4]::-ms-input-placeholder, input[type="email"][data-v-3d9c02d4]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3d9c02d4]::placeholder,\n  input[type="password"][data-v-3d9c02d4]::placeholder,\n  input[type="text"][data-v-3d9c02d4]::placeholder,\n  input[type="number"][data-v-3d9c02d4]::placeholder,\n  input[type="email"][data-v-3d9c02d4]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-3d9c02d4],\n  input[type="password"][disabled][data-v-3d9c02d4],\n  input[type="text"][disabled][data-v-3d9c02d4],\n  input[type="number"][disabled][data-v-3d9c02d4],\n  input[type="email"][disabled][data-v-3d9c02d4] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-3d9c02d4] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-3d9c02d4] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-3d9c02d4] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-3d9c02d4] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-3d9c02d4] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-3d9c02d4] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-3d9c02d4] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-3d9c02d4] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-3d9c02d4] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-3d9c02d4] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-3d9c02d4] {\n    width: 100%;\n}\n.auth-form h1[data-v-3d9c02d4] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-3d9c02d4] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-3d9c02d4] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-3d9c02d4] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-3d9c02d4] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-3d9c02d4] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-3d9c02d4], .auth-form h2[data-v-3d9c02d4], .auth-form .additional-link[data-v-3d9c02d4] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-3d9c02d4] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-3d9c02d4] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-3d9c02d4] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-3d9c02d4] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-3d9c02d4] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-3d9c02d4] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-3d9c02d4] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-3d9c02d4],\n.duplicator .duplicator-item textarea[data-v-3d9c02d4] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-3d9c02d4] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-3d9c02d4] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-3d9c02d4] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-3d9c02d4] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-3d9c02d4 5s linear infinite;\n          animation: spinner-data-v-3d9c02d4 5s linear infinite;\n}\n.title-icon circle[data-v-3d9c02d4], .title-icon path[data-v-3d9c02d4] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-3d9c02d4 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-3d9c02d4 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-3d9c02d4] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-3d9c02d4],\n  .duplicator .duplicator-item textarea[data-v-3d9c02d4] {\n    background: #111314;\n}\n}\n',""])},54:function(t,a,n){var e=n(237);"string"==typeof e&&(e=[[t.i,e,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};n(5)(e,d);e.locals&&(t.exports=e.locals)},55:function(t,a,n){var e=n(239);"string"==typeof e&&(e=[[t.i,e,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};n(5)(e,d);e.locals&&(t.exports=e.locals)},58:function(t,a,n){var e=n(245);"string"==typeof e&&(e=[[t.i,e,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};n(5)(e,d);e.locals&&(t.exports=e.locals)},599:function(t,a,n){"use strict";n.r(a);var e=n(9),d=n.n(e),r=n(8),o=n(22),i=n(14),s=n(13),l=n(12),c=n(21),p=n(17),u=n(1),m=n(10),v=n(7),b=n.n(v);function f(t,a,n,e,d,r,o){try{var i=t[r](o),s=i.value}catch(t){return void n(t)}i.done?a(s):Promise.resolve(s).then(e,d)}var h={name:"Database",components:{AuthContentWrapper:o.a,ValidationProvider:r.ValidationProvider,ValidationObserver:r.ValidationObserver,SettingsIcon:u.N,SelectInput:i.a,AuthContent:c.a,AuthButton:p.a,FormLabel:s.a,required:m.a,InfoBox:l.a},computed:{submitButtonText:function(){return this.isLoading?"Testing and Installing Database":"Test Connection and Install Database"}},data:function(){return{isLoading:!1,isError:!1,errorMessage:"",connectionList:[{label:"MySQL",value:"mysql"}],databaseCredentials:{connection:"mysql",host:"",port:"",name:"",username:"",password:""}}},methods:{databaseCredentialsSubmit:function(){var t,a=this;return(t=d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$refs.verifyPurchaseCode.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:a.isLoading=!0,a.isError=!1,b.a.post("/api/setup/database",a.databaseCredentials).then((function(t){a.isLoading=!1,a.$router.push({name:"InstallationDisclaimer"})})).catch((function(t){(t.response.status=500)&&(a.isError=!0,a.errorMessage=t.response.data.message),a.isLoading=!1}));case 8:case"end":return t.stop()}}),t)})),function(){var a=this,n=arguments;return new Promise((function(e,d){var r=t.apply(a,n);function o(t){f(r,e,d,o,i,"next",t)}function i(t){f(r,e,d,o,i,"throw",t)}o(void 0)}))})()}},created:function(){this.$scrollTop()}},x=(n(432),n(0)),g=Object(x.a)(h,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("AuthContentWrapper",{ref:"auth"},[n("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[n("div",{staticClass:"content-headline"},[n("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),t._v(" "),n("h1",[t._v("Setup Wizard")]),t._v(" "),n("h2",[t._v("Set up your database connection to install application database.")])],1),t._v(" "),n("ValidationObserver",{ref:"verifyPurchaseCode",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),t.databaseCredentialsSubmit(a)}},scopedSlots:t._u([{key:"default",fn:function(a){a.invalid;return[n("FormLabel",[t._v("Database Credentials")]),t._v(" "),n("InfoBox",[n("p",[t._v("We strongly recommend use MySQL or MariaDB database. Create new database, set all privileges and get credentials. For those who use cPanel or Plesk, here is useful resources:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.inmotionhosting.com/support/edu/cpanel/create-database-2/",target:"_blank"}},[t._v("1. cPanel - MySQL Database Wizard")]),t._v(" "),n("a",{attrs:{href:"https://docs.plesk.com/en-US/obsidian/customer-guide/65157/",target:"_blank"}},[t._v("2. Plesk - Website databases")])])])]),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v("Connection:")]),t._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Connection",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[n("SelectInput",{attrs:{options:t.connectionList,default:"mysql",placeholder:"Select your database connection",isError:e[0]},model:{value:t.databaseCredentials.connection,callback:function(a){t.$set(t.databaseCredentials,"connection",a)},expression:"databaseCredentials.connection"}}),t._v(" "),e[0]?n("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v("Host:")]),t._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Host",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.host,expression:"databaseCredentials.host"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your database host",type:"text"},domProps:{value:t.databaseCredentials.host},on:{input:function(a){a.target.composing||t.$set(t.databaseCredentials,"host",a.target.value)}}}),t._v(" "),e[0]?n("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v("Port:")]),t._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Port",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.port,expression:"databaseCredentials.port"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your database port",type:"text"},domProps:{value:t.databaseCredentials.port},on:{input:function(a){a.target.composing||t.$set(t.databaseCredentials,"port",a.target.value)}}}),t._v(" "),e[0]?n("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v("Database Name:")]),t._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.name,expression:"databaseCredentials.name"}],class:{"is-error":e[0]},attrs:{placeholder:"Select your database name",type:"text"},domProps:{value:t.databaseCredentials.name},on:{input:function(a){a.target.composing||t.$set(t.databaseCredentials,"name",a.target.value)}}}),t._v(" "),e[0]?n("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v("Database Username:")]),t._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.username,expression:"databaseCredentials.username"}],class:{"is-error":e[0]},attrs:{placeholder:"Select your database name",type:"text"},domProps:{value:t.databaseCredentials.username},on:{input:function(a){a.target.composing||t.$set(t.databaseCredentials,"username",a.target.value)}}}),t._v(" "),e[0]?n("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"block-wrapper"},[n("label",[t._v("Database Password:")]),t._v(" "),n("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Database Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.databaseCredentials.password,expression:"databaseCredentials.password"}],class:{"is-error":e[0]},attrs:{placeholder:"Select your database password",type:"text"},domProps:{value:t.databaseCredentials.password},on:{input:function(a){a.target.composing||t.$set(t.databaseCredentials,"password",a.target.value)}}}),t._v(" "),e[0]?n("span",{staticClass:"error-message"},[t._v(t._s(e[0]))]):t._e()]}}],null,!0)})],1),t._v(" "),t.isError?n("InfoBox",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"error"}},[n("p",[t._v("We couldn't establish database connection. Please double check your database credentials.")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v("Detailed error: "+t._s(t.errorMessage))])]):t._e(),t._v(" "),n("div",{staticClass:"submit-wrapper"},[n("AuthButton",{attrs:{icon:"chevron-right",text:t.submitButtonText,loading:t.isLoading,disabled:t.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"3d9c02d4",null);a.default=g.exports},60:function(t,a,n){var e=n(249);"string"==typeof e&&(e=[[t.i,e,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};n(5)(e,d);e.locals&&(t.exports=e.locals)}}]);