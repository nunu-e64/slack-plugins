!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";class Util{getUserIdFromMessage(e){for(e=e.closest(".c-virtual_list__item");;){let t=e.find(".c-message__gutter a.c-avatar").attr("href");if(t)return t.split("/")[2];if(0==(e=e.prev()).length)return null}}executeOnLoad(target,callback){const checker=()=>{let loaded=eval(target);return loaded?callback(loaded):setTimeout(checker,1)};checker()}}const util=new Util;__webpack_exports__.a=util},,function(e,t,s){"use strict";s.r(t);var n=s(0);var a=new class{constructor(){this.classAdded="wamei-added",this.buttons=[],this.mount()}append(e){return this.buttons.unshift(e),e.$element.on("mousedown",()=>{e.selectedMessage=window.getSelection().toString()||""}),this}mount(){const e=document.querySelector("div#messages_container");return this.observer=new MutationObserver(e=>{e.forEach(e=>{$(e.target).find("div.c-message_actions__container").not(`.${this.classAdded}`).addClass(this.classAdded).each((e,t)=>{const s=$(t),a=s.closest(".c-virtual_list__item"),i=a.find(".c-message__body").html()||"";let o="";a.find(".c-message__attachments").not(":has(.c-message_attachment__delete)").find(".c-message_attachment__body .c-message_attachment__row").each((e,t)=>{o+=`\n> ${$(t).html()}`;const s=$(t).find("a.c-message_attachment__title_link");s.length>0&&(o+=`\n> ${s.attr("href")}`)});const l=n.a.getUserIdFromMessage(a);this.buttons.forEach(e=>{e.wholeMessage=i+o,e.userId=l,e.isAvailable()&&s.prepend(e.$element)})})})}),this.observer.observe(e,{childList:!0,subtree:!0}),this}unmount(){return this.observer.disconnect(),this}};var i=new class{get $input(){return $("#msg_input > .ql-editor")}focus(){const e=this.$input.get(0),t=document.createRange(),s=window.getSelection();t.setStartAfter(e.lastChild),t.collapse(!0),s.removeAllRanges(),s.addRange(t),e.focus()}normalize(e){return e.replace(/(<\/blockquote>)/g,"$1\n").replace(/<br>/g,"\n")}convertNewline(e){return"<p>"+e.replace(/\n/g,"</p><p>")+"</p>"}quoteText(e){return">"+e.replace(/\n/g,"\n>").replace(/<.+?>/g,"")}isEmpty(){return this.$input.is(".ql-blank")}clear(){this.$input.empty()}appendText(e){this.$input.append(this.convertNewline(this.normalize(e)))}appendQuotedText(e){this.$input.append(this.convertNewline(this.quoteText(this.normalize(e))))}};class o{constructor(e,t,s){this.selectorMessage=".c-virtual_list__item",this.label=e,this.iconClass=t,this.callback=s,this.userId=null,this.selectedMessage=null,this.wholeMessage=null,this.initElement()}initElement(){this.$element=$(`<button class="c-button-unstyled c-message_actions__button ${this.label}" type="button" aria-haspopup="true" aria-label="${this.label}"><i class="c-icon ${this.iconClass}" aria-hidden="true"></i></button>`).click(this.callback.bind(this)).hover(()=>{const e=this.$element.offset(),t=$(`<div class="ReactModal__Content ReactModal__Content--after-open popover" tabindex="-1" aria-label="popover" style="position: absolute; left: ${e.left}px; top: ${e.top}px; outline: none; z-index:100000;"><div><div class="c-tooltip__tip c-tooltip__tip--top" data-qa="tooltip-tip">${this.label}<div class="c-tooltip__tip__arrow"></div></div></div></div>`).hide();$(document.body).append($(`<div class="ReactModalPortal" id="${this.label}-tooltip"></div>`).append('<div class="ReactModal__Overlay ReactModal__Overlay--after-open c-popover c-popover--no-pointer c-popover--z_below_menu c-popover--fade" aria-modal="true"></div>').append(t)),t.css("left",e.left-t.width()/2+20).css("top",e.top-t.height()).fadeIn(200)},()=>{$(`#${this.label}-tooltip`).remove()})}isAvailable(){return!0}get $message(){return this.$element.closest(this.selectorMessage)}}!function(){const e=new o("メッセージを引用する","ts_icon_quote",function(){i.isEmpty()&&i.clear(),""!=this.selectedMessage?i.appendQuotedText(`${this.selectedMessage}`):i.appendQuotedText(`${this.wholeMessage}`),i.appendText(""),i.focus()}),t=new o("メッセージに返信する",'c-icon--share-action" style="transform: scale(-1, 1);"',function(){const e=this.userId,t=TS.model.members.filter(t=>t.id==e)[0],s=t._display_name_normalized_lc||t._real_name_normalized_lc;i.isEmpty()&&i.clear(),i.appendText(`<ts-mention data-id="${e}" data-label="@${s}" spellcheck="false" class="ts_tip_texty">@${s}</ts-mention> `),""!=this.selectedMessage&&(i.appendQuotedText(`${this.selectedMessage}`),i.appendText("")),i.focus()});t.isAvailable=function(){return!(!t.userId||0==t.userId.indexOf("B"))},a.append(t),a.append(e)}()}]);