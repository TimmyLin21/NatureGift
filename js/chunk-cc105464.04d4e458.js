(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc105464"],{da25:function(e,t,c){"use strict";c.r(t);var l=c("7a23"),r={class:"bg-light w-100"},a={class:"container py-4"},n={class:"d-flex justify-content-end mb-4"},o=["disabled"],d={class:"table-responsive"},s={class:"table text-center"},i=Object(l["createElementVNode"])("thead",null,[Object(l["createElementVNode"])("tr",{class:"table-secondary text-secondary align-middle"},[Object(l["createElementVNode"])("th",{scope:"col"}," Date "),Object(l["createElementVNode"])("th",{scope:"col"}," Tracking Number "),Object(l["createElementVNode"])("th",{scope:"col"}," Items "),Object(l["createElementVNode"])("th",{scope:"col"}," Price "),Object(l["createElementVNode"])("th",{scope:"col"}," Payment status "),Object(l["createElementVNode"])("th",{scope:"col"}," Edit order ")])],-1),b={class:"border-top-0"},O={class:"text-nowrap"},m={key:0},u={key:1},j={class:"text-nowrap"},p=["onClick"],h=["onClick"],E=Object(l["createTextVNode"])(" Order ");function N(e,t,c,N,f,V){var g,v=Object(l["resolveComponent"])("BIconCheckCircle"),k=Object(l["resolveComponent"])("BIconXCircle"),y=Object(l["resolveComponent"])("BIconPen"),B=Object(l["resolveComponent"])("BIconTrash"),M=Object(l["resolveComponent"])("Pagination"),D=Object(l["resolveComponent"])("DelModal"),S=Object(l["resolveComponent"])("OrderModal");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[Object(l["createElementVNode"])("main",r,[Object(l["createElementVNode"])("div",a,[Object(l["createElementVNode"])("div",n,[Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-danger text-white",onClick:t[0]||(t[0]=Object(l["withModifiers"])((function(e){return V.modalToggle("delAll")}),["prevent"])),disabled:0===(null===(g=f.orders.orders)||void 0===g?void 0:g.length)}," Delete all orders ",8,o)]),Object(l["createElementVNode"])("div",d,[Object(l["createElementVNode"])("table",s,[i,Object(l["createElementVNode"])("tbody",b,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(f.orders.orders,(function(t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:t.id},[Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(l["createElementVNode"])("td",O,Object(l["toDisplayString"])(t.id),1),Object(l["createElementVNode"])("td",null,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(t.products,(function(e){return Object(l["openBlock"])(),Object(l["createElementBlock"])("p",{class:"text-nowrap",key:e.id},Object(l["toDisplayString"])(e.product.title)+" "+Object(l["toDisplayString"])(e.product.unit)+" x "+Object(l["toDisplayString"])(e.qty),1)})),128))]),Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(t.total),1),t.is_paid?(Object(l["openBlock"])(),Object(l["createElementBlock"])("td",m,[Object(l["createVNode"])(v)])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("td",u,[Object(l["createVNode"])(k)])),Object(l["createElementVNode"])("td",j,[Object(l["createElementVNode"])("a",{href:"#",class:"link-success me-3",onClick:Object(l["withModifiers"])((function(e){return V.modalToggle("edit",t)}),["prevent"])},[Object(l["createVNode"])(y)],8,p),Object(l["createElementVNode"])("a",{href:"#",class:"link-danger",onClick:Object(l["withModifiers"])((function(e){return V.modalToggle("del",t)}),["prevent"])},[Object(l["createVNode"])(B)],8,h)])])})),128))])])]),Object(l["createVNode"])(M,{pagination:f.orders.pagination,onSendRequest:V.getOrders},null,8,["pagination","onSendRequest"])])]),Object(l["createVNode"])(D,{ref:"delModal",onDelItem:V.delOrder,onDelAll:V.delAllOrders,item:f.cacheOrder},{default:Object(l["withCtx"])((function(){return[E]})),_:1},8,["onDelItem","onDelAll","item"]),Object(l["createVNode"])(S,{ref:"orderModal",onSendRequest:V.getOrders,order:f.cacheOrder},null,8,["onSendRequest","order"])],64)}var f=c("3835"),V=(c("e9c4"),c("a397")),g=c("1b9e"),v=c("9564"),k=c("1799"),y=c("2c17"),B=(c("b0c0"),{class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref:"modal"}),M={class:"modal-dialog modal-lg"},D={class:"modal-content"},S=Object(l["createElementVNode"])("div",{class:"modal-header bg-primary"},[Object(l["createElementVNode"])("h5",{class:"modal-title text-secondary"}," Edit Order "),Object(l["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},x={class:"row"},C={class:"col-12 col-lg-5"},$=Object(l["createElementVNode"])("h3",null,"Customer Info",-1),F={class:"row mb-3"},T=Object(l["createElementVNode"])("label",{for:"name",class:"col-sm-3 col-form-label"},"Name",-1),q={class:"col-sm-9"},P={class:"row mb-3"},_=Object(l["createElementVNode"])("label",{for:"email",class:"col-sm-3 col-form-label"},"Email",-1),A={class:"col-sm-9"},U={class:"row mb-3"},L=Object(l["createElementVNode"])("label",{for:"tel",class:"col-sm-3 col-form-label"},"Phone",-1),I={class:"col-sm-9"},J={class:"row mb-3"},R=Object(l["createElementVNode"])("label",{for:"address",class:"col-sm-3 col-form-label"},"Address",-1),X={class:"col-sm-9"},z={class:"col-12 col-lg-7"},G=Object(l["createElementVNode"])("h3",null,"Order Detail",-1),H={class:"table"},K=Object(l["createElementVNode"])("th",{style:{width:"100px"},class:"text-nowrap"}," Tracking number ",-1),Q=Object(l["createElementVNode"])("th",null,"Ordered time",-1),W=Object(l["createElementVNode"])("th",null,"Paid time",-1),Y={key:0},Z={key:1},ee=Object(l["createElementVNode"])("th",null,"Paid statement",-1),te={key:0,class:"text-success"},ce={key:1,class:"text-muted"},le=Object(l["createElementVNode"])("th",null,"Total",-1),re={class:"col-12"},ae=Object(l["createElementVNode"])("h3",null,"Order items",-1),ne={class:"table"},oe=Object(l["createElementVNode"])("thead",null,[Object(l["createElementVNode"])("tr")],-1),de={class:"text-end"},se={class:"d-flex"},ie={class:"form-check form-switch"},be=["checked"],Oe={class:"form-check-label",for:"isPaidSwitch"},me={key:0},ue={key:1},je={class:"modal-footer"},pe=Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-success","data-bs-dismiss":"modal"}," Close ",-1);function he(e,t,c,r,a,n){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",B,[Object(l["createElementVNode"])("div",M,[Object(l["createElementVNode"])("div",D,[S,Object(l["createElementVNode"])("div",w,[Object(l["createElementVNode"])("div",x,[Object(l["createElementVNode"])("div",C,[$,Object(l["createElementVNode"])("div",F,[T,Object(l["createElementVNode"])("div",q,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.cacheOrder.user.name=e})},null,512),[[l["vModelText"],a.cacheOrder.user.name]])])]),Object(l["createElementVNode"])("div",P,[_,Object(l["createElementVNode"])("div",A,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.cacheOrder.user.email=e})},null,512),[[l["vModelText"],a.cacheOrder.user.email]])])]),Object(l["createElementVNode"])("div",U,[L,Object(l["createElementVNode"])("div",I,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"tel",class:"form-control",id:"tel","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.cacheOrder.user.tel=e})},null,512),[[l["vModelText"],a.cacheOrder.user.tel]])])]),Object(l["createElementVNode"])("div",J,[R,Object(l["createElementVNode"])("div",X,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{type:"text",class:"form-control",id:"address","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.cacheOrder.user.address=e})},null,512),[[l["vModelText"],a.cacheOrder.user.address]])])])]),Object(l["createElementVNode"])("div",z,[G,Object(l["createElementVNode"])("table",H,[Object(l["createElementVNode"])("tbody",null,[Object(l["createElementVNode"])("tr",null,[K,Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(a.cacheOrder.id),1)]),Object(l["createElementVNode"])("tr",null,[Q,Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(e.$filters.date(a.cacheOrder.create_at)),1)]),Object(l["createElementVNode"])("tr",null,[W,Object(l["createElementVNode"])("td",null,[a.cacheOrder.paid_date?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",Y,Object(l["toDisplayString"])(e.$filters.date(a.cacheOrder.paid_date)),1)):(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",Z," - "))])]),Object(l["createElementVNode"])("tr",null,[ee,Object(l["createElementVNode"])("td",null,[a.cacheOrder.is_paid?(Object(l["openBlock"])(),Object(l["createElementBlock"])("strong",te,"Paid")):(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",ce,"Unpaid"))])]),Object(l["createElementVNode"])("tr",null,[le,Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(e.$filters.currency(a.cacheOrder.total)),1)])])])]),Object(l["createElementVNode"])("div",re,[ae,Object(l["createElementVNode"])("table",ne,[oe,Object(l["createElementVNode"])("tbody",null,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(a.cacheOrder.products,(function(t){return Object(l["openBlock"])(),Object(l["createElementBlock"])("tr",{key:t.id},[Object(l["createElementVNode"])("th",null,Object(l["toDisplayString"])(t.product.title),1),Object(l["createElementVNode"])("td",null,Object(l["toDisplayString"])(t.product.unit)+" x "+Object(l["toDisplayString"])(t.qty),1),Object(l["createElementVNode"])("td",de,Object(l["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))])]),Object(l["createElementVNode"])("div",se,[Object(l["createElementVNode"])("div",ie,[Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.cacheOrder.is_paid=e}),"true-value":!0,"false-value":!1,id:"isPaidSwitch",checked:a.cacheOrder.is_paid,role:"switch"},null,8,be),[[l["vModelCheckbox"],a.cacheOrder.is_paid]]),Object(l["createElementVNode"])("label",Oe,[a.cacheOrder.is_paid?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",me,"Paid")):(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",ue,"Unpaid"))])])])])])]),Object(l["createElementVNode"])("div",je,[pe,Object(l["createElementVNode"])("button",{type:"button",class:"btn btn-primary text-secondary",onClick:t[5]||(t[5]=function(){return n.saveChange&&n.saveChange.apply(n,arguments)})}," Save changes ")])])])],512)}var Ee=c("e0ae"),Ne={data:function(){return{cacheOrder:{imagesUrl:[],user:{}}}},props:{order:{type:Object,default:function(){return{imagesUrl:[],user:{}}}}},methods:{saveChange:function(){var e=this;Object(V["q"])(this.cacheOrder.id,this.cacheOrder).then((function(t){e.alert.msg=t.data.message,e.alert.state=!0,e.closeModal(),e.sendMsg(),e.sendRequest()})).catch((function(t){var c=Object(f["a"])(t.response.data.message,1);e.alert.msg=c[0],e.alert.state=!1,e.sendMsg()}))},sendRequest:function(){this.$emit("send-request")}},watch:{order:function(){this.cacheOrder=this.order}},mixins:[Ee["a"],g["a"]],emits:["send-request"]},fe=c("6b0d"),Ve=c.n(fe);const ge=Ve()(Ne,[["render",he]]);var ve=ge,ke={data:function(){return{orders:"",cacheOrder:{imagesUrl:[]}}},components:{Pagination:k["a"],DelModal:y["a"],OrderModal:ve},methods:{getOrders:function(e){var t=this;this.sendLoadingState(!0),Object(V["s"])(e).then((function(e){t.sendLoadingState(!1),t.orders=e.data})).catch((function(){t.sendLoadingState(!1),t.alert.msg="Fail to get the orders",t.alert.state=!1,t.sendMsg()}))},delAllOrders:function(){var e=this;this.sendLoadingState(!0),Object(V["h"])().then((function(t){e.alert.msg=t.data.message,e.alert.state=!0,e.$refs.delModal.closeModal(),e.sendMsg(),e.getOrders()})).catch((function(t){e.sendLoadingState(!1),e.alert.msg=t.response.data.message,e.alert.state=!1,e.sendMsg()}))},delOrder:function(){var e=this;Object(V["l"])(this.cacheOrder.id).then((function(t){e.alert.msg=t.data.message,e.alert.state=!0,e.$refs.delModal.closeModal(),e.sendMsg(),e.getOrders()})).catch((function(t){var c=Object(f["a"])(t.response.data.message,1);e.alert.msg=c[0],e.alert.state=!1,e.$refs.delModal.closeModal(),e.sendMsg()}))},modalToggle:function(e,t){"edit"===e?(this.cacheOrder=JSON.parse(JSON.stringify(t)),this.$refs.orderModal.openModal()):"del"===e?(this.cacheOrder=JSON.parse(JSON.stringify(t)),this.$refs.delModal.openModal()):"delAll"===e&&(this.cacheOrder={},this.$refs.delModal.openModal())}},created:function(){var e=this;this.getOrders(),this.$emitter.on("send-request",(function(t){e.getOrders(t)}))},mixins:[g["a"],v["a"]]};const ye=Ve()(ke,[["render",N]]);t["default"]=ye},e9c4:function(e,t,c){var l=c("23e7"),r=c("da84"),a=c("d066"),n=c("2ba4"),o=c("e330"),d=c("d039"),s=r.Array,i=a("JSON","stringify"),b=o(/./.exec),O=o("".charAt),m=o("".charCodeAt),u=o("".replace),j=o(1..toString),p=/[\uD800-\uDFFF]/g,h=/^[\uD800-\uDBFF]$/,E=/^[\uDC00-\uDFFF]$/,N=function(e,t,c){var l=O(c,t-1),r=O(c,t+1);return b(h,e)&&!b(E,r)||b(E,e)&&!b(h,l)?"\\u"+j(m(e,0),16):e},f=d((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&l({target:"JSON",stat:!0,forced:f},{stringify:function(e,t,c){for(var l=0,r=arguments.length,a=s(r);l<r;l++)a[l]=arguments[l];var o=n(i,null,a);return"string"==typeof o?u(o,p,N):o}})}}]);
//# sourceMappingURL=chunk-cc105464.04d4e458.js.map