!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=7)}({7:function(e,t,s){"use strict";s.r(t);class i{constructor(){this.$element=$("<style>"),this.$css=$("<p>"),this.add()}css(e,t){return this.$css.css(e,t),this.$element.html(this.$css.attr("style")),this}style(e){return this.$css.attr("style",e),this.$element.html(this.$css.attr("style")),this}add(){this.$element.appendTo($("body"))}remove(){this.$element.remove()}}!function(){const e=new class extends i{constructor(){super(),this.storageKey="wsp-font-size",this.defaultSize=14,this.minSize=8,this.fontSize=localStorage.getItem(this.storageKey)-0||this.defaultSize,this.set()}increase(){this.fontSize++,this.set(),this.save()}decrease(){this.fontSize--,this.fontSize<this.minSize&&(this.fontSize=this.minSize),this.set(),this.save()}reset(){this.fontSize=this.defaultSize,this.set(),this.save()}set(){this.style(`[lang="ja-JP"] .c-message { font-size: ${this.fontSize}px; } pre.c-mrkdwn__pre { font-size: ${this.fontSize}px; line-height: 1; }`)}save(){localStorage.setItem(this.storageKey,this.fontSize)}};$(document).on("keyup",function(t){t.altKey&&(187==t.keyCode?e.increase():189==t.keyCode?e.decrease():48==t.keyCode&&e.reset())})}()}});