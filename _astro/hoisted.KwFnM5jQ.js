import"./hoisted.CthQMFK-.js";const c=document.querySelector(".btn-left"),i=document.querySelector(".btn-right"),t=document.querySelector("#slider"),l=document.querySelectorAll(".slider-section"),a=document.getElementById("fullscreenBtn");c?.addEventListener("click",r=>d());i?.addEventListener("click",r=>u());a?.addEventListener("click",()=>m());let e=0,n=0,s=100/l.length;function u(){if(n>=l.length-1){n=0,e=0,t.style.transform=`translate(-${e}%)`,t.style.transition="none";return}n++,e=e+s,t.style.transform=`translate(-${e}%)`,t.style.transition="all ease .6s"}function d(){if(n--,n<0){n=l.length-1,e=s*(l.length-1),t.style.transform=`translate(-${e}%)`,t.style.transition="none";return}e=e-s,t.style.transform=`translate(-${e}%)`,t.style.transition="all ease .6s"}function m(){const r=document.querySelector(".container-carousel");document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().then(()=>{document.body.classList.remove("fullscreen")}):r?.requestFullscreen().then(()=>{document.body.classList.add("fullscreen")}).catch(o=>{console.error(`Error al activar pantalla completa: ${o.message}`)})}
