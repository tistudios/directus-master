parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"zF3H":[function(require,module,exports) {
"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],B=t?1e3:1024;if(!1===Boolean(e))return"--";if(Math.abs(e)<B)return"".concat(e," B");var i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=-1,n=e;do{n/=B,o+=1}while(Math.abs(n)>=B&&o<i.length-1);return"".concat(n.toFixed(1)," ").concat(i[o])}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"ihOc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("../../../mixins/interface")),t=u(require("./format-size"));function u(e){return e&&e.__esModule?e:{default:e}}var i={mixins:[e.default],data:function(){return{reducedValue:"1",units:"1",unitChoices:{1:"B",1000:"kB",1000000:"MB",1000000000:"GB",1000000000000:"TB",1000000000000000:"PB",1000000000000000000:"EB"}}},created:function(){this.value<1e3?(this.reducedValue=this.value,this.units="1"):this.value<1e6?(this.reducedValue=this.value/1e3,this.units="1000"):this.value<1e9?(this.reducedValue=this.value/1e6,this.units="1000000"):this.value<1e12?(this.reducedValue=this.value/1e9,this.units="1000000000"):this.value<1e15?(this.reducedValue=this.value/1e12,this.units="1000000000000"):this.value<1e18?(this.reducedValue=this.value/1e15,this.units="1000000000000000"):(this.reducedValue=this.value/1e18,this.units="1000000000000000000")},methods:{formatSize:t.default,calculateValue:function(){var e=Math.round(this.reducedValue*this.units);this.$emit("input",e)}}};exports.default=i;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.options.formatInput?a("div",[a("v-input",{staticClass:"interface-file-size",attrs:{type:"number",readonly:e.readonly,placeholder:e.options.placeholder},on:{input:e.calculateValue},model:{value:e.reducedValue,callback:function(t){e.reducedValue=t},expression:"reducedValue"}}),a("v-select",{staticClass:"interface-file-size-units",attrs:{readonly:e.readonly,id:e.name,options:e.unitChoices,placeholder:e.options.placeholder},on:{input:e.calculateValue},model:{value:e.units,callback:function(t){e.units=t},expression:"units"}})],1):a("div",[a("v-input",{staticClass:"interface-file-size",attrs:{type:"number",readonly:e.readonly,placeholder:e.options.placeholder,value:e.value},on:{input:function(t){return e.$emit("input",t)}}}),e._v(" "),a("span",{staticClass:"interface-file-size-formatted"},[e._v(" ("+e._s(e.formatSize(e.value,!0))+") ")])],1)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-48528c",functional:void 0});})();
},{"../../../mixins/interface":"QdEO","./format-size":"zF3H"}]},{},["ihOc"], "__DirectusExtension__")