import{c as l,W as p,n as f,a as t,L as g}from"./TerrainBackgroundRule-CPMsgeNx.js";import{d as _,u as b,e as h,f as m,g as w,o as v,h as S,i as a,j as r}from"./index--uw6PT5T.js";const W=_({__name:"NoteQuestWorldView",setup(k){const{t:o}=b({useScope:"global"}),n=h();m(()=>{n.enable()});const s=l(f,e=>e,e=>o(`terrain.${e}`)),i=[t(e=>e.terrain==="water","#00b8d4"),t(e=>e.terrain==="mountain","#8b5e3c"),t(e=>e.terrain==="forest","#228B22"),t(e=>e.terrain==="plain","#a8d08d"),t(e=>e.terrain==="desert","#edc9af"),t(e=>e.terrain==="swamp","#3b4d3e"),t(e=>e.terrain==="glacier","#a3d8f4"),t(e=>e.terrain==="tundra","#4e5b31"),t(()=>!0,"#ffffff")];return(e,B)=>{const c=r("draggable"),u=r("zoomable"),d=r("hud-toggle");return w((v(),S(p,{"land-shape":a(g).Hexagon,"terrains-options":a(s),"terrains-background-rules":i,"show-locations":!0,"show-dungeons":!0,"show-rotate-button":!1,"show-notes-button":!0,"initial-size":3},null,8,["land-shape","terrains-options"])),[[c],[u],[d]])}}});export{W as default};
