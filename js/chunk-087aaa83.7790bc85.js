(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-087aaa83"],{"2cf6":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"container py-5 mt-100px mt-md-150px"},l={class:"steps mb-7"},o={class:"steps__circle steps__circle-active"},r=Object(a["createElementVNode"])("div",{class:"steps__text"},[Object(a["createElementVNode"])("p",null,"Checkout")],-1),s={class:"steps__circle"},d=Object(a["createElementVNode"])("div",{class:"steps__text"},[Object(a["createElementVNode"])("p",null,"Payment")],-1),i={class:"steps__circle"},m=Object(a["createElementVNode"])("div",{class:"steps__text"},[Object(a["createElementVNode"])("p",null,"Finish")],-1),b={class:"row gx-md-5"},u={class:"col-12 col-md-7 mb-4"},p={class:"table-responsive mb-5"},O={class:"table mb-5"},j=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",{scope:"col",colspan:"3"}," Product "),Object(a["createElementVNode"])("th",{scope:"col"}," Price "),Object(a["createElementVNode"])("th",{scope:"col"}," Quantity "),Object(a["createElementVNode"])("th",{scope:"col"}," Total ")])],-1),N=["onClick"],V={width:"100px"},f=["src","alt"],h={class:"mb-0"},E={class:"text-start"},g={class:"mb-0 text-nowrap"},v={class:"text-danger"},C={class:"mb-0"},y={key:1,class:"mb-0"},k={width:"10%"},x={class:"qty"},B=["onUpdate:modelValue","onChange"],_={class:"text-nowrap"},w=Object(a["createElementVNode"])("td",{colspan:"3"}," Subtotal ",-1),S={key:0,colspan:"3",class:"text-end text-danger"},D={key:1,colspan:"3",class:"text-end"},P={key:0},F={colspan:"6",class:"text-end border-bottom-0"},T={class:"input-group mb-3"},$=Object(a["createElementVNode"])("p",{class:"fw-bold h3 mt-7 mb-1"}," Your cart is empty ",-1),I=Object(a["createElementVNode"])("p",{class:"d-block mb-5 text-muted mt-5"}," Looks like you haven't made a choice ",-1);function M(e,t,c,M,A,U){var q=Object(a["resolveComponent"])("BIconCart"),z=Object(a["resolveComponent"])("BIconCreditCard"),J=Object(a["resolveComponent"])("BIconStar"),L=Object(a["resolveComponent"])("BIconTrash"),Y=Object(a["resolveComponent"])("BIconDashCircle"),Q=Object(a["resolveComponent"])("BIconPlusCircle"),G=Object(a["resolveComponent"])("ContactInfo");return Object(a["openBlock"])(),Object(a["createElementBlock"])("main",n,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(q,{width:"2rem",height:"2rem"}),r]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(z,{width:"2rem",height:"2rem"}),d]),Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(J,{width:"2rem",height:"2rem"}),m])]),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("section",u,[Object(a["createElementVNode"])("h2",{class:Object(a["normalizeClass"])(["mb-4",{"visually-hidden":0===e.carts.length}])}," Your cart ",2),e.carts.length>0?(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:0},[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("table",O,[j,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.carts,(function(t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:t.id,class:"align-middle"},[Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("a",{href:"#",class:"link-danger",onClick:Object(a["withModifiers"])((function(c){return e.delCartItem(t.id)}),["prevent"])},[Object(a["createVNode"])(L)],8,N)]),Object(a["createElementVNode"])("td",V,[Object(a["createElementVNode"])("img",{src:t.product.imageUrl,alt:t.product.title,class:"w-100px h-50px object-cover object-position-center"},null,8,f)]),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("p",h,Object(a["toDisplayString"])(t.product.title),1),Object(a["createElementVNode"])("small",E,"Size: "+Object(a["toDisplayString"])(t.product.unit),1)]),Object(a["createElementVNode"])("td",null,[t.product.price!==t.product.origin_price?(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:0},[Object(a["createElementVNode"])("p",g,[Object(a["createElementVNode"])("del",v,"NT$ "+Object(a["toDisplayString"])(t.product.origin_price),1)]),Object(a["createElementVNode"])("p",C," NT$ "+Object(a["toDisplayString"])(t.product.price),1)],64)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",y," NT$ "+Object(a["toDisplayString"])(t.product.origin_price),1))]),Object(a["createElementVNode"])("td",k,[Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("span",null,[Object(a["createVNode"])(Y,{onClick:function(c){return e.editCart(t,"-")}},null,8,["onClick"])]),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"text-center",type:"number","onUpdate:modelValue":function(e){return t.qty=e},onChange:function(c){return e.editCart(t)}},null,40,B),[[a["vModelText"],t.qty,void 0,{number:!0}]]),Object(a["createElementVNode"])("span",null,[Object(a["createVNode"])(Q,{onClick:function(c){return e.editCart(t,"+")}},null,8,["onClick"])])])]),Object(a["createElementVNode"])("td",_," NT$ "+Object(a["toDisplayString"])(t.total),1)])})),128))]),Object(a["createElementVNode"])("tfoot",null,[Object(a["createElementVNode"])("tr",null,[w,e.total!==e.final_total?(Object(a["openBlock"])(),Object(a["createElementBlock"])("td",S,[Object(a["createElementVNode"])("del",null,"NTD$ "+Object(a["toDisplayString"])(e.total),1)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("td",D," NTD$ "+Object(a["toDisplayString"])(e.final_total),1))]),e.total!==e.final_total?(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",P,[Object(a["createElementVNode"])("td",F," NTD$ "+Object(a["toDisplayString"])(e.final_total),1)])):Object(a["createCommentVNode"])("",!0)])])]),Object(a["createElementVNode"])("div",T,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",class:"form-control",placeholder:"Coupon","aria-label":"Coupon","aria-describedby":"coupon-apply","onUpdate:modelValue":t[0]||(t[0]=function(e){return A.couponCode=e})},null,512),[[a["vModelText"],A.couponCode]]),Object(a["createElementVNode"])("button",{class:"btn btn-outline-secondary",type:"button",id:"coupon-apply",onClick:t[1]||(t[1]=function(){return U.applyCoupon&&U.applyCoupon.apply(U,arguments)})}," Apply ")])],64)):(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:1},[$,I,Object(a["createElementVNode"])("button",{class:"btn btn-secondary w-25 mb-7",onClick:t[2]||(t[2]=function(){return U.goShop&&U.goShop.apply(U,arguments)})}," Shop now ")],64))]),Object(a["createVNode"])(G)])])}var A=c("8496"),U=c("a397"),q=(c("b0c0"),{class:"col-12 col-md-5"}),z=Object(a["createElementVNode"])("h2",{class:"mb-4"}," Contact Info ",-1),J={class:"col-12"},L=Object(a["createElementVNode"])("label",{for:"email",class:"form-label",name:"Email"},[Object(a["createTextVNode"])("Email "),Object(a["createElementVNode"])("span",{class:"text-danger"},"*")],-1),Y={class:"col-md-6"},Q=Object(a["createElementVNode"])("label",{for:"name",class:"form-label",name:"Name"},[Object(a["createTextVNode"])("Name "),Object(a["createElementVNode"])("span",{class:"text-danger"},"*")],-1),G={class:"col-md-6"},H=Object(a["createElementVNode"])("label",{for:"phone",class:"form-label",name:"Phone"},[Object(a["createTextVNode"])("Phone "),Object(a["createElementVNode"])("span",{class:"text-danger"},"*")],-1),K={class:"col-12"},R=Object(a["createElementVNode"])("label",{for:"address",class:"form-label",name:"Address"},[Object(a["createTextVNode"])("Address "),Object(a["createElementVNode"])("span",{class:"text-danger"},"*")],-1),W=Object(a["createElementVNode"])("div",{class:"col-12 mb-4"},[Object(a["createElementVNode"])("label",{for:"notes",class:"form-label",name:""},"Notes"),Object(a["createElementVNode"])("textarea",{class:"form-control",id:"notes",placeholder:"Notes about your order..."})],-1),X=Object(a["createElementVNode"])("div",{class:"col-12 text-center"},[Object(a["createElementVNode"])("button",{class:"c-btn",type:"submit"},[Object(a["createElementVNode"])("span",{class:"c-btn__text"},"Checkout")])],-1);function Z(e,t,c,n,l,o){var r=Object(a["resolveComponent"])("v-field"),s=Object(a["resolveComponent"])("ErrorMessage"),d=Object(a["resolveComponent"])("v-form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",q,[z,Object(a["createVNode"])(d,{class:"row g-3 text-start mb-4",onSubmit:o.checkOut},{default:Object(a["withCtx"])((function(e){var c=e.errors;return[Object(a["createElementVNode"])("div",J,[L,Object(a["createVNode"])(r,{type:"email",id:"email",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":c["Email"]}]),name:"Email",rules:"required|email",placeholder:"Please enter email",modelValue:l.data.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.data.user.email=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(s,{name:"Email",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",Y,[Q,Object(a["createVNode"])(r,{type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":c["Name"]}]),id:"name",name:"Name",rules:"required",placeholder:"Please enter name",modelValue:l.data.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.data.user.name=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(s,{name:"Name",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",G,[H,Object(a["createVNode"])(r,{type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":c["Phone"]}]),id:"phone",name:"Phone",rules:o.isPhone,placeholder:"Please enter phone, 09xxxxxxxx",modelValue:l.data.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.data.user.tel=e})},null,8,["class","rules","modelValue"]),Object(a["createVNode"])(s,{name:"Phone",class:"invalid-feedback"})]),Object(a["createElementVNode"])("div",K,[R,Object(a["createVNode"])(r,{type:"text",class:Object(a["normalizeClass"])(["form-control",{"is-invalid":c["Address"]}]),id:"address",name:"Address",rules:"required",placeholder:"Please enter address",modelValue:l.data.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.data.user.address=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(s,{name:"Address",class:"invalid-feedback"})]),W,X]})),_:1},8,["onSubmit"])])}c("ac1f"),c("00b4");var ee=c("1b9e"),te={data:function(){return{data:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{checkOut:function(){var e=this;Object(U["C"])(this.data).then((function(t){e.alert.msg="Order created successfully!",e.alert.state=!0,e.sendMsg(),e.$emitter.emit("renewCart"),e.$router.push("/payment/".concat(t.data.orderId))})).catch((function(){e.alert.msg="Failed to create order!",e.alert.state=!1,e.sendMsg()}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"Please enter correct phone number."}},mixins:[ee["a"]]},ce=c("6b0d"),ae=c.n(ce);const ne=ae()(te,[["render",Z]]);var le=ne,oe={data:function(){return{couponCode:""}},components:{ContactInfo:le},methods:{applyCoupon:function(){var e=this;Object(U["g"])(this.couponCode).then((function(t){e.final_total=t.data.data.final_total,e.alert.msg="Coupon applied successfully!",e.alert.state=!0,e.sendMsg()})).catch((function(){e.alert.msg="Failed to apply coupon!",e.alert.state=!1,e.sendMsg(),e.couponCode=""}))},goShop:function(){this.$router.push("/products")}},mixins:[A["a"]]};const re=ae()(oe,[["render",M]]);t["default"]=re},8496:function(e,t,c){"use strict";var a=c("3835"),n=(c("e9c4"),c("a397")),l=c("1b9e");t["a"]={data:function(){return{carts:[],total:"",final_total:""}},methods:{getCart:function(){var e=this;Object(n["x"])().then((function(t){e.carts=t.data.data.carts,e.total=t.data.data.total,e.final_total=t.data.data.final_total}))},editCart:function(e,t){var c=this,l=e.qty;"+"===t?l+=1:"-"===t&&(l-=l>1?1:0),Object(n["o"])(e.id,l).then((function(){c.alert.msg="Product edited successfully!",c.alert.state=!0,c.sendMsg(),c.getCart()})).catch((function(e){var t=Object(a["a"])(e.response.data.message,1);c.alert.msg=t[0],c.alert.state=!1,c.sendMsg()}))},delCartItem:function(e){var t=this;Object(n["j"])(e).then((function(){t.alert.msg="Product deleted successfully!",t.alert.state=!0,t.sendMsg(),t.getCart()})).catch((function(e){var c=Object(a["a"])(e.response.data.message,1);t.alert.msg=c[0],t.alert.state=!1,t.sendMsg()}))}},created:function(){this.getCart()},mounted:function(){var e=this;this.$emitter.on("renewCart",(function(){e.getCart()}))},watch:{carts:function(e,t){var c=JSON.stringify(e),a=JSON.stringify(t);c!==a&&this.$emitter.emit("renewCart")}},mixins:[l["a"]]}},e9c4:function(e,t,c){var a=c("23e7"),n=c("da84"),l=c("d066"),o=c("2ba4"),r=c("e330"),s=c("d039"),d=n.Array,i=l("JSON","stringify"),m=r(/./.exec),b=r("".charAt),u=r("".charCodeAt),p=r("".replace),O=r(1..toString),j=/[\uD800-\uDFFF]/g,N=/^[\uD800-\uDBFF]$/,V=/^[\uDC00-\uDFFF]$/,f=function(e,t,c){var a=b(c,t-1),n=b(c,t+1);return m(N,e)&&!m(V,n)||m(V,e)&&!m(N,a)?"\\u"+O(u(e,0),16):e},h=s((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&a({target:"JSON",stat:!0,forced:h},{stringify:function(e,t,c){for(var a=0,n=arguments.length,l=d(n);a<n;a++)l[a]=arguments[a];var r=o(i,null,l);return"string"==typeof r?p(r,j,f):r}})}}]);
//# sourceMappingURL=chunk-087aaa83.7790bc85.js.map