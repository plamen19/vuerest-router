(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuerest-router/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4225:function(e,t,n){"use strict";n("a38d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"app",class:"container"},a=Object(r["f"])("br",null,null,-1),c=Object(r["g"])("Inicio"),i=Object(r["g"])(" | "),u=Object(r["g"])("Agregar nuevo");function s(e,t,n,s,l,d){var b=Object(r["y"])("router-link"),f=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])("div",o,[a,Object(r["h"])(b,{to:"/vuerest-router"},{default:Object(r["E"])((function(){return[c]})),_:1}),i,Object(r["h"])(b,{to:"/agregar"},{default:Object(r["E"])((function(){return[u]})),_:1}),Object(r["h"])(f)])}var l={name:"App",components:{}},d=n("6b0d"),b=n.n(d);const f=b()(l,[["render",s]]);var p=f,m=n("6c02"),j=(n("b0c0"),function(e){return Object(r["u"])("data-v-079fcb8e"),e=e(),Object(r["s"])(),e}),O={id:"tabla-usuarios"},h=j((function(){return Object(r["f"])("br",null,null,-1)})),v=j((function(){return Object(r["f"])("h3",null,"Usuarios del sistema",-1)})),y=j((function(){return Object(r["f"])("p",null,"Lista de los usuarios creados en el sistema.",-1)})),g={key:0,class:"alert alert-info",role:"alert"},k={class:"table"},w=j((function(){return Object(r["f"])("thead",null,[Object(r["f"])("tr",null,[Object(r["f"])("th",null,"Nombre"),Object(r["f"])("th",null,"Email"),Object(r["f"])("th",null,"Acciones")])],-1)})),x={key:0},E=["onUpdate:modelValue"],U={key:1},C={key:2},F=["onUpdate:modelValue"],_={key:3},P={key:4},S=["onClick"],A=["onClick"],I={key:5},R=["onClick"],T=["onClick"],V={key:0},N={key:1};function J(e,t,n,o,a,c){return Object(r["r"])(),Object(r["e"])("div",O,[h,v,y,a.usuarios.length?Object(r["d"])("",!0):(Object(r["r"])(),Object(r["e"])("div",g," No se han agregado usuarios ")),Object(r["f"])("table",k,[w,Object(r["f"])("tbody",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(a.usuarios,(function(e){return Object(r["r"])(),Object(r["e"])("tr",{key:e.id},[a.editando===e.id?(Object(r["r"])(),Object(r["e"])("td",x,[Object(r["F"])(Object(r["f"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return e.name=t}},null,8,E),[[r["C"],e.name]])])):(Object(r["r"])(),Object(r["e"])("td",U,Object(r["A"])(e.name),1)),a.editando===e.id?(Object(r["r"])(),Object(r["e"])("td",C,[Object(r["F"])(Object(r["f"])("input",{type:"email",class:"form-control","onUpdate:modelValue":function(t){return e.email=t}},null,8,F),[[r["C"],e.email]])])):(Object(r["r"])(),Object(r["e"])("td",_,Object(r["A"])(e.email),1)),a.editando===e.id?(Object(r["r"])(),Object(r["e"])("td",P,[Object(r["f"])("button",{class:"btn btn-sm btn-outline-success",onClick:function(t){return c.guardarUsuario(e)}}," 💾 Guardar ",8,S),Object(r["f"])("button",{class:"btn btn-sm btn-outline-secondary ml-2",onClick:function(t){return c.cancelarEdicion(e)}}," ❌ Cancelar ",8,A)])):(Object(r["r"])(),Object(r["e"])("td",I,[Object(r["f"])("button",{class:"btn btn-sm btn-outline-primary",onClick:function(t){return c.editarUsuario(e)}}," ✏️ Editar ",8,R),Object(r["f"])("button",{class:"btn btn-sm btn-outline-danger ml-2",onClick:function(t){return c.deleteUsuario(e)}},[a.eliminando==e.id?(Object(r["r"])(),Object(r["e"])("span",V," Cargando... ")):(Object(r["r"])(),Object(r["e"])("span",N," 🗑️ Eliminar "))],8,T)]))])})),128))])])])}var M=n("1da1"),D=(n("96cf"),n("d3b7"),n("e9c4"),n("d81d"),n("4de4"),{name:"tabla-usuarios",data:function(){return{usuarios:[],editando:null,eliminando:null}},methods:{getUsuarios:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://my-json-server.typicode.com/plamen19/fakeapi/users");case 3:return n=t.sent,t.next=6,n.json();case 6:e.usuarios=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},putUsuario:function(e){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://my-json-server.typicode.com/plamen19/fakeapi/users/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=n.sent,n.next=6,r.json();case 6:o=n.sent,t.usuarios=t.usuarios.map((function(t){return t.id===e.id?o:t})),console.log(o),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},deleteUsuario:function(e){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.eliminando){n.next=13;break}return t.eliminando=e.id,n.prev=2,n.next=5,fetch("https://my-json-server.typicode.com/plamen19/fakeapi/users/".concat(e.id),{method:"DELETE"});case 5:t.usuarios=t.usuarios.filter((function(t){return t.id!==e.id})),t.eliminando=null,n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](2),t.eliminando=null,console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,9]])})))()},editarUsuario:function(e){this.usuarioEditado=Object.assign({},e),this.editando=e.id,this.putUsuario(e)},guardarUsuario:function(e){e.name.length&&e.email.length&&(this.$emit("actualizar-usuario",e),this.editando=null)},cancelarEdicion:function(e){Object.assign(e,this.usuarioEditado),this.editando=null}},mounted:function(){this.getUsuarios()}});n("4225");const G=b()(D,[["render",J],["__scopeId","data-v-079fcb8e"]]);var L=G,$={id:"formulario-usuario"},z=Object(r["f"])("br",null,null,-1),K={class:"container"},q={class:"row"},B=Object(r["f"])("h3",null,"Agrega un nuevo usuario",-1),H={class:"container"},Q={class:"row"},W={class:"col-md-12"},X={key:0,class:"alert alert-danger",role:"alert"},Y={key:1,class:"alert alert-success",role:"alert"},Z={class:"col-md-4"},ee={class:"form-group"},te=Object(r["f"])("label",null,"Nombre",-1),ne={class:"col-md-4"},re={class:"form-group"},oe=Object(r["f"])("label",null,"Email",-1),ae=Object(r["f"])("br",null,null,-1),ce=Object(r["f"])("div",{class:"row"},[Object(r["f"])("div",{class:"col-md-4"},[Object(r["f"])("div",{class:"form-group"},[Object(r["f"])("button",{class:"btn btn-primary"}," Añadir usuario ")])])],-1);function ie(e,t,n,o,a,c){return Object(r["r"])(),Object(r["e"])("div",$,[z,Object(r["f"])("form",{onSubmit:t[5]||(t[5]=Object(r["G"])((function(){return c.enviarFormulario&&c.enviarFormulario.apply(c,arguments)}),["prevent"]))},[Object(r["f"])("div",K,[Object(r["f"])("div",q,[B,Object(r["f"])("div",H,[Object(r["f"])("div",Q,[Object(r["f"])("div",W,[a.error&&a.procesando?(Object(r["r"])(),Object(r["e"])("div",X," Debes rellenar todos los campos! ")):Object(r["d"])("",!0),a.correcto?(Object(r["r"])(),Object(r["e"])("div",Y," El usuario ha sido agregado correctamente! ")):Object(r["d"])("",!0)])])]),Object(r["f"])("div",Z,[Object(r["f"])("div",ee,[te,Object(r["F"])(Object(r["f"])("input",{ref:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.usuario.name=e}),type:"text",class:Object(r["n"])(["form-control",{"is-invalid":a.procesando&&c.nameInvalido}]),onFocus:t[1]||(t[1]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)}),onKeypress:t[2]||(t[2]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[r["C"],a.usuario.name]])])]),Object(r["f"])("div",ne,[Object(r["f"])("div",re,[oe,Object(r["F"])(Object(r["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.usuario.email=e}),type:"email",class:Object(r["n"])([{"is-invalid":a.procesando&&c.emailInvalido},"form-control"]),onFocus:t[4]||(t[4]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)})},null,34),[[r["C"],a.usuario.email]])])])]),ae,ce])],32)])}var ue={name:"formulario-usuario",data:function(){return{procesando:!1,correcto:!1,error:!1,usuario:{name:"",email:""}}},methods:{postUsuario:function(e){return Object(M["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://my-json-server.typicode.com/plamen19/fakeapi/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,console.log(r),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},enviarFormulario:function(){this.procesando=!0,this.resetEstado(),this.nameInvalido||this.emailInvalido?this.error=!0:(this.postUsuario(this.usuario),this.$refs.name.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.usuario={name:"",email:""})},resetEstado:function(){this.correcto=!1,this.error=!1}},computed:{nameInvalido:function(){return this.usuario.name.length<1},emailInvalido:function(){return this.usuario.email.length<1}}};const se=b()(ue,[["render",ie]]);var le=se,de=[{path:"/vuerest-router",name:"Tabla",component:L},{path:"/agregar",name:"Agregar",component:le}],be=Object(m["a"])({history:Object(m["b"])(),routes:de}),fe=be;n("7b17"),n("f9e3");Object(r["c"])(p).use(fe).mount("#app")},a38d:function(e,t,n){}});
//# sourceMappingURL=app.9b431ddd.js.map