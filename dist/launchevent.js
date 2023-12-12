function onMessageSendHandler(e){Office.context.mailbox.item.body.getAsync("text",{asyncContext:e},getBodyCallback)}function getBodyCallback(e){const t=e.asyncContext;let n="";if(e.status===Office.AsyncResultStatus.Failed||void 0===e.value){const e="Failed to get body text";return console.error(e),void t.completed({allowEvent:!1,errorMessage:e})}n=e.value,hasMatches(n)?Office.context.mailbox.item.getAttachmentsAsync({asyncContext:t},getAttachmentsCallback):t.completed({allowEvent:!0})}function hasMatches(e){if(null==e||""==e)return!1;const t=["send","picture","document","attachment"];for(let n=0;n<t.length;n++){const o=t[n].trim();if(RegExp(o,"i").test(e))return!0}return!1}function getAttachmentsCallback(e){const t=e.asyncContext;if(e.value.length>0){for(let n=0;n<e.value.length;n++)if(0==e.value[n].isInline)return void t.completed({allowEvent:!0});t.completed({allowEvent:!1,errorMessage:"Looks like the body of your message includes an image or an inline file. Attach a copy to the message before sending."})}else t.completed({allowEvent:!1,errorMessage:"Looks like you're forgetting to include an attachment."})}Office.context.platform!==Office.PlatformType.PC&&null!=Office.context.platform||Office.actions.associate("onMessageSendHandler",onMessageSendHandler);