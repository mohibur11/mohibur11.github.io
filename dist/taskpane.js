!function(){var t={27091:function(t){"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},44944:function(t,e,n){"use strict";t.exports=n.p+"assets/logo-filled.png"},49499:function(t,e,n){"use strict";t.exports=n.p+"85b83baccb34ce0cf6b4.js"},41149:function(t,e,n){"use strict";t.exports=n.p+"36d4df60bb637ec24ac3.js"},36076:function(t,e,n){"use strict";t.exports=n.p+"efd9bc316e2f17466635.js"},58038:function(t,e,n){"use strict";t.exports=n.p+"863701159dff7d04fb46.js"},79254:function(t,e,n){"use strict";t.exports=n.p+"be2420b78c019f609330.js"},66039:function(t,e,n){"use strict";t.exports=n.p+"4cc5d58837ef495cacb2.js"},60806:function(t,e,n){"use strict";t.exports=n.p+"6c1a030a2a709fde5af7.css"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!t;)t=i[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){"use strict";var t,e;function n(t){$("#error-display").hide(),$("#not-configured").hide(),$("#gist-list-container").show(),getUserGists(t,(function(t,e){e||($("#gist-list").empty(),buildGistList($("#gist-list"),t,i))}))}function i(){$("#insert-button").removeAttr("disabled"),$(".ms-ListItem").removeClass("is-selected").removeAttr("checked"),$(this).children(".ms-ListItem").addClass("is-selected").attr("checked","checked")}function o(t){$("#not-configured").hide(),$("#gist-list-container").hide(),$("#error-display").text(t),$("#error-display").show()}function s(i){t=JSON.parse(i.message),setConfig(t,(function(i){e.close(),e=null,n(t.gitHubUserName)}))}function r(t){e=null}Office.initialize=function(i){jQuery(document).ready((function(){(t=getConfig())&&t.gitHubUserName?n(t.gitHubUserName):$("#not-configured").show(),$("#insert-button").on("click",(function(){var t=$(".ms-ListItem.is-selected").val();getGist(t,(function(t,e){t?buildBodyContent(t,(function(t,e){t?Office.context.mailbox.item.body.setSelectedDataAsync(t,{coercionType:Office.CoercionType.Html},(function(t){t.status===Office.AsyncResultStatus.Failed&&o("Could not insert gist: "+t.error.message)})):o("Could not create insertable content: "+e)})):o("Could not retrieve gist: "+e)}))})),$("#settings-icon").on("click",(function(){var n=new URI("dialog.html").absoluteTo(window.location).toString();t&&(n=n+"?gitHubUserName="+t.gitHubUserName+"&defaultGistId="+t.defaultGistId),Office.context.ui.displayDialogAsync(n,{width:20,height:40,displayInIframe:!0},(function(t){(e=t.value).addEventHandler(Office.EventType.DialogMessageReceived,s),e.addEventHandler(Office.EventType.DialogEventReceived,r)}))}))}))}}(),function(){"use strict";var t=n(27091),e=n.n(t),i=new URL(n(60806),n.b),o=new URL(n(44944),n.b),s=new URL(n(58038),n.b),r=new URL(n(79254),n.b),c=new URL(n(66039),n.b),u=new URL(n(49499),n.b),a=new URL(n(41149),n.b),f=new URL(n(36076),n.b);e()(i),e()(o),e()(s),e()(r),e()(c),e()(u),e()(a),e()(f)}()}();
//# sourceMappingURL=taskpane.js.map