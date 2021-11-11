(()=>{"use strict";var e={7606:(e,t,r)=>{var n={};r.r(n),r.d(n,{resetTimer:()=>re,resize:()=>ie,setTick:()=>oe,setTimer:()=>ne,startTimer:()=>ee,stopTimer:()=>te});var o=r(7378),i=r(1542),a=r(8036),c=r(5106);r(9724);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={workingTime:25,littleBreakTime:5,bigBreakTime:20,pomodorosInRound:4,pomodorosInDay:10},m=function(e,t,r){if(1===e[r]&&"DECREASE"===t||60===e[r]&&"INCREASE"===t)return e;var n=1;return"DECREASE"===t&&(n=-1),u(u({},e),{},l({},r,e[r]+n))};const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"INCREASE":case"DECREASE":return m(e,r,n);default:return e}};var d=2*Math.PI*180;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g={title:"Let`s get to work!",mode:"stopped",isStarted:!1,completedPomodoros:0,timeLeft:1500,step:d/1500,dashOffset:d,circumference:d,radius:180},h=function(e,t){var r=2*Math.PI*e.radius;return b(b({},g),{},{timeLeft:60*t,step:r/(60*t),dashOffset:r,circumference:r,radius:e.radius})},O=function(e,t,r,n){var o=n.workingTime;return"bigBreak"===t?o=n.bigBreakTime:"littleBreak"===t&&(o=n.littleBreakTime),b(b({},e),{},{mode:t,title:r,step:2*Math.PI*e.radius/(60*o),timeLeft:60*o,dashOffset:2*Math.PI*e.radius,completedPomodoros:"working"===t?e.completedPomodoros:e.completedPomodoros+1})},E=function(e,t){if("working"===e.mode&&0===e.timeLeft){var r=e.completedPomodoros+1;return r===t.pomodorosInDay?h(e,t.workingTime):r===t.pomodorosInRound?O(e,"bigBreak","Big break, warm up!",t):O(e,"littleBreak","Take a short break and carry on!",t)}return"littleBreak"!==e.mode&&"bigBreak"!==e.mode||0!==e.timeLeft?b(b({},e),{},{timeLeft:e.timeLeft-1,dashOffset:e.dashOffset-e.step}):e.completedPomodoros===t.pomodorosInDay?h(e,t.workingTime):O(e,"working","Stay focused for the rest of your time.",t)};const w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case"START_TIMER":return b(b({},e),{},{isStarted:!0,mode:"working",title:"Stay focused for the rest of your time."});case"STOP_TIMER":return b(b({},e),{},{isStarted:!1,mode:"stopped",title:"Keep going!"});case"RESET_TIMER":return h(e,n);case"SET_TIMER":return b(b({},e),{},{timeLeft:60*n,dashOffset:2*Math.PI*e.radius,step:e.circumference/(60*n)});case"SET_TICK":return E(e,n);case"RESIZE":var o=2*Math.PI*n.radius,i=o/(60*n.workingTime);return b(b({},e),{},{step:i,dashOffset:o-i*(60*n.workingTime-e.timeLeft),circumference:o,radius:n.radius});default:return e}};const j=(0,c.UY)({settings:p,timer:w});window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.qC;var T=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(e){return}}(),S=(0,c.MT)(j,T);S.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(e){}}({settings:S.getState().settings})}));const P=S;r(7471),r(2571);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const I=function(e){e.styles;var t=R(e,["styles"]);return o.createElement("svg",k({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{d:"M22.683 9.394l-1.88-.239a9.45 9.45 0 00-.569-1.374l1.161-1.495a1.486 1.486 0 00-.122-1.979l-1.575-1.575a1.49 1.49 0 00-1.985-.127L16.22 3.766a9.416 9.416 0 00-1.375-.569l-.239-1.877A1.498 1.498 0 0013.12 0h-2.24c-.757 0-1.396.567-1.486 1.317l-.239 1.88a9.307 9.307 0 00-1.375.569L6.286 2.605a1.488 1.488 0 00-1.979.122L2.732 4.301a1.49 1.49 0 00-.127 1.986l1.161 1.494a9.34 9.34 0 00-.569 1.374l-1.877.239C.567 9.484 0 10.123 0 10.88v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 1.495a1.486 1.486 0 00.122 1.979l1.575 1.575a1.492 1.492 0 001.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 1.396-.567 1.486-1.317l.239-1.88a9.45 9.45 0 001.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575a1.49 1.49 0 00.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239a1.498 1.498 0 001.32-1.486v-2.24a1.496 1.496 0 00-1.316-1.486zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}))};r(5613),r(1013);var x=r(3615),_=r.n(x);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const C=function(e){e.styles;var t=N(e,["styles"]);return o.createElement("svg",D({viewBox:"0 0 448 448",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{d:"M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"}))};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const B=function(e){e.styles;var t=M(e,["styles"]);return o.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 124 124"},t),o.createElement("path",{d:"M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"}))},A={SettingsItem:"_1EFS0_VJVGVHMrU1e24UNb",Value:"_1DZcaH0460lwrWmtWBdtNw"};var q=o.memo((function(e){var t=e.title,r=e.value,n=e.isTime,i=e.onDecrease,a=e.onIncrease;return o.createElement("div",{className:A.SettingsItem},o.createElement("span",{className:A.SettingsName},t),o.createElement("div",null,o.createElement("button",{type:"button",onClick:i,"aria-label":"Decrease"},o.createElement(B,null)),n?o.createElement("span",{className:A.Value},r," min"):o.createElement("span",{className:A.Value},r," "),o.createElement("button",{type:"button",onClick:a,"aria-label":"Increase"},o.createElement(C,null))))}),(function(e,t){return e.value===t.value}));q.propTypes={title:_().string,value:_().number,isTime:_().bool,onDecrease:_().func.isRequired,onIncrease:_().func.isRequired},q.defaultProps={title:"Hello!",value:0,isTime:!1};const z=q,H="_1_-KO2AzNUND0CWC9LRCNb",V="_3tPNL9aD2tZNwqxixMSwt3";var U=[{settingName:"workingTime",title:"Working time",isTime:!0},{settingName:"littleBreakTime",title:"Litle break",isTime:!0},{settingName:"bigBreakTime",title:"Big break",isTime:!0},{settingName:"pomodorosInRound",title:"Pomodoros in a round",isTime:!1},{settingName:"pomodorosInDay",title:"Pomodoros in a day",isTime:!1}],J=function(e){var t=e.isOpen,r=e.onDecrease,n=e.onIncrease,i=[H];return t&&i.push(V),o.createElement("div",{className:i.join(" ")},U.map((function(t){var i=t.settingName,a=t.title,c=t.isTime;return o.createElement(z,{key:i,title:a,value:e[i],isTime:c,onDecrease:function(){return r(i)},onIncrease:function(){return n(i)}})})))};J.propTypes={isOpen:_().bool,onDecrease:_().func.isRequired,onIncrease:_().func.isRequired},J.defaultProps={isOpen:!1};const F=(0,a.$j)((function(e){return e.settings}),(function(e){return{onIncrease:function(t){return e(function(e){return{type:"INCREASE",payload:e}}(t))},onDecrease:function(t){return e(function(e){return{type:"DECREASE",payload:e}}(t))}}}))(J),K="_2joLhW0xTUyuja_BoAJj",W="A5KTsT5lbCyBFIkJsMsia";function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const G=o.memo((function(){var e=X((0,o.useState)(!1),2),t=e[0],r=e[1],n=(0,o.useCallback)((function(){r(!t)}),[t]);return o.createElement(o.Fragment,null,o.createElement("header",{className:K},o.createElement("h1",null,"PomodoRo"),o.createElement("button",{type:"button",className:W,onClick:n,"aria-label":"Settings"},o.createElement(I,null))),o.createElement(F,{isOpen:t}))})),Q="_3r3ZdLo862kNJ7UbGHUVAB";var $=function(e){var t=e.title;return o.createElement("h2",{className:Q},t)};$.propTypes={title:_().string},$.defaultProps={title:"Hello!"};const Y=$;var ee=function(){return{type:"START_TIMER"}},te=function(){return{type:"STOP_TIMER"}},re=function(e){return{type:"RESET_TIMER",payload:e}},ne=function(e){return{type:"SET_TIMER",payload:e}},oe=function(e){return{type:"SET_TICK",payload:e}},ie=function(e){return{type:"RESIZE",payload:e}};function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const se=function(e){e.styles;var t=ce(e,["styles"]);return o.createElement("svg",ae({viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},t),o.createElement("path",{d:"M437.09 74.98C388.78 26.63 324.55 0 256.234 0 194.656 0 136.07 21.809 89.707 61.7L40.105 12.96l-9.937 168.51 171.3-12.668-48.609-45.028c29.422-23.101 65.57-35.668 103.375-35.668 92.493 0 167.743 75.317 167.743 167.895s-75.25 167.898-167.743 167.898c-42.464 0-82.976-15.918-114.078-44.816-30.933-28.75-49.797-67.687-53.11-109.644l-1.093-13.817H0l.95 15.895C9.015 406.367 121.147 512 256.233 512c68.317 0 132.547-26.629 180.856-74.98C485.395 388.668 512 324.379 512 256s-26.605-132.668-74.91-181.02zm0 0"}))};function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const fe=function(e){e.styles;var t=le(e,["styles"]);return o.createElement("svg",ue({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 163.861 163.861"},t),o.createElement("path",{d:"M34.857 3.613C20.084-4.861 8.107 2.081 8.107 19.106v125.637c0 17.042 11.977 23.975 26.75 15.509L144.67 97.275c14.778-8.477 14.778-22.211 0-30.686L34.857 3.613z"}))};function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const de=function(e){e.styles;var t=pe(e,["styles"]);return o.createElement("svg",me({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),o.createElement("path",{d:"M181.333 0H74.667c-17.643 0-32 14.357-32 32v448c0 17.643 14.357 32 32 32h106.667c17.643 0 32-14.357 32-32V32c-.001-17.643-14.358-32-32.001-32zm256 0H330.667c-17.643 0-32 14.357-32 32v448c0 17.643 14.357 32 32 32h106.667c17.643 0 32-14.357 32-32V32c-.001-17.643-14.358-32-32.001-32z"}))};function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const ve=function(e){e.styles;var t=be(e,["styles"]);return o.createElement("svg",ye({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 320"},t),o.createElement("path",{d:"M288 0H32C14.368 0 0 14.368 0 32v256c0 17.632 14.368 32 32 32h256c17.632 0 32-14.368 32-32V32c0-17.632-14.368-32-32-32z"}))},ge="_39LJaJz2hOmR2BGfPT-lPz";var he=function(e){var t=e.isStarted,r=e.start,n=e.stop,i=e.reset;return o.createElement("div",{className:ge},o.createElement("button",{type:"button",onClick:i,"aria-label":"Reset"},o.createElement(se,null)),t?o.createElement("button",{type:"button",onClick:n,"aria-label":"Pause"},o.createElement(de,null)):o.createElement("button",{type:"button",onClick:r,"aria-label":"Start"},o.createElement(fe,null)),o.createElement("button",{type:"button",onClick:n,disabled:!t,"aria-label":"Stop"},o.createElement(ve,null)))};he.propTypes={isStarted:_().bool,start:_().func.isRequired,stop:_().func.isRequired,reset:_().func.isRequired},he.defaultProps={isStarted:!1};const Oe=(0,a.$j)((function(e){return{isStarted:e.timer.isStarted}}),(function(e,t){var r=t.time;return{start:function(){return e(ee())},stop:function(){return e(te())},reset:function(){return e(re(r))}}}))(he);r(3238),r(895),r(2228);const Ee="_2n2VjFU0kb9AKJanl29ww",we="mXQifvfpaG1kNafH4LQFS",je="_3JhkR48fiOJKpuwXh0njLl";var Te=function(e){return e.toString().padStart(2,"0")},Se=function(e){var t=e.timeLeft,r=e.completedPomodoros,n=e.pomodorosInDay,i=Te(Math.floor(t/60)),a=Te(t-60*i);return o.createElement("div",{className:Ee},o.createElement("div",{className:we},o.createElement("span",null,i),o.createElement("span",null,":"),o.createElement("span",null,a)),o.createElement("span",{className:je},r," of ",n," sessions"))};Se.propTypes={timeLeft:_().number.isRequired,completedPomodoros:_().number.isRequired,pomodorosInDay:_().number.isRequired};const Pe=Se;r(3938);const ke="_3CvinvcfRUs_rN30Ll13X";var Re=o.memo((function(e){var t=e.radius,r=e.circumference,n=e.dashOffset;return o.createElement("svg",{className:ke},o.createElement("circle",{r:t,cx:t+5,cy:t+5,fill:"none",strokeDasharray:r}),o.createElement("circle",{r:t,cx:t+5,cy:t+5,fill:"none",strokeDasharray:r,strokeDashoffset:n,strokeLinecap:"round",transform:"rotate(-90,".concat(t+5,",").concat(t+5,")")}))}));Re.propTypes={radius:_().number.isRequired,circumference:_().number.isRequired,dashOffset:_().number.isRequired};const Ie=Re,xe="_8-DGmlklw3nXRggCUqyl8";var _e=function(e){var t=e.settings,r=e.timer,n=e.updateTick,i=e.updateTimer,a=e.updateOnResize,c=t.workingTime,s=t.pomodorosInDay,u=r.isStarted,l=r.dashOffset,f=r.timeLeft,m=r.completedPomodoros,p=r.radius,d=r.circumference;return(0,o.useEffect)((function(){var e=function(){var e=window.innerWidth;switch(!0){case e<=481:a({radius:140,workingTime:c});break;case e>481:a({radius:180,workingTime:c})}};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[a,c]),(0,o.useEffect)((function(){var e;return u&&(e=setInterval((function(){n(t)}),1e3)),function(){return clearInterval(e)}}),[t,u,n]),(0,o.useEffect)((function(){i(c)}),[i,c]),o.createElement("div",{className:xe},o.createElement(Ie,{radius:p,circumference:d,dashOffset:l}),o.createElement(Pe,{timeLeft:f,completedPomodoros:m,pomodorosInDay:s}))};_e.propTypes={settings:_().shape({workingTime:_().number,pomodorosInDay:_().number,bigBreakTime:_().number,littleBreakTime:_().number,pomodorosInRound:_().number}).isRequired,timer:_().shape({isStarted:_().bool,dashOffset:_().number,timeLeft:_().number,completedPomodoros:_().number,circumference:_().number,radius:_().number}).isRequired,updateTick:_().func.isRequired,updateTimer:_().func.isRequired,updateOnResize:_().func.isRequired};const De=(0,a.$j)((function(e){return{settings:e.settings,timer:e.timer}}),(function(e){var t=(0,c.DE)(n,e),r=t.setTimer,o=t.setTick,i=t.resize;return{updateTick:function(e){return o(e)},updateTimer:function(e){return r(e)},updateOnResize:function(e){return i(e)}}}))(_e),Ne="_1bd8YT5WaROAQPN7CBDww4";const Ce=function(){return o.createElement("div",{className:Ne},"Error!")};function Le(e){return(Le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Be(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Ve(e);if(t){var o=Ve(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return ze(this,r)}}function ze(e,t){return!t||"object"!==Le(t)&&"function"!=typeof t?He(e):t}function He(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ve(e){return(Ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Je=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(a,e);var t,r,n,i=qe(a);function a(){var e;Me(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Ue(He(e=i.call.apply(i,[this].concat(r))),"state",{hasError:!1}),e}return t=a,(r=[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?o.createElement(Ce,null):t}}])&&Be(t.prototype,r),n&&Be(t,n),a}(o.Component);Je.propTypes={children:_().element.isRequired};const Fe=Je,Ke="Cv4kjRT9cogKQZ6t5dBut";var We=function(e){var t=e.title,r=e.workingTime;return o.createElement(o.Fragment,null,o.createElement("main",{className:Ke},o.createElement(Y,{title:t}),o.createElement(Fe,null,o.createElement(De,null)),o.createElement(Oe,{time:r})))};We.propTypes={title:_().string,workingTime:_().number},We.defaultProps={title:"Hello!",workingTime:25};const Xe=(0,a.$j)((function(e){return{title:e.timer.title,workingTime:e.settings.workingTime}}))(We),Ze="_3dFQPd8p6zzATxuk-sPp5q";const Ge=function(){return o.createElement("div",{className:Ze},o.createElement(G,null),o.createElement(Xe,null))};i.render(o.createElement(a.zt,{store:P},o.createElement(Ge,null)),document.getElementById("root"))}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0},t=[[7606,582]],n=e=>{},o=(o,i)=>{for(var a,c,[s,u,l,f]=i,m=0,p=[];m<s.length;m++)c=s[m],r.o(e,c)&&e[c]&&p.push(e[c][0]),e[c]=0;for(a in u)r.o(u,a)&&(r.m[a]=u[a]);for(l&&l(r),o&&o(i);p.length;)p.shift()();return f&&t.push.apply(t,f),n()},i=self.webpackChunk=self.webpackChunk||[];function a(){for(var n,o=0;o<t.length;o++){for(var i=t[o],a=!0,c=1;c<i.length;c++){var s=i[c];0!==e[s]&&(a=!1)}a&&(t.splice(o--,1),n=r(r.s=i[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var c=r.x;r.x=()=>(r.x=c||(e=>{}),(n=a)())})(),r.x()})();