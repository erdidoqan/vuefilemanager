(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"6RfX":function(t,e,n){"use strict";n("lxZf")},"8+zO":function(t,e,n){"use strict";n.r(e);var o=n("XdRL"),i=n("gQwf"),r=n("RXD1"),a=n("t5U/"),l=n("G7DB"),c=n("Hi0u"),u=n("0gRs"),s=n("c4kp"),p=n("2QtR"),d=n("axtU"),b=n("uFbu"),m=n("L2JU"),v=n("xCqy");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _={name:"Trash",components:{MobileActionButtonUpload:r.a,MobileMultiSelectToolbar:l.a,MobileActionButton:a.a,MobileContextMenu:c.a,ToolbarButton:u.a,OptionGroup:d.a,FileBrowser:s.a,ContextMenu:p.a,Option:b.a,FileActionsMobile:i.a,EmptyFilePage:o.a},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(m.b)(["clipboard"])),data:function(){return{item:void 0}},created:function(){var t=this;this.$store.dispatch("getTrash",this.$route.params.id),v.a.$on("context-menu:show",(function(e,n){return t.item=n})),v.a.$on("mobile-context-menu:show",(function(e){return t.item=e}))}},h=n("KHd+"),$=Object(h.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ContextMenu",{scopedSlots:t._u([{key:"empty-select",fn:function(){return[n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.empty_trash"),icon:"empty-trash"},nativeOn:{click:function(e){return t.$emptyTrash(e)}}})],1)]},proxy:!0},t.item?{key:"single-select",fn:function(){return[n("OptionGroup",[t.item?n("Option",{attrs:{title:t.$t("context_menu.restore"),icon:"restore"},nativeOn:{click:function(e){return t.$restoreFileOrFolder(t.item)}}}):t._e(),t._v(" "),t.item?n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}}):t._e(),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.empty_trash"),icon:"empty-trash"},nativeOn:{click:function(e){return t.$emptyTrash(e)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.detail"),icon:"detail"},nativeOn:{click:function(e){return t.$openInDetailPanel(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}:null,t.item?{key:"multiple-select",fn:function(){return[n("OptionGroup",[t.item?n("Option",{attrs:{title:t.$t("context_menu.restore"),icon:"restore"},nativeOn:{click:function(e){return t.$restoreFileOrFolder(t.item)}}}):t._e(),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}}),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.empty_trash"),icon:"empty-trash"},nativeOn:{click:function(e){return t.$emptyTrash(e)}}})],1),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)]},proxy:!0}:null],null,!0)}),t._v(" "),n("MobileContextMenu",[t.item?n("OptionGroup",[t.item?n("Option",{attrs:{title:t.$t("context_menu.restore"),icon:"restore"},nativeOn:{click:function(e){return t.$restoreFileOrFolder(t.item)}}}):t._e(),t._v(" "),n("Option",{attrs:{title:t.$t("context_menu.delete"),icon:"trash"},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.item)}}})],1):t._e(),t._v(" "),n("OptionGroup",[n("Option",{attrs:{title:t.$t("context_menu.download"),icon:"download"},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)],1),t._v(" "),n("FileActionsMobile",[n("MobileActionButton",{attrs:{icon:"search"},nativeOn:{click:function(e){return t.$openSpotlight(e)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("Spotlight"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:t.$getCurrentSectionIcon()},nativeOn:{click:function(e){return t.$showMobileMenu("file-filter")}}},[t._v("\n\t\t\t\t"+t._s(t.$getCurrentSectionName())+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"trash"},nativeOn:{click:function(e){return t.$emptyTrash(e)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("context_menu.empty_trash"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"check-square"},nativeOn:{click:function(e){return t.$enableMultiSelectMode(e)}}},[t._v("\n\t\t\t\t"+t._s(t.$t("context_menu.select"))+"\n\t\t\t")]),t._v(" "),n("MobileActionButton",{attrs:{icon:"preview-sorting"},nativeOn:{click:function(e){return t.$showMobileMenu("file-sorting")}}},[t._v("\n\t\t\t\t"+t._s(t.$t("preview_sorting.preview_sorting_button"))+"\n\t\t\t")])],1),t._v(" "),n("EmptyFilePage",[n("h1",{staticClass:"title"},[t._v(t._s(t.$t("Your Trash is Empty")))])]),t._v(" "),n("FileBrowser"),t._v(" "),n("MobileMultiSelectToolbar",[n("ToolbarButton",{staticClass:"action-btn",class:{"is-inactive":t.clipboard.length<1},attrs:{source:"trash",action:t.$t("actions.delete")},nativeOn:{click:function(e){return t.$deleteFileOrFolder(t.clipboard)}}}),t._v(" "),n("ToolbarButton",{staticClass:"action-btn",attrs:{source:"download",action:t.$t("actions.download")},nativeOn:{click:function(e){return t.$downloadSelection(t.item)}}})],1)],1)}),[],!1,null,null,null);e.default=$.exports},RXD1:function(t,e,n){"use strict";var o=n("CjXH"),i={name:"MobileActionButtonUpload",components:{CloudPlusIcon:n("gn/r").a,UploadCloudIcon:o.lb},methods:{emmitFiles:function(t){this.$uploadFiles(t.target.files)}}},r=(n("6RfX"),n("KHd+")),a=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"mobile-action-button"},[e("div",{staticClass:"flex"},[e("cloud-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}),this._v(" "),e("label",{staticClass:"label button file-input button-base",attrs:{label:"file"}},[this._t("default"),this._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"file",type:"file",name:"files[]",multiple:""},on:{change:this.emmitFiles}})],2)],1)])}),[],!1,null,"a92eeb06",null);e.a=a.exports},lxZf:function(t,e,n){var o=n("o/0A");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,i);o.locals&&(t.exports=o.locals)},"o/0A":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".mobile-action-button[data-v-a92eeb06]{background:#f4f5f6;margin-right:8px;border-radius:8px;padding:7px 14px;cursor:pointer;border:none}.mobile-action-button .flex[data-v-a92eeb06]{display:flex;align-items:center}.mobile-action-button .icon[data-v-a92eeb06]{vertical-align:middle;margin-right:10px;font-size:.875em}.mobile-action-button .label[data-v-a92eeb06]{vertical-align:middle;font-size:.875em;font-weight:700;color:#1b2539}.dark .mobile-action-button[data-v-a92eeb06]{background:#1e2024}.dark .mobile-action-button circle[data-v-a92eeb06],.dark .mobile-action-button line[data-v-a92eeb06],.dark .mobile-action-button path[data-v-a92eeb06],.dark .mobile-action-button polyline[data-v-a92eeb06],.dark .mobile-action-button rect[data-v-a92eeb06]{color:inherit}.dark .mobile-action-button .label[data-v-a92eeb06]{color:#bec6cf}",""])}}]);