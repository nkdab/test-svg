(function(t){function e(e){for(var n,i,c=e[0],a=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,c=1;c<o.length;c++){var a=o[c];0!==s[a]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/test-svg/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=a;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"265a":function(t,e,o){"use strict";o("4b0d")},"2efc":function(t,e,o){},"4b0d":function(t,e,o){},"7b11":function(t,e,o){},af62:function(t,e,o){"use strict";o("2efc")},cd49:function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"buttons"},[e("button",{on:{click:t.addBlock}},[t._v("Add block")])]),e("v-container",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},r=[],i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"v-container",on:{mousemove:t.onDrag,mouseup:t.endDrag}},[t._l(t.blocks,(function(o){return e("v-block",{key:o.id,attrs:{id:o.id,x:o.x,y:o.y},on:{mousedown:function(e){return t.startDrag(o.id,e)},nodeclick:t.addLine}})})),t._l(t.lines,(function(t){return e("v-line",{key:t.id,attrs:{target:t.targetPoint,source:t.sourcePoint}})}))],2)},c=[],a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("g",{attrs:{transform:`translate(${t.x}, ${t.y})`},on:{mousedown:t.onMouseDown}},[e("rect",{staticClass:"v-block",attrs:{height:"150",width:"150",fill:"blue"}}),t._l(t.nodes,(function(o){return e("circle",{key:o.id,staticClass:"v-block--node",attrs:{cx:o.offsetX,cy:o.offsetY,r:o.radius,fill:"green"},on:{click:function(e){return t.onNodeClick(o)}}})}))],2)},l=[],u=n["a"].extend({name:"VBlock",props:{id:String,x:Number,y:Number},data(){return{nodes:[{id:"top",offsetX:75,offsetY:0,radius:10},{id:"left",offsetX:0,offsetY:75,radius:10},{id:"right",offsetX:150,offsetY:75,radius:10},{id:"bottom",offsetX:75,offsetY:150,radius:10}]}},methods:{onNodeClick(t){this.$emit("nodeclick",this.id,t.id)},onMouseDown(t){this.$emit("mousedown",t)}}}),d=u,f=(o("af62"),o("2877")),h=Object(f["a"])(d,a,l,!1,null,null,null),g=h.exports,p=o("0937");class y extends p["b"]{static fields(){return{id:this.string(""),x:this.number(0),y:this.number(0)}}get top(){return{x:this.x+75,y:this.y}}get left(){return{x:this.x,y:this.y+75}}get right(){return{x:this.x+150,y:this.y+75}}get bottom(){return{x:this.x+75,y:this.y+150}}}y.entity="blocks";class b extends p["b"]{static fields(){return{id:this.string(""),sourceId:this.string(""),sourceNode:this.string(0),targetId:this.string(0),targetNode:this.string(0)}}get sourcePoint(){return y.find(this.sourceId)[this.sourceNode]}get targetPoint(){console.log(this.targetNode);const t=y.find(this.targetId)[this.targetNode];return console.log(t),t}}b.entity="lines";var k=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("line",{staticStyle:{stroke:"rgb(255, 0, 0)","stroke-width":"2"},attrs:{x1:t.source.x,y1:t.source.y,x2:t.target.x,y2:t.target.y}})},x=[],v=n["a"].extend({name:"VLine",props:{source:{type:Object,required:!0},target:{type:Object,required:!0}}}),m=v,N=Object(f["a"])(m,k,x,!1,null,"89fd8010",null),_=N.exports,w=n["a"].extend({name:"VContainer",components:{VLine:_,VBlock:g},props:{msg:String},data(){return{draggingBlock:"",startX:0,startY:0,offsetX:0,offsetY:0,chosenNode:"",chosenNodeBlock:""}},computed:{blocks(){return y.all()},lines(){return b.all()}},methods:{startDrag(t,e){this.draggingBlock=t;const o=this.blocks.find(e=>e.id===t);o&&(this.startX=e.clientX,this.startY=e.clientY,this.offsetX=o.x-this.startX,this.offsetY=o.y-this.startY)},onDrag(t){if(this.draggingBlock){const e=this.blocks.find(t=>t.id===this.draggingBlock);if(!e)return;y.update({where:this.draggingBlock,data:{x:t.clientX+this.offsetX,y:t.clientY+this.offsetY}})}},endDrag(){this.draggingBlock=""},async addLine(t,e){return this.chosenNodeBlock===t&&this.chosenNode===e?(this.chosenNode="",void(this.chosenNodeBlock="")):this.chosenNodeBlock&&this.chosenNode?(await b.insert({data:{id:`${this.chosenNodeBlock}${this.chosenNode}-${t}${e}`,sourceId:this.chosenNodeBlock,sourceNode:this.chosenNode,targetId:t,targetNode:e}}),this.chosenNode="",void(this.chosenNodeBlock="")):(this.chosenNode=e,void(this.chosenNodeBlock=t))}}}),B=w,O=(o("265a"),Object(f["a"])(B,i,c,!1,null,null,null)),j=O.exports,P=n["a"].extend({name:"App",components:{VContainer:j},created(){const t=[{id:"block-1",x:10,y:30},{id:"block-2",x:100,y:200},{id:"block-3",x:10,y:400},{id:"block-4",x:100,y:600}];y.insert({data:t})},methods:{addBlock(){y.insert({data:{x:0,y:0}})}}}),Y=P,X=(o("ef1a"),Object(f["a"])(Y,s,r,!1,null,null,null)),S=X.exports,$=o("2f62");const C=new p["a"];C.register(y),C.register(b);var D=C;n["a"].use($["a"]);var V=new $["a"].Store({plugins:[p["c"].install(D)]});n["a"].config.productionTip=!1,new n["a"]({store:V,render:t=>t(S)}).$mount("#app")},ef1a:function(t,e,o){"use strict";o("7b11")}});
//# sourceMappingURL=app.558af403.js.map