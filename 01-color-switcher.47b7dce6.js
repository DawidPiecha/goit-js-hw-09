const t=document.body,e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let a=null;e.addEventListener("click",(()=>{a=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e}),1e3),e.disabled=!0,d.disabled=!1})),d.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1,d.disabled=!0})),d.disabled=!0;
//# sourceMappingURL=01-color-switcher.47b7dce6.js.map
