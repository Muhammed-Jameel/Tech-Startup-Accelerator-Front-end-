"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@babel/helper-module-imports"),r=e(require("@babel/traverse")),o=require("babel-plugin-macros"),n=e(require("babel-plugin-styled-components"));function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var i=o.createMacro((function(e){var o,i=e.references,l=e.state,u=e.babel.types,s=e.config,c=(s=void 0===s?{}:s).importModuleName,p=void 0===c?"styled-components":c,f=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(s,["importModuleName"]),d=l.file.path;Object.keys(i).forEach((function(e){var r;"default"===e?(r=t.addDefault(d,p,{nameHint:"styled"}),o=r):r=t.addNamed(d,e,p,{nameHint:e}),i[e].forEach((function(e){e.node.name=r.name}))}));var m=a({},l,{opts:a({},f,{topLevelImportPaths:(f.topLevelImportPaths||[]).concat(p)}),customImportName:o});r(d.parent,n({types:u}).visitor,void 0,m)}),{configName:"styledComponents"});exports.default=i;
//# sourceMappingURL=styled-components-macro.cjs.js.map