import{d as W,o as d,c as u,k as i,g as S,v as J,l as K,m as X,n as w,_ as z,e as Q,p as G,q as P,u as Z,s as Y,i as b,F as k,t as A,x as y,y as T,z as B,A as tt,a as et,B as ot,C as nt,h as st}from"./index-Co6q_7yS.js";const M=(n,t,e)=>n.toSorted((o,p)=>e(o).localeCompare(e(p))).reduce((o,p)=>({...o,[t(p)]:e(p)}),{});class q{constructor(t,e){this.x=t,this.y=e}static create(t,e){return new q(t,e)}static fromPrimitives(t){return new q(t.x,t.y)}toPrimitives(){return{x:this.x,y:this.y}}equalsTo(t){return this.x===t.x&&this.y===t.y}}const xt=["water","mountain","forest","plain","desert","swamp","glacier","tundra"],Ot=["1","2"],rt=["orc_city","orc_fortress","human_city","human_fortress","dwarven_city","dwarven_fortress","elven_city","elven_fortress","goblin_city","gnome_city","ruins","volcano","rocks","reef","portal","oasis","thin_ice"],at=["palace","crypt","tomb","sanctuary","temple","prison","sewers","citadel","pyramid","ziggurat","laboratory","necropolis","entrails","mega_dungeon","cave"];let $=class N{constructor(t=null,e=0,s=null,o=null,p=null,a=!1,h){this.terrain=t,this.terrainRotation=e,this.location=s,this.dungeon=o,this.notes=p,this.isCurrent=a,this.coordinates=h}static at(t,e){return new N(null,0,null,null,null,!1,q.create(t,e))}static fromPrimitives(t){return new N(t.terrain??null,t.terrainRotation??0,t.location??null,t.dungeon??null,t.notes??null,t.isCurrent??!1,q.fromPrimitives(t.coordinates))}toPrimitives(){return{terrain:this.terrain,terrainRotation:this.terrainRotation,location:this.location,dungeon:this.dungeon,notes:this.notes,isCurrent:this.isCurrent,coordinates:this.coordinates.toPrimitives()}}rotateTerrain(){this.terrainRotation=(this.terrainRotation+90)%360}};var it=(n=>(n.Hexagon="hexagon",n.Square="square",n))(it||{});const lt=W({__name:"LandNotesBubble",props:{land:{type:Object,required:!0},direction:{type:String,required:!0}},emits:["hide"],setup(n,{emit:t}){const e=n,s=t,o=()=>{s("hide")};return(p,a)=>(d(),u("div",{class:w(["land-notes-bubble",{[`land-notes-bubble--direction-${e.direction}`]:e.direction}])},[i("div",{class:"hide-button",onClick:a[0]||(a[0]=h=>o())},"✕"),S(i("textarea",{"onUpdate:modelValue":a[1]||(a[1]=h=>e.land.notes=h),onKeyup:a[2]||(a[2]=K(h=>o(),["esc"])),onWheel:a[3]||(a[3]=X(()=>{},["stop"]))},null,544),[[J,e.land.notes]])],2))}}),dt=z(lt,[["__scopeId","data-v-e500d4f0"]]);var D=(n=>(n.Top="top",n.Bottom="bottom",n))(D||{});const ut={class:"land__content"},ct={class:"info"},pt={value:null},ht=["value"],gt={value:null},mt=["value"],vt={value:null},yt=["value"],bt={class:"bottom-actions"},wt=W({__name:"Land",props:{terrainsBackgroundRules:{type:Array,required:!0},terrainsOptions:{type:Object,required:!0},land:{type:Object,required:!0},shape:{type:String,required:!0},showLocations:{type:Boolean,required:!0},showDungeons:{type:Boolean,required:!0},showRotateButton:{type:Boolean,required:!0},showNotesButton:{type:Boolean,required:!0},notesBubbleDirection:{type:String,required:!0}},emits:["dblclick","rotateTerrainClick"],setup(n,{emit:t}){const e=n,s=Q(),o=t,p=G(!1),a=P(()=>e.terrainsBackgroundRules.find(r=>r.appliesFor(e.land))),h=P(()=>{var r;return((r=a.value)==null?void 0:r.backgroundType)==="color"}),x=P(()=>{var r;return((r=a.value)==null?void 0:r.backgroundType)==="image"}),{t:L}=Z({useScope:"global"}),O=()=>{o("dblclick")},m=()=>{o("rotateTerrainClick")},g=()=>{p.value=!p.value},v=()=>{p.value=!1},_=M(rt,r=>r,r=>L(`location.${r}`)),f=M(at,r=>r,r=>L(`dungeon.${r}`));return(r,l)=>{var H,E,V,j,U;return d(),u("div",{class:w(["land",{"land--current":e.land.isCurrent,[`land--${e.land.terrain}`]:e.land.terrain,[`land--${e.shape}`]:e.shape,[`land--background-type-${(H=a.value)==null?void 0:H.backgroundType}`]:(E=a.value)==null?void 0:E.backgroundType}]),style:Y({backgroundColor:h.value?(V=a.value)==null?void 0:V.background:"transparent ",borderColor:h.value?(j=a.value)==null?void 0:j.background:"transparent"})},[i("div",ut,[i("div",{class:w(["terrain-image",{[`terrain-image--rotation-${e.land.terrainRotation}`]:e.land.terrainRotation}]),style:Y({backgroundImage:x.value?`url(${(U=a.value)==null?void 0:U.background})`:"transparent"})},null,6),i("div",ct,[b(s).showHud?(d(),u(k,{key:0},[S(i("select",{"onUpdate:modelValue":l[0]||(l[0]=c=>e.land.terrain=c)},[i("option",pt,y(`<${r.$t("label.terrain")}>`),1),(d(!0),u(k,null,T(e.terrainsOptions,(c,C,R)=>(d(),u("option",{key:R,value:C},y(c),9,ht))),128))],512),[[A,e.land.terrain]]),e.showLocations?S((d(),u("select",{key:0,"onUpdate:modelValue":l[1]||(l[1]=c=>e.land.location=c)},[i("option",gt,y(`<${r.$t("label.location")}>`),1),(d(!0),u(k,null,T(b(_),(c,C,R)=>(d(),u("option",{key:R,value:C},y(c),9,mt))),128))],512)),[[A,e.land.location]]):B("",!0),e.showDungeons?S((d(),u("select",{key:1,"onUpdate:modelValue":l[2]||(l[2]=c=>e.land.dungeon=c)},[i("option",vt,y(`<${r.$t("label.dungeon")}>`),1),(d(!0),u(k,null,T(b(f),(c,C,R)=>(d(),u("option",{key:R,value:C},y(c),9,yt))),128))],512)),[[A,e.land.dungeon]]):B("",!0)],64)):B("",!0)]),i("div",bt,[b(s).showHud&&e.showRotateButton?(d(),u("div",{key:0,class:"rotate-button",onClick:l[3]||(l[3]=c=>m())})):B("",!0),i("div",{class:"coordinates",onDblclick:l[4]||(l[4]=c=>O())},y(e.land.coordinates.x+" / "+e.land.coordinates.y),33),b(s).showHud&&e.showNotesButton?(d(),u("div",{key:1,class:w(["notes-button",{"notes-button--empty":!e.land.notes}]),onClick:l[5]||(l[5]=c=>g())},null,2)):B("",!0),S(et(dt,{land:e.land,direction:e.notesBubbleDirection,onHide:l[6]||(l[6]=c=>v()),onClick:l[7]||(l[7]=X(()=>{},["stop"]))},null,8,["land","direction"]),[[tt,p.value]])])])],6)}}}),kt=z(wt,[["__scopeId","data-v-f97347c0"]]);let F=class I{constructor(t){this.lands=t}static ofSize(t){const e=$.at(0,0);e.isCurrent=!0;const s=new I([[e]]);return Array(t-1).fill(void 0).forEach(()=>{s.addTopRow(),s.addRightColumn(),s.addBottomRow(),s.addLeftColumn()}),s}static fromPrimitives(t){return new I(t.lands.map(e=>e.map(s=>$.fromPrimitives(s))))}toPrimitives(){return{lands:this.lands.map(t=>t.map(e=>e.toPrimitives()))}}addTopRow(){const t=this.lands[0][0].coordinates.y-1;this.lands.unshift(this.newRowAt(t))}addBottomRow(){const t=this.lands[this.lands.length-1][0].coordinates.y+1;this.lands.push(this.newRowAt(t))}addLeftColumn(){const t=this.lands[0][0].coordinates.x-1,e=this.lands[0][0].coordinates.y;this.lands.forEach((s,o)=>{s.unshift($.at(t,e+o))})}addRightColumn(){const t=this.lands[0][this.lands[0].length-1].coordinates.x+1,e=this.lands[0][0].coordinates.y;this.lands.forEach((s,o)=>{s.push($.at(t,e+o))})}movePlayersTo(t){this.lands.flat().forEach(e=>{e.isCurrent=e.coordinates.equalsTo(t)})}rotateTerrainAt(t){this.findLandAt(t).rotateTerrain()}findLandAt(t){const e=this.lands.flat().find(s=>s.coordinates.equalsTo(t));if(e===void 0)throw new Error(`Could not find land at ${t}`);return e}newRowAt(t){const e=this.lands[0][0].coordinates.x;return Array(this.lands[0].length).fill(void 0).map((s,o)=>$.at(e+o,t))}};const ft=()=>({save:Ct,get:Rt}),Ct=n=>{localStorage.setItem("world",JSON.stringify(n.toPrimitives()))},Rt=()=>Bt(),Bt=()=>{const n=localStorage.getItem("world");return n?F.fromPrimitives(JSON.parse(n)):null},$t={class:"top"},St={class:"center"},Tt={class:"lands"},qt={class:"bottom"},Lt=W({__name:"World",props:{terrainsOptions:{type:Object,required:!0},terrainsBackgroundRules:{type:Array,required:!0},landShape:{type:String,required:!0},showLocations:{type:Boolean,required:!0},showDungeons:{type:Boolean,required:!0},showRotateButton:{type:Boolean,required:!0},showNotesButton:{type:Boolean,required:!0},initialSize:{type:Number,required:!0}},setup(n){const t=n,e=ft(),o=ot(e.get()??F.ofSize(t.initialSize));nt(o,m=>{e.save(m)});const p=()=>{o.addTopRow()},a=()=>{o.addBottomRow()},h=()=>{o.addLeftColumn()},x=()=>{o.addRightColumn()},L=m=>{o.movePlayersTo(m)},O=m=>{o.rotateTerrainAt(m)};return(m,g)=>(d(),u("div",{class:w(["world",{[`world--${t.landShape}`]:t.landShape}])},[i("div",$t,[i("div",{class:"add-button",onClick:g[0]||(g[0]=v=>p())},"+")]),i("div",St,[i("div",{class:w(["add-button",{"add-button--margin-right-square":t.landShape==="square"&&o.lands.length>1,"add-button--margin-right-hexagon":t.landShape==="hexagon"&&o.lands.length>1}]),onClick:g[1]||(g[1]=v=>h())}," + ",2),i("div",Tt,[(d(!0),u(k,null,T(o.lands,(v,_)=>(d(),u("div",{key:_,class:w(["row",{"row--margin-left-square":t.landShape==="square"&&o.lands.length>1,"row--margin-left-hexagon":t.landShape==="hexagon"&&v[0].coordinates.y%2!==0}])},[(d(!0),u(k,null,T(v,(f,r)=>(d(),st(kt,{key:r,land:f,"terrains-options":n.terrainsOptions,"terrains-background-rules":n.terrainsBackgroundRules,shape:t.landShape,"show-locations":t.showLocations,"show-dungeons":t.showDungeons,"show-rotate-button":t.showRotateButton,"show-notes-button":t.showNotesButton,"notes-bubble-direction":_===0&&o.lands.length>1?b(D).Bottom:b(D).Top,onDblclick:l=>L(f.coordinates),onRotateTerrainClick:l=>O(f.coordinates)},null,8,["land","terrains-options","terrains-background-rules","shape","show-locations","show-dungeons","show-rotate-button","show-notes-button","notes-bubble-direction","onDblclick","onRotateTerrainClick"]))),128))],2))),128))]),i("div",{class:"add-button",onClick:g[2]||(g[2]=v=>x())},"+")]),i("div",qt,[i("div",{class:"add-button",onClick:g[3]||(g[3]=v=>a())},"+")])],2))}}),Pt=z(Lt,[["__scopeId","data-v-82e279d6"]]),At=(n,t)=>({appliesFor:n,background:t,backgroundType:"color"}),Nt=(n,t)=>({appliesFor:n,background:t,backgroundType:"image"});export{it as L,Pt as W,At as a,Nt as b,M as c,Ot as d,xt as n};
