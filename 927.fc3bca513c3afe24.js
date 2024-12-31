"use strict";(self.webpackChunkSpike=self.webpackChunkSpike||[]).push([[927],{927:(Y,f,s)=>{s.r(f),s.d(f,{PedidoRoutes:()=>A});var d=s(1806);const F=d.J1`
  query getPedidos($page: Int!, $size: Int!) {
    getPedidos(page: $page, size: $size) {
      pageInfo {
        totalPaginas
        totalElementos
        paginaActual
        pageSize
      }
      items {
        id
       metodopago
       fecha
       total
       estado
       user{
       id
       name
       email
       }
        shirt{
        id
        nombre
        descripcion
       design{
        id
        nombre
        descripcion

        }
        }
      }
    }
  }
`,P=(d.J1`
  query {
    getAllPedidos {
      id
       metodopago
       fecha
       total
       estado
    }
  }
`,d.J1`
  query getPedido($id: ID!) {
    getPedido(id: $id){
   id
       metodopago
       fecha
       total
       estado
    }
  }
`,d.J1`
  mutation createPedido($pedido: NewPedido!) {
    createPedido(pedido: $pedido) {
      id
      metodopago
      fecha
      total
      estado
      user{
      id
      name
      cedula
      email
      }
  shirt{
      id
      nombre
      descripcion
       design{
      id
      nombre
      descripcion
      imagen
}
      }
    }
  }
`),k=d.J1`
  mutation updatePedido($pedido: UpdatedPedido!) {
    updatePedido(pedido: $pedido) {
      id
      metodopago
      fecha
      total
      estado
      user{
      id
      name
      cedula
      email
      }
  shirt{
      id
      nombre
      descripcion
       design{
      id
      nombre
      descripcion
      imagen
}
      }
    }
  }
`,C=d.J1`
  mutation deletePedido($id: ID!) {
    deletePedido(id: $id)
  }
`;var c=s(177),b=s(6707),g=s(2168),e=s(4438),E=s(6695);const I=()=>["create-pedido"],S=()=>[10,20,50,100,200,500,1e3,2e3,5e3],j=i=>({"background-color":i,color:"white","text-align":"center"});function R(i,n){if(1&i&&(e.j41(0,"div",18),e.EFF(1),e.nrm(2,"button",19),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.SpI(" ",t.successMessage," ")}}function y(i,n){if(1&i&&(e.j41(0,"div",20),e.EFF(1),e.nrm(2,"button",19),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.SpI(" ",t.errorMessage," ")}}function $(i,n){if(1&i){const t=e.RV6();e.j41(0,"tr")(1,"td",15),e.EFF(2),e.k0s(),e.j41(3,"td",15),e.EFF(4),e.k0s(),e.j41(5,"td",15),e.EFF(6),e.k0s(),e.j41(7,"td",15),e.EFF(8),e.k0s(),e.j41(9,"td",21),e.EFF(10),e.k0s(),e.j41(11,"td",15),e.EFF(12),e.k0s(),e.j41(13,"td",15),e.EFF(14),e.k0s(),e.j41(15,"td",15)(16,"button",22),e.bIt("click",function(){const a=e.eBV(t).$implicit,l=e.XpG();return e.Njj(l.deletePedido(a.id))}),e.EFF(17,"Eliminar"),e.k0s()()()}if(2&i){const t=n.$implicit;e.R7$(2),e.JRh(t.id),e.R7$(2),e.JRh(t.user.name),e.R7$(2),e.JRh(t.shirt.nombre),e.R7$(2),e.SpI(" ","1"===t.metodopago?"PAGO QR":"TIGO MONEY",""),e.R7$(),e.Y8G("ngStyle",e.eq3(8,j,"PENDIENTE"===t.estado?"red":"green")),e.R7$(),e.SpI(" ","PENDIENTE"===t.estado?"Pendiente":"Pagado"," "),e.R7$(2),e.JRh(t.fecha),e.R7$(2),e.JRh(t.total)}}let T=(()=>{class i{constructor(t){this.apollo=t,this.successMessage=null,this.errorMessage=null,this.pedidos=[],this.pageInfo={},this.pageSize=10,this.paginaActual=0}ngOnInit(){this.loadData()}loadData(){this.apollo.watchQuery({query:F,variables:{page:this.paginaActual,size:this.pageSize}}).valueChanges.subscribe(t=>{console.log(t),this.pedidos=t?.data?.getPedidos?.items||[],this.pageInfo=t?.data?.getPedidos?.pageInfo||{}})}deletePedido(t){this.apollo.mutate({mutation:C,variables:{id:t}}).subscribe({next:o=>{!0===o.data.deletePedido?(console.log("Habitaci\xf3n eliminada:",o),this.successMessage="Habitaci\xf3n eliminada con \xe9xito!",this.pedidos=this.pedidos.filter(a=>a.id!==t)):this.errorMessage="Error al eliminar la habitaci\xf3n. Por favor, intente nuevamente."},error:o=>{this.errorMessage="Error al eliminar la habitaci\xf3n. Por favor, intente nuevamente.",console.error("Error:",o)}})}onPageChange(t){this.pageSize=t.pageSize,this.paginaActual=t.pageIndex,this.loadData()}static{this.\u0275fac=function(o){return new(o||i)(e.rXU(d.Ic))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-pedido"]],standalone:!0,features:[e.aNF],decls:42,vars:10,consts:[["id","contenido_principal",2,"background-color","white"],[1,"row","justify-content-center"],[1,"col","text-center"],[1,"box-title","text-secondary",2,"font-size","30px"],["class","alert alert-success alert-dismissible fade show mt-3","role","alert",4,"ngIf"],["class","alert alert-danger alert-dismissible fade show mt-3","role","alert",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-12"],[1,"btn","btn-success","btn-sm","mr-2",3,"routerLink"],[1,"card","border-green"],[1,"card-body","p-3"],[1,"table-responsive"],["id","tabla-habitaciones",1,"table","table-bordered","table-striped","table-condensed"],["colspan","7"],[1,"bg-light"],[1,"text-center"],[4,"ngFor","ngForOf"],[3,"page","length","pageSize","pageIndex","pageSizeOptions"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show","mt-3"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show","mt-3"],[3,"ngStyle"],[1,"btn","btn-danger",3,"click"]],template:function(o,a){1&o&&(e.j41(0,"section",0)(1,"div",1)(2,"div",2)(3,"h4",3),e.EFF(4," Gestionar Pedidos "),e.k0s(),e.DNE(5,R,3,1,"div",4)(6,y,3,1,"div",5),e.k0s()(),e.j41(7,"div",6)(8,"div",7)(9,"div")(10,"a",8),e.EFF(11,"Agregar "),e.k0s()()()(),e.j41(12,"div",6)(13,"div",7)(14,"div",9)(15,"div",10)(16,"div",11)(17,"table",12)(18,"thead")(19,"tr"),e.nrm(20,"th",13),e.k0s()(),e.j41(21,"thead",14)(22,"tr")(23,"th",15),e.EFF(24,"ID"),e.k0s(),e.j41(25,"th",15),e.EFF(26,"Cliente"),e.k0s(),e.j41(27,"th",15),e.EFF(28,"Polera"),e.k0s(),e.j41(29,"th",15),e.EFF(30,"metodo de pago"),e.k0s(),e.j41(31,"th",15),e.EFF(32,"estado"),e.k0s(),e.j41(33,"th",15),e.EFF(34,"fecha"),e.k0s(),e.j41(35,"th",15),e.EFF(36,"total"),e.k0s(),e.j41(37,"th",15),e.EFF(38,"Acci\xf3n"),e.k0s()()(),e.j41(39,"tbody"),e.DNE(40,$,18,10,"tr",16),e.k0s()(),e.j41(41,"mat-paginator",17),e.bIt("page",function(p){return a.onPageChange(p)}),e.k0s()()()()()()()),2&o&&(e.R7$(5),e.Y8G("ngIf",a.successMessage),e.R7$(),e.Y8G("ngIf",a.errorMessage),e.R7$(4),e.Y8G("routerLink",e.lJ4(8,I)),e.R7$(30),e.Y8G("ngForOf",a.pedidos),e.R7$(),e.Y8G("length",a.pageInfo.totalElementos)("pageSize",a.pageSize)("pageIndex",a.paginaActual)("pageSizeOptions",e.lJ4(9,S)))},dependencies:[c.MD,c.Sq,c.bT,c.B3,b.G,E.iy,g.iI,g.Wk],encapsulation:2})}}return i})();var r=s(9417),D=s(9283),x=s(1832),N=s(1562);let G=(()=>{class i{constructor(t){this.http=t,this.apiUrl="https://pagofacil-node-api-166739440955.us-central1.run.app"}generarCobro(t){return console.log("Datos enviados al backend:",t),this.http.post(`${this.apiUrl}/generarCobro`,t)}consultarPedido(t){return console.log("Datos enviados al backend:",t),this.http.get(`${this.apiUrl}/consultarPedido`,{params:{pedido_id:t},responseType:"text"})}static{this.\u0275fac=function(o){return new(o||i)(e.KVO(N.Qq))}}static{this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var M=s(4746);function z(i,n){if(1&i&&(e.j41(0,"div",41),e.EFF(1),e.nrm(2,"button",42),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.SpI(" ",t.successMessage," ")}}function O(i,n){if(1&i&&(e.j41(0,"div",43),e.EFF(1),e.nrm(2,"button",42),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.SpI(" ",t.errorMessage," ")}}function _(i,n){if(1&i&&(e.j41(0,"option",44),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.Y8G("ngValue",t.id),e.R7$(),e.JRh(t.name)}}function w(i,n){if(1&i&&(e.j41(0,"option",44),e.EFF(1),e.k0s()),2&i){const t=n.$implicit;e.Y8G("ngValue",t.id),e.R7$(),e.JRh(t.nombre)}}function q(i,n){if(1&i&&(e.j41(0,"div",45),e.nrm(1,"img",46),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.Y8G("src",t.qrImage,e.B4B)}}const A=[{path:"",component:T,data:{titulo:"Pedido"}},{path:"create-pedido",component:(()=>{class i{constructor(t,o,a,l){this.apollo=t,this.fb=o,this.pagoFacilService=a,this.contratoService=l,this.shirts=[],this.users=[],this.successMessage=null,this.errorMessage="",this.qrImage=null,this.nroTransaccion="",this.form=this.fb.group({user_id:[null,r.k0.required],nombre:["",r.k0.required],cedula:["",r.k0.required],email:["",[r.k0.required,r.k0.email]],telefono:["",r.k0.required],shirt_id:[null,r.k0.required],ciNit:["",r.k0.required],tcRazonSocial:["GRUPO-01",r.k0.required],tnMonto:[.01,[r.k0.required,r.k0.min(0)]],tipoServicio:[1,r.k0.required]})}ngOnInit(){this.loadData(),this.loadUsers(),this.form.get("user_id")?.valueChanges.subscribe(t=>{const o=this.users.find(a=>a.id===t);this.selectedUser=o,o&&this.form.patchValue({nombre:o.name,cedula:o.cedula,email:o.email,telefono:o.telefono,ciNit:o.cedula})}),this.form.get("shirt_id")?.valueChanges.subscribe(t=>{this.selectedShirt=this.shirts.find(o=>o.id===t)})}loadData(){this.apollo.watchQuery({query:D.fW}).valueChanges.subscribe(t=>{this.shirts=t?.data?.getAllShirts||[]})}loadUsers(){this.apollo.watchQuery({query:x.C}).valueChanges.subscribe(t=>{this.users=t?.data?.getAllUsers||[]})}onSubmit(){if(this.form.valid){const{telefono:t,tcRazonSocial:o,shirt_id:a,cedula:l,user_id:p,tnMonto:u,email:m,tipoServicio:h,taPedidoDetalle:U}=this.form.value,v={tnTelefono:t,tcRazonSocial:o,tcCiNit:l,shirt_id:a,user_id:p,tnMonto:u,tcCorreo:m,tnTipoServicio:h,taPedidoDetalle:U},J={user:{...this.selectedUser,__typename:void 0},shirt:{...this.selectedShirt,__typename:void 0},metodopago:String(h),fecha:(new Date).toISOString(),total:u,estado:"PENDIENTE"};this.pedido=J,this.realizarGenerarCobro(v),console.log("Formulario enviado:",v)}else this.errorMessage="Por favor complete todos los campos."}realizarGenerarCobro(t){this.pagoFacilService.generarCobro(t).subscribe(o=>{console.log("Respuesta del backend:",o),this.qrImage=o.qrImage,this.createPedido(this.pedido),this.nroTransaccion=o.nroTransaccion,this.startTransactionCheck()},o=>{console.error("Error al realizar la solicitud:",o)})}createPedido(t){this.apollo.mutate({mutation:P,variables:{pedido:t}}).subscribe({next:o=>{this.pedidoCreado=o?.data?.createPedido,console.log("creada con \xe9xito:",o?.data?.createPedido)},error:o=>{console.error("Error al crear ",o)}})}ngOnDestroy(){this.intervalID&&clearInterval(this.intervalID)}startTransactionCheck(){this.intervalID=setInterval(()=>{console.log("Entrando en la consulta de transacci\xf3n:",this.nroTransaccion),this.pagoFacilService.consultarPedido(this.nroTransaccion).subscribe(t=>{if(console.log("Respuesta del backend:",t),"string"==typeof t){const o=t.replace(/^"(.*)"$/,"$1");console.log(o),"COMPLETADO-PROCESADO"==o&&(clearInterval(this.intervalID),this.successMessage="pagado con \xe9xito!",this.updatePedidoEstado("PAGADO"),setTimeout(()=>{this.successMessage=null},5e3))}else t&&"COMPLETADO-PROCESADO"==t.mensaje?(clearInterval(this.intervalID),this.successMessage="pagado con \xe9xito!"):console.log("Estado de la transacci\xf3n no completado:",t.mensaje)},t=>{console.error("Error al consultar la transacci\xf3n:",t)})},1e4)}updatePedidoEstado(t){if(this.pedidoCreado){const{__typename:o,...a}=this.pedidoCreado,{__typename:l,...p}=a.shirt,u={...a,shirt:p,user:{...a.user,__typename:void 0},estado:t};this.apollo.mutate({mutation:k,variables:{pedido:u}}).subscribe({next:m=>{console.log("Pedido actualizado con \xe9xito:",m?.data?.updatePedido),this.registerCertificacion({cedulaCliente:m?.data?.updatePedido.user.cedula,idPedido:m?.data?.updatePedido.id})},error:m=>{console.error("Error al actualizar el pedido:",m)}})}else console.error("No se encontr\xf3 el pedido para actualizar el estado")}registerCertificacion(t){this.contratoService.registerCertificacion(t).subscribe(o=>{console.log("Respuesta del backend:",o),this.qrImage=o.qrImage,this.createPedido(this.pedido),this.nroTransaccion=o.nroTransaccion,this.startTransactionCheck()},o=>{console.error("Error al realizar la solicitud:",o)})}static{this.\u0275fac=function(o){return new(o||i)(e.rXU(d.Ic),e.rXU(r.ok),e.rXU(G),e.rXU(M.M))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-crear-pedido"]],standalone:!0,features:[e.aNF],decls:65,vars:6,consts:[[1,"container","mt-5"],["class","alert alert-success alert-dismissible fade show mt-3","role","alert",4,"ngIf"],["class","alert alert-danger alert-dismissible fade show mt-3","role","alert",4,"ngIf"],[1,"py-12"],[1,"max-w-7xl","mx-auto","sm:px-6","lg:px-8"],[1,"bg-white","overflow-hidden","shadow-sm","sm:rounded-lg"],[1,"p-6"],[1,"mb-6","text-center"],[1,"text-3xl","font-bold"],[1,"row"],[1,"col-md-6"],[1,"text-2xl","font-bold"],[3,"ngSubmit","formGroup"],[1,"row","g-3"],[1,"col-12","col-md-6"],["for","user"],["id","user_id","formControlName","user_id",1,"form-control","form-control-sm"],[3,"ngValue",4,"ngFor","ngForOf"],["for","nombre"],["formControlName","nombre","type","text","id","nombre",1,"form-control"],["for","cedula"],["formControlName","cedula","type","text","id","cedula",1,"form-control"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["for","telefono"],["formControlName","telefono","type","text","id","telefono",1,"form-control"],["for","shirt"],["id","shirt_id","formControlName","shirt_id",1,"form-control","form-control-sm"],["for","ciNit"],["formControlName","ciNit","type","text","id","ciNit",1,"form-control"],["for","tcRazonSocial"],["formControlName","tcRazonSocial","type","text","id","tcRazonSocial",1,"form-control"],["for","tnMonto"],["formControlName","tnMonto","type","number","id","tnMonto",1,"form-control"],["for","tipoServicio"],["formControlName","tipoServicio","id","tipoServicio",1,"form-control"],["value","1"],[1,"mt-5","d-flex","justify-content-center"],["type","submit",1,"btn","btn-success"],[1,"col-md-6","d-flex","justify-content-center","align-items-center"],["class","w-100 max-w-md",4,"ngIf"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show","mt-3"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show","mt-3"],[3,"ngValue"],[1,"w-100","max-w-md"],["alt","QR Code",1,"w-100","h-auto",3,"src"]],template:function(o,a){1&o&&(e.j41(0,"div",0),e.DNE(1,z,3,1,"div",1)(2,O,3,1,"div",2),e.j41(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h3",8),e.EFF(9,"Generar Pedido"),e.k0s()(),e.j41(10,"div",9)(11,"div",10)(12,"h3",11),e.EFF(13,"Datos para la factura"),e.k0s(),e.j41(14,"form",12),e.bIt("ngSubmit",function(){return a.onSubmit()}),e.j41(15,"div",13)(16,"div",14)(17,"label",15),e.EFF(18,"Seleccionar cliente:"),e.k0s(),e.j41(19,"select",16),e.DNE(20,_,2,2,"option",17),e.k0s()(),e.j41(21,"div",14)(22,"label",18),e.EFF(23,"Nombre"),e.k0s(),e.nrm(24,"input",19),e.k0s(),e.j41(25,"div",14)(26,"label",20),e.EFF(27,"C\xe9dula"),e.k0s(),e.nrm(28,"input",21),e.k0s(),e.j41(29,"div",14)(30,"label",22),e.EFF(31,"Correo"),e.k0s(),e.nrm(32,"input",23),e.k0s(),e.j41(33,"div",14)(34,"label",24),e.EFF(35,"Tel\xe9fono"),e.k0s(),e.nrm(36,"input",25),e.k0s(),e.j41(37,"div",14)(38,"label",26),e.EFF(39,"Seleccionar producto:"),e.k0s(),e.j41(40,"select",27),e.DNE(41,w,2,2,"option",17),e.k0s()(),e.j41(42,"div",14)(43,"label",28),e.EFF(44,"CI/NIT"),e.k0s(),e.nrm(45,"input",29),e.k0s(),e.j41(46,"div",14)(47,"label",30),e.EFF(48,"Raz\xf3n Social"),e.k0s(),e.nrm(49,"input",31),e.k0s(),e.j41(50,"div",14)(51,"label",32),e.EFF(52,"Monto Total"),e.k0s(),e.nrm(53,"input",33),e.k0s(),e.j41(54,"div",14)(55,"label",34),e.EFF(56,"Tipo de Servicio"),e.k0s(),e.j41(57,"select",35)(58,"option",36),e.EFF(59,"Servicio QR"),e.k0s()()()(),e.j41(60,"div",37)(61,"button",38),e.EFF(62,"Generar Cobro"),e.k0s()()()(),e.j41(63,"div",39),e.DNE(64,q,2,1,"div",40),e.k0s()()()()()()()),2&o&&(e.R7$(),e.Y8G("ngIf",a.successMessage),e.R7$(),e.Y8G("ngIf",a.errorMessage),e.R7$(12),e.Y8G("formGroup",a.form),e.R7$(6),e.Y8G("ngForOf",a.users),e.R7$(21),e.Y8G("ngForOf",a.shirts),e.R7$(23),e.Y8G("ngIf",a.qrImage))},dependencies:[g.iI,b.G,c.MD,c.Sq,c.bT,r.X1,r.qT,r.xH,r.y7,r.me,r.Q0,r.wz,r.BC,r.cb,r.j4,r.JD],encapsulation:2})}}return i})(),data:{titulo:"Crear Pedido"}}]}}]);