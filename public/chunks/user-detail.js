(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"0T7M":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".select[data-v-0a75dd76]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-0a75dd76]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-0a75dd76]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-0a75dd76]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-0a75dd76]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-0a75dd76]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-0a75dd76]:last-child{border-bottom:none}.input-area[data-v-0a75dd76]{border:1px solid transparent;justify-content:space-between;align-items:center;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-0a75dd76],.input-area .chevron[data-v-0a75dd76]{transition:all .15s ease}.input-area.is-active .chevron[data-v-0a75dd76]{transform:rotate(180deg)}.input-area.is-error[data-v-0a75dd76]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-0a75dd76]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-0a75dd76]{margin-top:-4px;vertical-align:middle}.option-icon svg circle[data-v-0a75dd76],.option-icon svg line[data-v-0a75dd76],.option-icon svg path[data-v-0a75dd76]{color:inherit}.option-value[data-v-0a75dd76]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-0a75dd76]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-0a75dd76]{transition:all .15s ease}.slide-in-enter[data-v-0a75dd76]{opacity:0;transform:translateY(-50px)}.dark .select-search[data-v-0a75dd76]{background:#1e2024}.dark .select-search .search-input[data-v-0a75dd76]{background:#151515}.dark .input-area[data-v-0a75dd76]{background:#1e2024;border-color:#1e2024}.dark .popup-wrapper .input-area[data-v-0a75dd76]{background:#25272c}.dark .input-options[data-v-0a75dd76]{background:#1e2024}.dark .input-options .option-item[data-v-0a75dd76]{border-bottom:none}.dark .input-options .option-item[data-v-0a75dd76]:hover{background:#2a2c32}.dark .input-options .option-item:hover .option-icon circle[data-v-0a75dd76],.dark .input-options .option-item:hover .option-icon path[data-v-0a75dd76]{color:inherit}.dark .input-options .option-item[data-v-0a75dd76]:last-child{border-bottom:none}.dark .option-value.placehoder[data-v-0a75dd76]{color:#7d858c}",""])},"23b/":function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),i=a.n(s),r=a("UD3w"),n=a("KnjL"),o=a("gahf"),d=a("qefO"),l=a("A5+z"),c=a("4TWA"),p=a("eZ9V"),u=a("Nv84"),v=a("13Td"),h=a("TJPC"),b=a("L2JU"),f=a("xCqy"),m=a("vDqi"),_=a.n(m);function g(t,e,a,s,i,r,n){try{var o=t[r](n),d=o.value}catch(t){return void a(t)}o.done?e(d):Promise.resolve(d).then(s,i)}function x(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function y(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var k={name:"UserDetail",props:["user"],components:{AppInputText:r.a,PageTabGroup:o.a,PageTab:d.a,InfoBox:n.a,FormLabel:p.a,ValidationProvider:l.ValidationProvider,ValidationObserver:l.ValidationObserver,SelectInput:c.a,ButtonBase:u.a,SetupBox:v.a,required:h.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(Object(a),!0).forEach((function(e){y(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(b.b)(["roles","config"])),data:function(){return{isLoading:!1,isSendingRequest:!1,userRole:void 0}},methods:{changeRole:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.changeRole.validate();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:e.isSendingRequest=!0,_.a.post(e.$store.getters.api+"/admin/users/"+e.$route.params.id+"/role",{attributes:{role:e.userRole},_method:"patch"}).then((function(){e.$refs.changeRole.reset(),e.$emit("reload-user"),f.a.$emit("toaster",{type:"success",message:e.$t("toaster.changed_user")})})).catch((function(){f.a.$emit("alert:open",{title:e.$t("popup_error.title"),message:e.$t("popup_error.message")})})).finally((function(){e.isSendingRequest=!1}));case 7:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function n(t){g(r,s,i,n,o,"next",t)}function o(t){g(r,s,i,n,o,"throw",t)}n(void 0)}))})()}}},w=a("KHd+"),C=Object(w.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageTab",[a("div",{staticClass:"card shadow-card"},[a("FormLabel",[t._v("\n                "+t._s(t.$t("user_box_role.title"))+"\n            ")]),t._v(" "),a("InfoBox",[a("p",[t._v(t._s(t.$t("user_box_role.description")))])]),t._v(" "),a("ValidationObserver",{ref:"changeRole",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),t.changeRole(e)}},scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[a("ValidationProvider",{attrs:{tag:"div",mode:"passive",name:"Role",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("AppInputText",{attrs:{title:t.$t("admin_page_user.select_role"),error:s[0],"is-last":!0}},[a("div",{staticClass:"flex space-x-4"},[a("SelectInput",{attrs:{options:t.$translateSelectOptions(t.roles),placeholder:t.$t("admin_page_user.select_role"),isError:s[0]},model:{value:t.userRole,callback:function(e){t.userRole=e},expression:"userRole"}}),t._v(" "),a("ButtonBase",{staticClass:"submit-button",attrs:{loading:t.isSendingRequest,disabled:t.isSendingRequest,type:"submit","button-style":"theme"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("admin_page_user.save_role"))+"\n\t\t\t\t\t\t\t")])],1)])]}}],null,!0)})]}}])})],1),t._v(" "),a("div",{staticClass:"card shadow-card"},[a("FormLabel",[t._v(t._s(t.$t("admin_page_user.label_person_info")))]),t._v(" "),a("AppInputText",{attrs:{title:t.$t("page_registration.label_email")}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("page_registration.placeholder_email"),type:"email",disabled:""},domProps:{value:t.user.data.attributes.email}})]),t._v(" "),a("AppInputText",{attrs:{title:t.$t("page_registration.label_name"),"is-last":!0}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{placeholder:t.$t("page_registration.placeholder_name"),type:"text",disabled:""},domProps:{value:t.user.data.relationships.settings.data.attributes.name}})])],1),t._v(" "),a("div",{staticClass:"card shadow-card"},[a("FormLabel",[t._v(t._s(t.$t("user_settings.title_billing")))]),t._v(" "),a("AppInputText",{attrs:{title:t.$t("user_settings.name")}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{type:"text",disabled:""},domProps:{value:t.user.data.relationships.settings.data.attributes.name}})]),t._v(" "),a("AppInputText",{attrs:{title:t.$t("user_settings.address")}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{type:"text",disabled:""},domProps:{value:t.user.data.relationships.settings.data.attributes.address}})]),t._v(" "),a("AppInputText",{attrs:{title:t.$t("user_settings.country")}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{type:"text",disabled:""},domProps:{value:t.user.data.relationships.settings.data.attributes.country}})]),t._v(" "),a("div",{staticClass:"flex space-x-4"},[a("AppInputText",{staticClass:"w-full",attrs:{title:t.$t("user_settings.city")}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{type:"text",disabled:""},domProps:{value:t.user.data.relationships.settings.data.attributes.city}})]),t._v(" "),a("AppInputText",{staticClass:"w-full",attrs:{title:t.$t("user_settings.postal_code")}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{type:"text",disabled:""},domProps:{value:t.user.data.relationships.settings.data.attributes.postal_code}})])],1),t._v(" "),a("AppInputText",{attrs:{title:t.$t("user_settings.state")}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{type:"text",disabled:""},domProps:{value:t.user.data.relationships.settings.data.attributes.state}})]),t._v(" "),a("AppInputText",{attrs:{title:t.$t("user_settings.phone_number"),"is-last":!0}},[a("input",{staticClass:"focus-border-theme input-dark",attrs:{type:"text",disabled:""},domProps:{value:t.user.data.relationships.settings.data.attributes.phone_number}})])],1)])}),[],!1,null,null,null);e.default=C.exports},"4TWA":function(t,e,a){"use strict";var s=a("CjXH"),i=a("LvDl"),r={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:s.u,UserIcon:s.nb,ChevronDownIcon:s.g},watch:{query:Object(i.debounce)((function(t){this.searchedResults=Object(i.omitBy)(this.options,(function(e){return!e.label.toLowerCase().includes(t.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(t){this.$emit("input",t.value),this.selected=t,this.isOpen=!1},openMenu:function(){var t=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return t.$refs.search.focus()}))}},created:function(){var t=this;this.default&&(this.selected=this.options.find((function(e){return e.value===t.default})))}},n=(a("ATD2"),a("KHd+")),o=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select"},[a("div",{staticClass:"input-area bg-light-background rounded-lg",class:{"is-active":t.isOpen,"is-error":t.isError},on:{click:t.openMenu}},[t.selected?a("div",{staticClass:"selected"},[t.selected.icon?a("div",{staticClass:"option-icon"},["user"===t.selected.icon?a("user-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===t.selected.icon?a("edit2-icon",{staticClass:"text-theme dark-text-theme",attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),a("span",{staticClass:"option-value"},[t._v(t._s(t.selected.label))])]):t._e(),t._v(" "),t.selected?t._e():a("div",{staticClass:"not-selected"},[a("span",{staticClass:"option-value placehoder"},[t._v(t._s(t.placeholder))])]),t._v(" "),a("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),t._v(" "),a("transition",{attrs:{name:"slide-in"}},[t.isOpen?a("div",{staticClass:"input-options rounded-lg"},[t.options.length>5?a("div",{staticClass:"select-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme rounded-lg",attrs:{type:"text",placeholder:t.$t("select_search_placeholder")},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]):t._e(),t._v(" "),a("ul",{staticClass:"option-list"},t._l(t.optionList,(function(e,s){return a("li",{key:s,staticClass:"option-item",on:{click:function(a){return t.selectOption(e)}}},[e.icon?a("div",{staticClass:"option-icon"},["user"===e.icon?a("user-icon",{attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===e.icon?a("edit2-icon",{attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),a("span",{staticClass:"option-value"},[t._v(t._s(e.label))])])})),0)]):t._e()])],1)}),[],!1,null,"0a75dd76",null);e.a=o.exports},"4t/o":function(t,e,a){var s=a("0T7M");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},ATD2:function(t,e,a){"use strict";a("4t/o")},UD3w:function(t,e,a){"use strict";var s={name:"AppInputText",props:["description","isLast","title","error"]},i=a("KHd+"),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"mb-7":!t.isLast}},[t.title?a("label",{staticClass:"text-sm font-bold dark:text-gray-400 text-gray-700 mb-1.5 block"},[t._v("\n\t\t"+t._s(t.title)+":\n\t")]):t._e(),t._v(" "),t._t("default"),t._v(" "),t.description?a("small",{staticClass:"text-xs text-gray-500 pt-2 leading-4 block",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.error?a("span",{staticClass:"text-red-700 pt-2 text-xs"},[t._v("\n\t\t"+t._s(t.error)+"\n\t")]):t._e()],2)}),[],!1,null,null,null);e.a=r.exports}}]);