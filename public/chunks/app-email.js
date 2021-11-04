(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+Pqb":function(e,a,t){"use strict";var o={name:"ProgressBar",props:["progress"]},i=(t("7Vv5"),t("KHd+")),r=Object(i.a)(o,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"progress-bar"},[a("span",{staticClass:"bg-theme",style:{width:this.progress+"%"}})])}),[],!1,null,"3c785a84",null);a.a=r.exports},"/M7z":function(e,a,t){"use strict";t("ZbQM")},"4TWA":function(e,a,t){"use strict";var o=t("CjXH"),i=t("LvDl"),r={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:o.u,UserIcon:o.nb,ChevronDownIcon:o.g},watch:{query:Object(i.debounce)((function(e){this.searchedResults=Object(i.omitBy)(this.options,(function(a){return!a.label.toLowerCase().includes(e.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(e){this.$emit("input",e.value),this.selected=e,this.isOpen=!1},openMenu:function(){var e=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return e.$refs.search.focus()}))}},created:function(){var e=this;this.default&&(this.selected=this.options.find((function(a){return a.value===e.default})))}},d=(t("hloS"),t("KHd+")),s=Object(d.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"select"},[t("div",{staticClass:"input-area",class:{"is-active":e.isOpen,"is-error":e.isError},on:{click:e.openMenu}},[e.selected?t("div",{staticClass:"selected"},[e.selected.icon?t("div",{staticClass:"option-icon"},["user"===e.selected.icon?t("user-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===e.selected.icon?t("edit2-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),t("span",{staticClass:"option-value"},[e._v(e._s(e.selected.label))])]):e._e(),e._v(" "),e.selected?e._e():t("div",{staticClass:"not-selected"},[t("span",{staticClass:"option-value placehoder"},[e._v(e._s(e.placeholder))])]),e._v(" "),t("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),e._v(" "),t("transition",{attrs:{name:"slide-in"}},[e.isOpen?t("div",{staticClass:"input-options"},[e.options.length>5?t("div",{staticClass:"select-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:e.$t("select_search_placeholder")},domProps:{value:e.query},on:{input:function(a){a.target.composing||(e.query=a.target.value)}}})]):e._e(),e._v(" "),t("ul",{staticClass:"option-list"},e._l(e.optionList,(function(a,o){return t("li",{key:o,staticClass:"option-item",on:{click:function(t){return e.selectOption(a)}}},[a.icon?t("div",{staticClass:"option-icon"},["user"===a.icon?t("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===a.icon?t("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),t("span",{staticClass:"option-value"},[e._v(e._s(a.label))])])})),0)]):e._e()])],1)}),[],!1,null,"97dc0128",null);a.a=s.exports},"5PQ2":function(e,a,t){var o=t("GBO8");"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(o,i);o.locals&&(e.exports=o.locals)},"7Vv5":function(e,a,t){"use strict";t("9Xxg")},"9Xxg":function(e,a,t){var o=t("n9ek");"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(o,i);o.locals&&(e.exports=o.locals)},"Ak++":function(e,a,t){"use strict";t("5PQ2")},"D+dh":function(e,a,t){"use strict";var o=t("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:o.H,XIcon:o.rb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(e){var a=this,t=e.target.files[0].name,o=t.substring(t.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(o)){var i=e.target.files[0],r=new FileReader;r.onload=function(){return a.imagePreview=r.result},r.readAsDataURL(i),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},r=(t("Ak++"),t("KHd+")),d=Object(r.a)(i,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"dropzone",class:{"is-error":e.error}},[e.imagePreview?t("div",{staticClass:"reset-image",on:{click:e.resetImage}},[t("x-icon",{staticClass:"close-icon text-theme",attrs:{size:"14"}})],1):e._e(),e._v(" "),t("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(a){return e.showImagePreview(a)}}}),e._v(" "),e.imagePreview?t("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[t("image-icon",{staticClass:"icon-upload text-theme",attrs:{size:"28"}}),e._v(" "),t("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),t("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"cafecfa4",null);a.a=d.exports},FgsV:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".form[data-v-13fa4d8e]{max-width:700px}.form.inline-form[data-v-13fa4d8e]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-13fa4d8e]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-13fa4d8e]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-13fa4d8e]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-13fa4d8e]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-13fa4d8e]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-13fa4d8e]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-13fa4d8e]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-13fa4d8e]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-13fa4d8e]:last-child{margin-bottom:0}.form.block-form .button[data-v-13fa4d8e]{margin-top:50px}.form .inline-wrapper[data-v-13fa4d8e]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-13fa4d8e]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-13fa4d8e]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-13fa4d8e]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-13fa4d8e]{display:flex}.single-line-form .submit-button[data-v-13fa4d8e]{margin-left:20px}.error-message[data-v-13fa4d8e]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-13fa4d8e]{width:100%}input[type=email][data-v-13fa4d8e],input[type=number][data-v-13fa4d8e],input[type=password][data-v-13fa4d8e],input[type=text][data-v-13fa4d8e],textarea[data-v-13fa4d8e]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-13fa4d8e],input[type=number].is-error[data-v-13fa4d8e],input[type=password].is-error[data-v-13fa4d8e],input[type=text].is-error[data-v-13fa4d8e],textarea.is-error[data-v-13fa4d8e]{border-color:#fd397a}input[type=email][data-v-13fa4d8e]::-moz-placeholder,input[type=number][data-v-13fa4d8e]::-moz-placeholder,input[type=password][data-v-13fa4d8e]::-moz-placeholder,input[type=text][data-v-13fa4d8e]::-moz-placeholder,textarea[data-v-13fa4d8e]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-13fa4d8e]:-ms-input-placeholder,input[type=number][data-v-13fa4d8e]:-ms-input-placeholder,input[type=password][data-v-13fa4d8e]:-ms-input-placeholder,input[type=text][data-v-13fa4d8e]:-ms-input-placeholder,textarea[data-v-13fa4d8e]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-13fa4d8e]::placeholder,input[type=number][data-v-13fa4d8e]::placeholder,input[type=password][data-v-13fa4d8e]::placeholder,input[type=text][data-v-13fa4d8e]::placeholder,textarea[data-v-13fa4d8e]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-13fa4d8e],input[type=number][disabled][data-v-13fa4d8e],input[type=password][disabled][data-v-13fa4d8e],input[type=text][disabled][data-v-13fa4d8e],textarea[disabled][data-v-13fa4d8e]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-13fa4d8e]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-13fa4d8e]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-13fa4d8e],.additional-link b[data-v-13fa4d8e]{cursor:pointer}.additional-link a[data-v-13fa4d8e]:hover,.additional-link b[data-v-13fa4d8e]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-13fa4d8e]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-13fa4d8e]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-13fa4d8e],.form textarea[data-v-13fa4d8e]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-13fa4d8e]{display:block}.form.block-form .block-wrapper label[data-v-13fa4d8e]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-13fa4d8e]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-13fa4d8e]{display:block}.form.inline-form .input-wrapper .error-message[data-v-13fa4d8e]{position:relative;bottom:0}.form .button[data-v-13fa4d8e]{padding:14px 32px}.single-line-form[data-v-13fa4d8e]{display:block}.single-line-form .submit-button[data-v-13fa4d8e]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-13fa4d8e],input[type=number][data-v-13fa4d8e],input[type=password][data-v-13fa4d8e],input[type=text][data-v-13fa4d8e],textarea[data-v-13fa4d8e]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-13fa4d8e]{display:block}}.dark-mode .form .input-help[data-v-13fa4d8e]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-13fa4d8e],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-13fa4d8e]{color:#bec6cf}.dark-mode input[type=email][data-v-13fa4d8e],.dark-mode input[type=number][data-v-13fa4d8e],.dark-mode input[type=password][data-v-13fa4d8e],.dark-mode input[type=text][data-v-13fa4d8e],.dark-mode textarea[data-v-13fa4d8e]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-13fa4d8e]::-moz-placeholder,.dark-mode input[type=number][data-v-13fa4d8e]::-moz-placeholder,.dark-mode input[type=password][data-v-13fa4d8e]::-moz-placeholder,.dark-mode input[type=text][data-v-13fa4d8e]::-moz-placeholder,.dark-mode textarea[data-v-13fa4d8e]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-13fa4d8e]:-ms-input-placeholder,.dark-mode input[type=number][data-v-13fa4d8e]:-ms-input-placeholder,.dark-mode input[type=password][data-v-13fa4d8e]:-ms-input-placeholder,.dark-mode input[type=text][data-v-13fa4d8e]:-ms-input-placeholder,.dark-mode textarea[data-v-13fa4d8e]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-13fa4d8e]::placeholder,.dark-mode input[type=number][data-v-13fa4d8e]::placeholder,.dark-mode input[type=password][data-v-13fa4d8e]::placeholder,.dark-mode input[type=text][data-v-13fa4d8e]::placeholder,.dark-mode textarea[data-v-13fa4d8e]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-13fa4d8e],.dark-mode input[type=number][disabled][data-v-13fa4d8e],.dark-mode input[type=password][disabled][data-v-13fa4d8e],.dark-mode input[type=text][disabled][data-v-13fa4d8e],.dark-mode textarea[disabled][data-v-13fa4d8e]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-13fa4d8e],.dark-mode .popup-wrapper input[type=number][data-v-13fa4d8e],.dark-mode .popup-wrapper input[type=password][data-v-13fa4d8e],.dark-mode .popup-wrapper input[type=text][data-v-13fa4d8e],.dark-mode .popup-wrapper textarea[data-v-13fa4d8e]{background:#25272c}.block-form[data-v-13fa4d8e]{max-width:100%}",""])},GBO8:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".dropzone[data-v-cafecfa4]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-cafecfa4]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-cafecfa4]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-cafecfa4],.dropzone.is-error .icon-upload polyline[data-v-cafecfa4],.dropzone.is-error .icon-upload rect[data-v-cafecfa4]{stroke:#fd397a}.dropzone input[type=file][data-v-cafecfa4]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-cafecfa4]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-cafecfa4]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-cafecfa4]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-cafecfa4],.dropzone .dropzone-message .icon-upload polyline[data-v-cafecfa4],.dropzone .dropzone-message .icon-upload rect[data-v-cafecfa4]{color:inherit}.dropzone .dropzone-message .dropzone-title[data-v-cafecfa4]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-cafecfa4]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-cafecfa4]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-cafecfa4]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-cafecfa4]{fill:#1b2539}.dark-mode .dropzone[data-v-cafecfa4]{border-color:hsla(0,0%,100%,.2)}.dark-mode .dropzone .dropzone-message .icon-upload line[data-v-cafecfa4],.dark-mode .dropzone .dropzone-message .icon-upload path[data-v-cafecfa4],.dark-mode .dropzone .dropzone-message .icon-upload polyline[data-v-cafecfa4]{color:inherit}.dark-mode .dropzone .dropzone-message .dropzone-description[data-v-cafecfa4]{color:#7d858c}",""])},GEeg:function(e,a,t){"use strict";t.r(a);var o=t("o0o1"),i=t.n(o),r=t("A5+z"),d=t("xnZf"),s=t("gahf"),n=t("4TWA"),l=t("D+dh"),p=t("eZ9V"),c=t("Nv84"),m=t("13Td"),v=t("qefO"),u=t("KnjL"),f=t("TJPC"),g=t("xCqy"),h=t("vDqi"),b=t.n(h);function k(e,a,t,o,i,r,d){try{var s=e[r](d),n=s.value}catch(e){return void t(e)}s.done?a(n):Promise.resolve(n).then(o,i)}var x={name:"AppAppearance",components:{ValidationObserver:r.ValidationObserver,ValidationProvider:r.ValidationProvider,StorageItemDetail:d.a,PageTabGroup:s.a,SelectInput:n.a,ImageInput:l.a,ButtonBase:c.a,FormLabel:p.a,SetupBox:m.a,required:f.a,PageTab:v.a,InfoBox:u.a},data:function(){return{isLoading:!1,isSendingRequest:!1,encryptionList:[{label:"TLS",value:"tls"},{label:"SSL",value:"ssl"}],mail:{driver:"",host:"",port:"",username:"",password:"",encryption:""}}},methods:{EmailSetupSubmit:function(){var e,a=this;return(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$refs.EmailSetup.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:a.isSendingRequest=!0,b.a.post("/api/admin/settings/email",a.mail).then((function(){g.a.$emit("toaster",{type:"success",message:a.$t("toaster.email_set")})})).catch((function(){g.a.$emit("alert:open",{title:a.$t("popup_error.title"),message:a.$t("popup_error.message")})})).finally((function(){a.isSendingRequest=!1}));case 7:case"end":return e.stop()}}),e)})),function(){var a=this,t=arguments;return new Promise((function(o,i){var r=e.apply(a,t);function d(e){k(r,o,i,d,s,"next",e)}function s(e){k(r,o,i,d,s,"throw",e)}d(void 0)}))})()}}},y=(t("ppbC"),t("KHd+")),w=Object(y.a)(x,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":e.isLoading}},[t("PageTabGroup",[t("ValidationObserver",{ref:"EmailSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),e.EmailSetupSubmit(a)}},scopedSlots:e._u([{key:"default",fn:function(a){a.invalid;return[t("FormLabel",[e._v(e._s(e.$t("admin_settings.email.section_email")))]),e._v(" "),t("InfoBox",[t("p",{domProps:{innerHTML:e._s(e.$t("admin_settings.email.email_disclaimer"))}})]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.driver"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Driver",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.driver,expression:"mail.driver"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:e.$t("admin_settings.email.driver_plac"),type:"text"},domProps:{value:e.mail.driver},on:{input:function(a){a.target.composing||e.$set(e.mail,"driver",a.target.value)}}}),e._v(" "),o[0]?t("span",{staticClass:"error-message"},[e._v(e._s(o[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.host"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Host",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.host,expression:"mail.host"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:e.$t("admin_settings.email.host_plac"),type:"text"},domProps:{value:e.mail.host},on:{input:function(a){a.target.composing||e.$set(e.mail,"host",a.target.value)}}}),e._v(" "),o[0]?t("span",{staticClass:"error-message"},[e._v(e._s(o[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.port"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Port",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.port,expression:"mail.port"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:e.$t("admin_settings.email.port_plac"),type:"text"},domProps:{value:e.mail.port},on:{input:function(a){a.target.composing||e.$set(e.mail,"port",a.target.value)}}}),e._v(" "),o[0]?t("span",{staticClass:"error-message"},[e._v(e._s(o[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.username"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.username,expression:"mail.username"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:e.$t("admin_settings.email.username_plac"),type:"text"},domProps:{value:e.mail.username},on:{input:function(a){a.target.composing||e.$set(e.mail,"username",a.target.value)}}}),e._v(" "),o[0]?t("span",{staticClass:"error-message"},[e._v(e._s(o[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.password"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.password,expression:"mail.password"}],staticClass:"focus-border-theme",class:{"is-error":o[0]},attrs:{placeholder:e.$t("admin_settings.email.password_plac"),type:"text"},domProps:{value:e.mail.password},on:{input:function(a){a.target.composing||e.$set(e.mail,"password",a.target.value)}}}),e._v(" "),o[0]?t("span",{staticClass:"error-message"},[e._v(e._s(o[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_settings.email.encryption"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Encryption",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.errors;return[t("SelectInput",{attrs:{options:e.encryptionList,placeholder:e.$t("admin_settings.email.encryption_plac"),isError:o[0]},model:{value:e.mail.encryption,callback:function(a){e.$set(e.mail,"encryption",a)},expression:"mail.encryption"}}),e._v(" "),o[0]?t("span",{staticClass:"error-message"},[e._v(e._s(o[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("ButtonBase",{staticClass:"submit-button",attrs:{loading:e.isSendingRequest,disabled:e.isSendingRequest,type:"submit","button-style":"theme"}},[e._v("\n                "+e._s(e.$t("admin_settings.email.save_button"))+"\n            ")])]}}])})],1)],1)}),[],!1,null,"13fa4d8e",null);a.default=w.exports},MaPn:function(e,a,t){var o=t("FgsV");"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(o,i);o.locals&&(e.exports=o.locals)},VPUT:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".detail-storage-item[data-v-39e09627]{margin-bottom:35px}.detail-storage-item.disk .icon circle[data-v-39e09627],.detail-storage-item.disk .icon line[data-v-39e09627],.detail-storage-item.disk .icon path[data-v-39e09627],.detail-storage-item.disk .icon polygon[data-v-39e09627],.detail-storage-item.disk .icon polyline[data-v-39e09627],.detail-storage-item.disk .icon rect[data-v-39e09627]{stroke:#1b2539}.detail-storage-item.disk .storage-progress[data-v-39e09627] span{background:#1b2539}.detail-storage-item.images .icon circle[data-v-39e09627],.detail-storage-item.images .icon line[data-v-39e09627],.detail-storage-item.images .icon path[data-v-39e09627],.detail-storage-item.images .icon polygon[data-v-39e09627],.detail-storage-item.images .icon polyline[data-v-39e09627],.detail-storage-item.images .icon rect[data-v-39e09627]{stroke:#9d66fe}.detail-storage-item.images .storage-progress[data-v-39e09627] span{background:#9d66fe}.detail-storage-item.videos .icon circle[data-v-39e09627],.detail-storage-item.videos .icon line[data-v-39e09627],.detail-storage-item.videos .icon path[data-v-39e09627],.detail-storage-item.videos .icon polygon[data-v-39e09627],.detail-storage-item.videos .icon polyline[data-v-39e09627],.detail-storage-item.videos .icon rect[data-v-39e09627]{stroke:#ffbd2d}.detail-storage-item.videos .storage-progress[data-v-39e09627] span{background:#ffbd2d}.detail-storage-item.audios .icon circle[data-v-39e09627],.detail-storage-item.audios .icon line[data-v-39e09627],.detail-storage-item.audios .icon path[data-v-39e09627],.detail-storage-item.audios .icon polygon[data-v-39e09627],.detail-storage-item.audios .icon polyline[data-v-39e09627],.detail-storage-item.audios .icon rect[data-v-39e09627]{stroke:#fe66a1}.detail-storage-item.audios .storage-progress[data-v-39e09627] span{background:#fe66a1}.detail-storage-item.documents .icon circle[data-v-39e09627],.detail-storage-item.documents .icon line[data-v-39e09627],.detail-storage-item.documents .icon path[data-v-39e09627],.detail-storage-item.documents .icon polygon[data-v-39e09627],.detail-storage-item.documents .icon polyline[data-v-39e09627],.detail-storage-item.documents .icon rect[data-v-39e09627]{stroke:#fe6057}.detail-storage-item.documents .storage-progress[data-v-39e09627] span{background:#fe6057}.detail-storage-item.others .icon circle[data-v-39e09627],.detail-storage-item.others .icon line[data-v-39e09627],.detail-storage-item.others .icon path[data-v-39e09627],.detail-storage-item.others .icon polygon[data-v-39e09627],.detail-storage-item.others .icon polyline[data-v-39e09627],.detail-storage-item.others .icon rect[data-v-39e09627]{stroke:#1b2539}.detail-storage-item.others .storage-progress[data-v-39e09627] span{background:#1b2539}.header-storage-item[data-v-39e09627]{display:flex;align-items:flex-start;margin-bottom:10px}.header-storage-item .icon[data-v-39e09627]{width:35px}.header-storage-item .type[data-v-39e09627]{font-size:.9375em;color:#1b2539}.header-storage-item .total-size[data-v-39e09627]{font-size:.625em;display:block;color:rgba(27,37,57,.7)}.dark-mode .header-storage-item .type[data-v-39e09627]{color:#bec6cf}.dark-mode .header-storage-item .total-size[data-v-39e09627]{color:#7d858c}.dark-mode .detail-storage-item.disk .icon circle[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon line[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon path[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon polygon[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon polyline[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon rect[data-v-39e09627],.dark-mode .detail-storage-item.others .icon circle[data-v-39e09627],.dark-mode .detail-storage-item.others .icon line[data-v-39e09627],.dark-mode .detail-storage-item.others .icon path[data-v-39e09627],.dark-mode .detail-storage-item.others .icon polygon[data-v-39e09627],.dark-mode .detail-storage-item.others .icon polyline[data-v-39e09627],.dark-mode .detail-storage-item.others .icon rect[data-v-39e09627]{stroke:#41454e}.dark-mode .detail-storage-item.disk .storage-progress[data-v-39e09627] span,.dark-mode .detail-storage-item.others .storage-progress[data-v-39e09627] span{background:#41454e}",""])},ZbQM:function(e,a,t){var o=t("VPUT");"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(o,i);o.locals&&(e.exports=o.locals)},"bwO/":function(e,a,t){var o=t("plv3");"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(o,i);o.locals&&(e.exports=o.locals)},hloS:function(e,a,t){"use strict";t("bwO/")},n9ek:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".progress-bar[data-v-3c785a84]{width:100%;height:5px;background:#f4f5f6;margin-top:6px;border-radius:10px}.progress-bar span[data-v-3c785a84]{display:block;height:100%;border-radius:10px;max-width:100%}.dark-mode .progress-bar[data-v-3c785a84]{background:#1e2024}@media only screen and (min-width:680px){.dark-mode .progress-bar[data-v-3c785a84]{background:#1e2024}}",""])},plv3:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".select[data-v-97dc0128]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-97dc0128]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-97dc0128]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-97dc0128]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-97dc0128]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-97dc0128]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-97dc0128]:last-child{border-bottom:none}.input-area[data-v-97dc0128]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-97dc0128],.input-area .chevron[data-v-97dc0128]{transition:all .15s ease}.input-area.is-active .chevron[data-v-97dc0128]{transform:rotate(180deg)}.input-area.is-error[data-v-97dc0128]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-97dc0128]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-97dc0128]{margin-top:-4px;vertical-align:middle}.option-icon svg circle[data-v-97dc0128],.option-icon svg line[data-v-97dc0128],.option-icon svg path[data-v-97dc0128]{color:inherit}.option-value[data-v-97dc0128]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-97dc0128]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-97dc0128]{transition:all .15s ease}.slide-in-enter[data-v-97dc0128]{opacity:0;transform:translateY(-50px)}.dark-mode .select-search[data-v-97dc0128]{background:#1e2024}.dark-mode .select-search .search-input[data-v-97dc0128]{background:#151515}.dark-mode .input-area[data-v-97dc0128]{background:#1e2024;border-color:#1e2024}.dark-mode .popup-wrapper .input-area[data-v-97dc0128]{background:#25272c}.dark-mode .input-options[data-v-97dc0128]{background:#1e2024}.dark-mode .input-options .option-item[data-v-97dc0128]{border-bottom:none}.dark-mode .input-options .option-item[data-v-97dc0128]:hover{background:#2a2c32}.dark-mode .input-options .option-item:hover .option-icon circle[data-v-97dc0128],.dark-mode .input-options .option-item:hover .option-icon path[data-v-97dc0128]{color:inherit}.dark-mode .input-options .option-item[data-v-97dc0128]:last-child{border-bottom:none}.dark-mode .option-value.placehoder[data-v-97dc0128]{color:#7d858c}",""])},ppbC:function(e,a,t){"use strict";t("MaPn")},xnZf:function(e,a,t){"use strict";var o=t("+Pqb"),i=t("CjXH"),r={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.F,FileTextIcon:i.z,ProgressBar:o.a,MusicIcon:i.U,VideoIcon:i.qb,ImageIcon:i.H,FileIcon:i.y}},d=(t("/M7z"),t("KHd+")),s=Object(d.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("article",{staticClass:"detail-storage-item",class:e.type},[t("div",{staticClass:"header-storage-item"},[t("div",{staticClass:"icon"},["images"==e.type?t("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?t("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?t("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?t("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?t("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?t("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),t("div",{staticClass:"title"},[t("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),t("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),t("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"39e09627",null);a.a=s.exports}}]);