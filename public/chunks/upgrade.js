(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{ASoH:function(a,t,e){"use strict";var n={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(e("s/ZW"),e("KHd+")),o=Object(i.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"button outline"},[e("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"59e2dfc0",null);t.a=o.exports},"D+dh":function(a,t,e){"use strict";var n=e("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:n.B,XIcon:n.fb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(a){var t=this,e=a.target.files[0].name,n=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(n)){var i=a.target.files[0],o=new FileReader;o.onload=function(){return t.imagePreview=o.result},o.readAsDataURL(i),this.$emit("input",a.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},o=(e("w9z4"),e("KHd+")),r=Object(o.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dropzone",class:{"is-error":a.error}},[a.imagePreview?e("div",{staticClass:"reset-image",on:{click:a.resetImage}},[e("x-icon",{staticClass:"close-icon",attrs:{size:"14"}})],1):a._e(),a._v(" "),e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return a.showImagePreview(t)}}}),a._v(" "),a.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:a.imagePreview}}):a._e(),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isData,expression:"! isData"}],staticClass:"dropzone-message"},[e("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),a._v(" "),e("span",{staticClass:"dropzone-title"},[a._v("\n            "+a._s(a.$t("input_image.title"))+"\n        ")]),a._v(" "),e("span",{staticClass:"dropzone-description"},[a._v("\n            "+a._s(a.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"eb0cae00",null);t.a=r.exports},DqBE:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,'.form[data-v-6c36d9ad] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-6c36d9ad] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-6c36d9ad] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-6c36d9ad] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-6c36d9ad] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-6c36d9ad] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-6c36d9ad] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-6c36d9ad] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-6c36d9ad]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-6c36d9ad] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-6c36d9ad] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-6c36d9ad] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-6c36d9ad] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-6c36d9ad] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-6c36d9ad] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-6c36d9ad] {\n  margin-left: 20px;\n}\n.error-message[data-v-6c36d9ad] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-6c36d9ad] {\n  width: 100%;\n}\ntextarea[data-v-6c36d9ad],\ninput[type="password"][data-v-6c36d9ad],\ninput[type="text"][data-v-6c36d9ad],\ninput[type="number"][data-v-6c36d9ad],\ninput[type="email"][data-v-6c36d9ad] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-6c36d9ad],\ninput[type="password"].is-error[data-v-6c36d9ad],\ninput[type="text"].is-error[data-v-6c36d9ad],\ninput[type="number"].is-error[data-v-6c36d9ad],\ninput[type="email"].is-error[data-v-6c36d9ad] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-6c36d9ad]::-webkit-input-placeholder, input[type="password"][data-v-6c36d9ad]::-webkit-input-placeholder, input[type="text"][data-v-6c36d9ad]::-webkit-input-placeholder, input[type="number"][data-v-6c36d9ad]::-webkit-input-placeholder, input[type="email"][data-v-6c36d9ad]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-6c36d9ad]::-moz-placeholder, input[type="password"][data-v-6c36d9ad]::-moz-placeholder, input[type="text"][data-v-6c36d9ad]::-moz-placeholder, input[type="number"][data-v-6c36d9ad]::-moz-placeholder, input[type="email"][data-v-6c36d9ad]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-6c36d9ad]:-ms-input-placeholder, input[type="password"][data-v-6c36d9ad]:-ms-input-placeholder, input[type="text"][data-v-6c36d9ad]:-ms-input-placeholder, input[type="number"][data-v-6c36d9ad]:-ms-input-placeholder, input[type="email"][data-v-6c36d9ad]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-6c36d9ad]::-ms-input-placeholder, input[type="password"][data-v-6c36d9ad]::-ms-input-placeholder, input[type="text"][data-v-6c36d9ad]::-ms-input-placeholder, input[type="number"][data-v-6c36d9ad]::-ms-input-placeholder, input[type="email"][data-v-6c36d9ad]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-6c36d9ad]::placeholder,\ninput[type="password"][data-v-6c36d9ad]::placeholder,\ninput[type="text"][data-v-6c36d9ad]::placeholder,\ninput[type="number"][data-v-6c36d9ad]::placeholder,\ninput[type="email"][data-v-6c36d9ad]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-6c36d9ad]:focus,\ninput[type="password"][data-v-6c36d9ad]:focus,\ninput[type="text"][data-v-6c36d9ad]:focus,\ninput[type="number"][data-v-6c36d9ad]:focus,\ninput[type="email"][data-v-6c36d9ad]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-6c36d9ad],\ninput[type="password"][disabled][data-v-6c36d9ad],\ninput[type="text"][disabled][data-v-6c36d9ad],\ninput[type="number"][disabled][data-v-6c36d9ad],\ninput[type="email"][disabled][data-v-6c36d9ad] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-6c36d9ad] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-6c36d9ad], .additional-link a[data-v-6c36d9ad] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-6c36d9ad]:hover, .additional-link a[data-v-6c36d9ad]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-6c36d9ad] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-6c36d9ad] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-6c36d9ad], .form textarea[data-v-6c36d9ad] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-6c36d9ad] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-6c36d9ad] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-6c36d9ad] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-6c36d9ad] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-6c36d9ad] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-6c36d9ad] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-6c36d9ad] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-6c36d9ad] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-6c36d9ad],\n  input[type="password"][data-v-6c36d9ad],\n  input[type="number"][data-v-6c36d9ad],\n  input[type="text"][data-v-6c36d9ad],\n  input[type="email"][data-v-6c36d9ad] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-6c36d9ad] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-6c36d9ad] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-6c36d9ad] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-6c36d9ad] {\n    color: #bec6cf;\n}\ntextarea[data-v-6c36d9ad],\n  input[type="password"][data-v-6c36d9ad],\n  input[type="text"][data-v-6c36d9ad],\n  input[type="number"][data-v-6c36d9ad],\n  input[type="email"][data-v-6c36d9ad] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-6c36d9ad]::-webkit-input-placeholder, input[type="password"][data-v-6c36d9ad]::-webkit-input-placeholder, input[type="text"][data-v-6c36d9ad]::-webkit-input-placeholder, input[type="number"][data-v-6c36d9ad]::-webkit-input-placeholder, input[type="email"][data-v-6c36d9ad]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-6c36d9ad]::-moz-placeholder, input[type="password"][data-v-6c36d9ad]::-moz-placeholder, input[type="text"][data-v-6c36d9ad]::-moz-placeholder, input[type="number"][data-v-6c36d9ad]::-moz-placeholder, input[type="email"][data-v-6c36d9ad]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-6c36d9ad]:-ms-input-placeholder, input[type="password"][data-v-6c36d9ad]:-ms-input-placeholder, input[type="text"][data-v-6c36d9ad]:-ms-input-placeholder, input[type="number"][data-v-6c36d9ad]:-ms-input-placeholder, input[type="email"][data-v-6c36d9ad]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-6c36d9ad]::-ms-input-placeholder, input[type="password"][data-v-6c36d9ad]::-ms-input-placeholder, input[type="text"][data-v-6c36d9ad]::-ms-input-placeholder, input[type="number"][data-v-6c36d9ad]::-ms-input-placeholder, input[type="email"][data-v-6c36d9ad]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-6c36d9ad]::placeholder,\n  input[type="password"][data-v-6c36d9ad]::placeholder,\n  input[type="text"][data-v-6c36d9ad]::placeholder,\n  input[type="number"][data-v-6c36d9ad]::placeholder,\n  input[type="email"][data-v-6c36d9ad]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-6c36d9ad],\n  input[type="password"][disabled][data-v-6c36d9ad],\n  input[type="text"][disabled][data-v-6c36d9ad],\n  input[type="number"][disabled][data-v-6c36d9ad],\n  input[type="email"][disabled][data-v-6c36d9ad] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-6c36d9ad] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-6c36d9ad] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-6c36d9ad] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-6c36d9ad] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-6c36d9ad] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-6c36d9ad] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-6c36d9ad] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-6c36d9ad] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-6c36d9ad] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-6c36d9ad] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-6c36d9ad] {\n    width: 100%;\n}\n.auth-form h1[data-v-6c36d9ad] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-6c36d9ad] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-6c36d9ad] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-6c36d9ad] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-6c36d9ad] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-6c36d9ad] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-6c36d9ad], .auth-form h2[data-v-6c36d9ad], .auth-form .additional-link[data-v-6c36d9ad] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-6c36d9ad] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-6c36d9ad] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-6c36d9ad] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-6c36d9ad] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-6c36d9ad] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-6c36d9ad] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-6c36d9ad] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-6c36d9ad],\n.duplicator .duplicator-item textarea[data-v-6c36d9ad] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-6c36d9ad] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-6c36d9ad] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-6c36d9ad] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-6c36d9ad] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-6c36d9ad 5s linear infinite;\n          animation: spinner-data-v-6c36d9ad 5s linear infinite;\n}\n.title-icon circle[data-v-6c36d9ad], .title-icon path[data-v-6c36d9ad] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-6c36d9ad {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-6c36d9ad {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-6c36d9ad] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-6c36d9ad],\n  .duplicator .duplicator-item textarea[data-v-6c36d9ad] {\n    background: #131414;\n}\n}\n',""])},GwTe:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #131414;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},IS7u:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".dropzone[data-v-eb0cae00] {\n  border: 1px dashed #a1abc2;\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  min-height: 175px;\n}\n.dropzone.is-error[data-v-eb0cae00] {\n  border: 2px dashed rgba(253, 57, 122, 0.3);\n}\n.dropzone.is-error .dropzone-title[data-v-eb0cae00] {\n  color: #fd397a;\n}\n.dropzone.is-error .icon-upload rect[data-v-eb0cae00], .dropzone.is-error .icon-upload circle[data-v-eb0cae00], .dropzone.is-error .icon-upload polyline[data-v-eb0cae00] {\n  stroke: #fd397a;\n}\n.dropzone input[type='file'][data-v-eb0cae00] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-eb0cae00] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  left: 0;\n  padding: 25px;\n  display: block;\n}\n.dropzone .image-preview.fit-image[data-v-eb0cae00] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.dropzone .dropzone-message[data-v-eb0cae00] {\n  padding: 50px 0;\n  width: 100%;\n}\n.dropzone .dropzone-message .icon-upload rect[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload circle[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00] {\n  stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-title[data-v-eb0cae00] {\n  font-size: 1em;\n  font-weight: 700;\n  display: block;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n.dropzone .reset-image[data-v-eb0cae00] {\n  z-index: 2;\n  background: white;\n  border-radius: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  transform: translateY(-50%) translateX(50%);\n  padding: 0px 4px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\n.dropzone .reset-image .close-icon[data-v-eb0cae00] {\n  vertical-align: middle;\n}\n.dropzone .reset-image .close-icon line path[data-v-eb0cae00] {\n  fill: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.dropzone[data-v-eb0cae00] {\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.dropzone .dropzone-message .icon-upload path[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload line[data-v-eb0cae00] {\n    stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00] {\n    color: #7d858c;\n}\n}\n",""])},Idvm:function(a,t,e){var n=e("lig4");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},Jx8r:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},NbAf:function(a,t,e){var n=e("GwTe");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},Wt3U:function(a,t,e){var n=e("DqBE");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},Xk6H:function(a,t,e){"use strict";var n=e("Idvm");e.n(n).a},bDRN:function(a,t,e){"use strict";var n={name:"AuthContentWrapper"},i=(e("iYAH"),e("KHd+")),o=Object(i.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);t.a=o.exports},"bN/l":function(a,t,e){var n=e("IS7u");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},eZ9V:function(a,t,e){"use strict";var n={name:"FormLabel",components:{Edit2Icon:e("CjXH").q}},i=(e("Xk6H"),e("KHd+")),o=Object(i.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=o.exports},fuXW:function(a,t,e){"use strict";var n=e("Wt3U");e.n(n).a},iYAH:function(a,t,e){"use strict";var n=e("lh0Q");e.n(n).a},j8qy:function(a,t,e){"use strict";var n={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=e("KHd+"),o=Object(i.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=o.exports},lh0Q:function(a,t,e){var n=e("Jx8r");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(a.exports=n.locals)},lig4:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},m48H:function(a,t,e){"use strict";e.r(t);var n=e("o0o1"),i=e.n(n),o=e("A5+z"),r=e("bDRN"),d=e("4TWA"),p=e("xxrA"),s=e("D+dh"),l=e("eZ9V"),c=e("KnjL"),u=e("j8qy"),v=e("ASoH"),m=e("CjXH"),f=e("TJPC"),b=e("L2JU"),g=e("vDqi"),h=e.n(g);function x(a,t,e,n,i,o,r){try{var d=a[o](r),p=d.value}catch(a){return void e(a)}d.done?t(p):Promise.resolve(p).then(n,i)}function w(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function y(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var _={name:"EnvironmentSetup",components:{AuthContentWrapper:r.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,SettingsIcon:m.T,SelectInput:d.a,SwitchInput:p.a,AuthContent:u.a,ImageInput:s.a,AuthButton:v.a,FormLabel:l.a,required:f.a,InfoBox:c.a},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?w(Object(e),!0).forEach((function(t){y(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(b.b)(["config"])),data:function(){return{isLoading:!1,app:{license:void 0,purchase_code:"",title:"",description:"",logo:void 0,logo_horizontal:void 0,favicon:void 0,contactMail:"",googleAnalytics:"",defaultStorage:"5",userRegistration:1,storageLimitation:1}}},methods:{storeAppSetup:function(){var a=this,t=new FormData;t.append("purchase_code",this.app.purchase_code),t.append("license",this.app.license),t.append("title",this.app.title),t.append("description",this.app.description),t.append("contactMail",this.app.contactMail),t.append("userRegistration",Boolean(this.app.userRegistration)?1:0),t.append("storageLimitation",Boolean(this.app.storageLimitation)?1:0),this.app.googleAnalytics&&t.append("googleAnalytics",this.app.googleAnalytics),this.app.defaultStorage&&t.append("defaultStorage",this.app.defaultStorage),this.app.logo&&t.append("logo",this.app.logo),this.app.logo_horizontal&&t.append("logo_horizontal",this.app.logo_horizontal),this.app.favicon&&t.append("favicon",this.app.favicon),h.a.post("/api/upgrade/app",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){a.isLoading=!1,a.$router.push({name:"SignIn"})})).catch((function(t){a.isLoading=!1}))},appSetupSubmit:function(){var a,t=this;return(a=i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.appSetup.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:t.isLoading=!0,h.a.post("/api/setup/purchase-code",{purchaseCode:t.app.purchase_code}).then((function(a){"b6896a44017217c36f4a6fdc56699728"===a.data?(t.app.license="Extended",t.$store.commit("SET_SAAS",!0)):t.app.license="Regular",t.storeAppSetup()})).catch((function(a){a.response.status})).finally((function(){t.isLoading=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(n,i){var o=a.apply(t,e);function r(a){x(o,n,i,r,d,"next",a)}function d(a){x(o,n,i,r,d,"throw",a)}r(void 0)}))})()}},created:function(){"1.7"===this.config.latest_upgrade&&this.$router.push({name:"SignIn"})}},k=(e("fuXW"),e("KHd+")),C=Object(k.a)(_,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),e("h1",[a._v("Upgrade VueFileManager")]),a._v(" "),e("h2",[a._v("Please fill form bellow to upgrade VueFileManager.")])],1),a._v(" "),e("ValidationObserver",{ref:"appSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.appSetupSubmit(t)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("FormLabel",[a._v("Set your License")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Purchase Code:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Purchase code",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.purchase_code,expression:"app.purchase_code"}],class:{"is-error":n[0]},attrs:{placeholder:"Paste your purchase code",type:"text"},domProps:{value:a.app.purchase_code},on:{input:function(t){t.target.composing||a.$set(a.app,"purchase_code",t.target.value)}}}),a._v(" "),e("a",{staticClass:"input-help",attrs:{href:"https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-",target:"_blank"}},[a._v("\n                        Where I can find purchase code?\n                    ")]),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("FormLabel",{staticClass:"mt-70"},[a._v("General Settings")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Title:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Title",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.title,expression:"app.title"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your app title",type:"text"},domProps:{value:a.app.title},on:{input:function(t){t.target.composing||a.$set(a.app,"title",t.target.value)}}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Description:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Description",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.description,expression:"app.description"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your app description",type:"text"},domProps:{value:a.app.description},on:{input:function(t){t.target.composing||a.$set(a.app,"description",t.target.value)}}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Logo (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Logo"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("ImageInput",{attrs:{error:n[0]},model:{value:a.app.logo,callback:function(t){a.$set(a.app,"logo",t)},expression:"app.logo"}})]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Logo Horizontal (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Logo"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("ImageInput",{attrs:{error:n[0]},model:{value:a.app.logo_horizontal,callback:function(t){a.$set(a.app,"logo_horizontal",t)},expression:"app.logo_horizontal"}})]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Favicon (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Favicon"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("ImageInput",{attrs:{error:n[0]},model:{value:a.app.favicon,callback:function(t){a.$set(a.app,"favicon",t)},expression:"app.favicon"}})]}}],null,!0)})],1),a._v(" "),e("FormLabel",{staticClass:"mt-70"},[a._v("Others Information")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Contact Email:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Contact Email",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.contactMail,expression:"app.contactMail"}],class:{"is-error":n[0]},attrs:{placeholder:"Type your contact email",type:"email"},domProps:{value:a.app.contactMail},on:{input:function(t){t.target.composing||a.$set(a.app,"contactMail",t.target.value)}}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Google Analytics Code (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Google Analytics Code"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.googleAnalytics,expression:"app.googleAnalytics"}],class:{"is-error":n[0]},attrs:{placeholder:"Paste your Google Analytics Code",type:"text"},domProps:{value:a.app.googleAnalytics},on:{input:function(t){t.target.composing||a.$set(a.app,"googleAnalytics",t.target.value)}}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[a._v("Storage Limitation:")]),a._v(" "),e("small",{staticClass:"input-help"},[a._v("If this value is off, all users will have infinity storage capacity and you won't be "),e("br"),a._v("able to charge your users for storage plan.")])]),a._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:a.app.storageLimitation},model:{value:a.app.storageLimitation,callback:function(t){a.$set(a.app,"storageLimitation",t)},expression:"app.storageLimitation"}})],1)])]),a._v(" "),a.app.storageLimitation?e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Default Storage Space for Accounts:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Default Storage Space",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var n=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.defaultStorage,expression:"app.defaultStorage"}],class:{"is-error":n[0]},attrs:{min:"1",max:"999999999",placeholder:"Set default storage space in GB",type:"number"},domProps:{value:a.app.defaultStorage},on:{input:function(t){t.target.composing||a.$set(a.app,"defaultStorage",t.target.value)}}}),a._v(" "),n[0]?e("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1):a._e(),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[a._v("Allow User Registration:")]),a._v(" "),e("small",{staticClass:"input-help"},[a._v("You can disable public registration for new users. You will still able to "),e("br"),a._v("create new users in administration panel.")])]),a._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:a.app.userRegistration},model:{value:a.app.userRegistration,callback:function(t){a.$set(a.app,"userRegistration",t)},expression:"app.userRegistration"}})],1)])]),a._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Upgrade",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"6c36d9ad",null);t.default=C.exports},"s/ZW":function(a,t,e){"use strict";var n=e("NbAf");e.n(n).a},w9z4:function(a,t,e){"use strict";var n=e("bN/l");e.n(n).a}}]);