import"./hoisted.CthQMFK-.js";const a=document.querySelector(".btn-left"),i=document.querySelector(".btn-right"),t=document.querySelector("#slider"),r=document.querySelectorAll(".slider-section"),d=document.getElementById("fullscreenBtn");a?.addEventListener("click",l=>m());i?.addEventListener("click",l=>u());d?.addEventListener("click",()=>f());let e=0,n=0,c=100/r.length;function u(){if(n>=r.length-1){n=0,e=0,t.style.transform=`translate(-${e}%)`,t.style.transition="none";return}n++,e=e+c,t.style.transform=`translate(-${e}%)`,t.style.transition="all ease .6s"}function m(){if(n--,n<0){n=r.length-1,e=c*(r.length-1),t.style.transform=`translate(-${e}%)`,t.style.transition="none";return}e=e-c,t.style.transform=`translate(-${e}%)`,t.style.transition="all ease .6s"}function f(){const l=document.querySelector(".container-carousel");document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().then(()=>{document.body.classList.remove("fullscreen")}):l?.requestFullscreen().then(()=>{document.body.classList.add("fullscreen")}).catch(o=>{console.error(`Error al activar pantalla completa: ${o.message}`)})}document.addEventListener("DOMContentLoaded",()=>{const l=document.getElementById("fullscreenButton");function o(){document.getElementById("pdfView")?.requestFullscreen().catch(s=>{console.error(`Error al activar pantalla completa: ${s.message}`)})}l?.addEventListener("click",o)});
