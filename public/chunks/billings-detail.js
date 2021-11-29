(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0T7M":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".select[data-v-0a75dd76]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-0a75dd76]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-0a75dd76]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-0a75dd76]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-0a75dd76]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-0a75dd76]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-0a75dd76]:last-child{border-bottom:none}.input-area[data-v-0a75dd76]{border:1px solid transparent;justify-content:space-between;align-items:center;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-0a75dd76],.input-area .chevron[data-v-0a75dd76]{transition:all .15s ease}.input-area.is-active .chevron[data-v-0a75dd76]{transform:rotate(180deg)}.input-area.is-error[data-v-0a75dd76]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-0a75dd76]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-0a75dd76]{margin-top:-4px;vertical-align:middle}.option-icon svg circle[data-v-0a75dd76],.option-icon svg line[data-v-0a75dd76],.option-icon svg path[data-v-0a75dd76]{color:inherit}.option-value[data-v-0a75dd76]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-0a75dd76]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-0a75dd76]{transition:all .15s ease}.slide-in-enter[data-v-0a75dd76]{opacity:0;transform:translateY(-50px)}.dark .select-search[data-v-0a75dd76]{background:#1e2024}.dark .select-search .search-input[data-v-0a75dd76]{background:#151515}.dark .input-area[data-v-0a75dd76]{background:#1e2024;border-color:#1e2024}.dark .popup-wrapper .input-area[data-v-0a75dd76]{background:#25272c}.dark .input-options[data-v-0a75dd76]{background:#1e2024}.dark .input-options .option-item[data-v-0a75dd76]{border-bottom:none}.dark .input-options .option-item[data-v-0a75dd76]:hover{background:#2a2c32}.dark .input-options .option-item:hover .option-icon circle[data-v-0a75dd76],.dark .input-options .option-item:hover .option-icon path[data-v-0a75dd76]{color:inherit}.dark .input-options .option-item[data-v-0a75dd76]:last-child{border-bottom:none}.dark .option-value.placehoder[data-v-0a75dd76]{color:#7d858c}",""])},"0go1":function(a,t,e){"use strict";e("8j5K")},"4TWA":function(a,t,e){"use strict";var i=e("CjXH"),o=e("LvDl"),n={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:i.u,UserIcon:i.nb,ChevronDownIcon:i.g},watch:{query:Object(o.debounce)((function(a){this.searchedResults=Object(o.omitBy)(this.options,(function(t){return!t.label.toLowerCase().includes(a.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(a){this.$emit("input",a.value),this.selected=a,this.isOpen=!1},openMenu:function(){var a=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return a.$refs.search.focus()}))}},created:function(){var a=this;this.default&&(this.selected=this.options.find((function(t){return t.value===a.default})))}},r=(e("ATD2"),e("KHd+")),l=Object(r.a)(n,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"select"},[e("div",{staticClass:"input-area bg-light-background rounded-lg",class:{"is-active":a.isOpen,"is-error":a.isError},on:{click:a.openMenu}},[a.selected?e("div",{staticClass:"selected"},[a.selected.icon?e("div",{staticClass:"option-icon"},["user"===a.selected.icon?e("user-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===a.selected.icon?e("edit2-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(a.selected.label))])]):a._e(),a._v(" "),a.selected?a._e():e("div",{staticClass:"not-selected"},[e("span",{staticClass:"option-value placehoder"},[a._v(a._s(a.placeholder))])]),a._v(" "),e("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),a._v(" "),e("transition",{attrs:{name:"slide-in"}},[a.isOpen?e("div",{staticClass:"input-options rounded-lg"},[a.options.length>5?e("div",{staticClass:"select-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme rounded-lg",attrs:{type:"text",placeholder:a.$t("select_search_placeholder")},domProps:{value:a.query},on:{input:function(t){t.target.composing||(a.query=t.target.value)}}})]):a._e(),a._v(" "),e("ul",{staticClass:"option-list"},a._l(a.optionList,(function(t,i){return e("li",{key:i,staticClass:"option-item",on:{click:function(e){return a.selectOption(t)}}},[t.icon?e("div",{staticClass:"option-icon"},["user"===t.icon?e("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===t.icon?e("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),e("span",{staticClass:"option-value"},[a._v(a._s(t.label))])])})),0)]):a._e()])],1)}),[],!1,null,"0a75dd76",null);t.a=l.exports},"4t/o":function(a,t,e){var i=e("0T7M");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},"8j5K":function(a,t,e){var i=e("qCtf");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},"9aPE":function(a,t,e){var i=e("E+jl");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},ASoH:function(a,t,e){"use strict";var i={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(e("PCwK"),e("KHd+")),n=Object(o.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[e("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"e69ac918",null);t.a=n.exports},ATD2:function(a,t,e){"use strict";e("4t/o")},"E+jl":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".logo{width:120px;margin-bottom:20px}h1{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px}h1,h2{color:#1b2539}h2{font-size:1.4375em;font-weight:500;margin-bottom:50px}@media only screen and (max-width:690px){h1{font-size:1.875em}h2{font-size:1.3125em}}@media only screen and (max-width:490px){h1{font-size:1.375em}h2{font-size:1.125em}}",""])},G6zf:function(a,t,e){"use strict";e.r(t);var i=e("o0o1"),o=e.n(i),n=e("A5+z"),r=e("bDRN"),l=e("4TWA"),s=e("eZ9V"),d=e("KnjL"),c=e("j8qy"),p=e("ASoH"),u=e("CjXH"),b=e("aSdZ"),m=e("TJPC"),v=e("L2JU"),f=e("vDqi"),g=e.n(f);function h(a,t,e,i,o,n,r){try{var l=a[n](r),s=l.value}catch(a){return void e(a)}l.done?t(s):Promise.resolve(s).then(i,o)}function x(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function _(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var y={name:"BillingsDetail",components:{AuthContentWrapper:r.a,ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,SettingsIcon:u.cb,SelectInput:l.a,AuthContent:c.a,AuthButton:p.a,FormLabel:s.a,required:m.a,InfoBox:d.a,Headline:b.a},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?x(Object(e),!0).forEach((function(t){_(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(v.b)(["countries"])),data:function(){return{isLoading:!1,billingInformation:{billing_phone_number:"",billing_postal_code:"",billing_vat_number:"",billing_address:"",billing_country:"",billing_state:"",billing_city:"",billing_name:""}}},methods:{billingInformationSubmit:function(){var a,t=this;return(a=o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.billingInformation.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:t.isLoading=!0,g.a.post("/api/setup/stripe-billings",t.billingInformation).then((function(){t.$router.push({name:"SubscriptionPlans"})})).catch((function(a){})).finally((function(){t.isLoading=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(i,o){var n=a.apply(t,e);function r(a){h(n,i,o,r,l,"next",a)}function l(a){h(n,i,o,r,l,"throw",a)}r(void 0)}))})()}},created:function(){this.$scrollTop()}},w=(e("qGKO"),e("KHd+")),k=Object(w.a)(y,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("Headline",{staticClass:"container mx-auto max-w-screen-sm",attrs:{title:"Setup Wizard",description:"Set up your billing information."}},[e("settings-icon",{staticClass:"title-icon text-theme mx-auto",attrs:{size:"40"}})],1),a._v(" "),e("ValidationObserver",{ref:"billingInformation",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.billingInformationSubmit(t)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("FormLabel",[a._v("Company Information")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Company Name:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_name,expression:"billingInformation.billing_name"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your company name",type:"text"},domProps:{value:a.billingInformation.billing_name},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_name",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("VAT Number:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Vat Number",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_vat_number,expression:"billingInformation.billing_vat_number"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your VAT number",type:"text"},domProps:{value:a.billingInformation.billing_vat_number},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_vat_number",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("FormLabel",{staticClass:"mt-70"},[a._v("Billing Information")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Country:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Country",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("SelectInput",{attrs:{options:a.countries,placeholder:"Select your billing country",isError:i[0]},model:{value:a.billingInformation.billing_country,callback:function(t){a.$set(a.billingInformation,"billing_country",t)},expression:"billingInformation.billing_country"}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Address:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Address",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_address,expression:"billingInformation.billing_address"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing address",type:"text"},domProps:{value:a.billingInformation.billing_address},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_address",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"wrapper-inline"},[e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing City:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing City",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_city,expression:"billingInformation.billing_city"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing city",type:"text"},domProps:{value:a.billingInformation.billing_city},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_city",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Postal Code:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Postal Code",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_postal_code,expression:"billingInformation.billing_postal_code"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing postal code",type:"text"},domProps:{value:a.billingInformation.billing_postal_code},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_postal_code",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1)]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing State:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing State",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_state,expression:"billingInformation.billing_state"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing state",type:"text"},domProps:{value:a.billingInformation.billing_state},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_state",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Billing Phone Number (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Phone Number"},scopedSlots:a._u([{key:"default",fn:function(t){var i=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_phone_number,expression:"billingInformation.billing_phone_number"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing phone number",type:"text"},domProps:{value:a.billingInformation.billing_phone_number},on:{input:function(t){t.target.composing||a.$set(a.billingInformation,"billing_phone_number",t.target.value)}}}),a._v(" "),i[0]?e("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Create Plans",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"7aba95c0",null);t.default=k.exports},Hzq6:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-1035a106]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-1035a106]{margin-right:10px}.form-label .icon circle[data-v-1035a106],.form-label .icon line[data-v-1035a106],.form-label .icon path[data-v-1035a106],.form-label .icon rect[data-v-1035a106]{color:inherit}.form-label .label[data-v-1035a106]{font-size:1.125em;font-weight:700}.dark .form-label .label[data-v-1035a106]{color:#bec6cf}",""])},I9DQ:function(a,t,e){var i=e("x0Ai");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},KnjL:function(a,t,e){"use strict";var i={name:"InfoBox",props:["type"]},o=(e("0go1"),e("KHd+")),n=Object(o.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"b202b3ae",null);t.a=n.exports},PCwK:function(a,t,e){"use strict";e("I9DQ")},SjQP:function(a,t,e){"use strict";e("9aPE")},"T9n/":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form.inline-form[data-v-7aba95c0]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-7aba95c0]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-7aba95c0]{position:absolute;left:0;bottom:-25px}.form.block-form .switch-wrapper[data-v-7aba95c0]{padding-bottom:13px;margin-bottom:13px;border-bottom:1px solid #f4f5f6}.form.block-form .switch-wrapper[data-v-7aba95c0]:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}.form.block-form .wrapper-inline[data-v-7aba95c0]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-7aba95c0]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-7aba95c0]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-7aba95c0]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-7aba95c0]:last-child{margin-bottom:0}.form.block-form .button[data-v-7aba95c0]{margin-top:50px}.form .inline-wrapper[data-v-7aba95c0]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-7aba95c0]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-7aba95c0]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.input-help[data-v-7aba95c0]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-7aba95c0]{display:flex}.single-line-form .submit-button[data-v-7aba95c0]{margin-left:20px}.error-message[data-v-7aba95c0]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-7aba95c0]{width:100%}input[type=email].is-error[data-v-7aba95c0],input[type=number].is-error[data-v-7aba95c0],input[type=password].is-error[data-v-7aba95c0],input[type=text].is-error[data-v-7aba95c0],textarea.is-error[data-v-7aba95c0]{border-color:#fd397a}input[type=email][data-v-7aba95c0]::-moz-placeholder,input[type=number][data-v-7aba95c0]::-moz-placeholder,input[type=password][data-v-7aba95c0]::-moz-placeholder,input[type=text][data-v-7aba95c0]::-moz-placeholder,textarea[data-v-7aba95c0]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-7aba95c0]:-ms-input-placeholder,input[type=number][data-v-7aba95c0]:-ms-input-placeholder,input[type=password][data-v-7aba95c0]:-ms-input-placeholder,input[type=text][data-v-7aba95c0]:-ms-input-placeholder,textarea[data-v-7aba95c0]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-7aba95c0]::placeholder,input[type=number][data-v-7aba95c0]::placeholder,input[type=password][data-v-7aba95c0]::placeholder,input[type=text][data-v-7aba95c0]::placeholder,textarea[data-v-7aba95c0]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-7aba95c0],input[type=number][disabled][data-v-7aba95c0],input[type=password][disabled][data-v-7aba95c0],input[type=text][disabled][data-v-7aba95c0],textarea[disabled][data-v-7aba95c0]{color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-7aba95c0]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-7aba95c0]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-7aba95c0],.additional-link b[data-v-7aba95c0]{cursor:pointer}.additional-link a[data-v-7aba95c0]:hover,.additional-link b[data-v-7aba95c0]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-7aba95c0]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-7aba95c0]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-7aba95c0],.form textarea[data-v-7aba95c0]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-7aba95c0]{display:block}.form.block-form .block-wrapper label[data-v-7aba95c0]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-7aba95c0]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-7aba95c0]{display:block}.form.inline-form .input-wrapper .error-message[data-v-7aba95c0]{position:relative;bottom:0}.form .button[data-v-7aba95c0]{padding:14px 32px}.single-line-form[data-v-7aba95c0]{display:block}.single-line-form .submit-button[data-v-7aba95c0]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-7aba95c0],input[type=number][data-v-7aba95c0],input[type=password][data-v-7aba95c0],input[type=text][data-v-7aba95c0],textarea[data-v-7aba95c0]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-7aba95c0]{display:block}}.dark .form .input-help[data-v-7aba95c0]{color:#7d858c}.dark .form.block-form .block-wrapper label[data-v-7aba95c0]{color:#bec6cf}.dark .form.block-form .switch-wrapper[data-v-7aba95c0]{border-color:hsla(0,0%,100%,.02)}.dark .form .inline-wrapper .switch-label .input-label[data-v-7aba95c0]{color:#bec6cf}.dark input[type=email][data-v-7aba95c0],.dark input[type=number][data-v-7aba95c0],.dark input[type=password][data-v-7aba95c0],.dark input[type=text][data-v-7aba95c0],.dark textarea[data-v-7aba95c0]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark input[type=email][data-v-7aba95c0]::-moz-placeholder,.dark input[type=number][data-v-7aba95c0]::-moz-placeholder,.dark input[type=password][data-v-7aba95c0]::-moz-placeholder,.dark input[type=text][data-v-7aba95c0]::-moz-placeholder,.dark textarea[data-v-7aba95c0]::-moz-placeholder{color:#7d858c}.dark input[type=email][data-v-7aba95c0]:-ms-input-placeholder,.dark input[type=number][data-v-7aba95c0]:-ms-input-placeholder,.dark input[type=password][data-v-7aba95c0]:-ms-input-placeholder,.dark input[type=text][data-v-7aba95c0]:-ms-input-placeholder,.dark textarea[data-v-7aba95c0]:-ms-input-placeholder{color:#7d858c}.dark input[type=email][data-v-7aba95c0]::placeholder,.dark input[type=number][data-v-7aba95c0]::placeholder,.dark input[type=password][data-v-7aba95c0]::placeholder,.dark input[type=text][data-v-7aba95c0]::placeholder,.dark textarea[data-v-7aba95c0]::placeholder{color:#7d858c}.dark input[type=email][disabled][data-v-7aba95c0],.dark input[type=number][disabled][data-v-7aba95c0],.dark input[type=password][disabled][data-v-7aba95c0],.dark input[type=text][disabled][data-v-7aba95c0],.dark textarea[disabled][data-v-7aba95c0]{color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark .popup-wrapper input[type=email][data-v-7aba95c0],.dark .popup-wrapper input[type=number][data-v-7aba95c0],.dark .popup-wrapper input[type=password][data-v-7aba95c0],.dark .popup-wrapper input[type=text][data-v-7aba95c0],.dark .popup-wrapper textarea[data-v-7aba95c0]{background:#25272c}.auth-logo-text[data-v-7aba95c0]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-7aba95c0]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-7aba95c0]{min-width:310px}.auth-form .additional-link a[data-v-7aba95c0]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-7aba95c0]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .block-form[data-v-7aba95c0]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-7aba95c0]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-7aba95c0]{width:100%}}@media only screen and (max-width:490px){.auth-form input[data-v-7aba95c0]{min-width:0}.auth-form .additional-link[data-v-7aba95c0]{font-size:.9375em}}.dark .auth-form .additional-link[data-v-7aba95c0],.dark .auth-form h1[data-v-7aba95c0],.dark .auth-form h2[data-v-7aba95c0]{color:#bec6cf}.content-headline[data-v-7aba95c0]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-7aba95c0]{min-width:0}.duplicator .duplicator-add-button[data-v-7aba95c0]{width:100%}.duplicator .duplicator-item[data-v-7aba95c0]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-7aba95c0]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-7aba95c0]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-7aba95c0]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-7aba95c0],.duplicator .duplicator-item textarea[data-v-7aba95c0]{box-shadow:none;background:#fafafa}.form[data-v-7aba95c0]{max-width:580px;text-align:left}.submit-wrapper[data-v-7aba95c0]{text-align:right}.submit-wrapper .button[data-v-7aba95c0]{margin:58px 0 50px;width:100%}.title-icon[data-v-7aba95c0]{margin-bottom:10px;-webkit-animation:spinner-data-v-7aba95c0 5s linear infinite;animation:spinner-data-v-7aba95c0 5s linear infinite}.title-icon circle[data-v-7aba95c0],.title-icon path[data-v-7aba95c0]{color:inherit}@-webkit-keyframes spinner-data-v-7aba95c0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-7aba95c0{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.dark .duplicator .duplicator-item[data-v-7aba95c0]{background:#1e2024}.dark .duplicator .duplicator-item input[data-v-7aba95c0],.dark .duplicator .duplicator-item textarea[data-v-7aba95c0]{background:#151515}",""])},TJPC:function(a,t,e){"use strict";e.d(t,"a",(function(){return n}));function i(a){return null==a}function o(a){return Array.isArray(a)&&0===a.length}var n={validate:function(a,t){var e=(void 0===t?{allowFalse:!0}:t).allowFalse,n={valid:!1,required:!0};return i(a)||o(a)?n:!1!==a||e?(n.valid=!!String(a).trim().length,n):n},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},aSdZ:function(a,t,e){"use strict";var i=e("L2JU");function o(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var r={name:"Headline",props:["description","title"],computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(i.b)(["config"]))},l=(e("SjQP"),e("KHd+")),s=Object(l.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[a._t("default"),a._v(" "),a.$slots.default?a._e():e("div",[a.config.app_logo?e("img",{staticClass:"logo mx-auto",attrs:{src:a.$getImage(a.config.app_logo),alt:a.config.app_name}}):a._e(),a._v(" "),a.config.app_logo?a._e():e("b",{staticClass:"auth-logo-text"},[a._v(a._s(a.config.app_name))])]),a._v(" "),e("h1",[a._v(a._s(a.title))]),a._v(" "),e("h2",[a._v(a._s(a.description))])],2)}),[],!1,null,null,null);t.a=s.exports},bDRN:function(a,t,e){"use strict";var i={name:"AuthContentWrapper"},o=e("KHd+"),n=Object(o.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"h-screen flex justify-center items-center"},[this._t("default")],2)}),[],!1,null,null,null);t.a=n.exports},eZ9V:function(a,t,e){"use strict";var i=e("CjXH"),o={name:"FormLabel",props:["icon"],components:{KeyIcon:i.K,Edit2Icon:i.u,SettingsIcon:i.cb,HardDriveIcon:i.F,SmartphoneIcon:i.eb}},n=(e("zthk"),e("KHd+")),r=Object(n.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"form-label"},[a.icon?a._e():e("edit-2-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}),a._v(" "),"settings"===a.icon?e("settings-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"hard-drive"===a.icon?e("hard-drive-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"smartphone"===a.icon?e("smartphone-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"key"===a.icon?e("key-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),e("b",{staticClass:"label"},[a._t("default")],2)],1)}),[],!1,null,"1035a106",null);t.a=r.exports},j8qy:function(a,t,e){"use strict";var i={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=e("KHd+"),n=Object(o.a)(i,(function(){var a=this.$createElement,t=this._self._c||a;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=n.exports},qCtf:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".info-box[data-v-b202b3ae]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-b202b3ae]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-b202b3ae],.info-box.error p[data-v-b202b3ae]{color:#fd397a}.info-box.error a[data-v-b202b3ae]{text-decoration:underline}.info-box p[data-v-b202b3ae]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-b202b3ae],.info-box p[data-v-b202b3ae] a{font-size:15px}.info-box p[data-v-b202b3ae] b{font-size:15px;font-weight:700}.info-box a[data-v-b202b3ae],.info-box b[data-v-b202b3ae]{font-weight:700}.info-box a[data-v-b202b3ae]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-b202b3ae]{margin-top:15px}.info-box ul[data-v-b202b3ae],.info-box ul li[data-v-b202b3ae],.info-box ul li a[data-v-b202b3ae]{display:block}@media only screen and (max-width:690px){.info-box[data-v-b202b3ae]{padding:15px}}.dark .info-box[data-v-b202b3ae]{background:#1e2024}.dark .info-box p[data-v-b202b3ae],.dark .info-box ul li[data-v-b202b3ae]{color:#bec6cf}",""])},qGKO:function(a,t,e){"use strict";e("qXH6")},qXH6:function(a,t,e){var i=e("T9n/");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},wR0I:function(a,t,e){var i=e("Hzq6");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(a.exports=i.locals)},x0Ai:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".button[data-v-e69ac918]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-e69ac918]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-e69ac918]{margin-left:12px;font-size:1em}.button.solid[data-v-e69ac918]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-e69ac918]{color:#fff}.button.outline[data-v-e69ac918]{border:2px solid #1b2539}.button.outline .text-label[data-v-e69ac918]{color:#1b2539}.button.outline .icon path[data-v-e69ac918]{fill:inherit}.button.outline[data-v-e69ac918]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-e69ac918]{color:inherit}.dark .button.outline[data-v-e69ac918]{background:#151515;border-color:#bec6cf}.dark .button.outline .text-label[data-v-e69ac918]{color:#bec6cf}.sync-alt[data-v-e69ac918]{-webkit-animation:spin-data-v-e69ac918 1s linear infinite;animation:spin-data-v-e69ac918 1s linear infinite}@-webkit-keyframes spin-data-v-e69ac918{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-e69ac918{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},zthk:function(a,t,e){"use strict";e("wR0I")}}]);