import{c,b as r,a as d,W as p,L as f}from"./TerrainBackgroundRule-BdIpNk6Z.js";import{d as g,e as h,f as _,g as m,o as b,h as w,i as s,k as v,j as t}from"./index-BrE0ty5X.js";const L=g({__name:"D100DungeonWorldView",setup(D){const o=h();_(()=>{o.enable()});const a=c(v,e=>e,e=>e),n=[r(e=>e.terrain==="1",new URL("/infinite-world-public/assets/1-De2cyiOT.png",import.meta.url).href),r(e=>e.terrain==="2",new URL("/infinite-world-public/assets/2-h6S4G-hi.png",import.meta.url).href),d(()=>!0,"#ffffff")];return(e,S)=>{const i=t("draggable"),l=t("zoomable"),u=t("hud-toggle");return m((b(),w(p,{"terrains-options":s(a),"terrains-background-rules":n,"land-shape":s(f).Square,"show-locations":!1,"show-dungeons":!1,"show-rotate-button":!0,"show-notes-button":!0,"initial-size":1},null,8,["terrains-options","land-shape"])),[[i],[l],[u]])}}});export{L as default};