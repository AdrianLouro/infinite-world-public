import{c,b as r,a as d,W as p,d as f,L as g}from"./TerrainBackgroundRule-CPMsgeNx.js";import{d as h,e as _,f as m,g as b,o as w,h as v,i as s,j as t}from"./index--uw6PT5T.js";const L=h({__name:"D100DungeonWorldView",setup(D){const o=_();m(()=>{o.enable()});const a=c(f,e=>e,e=>e),n=[r(e=>e.terrain==="1",new URL("/infinite-world-public/assets/1-De2cyiOT.png",import.meta.url).href),r(e=>e.terrain==="2",new URL("/infinite-world-public/assets/2-h6S4G-hi.png",import.meta.url).href),d(()=>!0,"#ffffff")];return(e,S)=>{const i=t("draggable"),l=t("zoomable"),u=t("hud-toggle");return b((w(),v(p,{"terrains-options":s(a),"terrains-background-rules":n,"land-shape":s(g).Square,"show-locations":!1,"show-dungeons":!1,"show-rotate-button":!0,"show-notes-button":!0,"initial-size":1},null,8,["terrains-options","land-shape"])),[[i],[l],[u]])}}});export{L as default};
