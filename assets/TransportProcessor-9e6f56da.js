var i=Object.defineProperty;var o=(e,s,r)=>s in e?i(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r;var a=(e,s,r)=>(o(e,typeof s!="symbol"?s+"":s,r),r);(function(){"use strict";class e extends AudioWorkletProcessor{constructor(t){super(t);a(this,"handleMessage",t=>{t.data&&t.data.type==="ping"?this.port.postMessage(t.data):t.data==="start"?this.started=!0:t.data==="pause"?this.started=!1:t.data==="stop"&&(this.started=!1,this.currentTime=0)});this.port.addEventListener("message",this.handleMessage),this.port.start(),this.stated=!1}process(t,p,d){return this.started&&this.port.postMessage({type:"bang",currentTime}),!0}}registerProcessor("transport",e)})();
