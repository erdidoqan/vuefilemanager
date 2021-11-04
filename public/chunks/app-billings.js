(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+Pqb":function(e,t,a){"use strict";var i={name:"ProgressBar",props:["progress"]},o=(a("7Vv5"),a("KHd+")),r=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress-bar"},[t("span",{staticClass:"bg-theme",style:{width:this.progress+"%"}})])}),[],!1,null,"3c785a84",null);t.a=r.exports},"/M7z":function(e,t,a){"use strict";a("ZbQM")},"1H3E":function(e,t,a){var i=a("SScz");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},"4TWA":function(e,t,a){"use strict";var i=a("CjXH"),o=a("LvDl"),r={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:i.u,UserIcon:i.nb,ChevronDownIcon:i.g},watch:{query:Object(o.debounce)((function(e){this.searchedResults=Object(o.omitBy)(this.options,(function(t){return!t.label.toLowerCase().includes(e.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(e){this.$emit("input",e.value),this.selected=e,this.isOpen=!1},openMenu:function(){var e=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return e.$refs.search.focus()}))}},created:function(){var e=this;this.default&&(this.selected=this.options.find((function(t){return t.value===e.default})))}},n=(a("hloS"),a("KHd+")),s=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select"},[a("div",{staticClass:"input-area",class:{"is-active":e.isOpen,"is-error":e.isError},on:{click:e.openMenu}},[e.selected?a("div",{staticClass:"selected"},[e.selected.icon?a("div",{staticClass:"option-icon"},["user"===e.selected.icon?a("user-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===e.selected.icon?a("edit2-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),a("span",{staticClass:"option-value"},[e._v(e._s(e.selected.label))])]):e._e(),e._v(" "),e.selected?e._e():a("div",{staticClass:"not-selected"},[a("span",{staticClass:"option-value placehoder"},[e._v(e._s(e.placeholder))])]),e._v(" "),a("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),e._v(" "),a("transition",{attrs:{name:"slide-in"}},[e.isOpen?a("div",{staticClass:"input-options"},[e.options.length>5?a("div",{staticClass:"select-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:e.$t("select_search_placeholder")},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})]):e._e(),e._v(" "),a("ul",{staticClass:"option-list"},e._l(e.optionList,(function(t,i){return a("li",{key:i,staticClass:"option-item",on:{click:function(a){return e.selectOption(t)}}},[t.icon?a("div",{staticClass:"option-icon"},["user"===t.icon?a("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===t.icon?a("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),a("span",{staticClass:"option-value"},[e._v(e._s(t.label))])])})),0)]):e._e()])],1)}),[],!1,null,"97dc0128",null);t.a=s.exports},"5PQ2":function(e,t,a){var i=a("GBO8");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},"7Vv5":function(e,t,a){"use strict";a("9Xxg")},"9Xxg":function(e,t,a){var i=a("n9ek");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},"Ak++":function(e,t,a){"use strict";a("5PQ2")},"D+dh":function(e,t,a){"use strict";var i=a("CjXH"),o={name:"ImageInput",props:["image","error"],components:{ImageIcon:i.H,XIcon:i.rb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(e){var t=this,a=e.target.files[0].name,i=a.substring(a.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(i)){var o=e.target.files[0],r=new FileReader;r.onload=function(){return t.imagePreview=r.result},r.readAsDataURL(o),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},r=(a("Ak++"),a("KHd+")),n=Object(r.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropzone",class:{"is-error":e.error}},[e.imagePreview?a("div",{staticClass:"reset-image",on:{click:e.resetImage}},[a("x-icon",{staticClass:"close-icon text-theme",attrs:{size:"14"}})],1):e._e(),e._v(" "),a("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return e.showImagePreview(t)}}}),e._v(" "),e.imagePreview?a("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[a("image-icon",{staticClass:"icon-upload text-theme",attrs:{size:"28"}}),e._v(" "),a("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),a("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"cafecfa4",null);t.a=n.exports},GBO8:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".dropzone[data-v-cafecfa4]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-cafecfa4]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-cafecfa4]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-cafecfa4],.dropzone.is-error .icon-upload polyline[data-v-cafecfa4],.dropzone.is-error .icon-upload rect[data-v-cafecfa4]{stroke:#fd397a}.dropzone input[type=file][data-v-cafecfa4]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-cafecfa4]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-cafecfa4]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-cafecfa4]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-cafecfa4],.dropzone .dropzone-message .icon-upload polyline[data-v-cafecfa4],.dropzone .dropzone-message .icon-upload rect[data-v-cafecfa4]{color:inherit}.dropzone .dropzone-message .dropzone-title[data-v-cafecfa4]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-cafecfa4]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-cafecfa4]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-cafecfa4]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-cafecfa4]{fill:#1b2539}.dark-mode .dropzone[data-v-cafecfa4]{border-color:hsla(0,0%,100%,.2)}.dark-mode .dropzone .dropzone-message .icon-upload line[data-v-cafecfa4],.dark-mode .dropzone .dropzone-message .icon-upload path[data-v-cafecfa4],.dark-mode .dropzone .dropzone-message .icon-upload polyline[data-v-cafecfa4]{color:inherit}.dark-mode .dropzone .dropzone-message .dropzone-description[data-v-cafecfa4]{color:#7d858c}",""])},SScz:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form[data-v-7c4f659d]{max-width:700px}.form.inline-form[data-v-7c4f659d]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-7c4f659d]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-7c4f659d]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-7c4f659d]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-7c4f659d]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-7c4f659d]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-7c4f659d]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-7c4f659d]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-7c4f659d]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-7c4f659d]:last-child{margin-bottom:0}.form.block-form .button[data-v-7c4f659d]{margin-top:50px}.form .inline-wrapper[data-v-7c4f659d]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-7c4f659d]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-7c4f659d]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-7c4f659d]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-7c4f659d]{display:flex}.single-line-form .submit-button[data-v-7c4f659d]{margin-left:20px}.error-message[data-v-7c4f659d]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-7c4f659d]{width:100%}input[type=email][data-v-7c4f659d],input[type=number][data-v-7c4f659d],input[type=password][data-v-7c4f659d],input[type=text][data-v-7c4f659d],textarea[data-v-7c4f659d]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-7c4f659d],input[type=number].is-error[data-v-7c4f659d],input[type=password].is-error[data-v-7c4f659d],input[type=text].is-error[data-v-7c4f659d],textarea.is-error[data-v-7c4f659d]{border-color:#fd397a}input[type=email][data-v-7c4f659d]::-moz-placeholder,input[type=number][data-v-7c4f659d]::-moz-placeholder,input[type=password][data-v-7c4f659d]::-moz-placeholder,input[type=text][data-v-7c4f659d]::-moz-placeholder,textarea[data-v-7c4f659d]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-7c4f659d]:-ms-input-placeholder,input[type=number][data-v-7c4f659d]:-ms-input-placeholder,input[type=password][data-v-7c4f659d]:-ms-input-placeholder,input[type=text][data-v-7c4f659d]:-ms-input-placeholder,textarea[data-v-7c4f659d]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-7c4f659d]::placeholder,input[type=number][data-v-7c4f659d]::placeholder,input[type=password][data-v-7c4f659d]::placeholder,input[type=text][data-v-7c4f659d]::placeholder,textarea[data-v-7c4f659d]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-7c4f659d],input[type=number][disabled][data-v-7c4f659d],input[type=password][disabled][data-v-7c4f659d],input[type=text][disabled][data-v-7c4f659d],textarea[disabled][data-v-7c4f659d]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-7c4f659d]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-7c4f659d]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-7c4f659d],.additional-link b[data-v-7c4f659d]{cursor:pointer}.additional-link a[data-v-7c4f659d]:hover,.additional-link b[data-v-7c4f659d]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-7c4f659d]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-7c4f659d]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-7c4f659d],.form textarea[data-v-7c4f659d]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-7c4f659d]{display:block}.form.block-form .block-wrapper label[data-v-7c4f659d]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-7c4f659d]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-7c4f659d]{display:block}.form.inline-form .input-wrapper .error-message[data-v-7c4f659d]{position:relative;bottom:0}.form .button[data-v-7c4f659d]{padding:14px 32px}.single-line-form[data-v-7c4f659d]{display:block}.single-line-form .submit-button[data-v-7c4f659d]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-7c4f659d],input[type=number][data-v-7c4f659d],input[type=password][data-v-7c4f659d],input[type=text][data-v-7c4f659d],textarea[data-v-7c4f659d]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-7c4f659d]{display:block}}.dark-mode .form .input-help[data-v-7c4f659d]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-7c4f659d],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-7c4f659d]{color:#bec6cf}.dark-mode input[type=email][data-v-7c4f659d],.dark-mode input[type=number][data-v-7c4f659d],.dark-mode input[type=password][data-v-7c4f659d],.dark-mode input[type=text][data-v-7c4f659d],.dark-mode textarea[data-v-7c4f659d]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-7c4f659d]::-moz-placeholder,.dark-mode input[type=number][data-v-7c4f659d]::-moz-placeholder,.dark-mode input[type=password][data-v-7c4f659d]::-moz-placeholder,.dark-mode input[type=text][data-v-7c4f659d]::-moz-placeholder,.dark-mode textarea[data-v-7c4f659d]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-7c4f659d]:-ms-input-placeholder,.dark-mode input[type=number][data-v-7c4f659d]:-ms-input-placeholder,.dark-mode input[type=password][data-v-7c4f659d]:-ms-input-placeholder,.dark-mode input[type=text][data-v-7c4f659d]:-ms-input-placeholder,.dark-mode textarea[data-v-7c4f659d]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-7c4f659d]::placeholder,.dark-mode input[type=number][data-v-7c4f659d]::placeholder,.dark-mode input[type=password][data-v-7c4f659d]::placeholder,.dark-mode input[type=text][data-v-7c4f659d]::placeholder,.dark-mode textarea[data-v-7c4f659d]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-7c4f659d],.dark-mode input[type=number][disabled][data-v-7c4f659d],.dark-mode input[type=password][disabled][data-v-7c4f659d],.dark-mode input[type=text][disabled][data-v-7c4f659d],.dark-mode textarea[disabled][data-v-7c4f659d]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-7c4f659d],.dark-mode .popup-wrapper input[type=number][data-v-7c4f659d],.dark-mode .popup-wrapper input[type=password][data-v-7c4f659d],.dark-mode .popup-wrapper input[type=text][data-v-7c4f659d],.dark-mode .popup-wrapper textarea[data-v-7c4f659d]{background:#25272c}.block-form[data-v-7c4f659d]{max-width:100%}",""])},VPUT:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".detail-storage-item[data-v-39e09627]{margin-bottom:35px}.detail-storage-item.disk .icon circle[data-v-39e09627],.detail-storage-item.disk .icon line[data-v-39e09627],.detail-storage-item.disk .icon path[data-v-39e09627],.detail-storage-item.disk .icon polygon[data-v-39e09627],.detail-storage-item.disk .icon polyline[data-v-39e09627],.detail-storage-item.disk .icon rect[data-v-39e09627]{stroke:#1b2539}.detail-storage-item.disk .storage-progress[data-v-39e09627] span{background:#1b2539}.detail-storage-item.images .icon circle[data-v-39e09627],.detail-storage-item.images .icon line[data-v-39e09627],.detail-storage-item.images .icon path[data-v-39e09627],.detail-storage-item.images .icon polygon[data-v-39e09627],.detail-storage-item.images .icon polyline[data-v-39e09627],.detail-storage-item.images .icon rect[data-v-39e09627]{stroke:#9d66fe}.detail-storage-item.images .storage-progress[data-v-39e09627] span{background:#9d66fe}.detail-storage-item.videos .icon circle[data-v-39e09627],.detail-storage-item.videos .icon line[data-v-39e09627],.detail-storage-item.videos .icon path[data-v-39e09627],.detail-storage-item.videos .icon polygon[data-v-39e09627],.detail-storage-item.videos .icon polyline[data-v-39e09627],.detail-storage-item.videos .icon rect[data-v-39e09627]{stroke:#ffbd2d}.detail-storage-item.videos .storage-progress[data-v-39e09627] span{background:#ffbd2d}.detail-storage-item.audios .icon circle[data-v-39e09627],.detail-storage-item.audios .icon line[data-v-39e09627],.detail-storage-item.audios .icon path[data-v-39e09627],.detail-storage-item.audios .icon polygon[data-v-39e09627],.detail-storage-item.audios .icon polyline[data-v-39e09627],.detail-storage-item.audios .icon rect[data-v-39e09627]{stroke:#fe66a1}.detail-storage-item.audios .storage-progress[data-v-39e09627] span{background:#fe66a1}.detail-storage-item.documents .icon circle[data-v-39e09627],.detail-storage-item.documents .icon line[data-v-39e09627],.detail-storage-item.documents .icon path[data-v-39e09627],.detail-storage-item.documents .icon polygon[data-v-39e09627],.detail-storage-item.documents .icon polyline[data-v-39e09627],.detail-storage-item.documents .icon rect[data-v-39e09627]{stroke:#fe6057}.detail-storage-item.documents .storage-progress[data-v-39e09627] span{background:#fe6057}.detail-storage-item.others .icon circle[data-v-39e09627],.detail-storage-item.others .icon line[data-v-39e09627],.detail-storage-item.others .icon path[data-v-39e09627],.detail-storage-item.others .icon polygon[data-v-39e09627],.detail-storage-item.others .icon polyline[data-v-39e09627],.detail-storage-item.others .icon rect[data-v-39e09627]{stroke:#1b2539}.detail-storage-item.others .storage-progress[data-v-39e09627] span{background:#1b2539}.header-storage-item[data-v-39e09627]{display:flex;align-items:flex-start;margin-bottom:10px}.header-storage-item .icon[data-v-39e09627]{width:35px}.header-storage-item .type[data-v-39e09627]{font-size:.9375em;color:#1b2539}.header-storage-item .total-size[data-v-39e09627]{font-size:.625em;display:block;color:rgba(27,37,57,.7)}.dark-mode .header-storage-item .type[data-v-39e09627]{color:#bec6cf}.dark-mode .header-storage-item .total-size[data-v-39e09627]{color:#7d858c}.dark-mode .detail-storage-item.disk .icon circle[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon line[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon path[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon polygon[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon polyline[data-v-39e09627],.dark-mode .detail-storage-item.disk .icon rect[data-v-39e09627],.dark-mode .detail-storage-item.others .icon circle[data-v-39e09627],.dark-mode .detail-storage-item.others .icon line[data-v-39e09627],.dark-mode .detail-storage-item.others .icon path[data-v-39e09627],.dark-mode .detail-storage-item.others .icon polygon[data-v-39e09627],.dark-mode .detail-storage-item.others .icon polyline[data-v-39e09627],.dark-mode .detail-storage-item.others .icon rect[data-v-39e09627]{stroke:#41454e}.dark-mode .detail-storage-item.disk .storage-progress[data-v-39e09627] span,.dark-mode .detail-storage-item.others .storage-progress[data-v-39e09627] span{background:#41454e}",""])},WSIt:function(e,t,a){"use strict";a("1H3E")},ZbQM:function(e,t,a){var i=a("VPUT");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},"bwO/":function(e,t,a){var i=a("plv3");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},hloS:function(e,t,a){"use strict";a("bwO/")},mYUh:function(e,t,a){"use strict";a.r(t);var i=a("A5+z"),o=a("xnZf"),r=a("gahf"),n=a("4TWA"),s=a("D+dh"),d=a("eZ9V"),l=a("Nv84"),c=a("13Td"),p=a("qefO"),m=a("KnjL"),u=a("TJPC"),v=a("vDqi"),g=a.n(v),f=a("L2JU");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var _={name:"AppAppearance",components:{ValidationObserver:i.ValidationObserver,ValidationProvider:i.ValidationProvider,StorageItemDetail:o.a,PageTabGroup:r.a,SelectInput:n.a,ImageInput:s.a,ButtonBase:l.a,FormLabel:d.a,SetupBox:c.a,required:u.a,PageTab:p.a,InfoBox:m.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(f.b)(["countries"])),data:function(){return{isLoading:!0,billingInformation:void 0}},mounted:function(){var e=this;g.a.get("/api/admin/settings",{params:{column:"billing_phone_number|billing_postal_code|billing_vat_number|billing_address|billing_country|billing_state|billing_city|billing_name"}}).then((function(t){e.isLoading=!1,e.billingInformation={billing_phone_number:t.data.billing_phone_number,billing_postal_code:t.data.billing_postal_code,billing_vat_number:t.data.billing_vat_number,billing_address:t.data.billing_address,billing_country:t.data.billing_country,billing_state:t.data.billing_state,billing_city:t.data.billing_city,billing_name:t.data.billing_name}}))}},k=(a("WSIt"),a("KHd+")),x=Object(k.a)(_,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":e.isLoading}},[e.billingInformation?a("PageTabGroup",[a("div",{staticClass:"form block-form"},[a("FormLabel",[e._v(e._s(e.$t("admin_settings.billings.section_company")))]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.company_name"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_name,expression:"billingInformation.billing_name"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.company_name_plac"),type:"text"},domProps:{value:e.billingInformation.billing_name},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_name",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_name",e.billingInformation.billing_name)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,2531206058)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.vat"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Vat Number",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_vat_number,expression:"billingInformation.billing_vat_number"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.vat_plac"),type:"text"},domProps:{value:e.billingInformation.billing_vat_number},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_vat_number",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_vat_number",e.billingInformation.billing_vat_number)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,3024743990)})],1),e._v(" "),a("FormLabel",{staticClass:"mt-70"},[e._v(e._s(e.$t("admin_settings.billings.section_billing")))]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.country"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Country",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("SelectInput",{attrs:{default:e.billingInformation.billing_country,options:e.countries,placeholder:e.$t("admin_settings.billings.country_plac"),isError:i[0]},on:{input:function(t){return e.$updateText("/admin/settings","billing_country",e.billingInformation.billing_country)}},model:{value:e.billingInformation.billing_country,callback:function(t){e.$set(e.billingInformation,"billing_country",t)},expression:"billingInformation.billing_country"}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,2795947715)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.address"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Address",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_address,expression:"billingInformation.billing_address"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.address_plac"),type:"text"},domProps:{value:e.billingInformation.billing_address},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_address",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_address",e.billingInformation.billing_address)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,77385155)})],1),e._v(" "),a("div",{staticClass:"wrapper-inline"},[a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.city"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing City",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_city,expression:"billingInformation.billing_city"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.city_plac"),type:"text"},domProps:{value:e.billingInformation.billing_city},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_city",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_city",e.billingInformation.billing_city)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,3262295122)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.postal_code"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Postal Code",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_postal_code,expression:"billingInformation.billing_postal_code"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.postal_code_plac"),type:"text"},domProps:{value:e.billingInformation.billing_postal_code},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_postal_code",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_postal_code",e.billingInformation.billing_postal_code)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,567066674)})],1)]),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.state"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing State",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_state,expression:"billingInformation.billing_state"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.state_plac"),type:"text"},domProps:{value:e.billingInformation.billing_state},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_state",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_state",e.billingInformation.billing_state)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,3691854658)})],1),e._v(" "),a("div",{staticClass:"block-wrapper"},[a("label",[e._v(e._s(e.$t("admin_settings.billings.phone_number"))+":")]),e._v(" "),a("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Phone Number"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billingInformation.billing_phone_number,expression:"billingInformation.billing_phone_number"}],staticClass:"focus-border-theme",class:{"is-error":i[0]},attrs:{placeholder:e.$t("admin_settings.billings.phone_number_plac"),type:"text"},domProps:{value:e.billingInformation.billing_phone_number},on:{input:[function(t){t.target.composing||e.$set(e.billingInformation,"billing_phone_number",t.target.value)},function(t){return e.$updateText("/admin/settings","billing_phone_number",e.billingInformation.billing_phone_number)}]}}),e._v(" "),i[0]?a("span",{staticClass:"error-message"},[e._v(e._s(i[0]))]):e._e()]}}],null,!1,2691718389)})],1)],1)]):e._e()],1)}),[],!1,null,"7c4f659d",null);t.default=x.exports},n9ek:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".progress-bar[data-v-3c785a84]{width:100%;height:5px;background:#f4f5f6;margin-top:6px;border-radius:10px}.progress-bar span[data-v-3c785a84]{display:block;height:100%;border-radius:10px;max-width:100%}.dark-mode .progress-bar[data-v-3c785a84]{background:#1e2024}@media only screen and (min-width:680px){.dark-mode .progress-bar[data-v-3c785a84]{background:#1e2024}}",""])},plv3:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".select[data-v-97dc0128]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-97dc0128]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-97dc0128]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-97dc0128]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-97dc0128]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-97dc0128]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-97dc0128]:last-child{border-bottom:none}.input-area[data-v-97dc0128]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-97dc0128],.input-area .chevron[data-v-97dc0128]{transition:all .15s ease}.input-area.is-active .chevron[data-v-97dc0128]{transform:rotate(180deg)}.input-area.is-error[data-v-97dc0128]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-97dc0128]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-97dc0128]{margin-top:-4px;vertical-align:middle}.option-icon svg circle[data-v-97dc0128],.option-icon svg line[data-v-97dc0128],.option-icon svg path[data-v-97dc0128]{color:inherit}.option-value[data-v-97dc0128]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-97dc0128]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-97dc0128]{transition:all .15s ease}.slide-in-enter[data-v-97dc0128]{opacity:0;transform:translateY(-50px)}.dark-mode .select-search[data-v-97dc0128]{background:#1e2024}.dark-mode .select-search .search-input[data-v-97dc0128]{background:#151515}.dark-mode .input-area[data-v-97dc0128]{background:#1e2024;border-color:#1e2024}.dark-mode .popup-wrapper .input-area[data-v-97dc0128]{background:#25272c}.dark-mode .input-options[data-v-97dc0128]{background:#1e2024}.dark-mode .input-options .option-item[data-v-97dc0128]{border-bottom:none}.dark-mode .input-options .option-item[data-v-97dc0128]:hover{background:#2a2c32}.dark-mode .input-options .option-item:hover .option-icon circle[data-v-97dc0128],.dark-mode .input-options .option-item:hover .option-icon path[data-v-97dc0128]{color:inherit}.dark-mode .input-options .option-item[data-v-97dc0128]:last-child{border-bottom:none}.dark-mode .option-value.placehoder[data-v-97dc0128]{color:#7d858c}",""])},xnZf:function(e,t,a){"use strict";var i=a("+Pqb"),o=a("CjXH"),r={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:o.F,FileTextIcon:o.z,ProgressBar:i.a,MusicIcon:o.U,VideoIcon:o.qb,ImageIcon:o.H,FileIcon:o.y}},n=(a("/M7z"),a("KHd+")),s=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"detail-storage-item",class:e.type},[a("div",{staticClass:"header-storage-item"},[a("div",{staticClass:"icon"},["images"==e.type?a("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?a("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?a("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?a("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?a("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?a("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),a("div",{staticClass:"title"},[a("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),a("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),a("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"39e09627",null);t.a=s.exports}}]);