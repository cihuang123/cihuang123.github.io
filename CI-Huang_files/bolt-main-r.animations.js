(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{1231:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.init=function(e){var n=e.model,t=e.manager,i=e.pageId;return t.setDefinitions(n),t.initAction("screenIn",i),(0,a.default)({model:n,manager:t})};var i,a=(i=t(1232))&&i.__esModule?i:{default:i}},1232:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=e.model,t=e.manager,i="screenIn",a=.01,o={};function r(e){var n=e.filter(function(e){return e.visible}).map(function(e){return{compId:e.id,action:i}});t.trigger(n)}function s(e,n){var t=o[n]||function(e,n){var t={root:null,rootMargin:"0px",threshold:[n]};return new window.IntersectionObserver(function(n,t){var i=n.map(function(e){return{visible:e.isIntersecting,ratio:e.intersectionRatio,rect:e.intersectionRect,id:e.target.id}});n.forEach(function(e){return e.isIntersecting&&t.unobserve(e.target)}),e(i)},t)}(r,n);t.observe(e),o[n]||(o[n]=t)}return{start:function(){var e=window.innerHeight;Object.keys(n).filter(function(e){return Object.keys(n[e]).indexOf(i)>-1}).forEach(function(o){var r=document.getElementById(o);r&&s(r,r.offsetHeight>e?a:function(e,n,t){var a=n[t][i][0].name;return e.animationProperties[a].viewportThreshold}(t,n,o))})},stop:function(){Object.keys(o).forEach(function(e){return o[e].disconnect()}),o={}}}}},1233:function(e,n,t){"use strict";function i(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function a(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.AnimationManager=void 0;var r=function(e,n){return"".concat(e,"-").concat(n)};var s=function(){function e(n,t){var i=n.santaAnimations,a=n.tweenEngineAndFactory;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.animator=i.create(a,void 0,t),this.animationProperties=i.animationProperties,this.definitions={},this.sessionState={played:new Map,running:new Map},this.localState={screenIn:{played:new Map}}}var n,t,s;return n=e,(t=[{key:"_shouldSkipPlayedAnimation",value:function(e){var n=this.localState.screenIn.played.has(e),t=this.sessionState.played.has(e),i=this.sessionState.played.get(e)||{},a=i.playOnce,o=i.persistOnNav;return n||t&&(a||o)}},{key:"_shouldHideComponent",value:function(e,n){var t=this.definitions[e];if(t){var i=t[n];if(i){var a=this.animationProperties;return i.some(function(e){var n=e.name;return a[n]&&a[n].hideOnStart})}}return!1}},{key:"_hideComponent",value:function(e){var n=document.getElementById(e);n&&(n.style.opacity=0)}},{key:"_unhideComponent",value:function(e){var n=document.getElementById(e);n&&(n.style.opacity="")}},{key:"getAnimatorInstance",value:function(){return this.animator}},{key:"setDefinitions",value:function(e){this.definitions=e}},{key:"_hideCompBeforeAnimation",value:function(e,n){var t=r(e,n);this._shouldSkipPlayedAnimation(t)||this._hideComponent(e)}},{key:"hideBeforeAnimation",value:function(e){var n=this;(function(e,n,t){return Object.entries(e).reduce(function(e,i){var a=o(i,2),r=a[0],s=a[1];return(t?[t]:Object.keys(s)).forEach(function(t){(s[t]||[]).some(function(e){var t=e.name;return n[t]&&n[t].hideOnStart})&&e.push([r,t])}),e},[])})(this.definitions,this.animationProperties,e).forEach(function(e){var t=o(e,2),i=t[0],a=t[1];n._hideCompBeforeAnimation(i,a)})}},{key:"resetLocalAndSessionStates",value:function(){[this.localState.screenIn.played,this.sessionState.played,this.sessionState.running].forEach(function(e){return e.clear()})}},{key:"trigger",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=n.reduce(function(n,t){var i=t.compId,a=t.action,o=(e.definitions[i]||{})[a]||[];return n.concat(o)},[]);t.forEach(function(n){var t=n.action,a=i(n,["action"]);return e.executeAnimation(t,a)})}},{key:"initAction",value:function(e,n){switch(e){case"screenIn":this.stopAnimations([e],{idToKeep:n}),this.clearLocalStore(e,n),this.hideBeforeAnimation(e)}}},{key:"initComponentAction",value:function(e,n,t){var i=t.clearStore;(void 0===i||i)&&this.clearCompLocalStore(e,n),this._shouldHideComponent(e,n)&&this._hideCompBeforeAnimation(e,n)}},{key:"executeAnimation",value:function(e,n){var t=this,i=n.name,a=n.targetId,o=n.pageId,s=n.duration,c=void 0===s?0:s,u=n.delay,l=void 0===u?0:u,d=n.playOnce,f=void 0!==d&&d,p=n.persistOnNav,v=void 0!==p&&p,h=n.params,m=void 0===h?{}:h,y=r(a,e);switch(e){case"screenIn":if(this._shouldSkipPlayedAnimation(y))break;var g=this.animator.sequence({callbacks:{onStart:function(n){return t.sessionState.running.set(n,{targetId:a,action:e,id:o})},onComplete:function(e){return t.sessionState.running.delete(e)},onInterrupt:function(e){return t.sessionState.running.delete(e)}}}),w={props:"clip,clipPath,webkitClipPath,willChange,opacity,transform,transform-origin",immediateRender:!1},S=document.querySelector("#".concat(a));g.add(this.animator.animate(i,S,c,l,m),0).add(this.animator.animate("BaseClear",S,0,0,w)),this.localState.screenIn.played.set(y,{targetId:a,id:o}),this.sessionState.played.set(y,{playOnce:f,persistOnNav:v})}}},{key:"preventPendingScreenInAnimation",value:function(e){var n=r(e,"screenIn");this.localState.screenIn.played.set(n,{targetId:e}),this._unhideComponent(e)}},{key:"stopAnimations",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.skipPersistent,a=void 0===i||i,o=t.idToKeep;this.sessionState.running.forEach(function(t,i){var s=t.targetId,c=t.action,u=t.id,l=r(s,c),d=!n.length||n.includes(c),f=a&&e.sessionState.played.get(l).persistOnNav;d&&!f&&o!==u&&e.animator.kill(i,1)})}},{key:"clearLocalStore",value:function(e,n){var t=this,i=n.idToKeep,a=this.localState[e];a&&a.played.forEach(function(e,n){var o=e.targetId,r=e.id;t.definitions[o]&&i===r||a.played.delete(n)})}},{key:"clearCompLocalStore",value:function(e,n){var t=this.localState[n];if(t){var i=r(e,n);t.played.delete(i)}}}])&&a(n.prototype,t),s&&a(n,s),e}();n.AnimationManager=s},152:function(e,n,t){"use strict";var i=t(1227),a=t(1229),o=t(1231).init,r=t(1233).AnimationManager,s=null;e.exports={runWarmupAnimations:function(e,n,t,c,u,l){var d,f=e["santa-animations"],p=e.gsap3,v=e.TweenMax,h=e.TimelineMax,m=e.ScrollToPlugin3;return d=function(){var e=l?i.create(p.gsap,[m.ScrollToPlugin]):a.create(v,h),d=new r({santaAnimations:f,tweenEngineAndFactory:e},n),y=window.warmupData&&!t&&window.warmupData.animationData||{},g=window.rootNavigationInfo?window.rootNavigationInfo.pageId:"",w=!!Object.keys(y).length;s=o({manager:d,model:y,pageId:g}),w&&(s.start(),u(!0)),c(d)},void("loading"===document.readyState?window.document.addEventListener("DOMContentLoaded",d):Promise.resolve().then(d))},stopWarmupAnimations:function(){return s&&s.stop()}}}}]);
//# sourceMappingURL=bolt-main-r.animations.js.map