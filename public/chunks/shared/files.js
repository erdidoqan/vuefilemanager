(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"02JJ":function(t,e,n){"use strict";n.r(e);var o=n("XdRL"),i=n("gQwf"),r=n("G7DB"),l=n("t5U/"),a=n("Hi0u"),c=n("xcnA"),s=n("0gRs"),u=n("dH5z"),p=n("bpVB"),d=n("c4kp"),v=n("2QtR"),m=n("axtU"),f=n("uFbu"),_=n("xCqy"),b=n("L2JU");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $={name:"Files",components:{MobileMultiSelectToolbar:r.a,MobileActionButton:l.a,MobileContextMenu:a.a,MobileCreateMenu:c.a,ToolbarButton:s.a,OptionUpload:u.a,ButtonUpload:p.a,OptionGroup:m.a,FileBrowser:d.a,ContextMenu:v.a,Option:f.a,FileActionsMobile:i.a,EmptyFilePage:o.a},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(b.b)(["clipboard"])),data:function(){return{item:void 0}},methods:{createFolder:function(){_.a.$emit("popup:open",{name:"create-folder"})}},created:function(){var t=this;this.$store.dispatch("getSharedFolder",this.$route.params.id),_.a.$on("context-menu:show",(function(e,n){return t.item=n})),_.a.$on("mobile-context-menu:show",(function(e){return t.item=e}))}},x=n("KHd+"),y=Object(x.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MobileContextMenu",{scopedSlots:t._u([{key:"editor",fn:function(){return[n("OptionGroup",[t.item?n("Option",{attrs:{title:t.$t("context_menu.rename"),icon:"rename"},nativeOn:{click:function(e){return t.$renameFileOrFolder(t.item)}}}):t._e(),t._v(" "),t.item?n("Option",{attrs:{title:t.$t("context_menu.move"),icon:"move-item"},nativeOn:{click:function(e){return t.$moveFileOrFolder(t.item)}}}):t._e(),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0},{key:"visitor",fn:function(){return[n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}])}),t._v(" "),n("MobileCreateMenu",[n("OptionGroup",[n("OptionUpload",{attrs:{title:t.$t("actions.upload"),"is-hover-disabled":"true"}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("actions.create_folder"),icon:"folder-plus","is-hover-disabled":"true"},nativeOn:{click:function(e){return e.stopPropagation(),t.createFolder.apply(null,arguments)}}})],1)],1),t._v(" "),n("MobileMultiSelectToolbar",{scopedSlots:t._u([{key:"visitor",fn:function(){return[n("ToolbarButton",{staticClass:"action-btn",attrs:{source:"download",action:t.$t("actions.download")},nativeOn:{click:function(e){return t.downloadItem.apply(null,arguments)}}})]},proxy:!0},{key:"editor",fn:function(){return[n("ToolbarButton",{staticClass:"action-btn",class:{"is-inactive":t.clipboard.length<1},attrs:{source:"move",action:t.$t("actions.move")},nativeOn:{click:function(e){return t.$moveFileOrFolder(t.clipboard)}}}),t._v(" "),n("ToolbarButton",{staticClass:"action-btn",class:{"is-inactive":t.clipboard.length<1},attrs:{source:"trash",action:t.$t("actions.delete")},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.clipboard)}}}),t._v(" "),n("ToolbarButton",{staticClass:"action-btn",attrs:{source:"download",action:t.$t("actions.download")},nativeOn:{click:function(e){return t.downloadItem.apply(null,arguments)}}})]},proxy:!0}])}),t._v(" "),n("ContextMenu",{scopedSlots:t._u([t.$checkPermission("editor")?{key:"empty-select",fn:function(){return[n("OptionGroup",[n("OptionUpload",{attrs:{title:t.$t("actions.upload")}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.create_folder"),icon:"create-folder"},nativeOn:{click:function(e){return t.$createFolder.apply(null,arguments)}}})],1)]},proxy:!0}:null,t.item?{key:"single-select",fn:function(){return[t.$checkPermission("editor")?n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.rename"),icon:"rename"},nativeOn:{click:function(e){return t.$renameFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.move"),icon:"move-item"},nativeOn:{click:function(e){return t.$moveFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1):t._e(),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.detail"),icon:"detail"},nativeOn:{click:function(e){return t.$openInDetailPanel(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}:null,t.item?{key:"multiple-select",fn:function(){return[t.$checkPermission("editor")?n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.move"),icon:"move-item"},nativeOn:{click:function(e){return t.$moveFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1):t._e(),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}:null],null,!0)}),t._v(" "),n("FileActionsMobile",[t.$checkPermission("editor")?[n("MobileActionButton",{attrs:{icon:"search"},nativeOn:{click:function(e){return t.$openSpotlight()}}},[t._v("\n\t\t\t\t"+t._s(t.$t("Spotlight"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"cloud-plus"},nativeOn:{click:function(e){return t.$showMobileMenu("create-list")}}},[t._v("\n\t\t\t\t"+t._s(t.$t("mobile.create"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"check-square"},nativeOn:{click:function(e){return t.$enableMultiSelectMode.apply(null,arguments)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("context_menu.select"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"preview-sorting"},nativeOn:{click:function(e){return t.$showMobileMenu("file-sorting")}}},[t._v("\n\t\t\t\t"+t._s(t.$t("preview_sorting.preview_sorting_button"))+"\n\t\t\t")])]:t._e(),t._v(" "),t.$checkPermission("visitor")?[n("MobileActionButton",{attrs:{icon:"search"},nativeOn:{click:function(e){return t.$openSpotlight()}}},[t._v("\n\t\t\t\t"+t._s(t.$t("Spotlight"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"check-square"},nativeOn:{click:function(e){return t.$enableMultiSelectMode.apply(null,arguments)}}},[t._v("\n\t\t\t   "+t._s(t.$t("context_menu.select"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"preview-sorting"},nativeOn:{click:function(e){return t.$showMobileMenu("file-sorting")}}},[t._v("\n\t\t\t\t"+t._s(t.$t("preview_sorting.preview_sorting_button"))+"\n\t\t\t")])]:t._e()],2),t._v(" "),n("EmptyFilePage",[t.$checkPermission("editor")?[n("h1",{staticClass:"title"},[t._v("\n\t\t\t\t"+t._s(t.$t("empty_page.title"))+"\n\t\t\t")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n\t\t\t\t"+t._s(t.$t("empty_page.description"))+"\n\t\t\t")]),t._v(" "),n("ButtonUpload",{attrs:{"button-style":"theme"}},[t._v("\n\t\t\t\t"+t._s(t.$t("empty_page.call_to_action"))+"\n\t\t\t")])]:t._e(),t._v(" "),t.$checkPermission("visitor")?[n("h1",{staticClass:"title"},[t._v("\n\t\t\t\t"+t._s(t.$t("empty_page.title"))+"\n\t\t\t")])]:t._e()],2),t._v(" "),n("FileBrowser")],1)}),[],!1,null,null,null);e.default=y.exports},"0RFd":function(t,e,n){var o=n("f3j1");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,i);o.locals&&(t.exports=o.locals)},"3QIs":function(t,e,n){"use strict";n("0RFd")},"7gkV":function(t,e,n){"use strict";n("Luh+")},"Luh+":function(t,e,n){var o=n("XpyM");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,i);o.locals&&(t.exports=o.locals)},XpyM:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".menu-option[data-v-533f0740]{white-space:nowrap;font-weight:700;font-size:.875em;padding:15px 20px;cursor:pointer;width:100%;color:#1b2539;display:flex;align-items:center}.menu-option .icon-left[data-v-533f0740]{margin-right:20px;line-height:0}.menu-option .icon-left circle[data-v-533f0740],.menu-option .icon-left line[data-v-533f0740],.menu-option .icon-left path[data-v-533f0740],.menu-option .icon-left polygon[data-v-533f0740],.menu-option .icon-left polyline[data-v-533f0740],.menu-option .icon-left rect[data-v-533f0740]{color:inherit}.menu-option .text-label[data-v-533f0740]{font-size:1em}.dark .menu-option[data-v-533f0740]{color:#bec6cf}",""])},bpVB:function(t,e,n){"use strict";var o={name:"ButtonBase",props:["buttonStyle"],data:function(){return{files:void 0}},methods:{emmitFiles:function(t){this.$uploadFiles(t.target.files)}}},i=(n("3QIs"),n("KHd+")),r=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"button file-input button-base",class:this.buttonStyle,attrs:{label:"file"}},[this._t("default"),this._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{accept:"*",id:"file",type:"file",name:"files[]",multiple:""},on:{change:this.emmitFiles}})],2)}),[],!1,null,"473134a0",null);e.a=r.exports},dH5z:function(t,e,n){"use strict";n("xCqy");var o={name:"Option",props:["title"],components:{UploadCloudIcon:n("CjXH").vb},methods:{emmitFiles:function(t){this.$uploadFiles(t.target.files)}}},i=(n("7gkV"),n("KHd+")),r=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"menu-option group",attrs:{for:"file"}},[e("div",{staticClass:"icon-left group-hover-text-theme"},[e("upload-cloud-icon",{staticClass:"group-hover-text-theme",attrs:{size:"17"}})],1),this._v(" "),e("div",{staticClass:"text-label group-hover-text-theme"},[this._v("\n            "+this._s(this.title)+"\n\t\t\t"),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"file",type:"file",name:"files[]",multiple:""},on:{change:this.emmitFiles}})])])}),[],!1,null,"533f0740",null);e.a=r.exports},f3j1:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".button-base[data-v-473134a0]{font-size:.9375em;font-weight:700;cursor:pointer;transition:all .15s ease;border-radius:8px;border:0;padding:10px 28px;display:inline-block}.button-base[data-v-473134a0]:active{transform:scale(.95)}.button-base.secondary[data-v-473134a0]{color:#1b2539;background:#f4f5f6}",""])},xcnA:function(t,e,n){"use strict";var o=n("WHe5"),i=n("6Z3Y"),r=n("xCqy"),l={name:"MobileContextMenu",components:{MenuMobileGroup:o.a,MenuMobile:i.a},methods:{closeMenu:function(){r.a.$emit("mobile-menu:hide")}}},a=n("KHd+"),c=Object(a.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MenuMobile",{attrs:{name:"create-list"},nativeOn:{"!click":function(e){return t.closeMenu.apply(null,arguments)}}},[n("MenuMobileGroup",[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=c.exports}}]);