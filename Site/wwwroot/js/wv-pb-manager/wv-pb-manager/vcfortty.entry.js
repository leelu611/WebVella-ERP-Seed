const e=window.WvPbManager.h;import{d as t,D as o,C as n}from"./chunk-3437f53a.js";class d{constructor(){this.pageNodeChangeIndex=1}componentWillLoad(){this.store.mapStateToProps(this,e=>({pageNodeChangeIndex:e.pageNodeChangeIndex}))}render(){let o=function(e){let o=new Array;return t.forEach(e,function(e){e.parent_id||o.push(e)}),t.sortBy(o,["weight"])}(this.store.getState().pageNodes);return[e("div",{class:"header"},e("div",{class:"title"},"Page Body")),e("div",{class:"body"},o.map(function(t){return e("wv-pb-tree-node",{key:t.id,level:0,node:t})}))]}static get is(){return"wv-pb-tree"}static get properties(){return{pageNodeChangeIndex:{state:!0},store:{context:"store"}}}}class r{constructor(){this.level=0,this.activeNodeId=null,this.hoveredNodeId=null,this.pageNodeChangeIndex=1}componentWillLoad(){this.store.mapStateToProps(this,e=>({activeNodeId:e.activeNodeId,hoveredNodeId:e.hoveredNodeId,pageNodeChangeIndex:e.pageNodeChangeIndex})),this.store.mapDispatchToProps(this,{setActiveNode:o,hoverNode:n})}nodeClickHandler(e){e.preventDefault(),e.stopPropagation(),this.setActiveNode(this.node.id)}hoverNodeHandler(e){e.preventDefault(),e.stopPropagation(),this.hoverNode(this.node.id)}unhoverNodeHandler(e){e.preventDefault(),e.stopPropagation(),this.hoverNode(null)}render(){let o=this,n=function(e){let o=e.store.getState().library,n=t.findIndex(o,t=>t.name===e.node.component_name);return n>-1?o[n]:null}(o),d=function(e){let o=new Array,n=e.store.getState().pageNodes,d=e.node.id;return t.forEach(n,function(e){d&&e.parent_id&&d.toLowerCase()===e.parent_id.toLowerCase()&&d.toLowerCase()!==e.id.toLowerCase()&&o.push(e)}),t.sortBy(o,["weight"])}(o),r="ti-file";n.icon_class&&(r=n.icon_class);let a="";o.activeNodeId&&o.activeNodeId===o.node.id&&(a=" selected");let s="";o.hoveredNodeId&&o.hoveredNodeId===o.node.id&&(s=" hovered");let i="15px";0===o.level&&(i="0px");let l=new Array;return t.forEach(d,function(e){let o=e.container_id;-1===t.findIndex(l,function(e){return e===o})&&l.push(o)}),l=t.sortBy(l),e("div",{class:"tree-node level-"+o.level+a+s,style:{paddingLeft:i},onClick:e=>o.nodeClickHandler(e)},e("div",{class:"header",onMouseEnter:e=>o.hoverNodeHandler(e),onMouseLeave:e=>o.unhoverNodeHandler(e)},e("span",{class:"icon "+r}),e("span",{class:"name"},n.label)),l.length<2?e("div",null,d.map(function(t){return e("wv-pb-tree-node",{key:t.id,node:t,level:o.level+1})})):l.map(function(t){return e("div",{key:t.id},e("div",{style:{paddingLeft:"15px"},class:"go-teal"},t),d.map(function(n){return n.container_id===t?e("wv-pb-tree-node",{key:n.id,node:n,level:o.level+1}):null}))}))}static get is(){return"wv-pb-tree-node"}static get properties(){return{activeNodeId:{state:!0},hoveredNodeId:{state:!0},level:{type:Number,attr:"level"},node:{type:"Any",attr:"node"},pageNodeChangeIndex:{state:!0},store:{context:"store"}}}}export{d as WvPbTree,r as WvPbTreeNode};