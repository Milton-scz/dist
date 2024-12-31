"use strict";(self.webpackChunkSpike=self.webpackChunkSpike||[]).push([[177],{5177:(D,g,i)=>{i.r(g),i.d(g,{UsuariosRoutes:()=>y});var b=i(6707),s=i(9417),u=i(2168),d=i(177),k=i(1832),m=i(3794),h=i(6469),e=i(4438),F=i(1806);const v=()=>["create-usuario"];function C(r,c){if(1&r&&(e.j41(0,"div",42),e.EFF(1),e.nrm(2,"button",43),e.k0s()),2&r){const o=e.XpG();e.R7$(),e.SpI(" ",o.successMessage," ")}}function U(r,c){if(1&r&&(e.j41(0,"div",44),e.EFF(1),e.nrm(2,"button",43),e.k0s()),2&r){const o=e.XpG();e.R7$(),e.SpI(" ",o.errorMessage," ")}}function j(r,c){if(1&r){const o=e.RV6();e.j41(0,"tr")(1,"td",15),e.EFF(2),e.k0s(),e.j41(3,"td",15),e.EFF(4),e.k0s(),e.j41(5,"td",15),e.EFF(6),e.k0s(),e.j41(7,"td",15),e.EFF(8),e.k0s(),e.j41(9,"td",15),e.EFF(10),e.k0s(),e.j41(11,"td",15),e.EFF(12),e.k0s(),e.j41(13,"td",15)(14,"button",45),e.bIt("click",function(){const t=e.eBV(o).$implicit,n=e.XpG();return e.Njj(n.editarUser(t))}),e.EFF(15,"Editar"),e.k0s(),e.j41(16,"button",46),e.bIt("click",function(){const t=e.eBV(o).$implicit,n=e.XpG();return e.Njj(n.deleteUser(t.id))}),e.EFF(17,"Eliminar"),e.k0s()()()}if(2&r){const o=c.$implicit;e.R7$(2),e.JRh(o.id),e.R7$(2),e.JRh(o.name),e.R7$(2),e.JRh(o.cedula),e.R7$(2),e.JRh(o.telefono),e.R7$(2),e.JRh(o.email),e.R7$(2),e.JRh(o.role)}}let I=(()=>{class r{constructor(o){this.apollo=o,this.selectedUser={},this.users=[],this.successMessage=null,this.errorMessage=null}ngOnInit(){this.loadData()}loadData(){this.apollo.watchQuery({query:k.C}).valueChanges.subscribe(o=>{this.users=o?.data?.getAllUsers,console.log(this.users)})}deleteUser(o){this.apollo.mutate({mutation:m.hG,variables:{id:o}}).subscribe({next:a=>{1==a.data.deleteUser?(console.log(a),this.successMessage="Cliente eliminado con \xe9xito!",this.errorMessage=null,this.users=this.users.filter(t=>t.id!==o)):(console.log(a),this.errorMessage="Error al eliminar el usuario. Por favor, intente nuevamente.",this.successMessage=null)},error:a=>{this.errorMessage="Error al eliminar el usuario. Por favor, intente nuevamente.",this.successMessage=null,console.error("Error:",a)}})}saveUser(){console.log("Usuario guardado:",this.selectedUser),this.updateUser(this.selectedUser);const o=document.getElementById("editUserModal");h.aF.getInstance(o)?.hide();const t=this.users.findIndex(n=>n.id===this.selectedUser.id);t>-1&&(this.users[t]={...this.selectedUser})}updateUser(o){this.apollo.mutate({mutation:m.TK,variables:{user:{id:o.id,name:o.name,cedula:o.cedula,telefono:o.telefono,direccion:o.direccion,email:o.email,role:o.role}}}).subscribe({next:a=>{this.successMessage="Usuario actualizado con \xe9xito!",this.errorMessage=null,setTimeout(()=>this.successMessage=null,3e3)},error:a=>{this.errorMessage="Error al editar el usuario. Por favor, intente nuevamente.",this.successMessage=null,console.error("Error:",a)}})}editarUser(o){this.selectedUser={...o};const a=document.getElementById("editUserModal");new h.aF(a).show();const n=document.querySelector(".modal-backdrop");n&&n.remove()}static{this.\u0275fac=function(a){return new(a||r)(e.rXU(F.Ic))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-starter"]],standalone:!0,features:[e.aNF],decls:79,vars:10,consts:[["id","contenido_principal",2,"background-color","white"],[1,"row","justify-content-center"],[1,"col","text-center"],[1,"box-title","text-secondary",2,"font-size","30px"],["class","alert alert-success alert-dismissible fade show mt-3","role","alert",4,"ngIf"],["class","alert alert-danger alert-dismissible fade show mt-3","role","alert",4,"ngIf"],[1,"row","mt-3"],[1,"col-md-12"],[1,"btn","btn-success","btn-sm","mr-2",3,"routerLink"],[1,"card","border-green"],[1,"card-body","p-3"],[1,"table-responsive"],["id","tabla-empresas",1,"table","table-bordered","table-striped","table-condensed"],["colspan","5"],[1,"bg-light"],[1,"text-center"],[4,"ngFor","ngForOf"],["id","editUserModal","tabindex","-1","aria-labelledby","editUserModalLabel","aria-hidden","true",1,"modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","editUserModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[3,"ngSubmit"],[1,"modal-body"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","cedula",1,"form-label"],["type","text","id","cedula","name","cedula","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","telefono",1,"form-label"],["type","text","id","telefono","name","telefono","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","email",1,"form-label"],["type","email","id","email","name","email","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","role",1,"form-label"],["id","role","name","role","required","",1,"form-select",3,"ngModelChange","ngModel"],["value","ADMINISTRADOR"],["value","CLIENTE"],["value","EMPLEADO"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","submit",1,"btn","btn-primary"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show","mt-3"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show","mt-3"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(a,t){1&a&&(e.j41(0,"section",0)(1,"div",1)(2,"div",2)(3,"h4",3),e.EFF(4," Gestionar Usuarios "),e.k0s(),e.DNE(5,C,3,1,"div",4)(6,U,3,1,"div",5),e.k0s()(),e.j41(7,"div",6)(8,"div",7)(9,"div")(10,"a",8),e.EFF(11,"Agregar"),e.k0s()()()(),e.j41(12,"div",6)(13,"div",7)(14,"div",9)(15,"div",10)(16,"div",11)(17,"table",12)(18,"thead")(19,"tr"),e.nrm(20,"th",13),e.k0s()(),e.j41(21,"thead",14)(22,"tr")(23,"th",15),e.EFF(24,"ID"),e.k0s(),e.j41(25,"th",15),e.EFF(26,"Nombre"),e.k0s(),e.j41(27,"th",15),e.EFF(28,"Cedula"),e.k0s(),e.j41(29,"th",15),e.EFF(30,"Telefono"),e.k0s(),e.j41(31,"th",15),e.EFF(32,"Email"),e.k0s(),e.j41(33,"th",15),e.EFF(34,"Rol"),e.k0s(),e.j41(35,"th",15),e.EFF(36,"Accion"),e.k0s()()(),e.j41(37,"tbody"),e.DNE(38,j,18,6,"tr",16),e.k0s()()()()()()(),e.j41(39,"div",17)(40,"div",18)(41,"div",19)(42,"div",20)(43,"h5",21),e.EFF(44,"Editar Usuario"),e.k0s(),e.nrm(45,"button",22),e.k0s(),e.j41(46,"form",23),e.bIt("ngSubmit",function(){return t.saveUser()}),e.j41(47,"div",24)(48,"div",25)(49,"label",26),e.EFF(50,"Nombre"),e.k0s(),e.j41(51,"input",27),e.mxI("ngModelChange",function(l){return e.DH7(t.selectedUser.name,l)||(t.selectedUser.name=l),l}),e.k0s()(),e.j41(52,"div",25)(53,"label",28),e.EFF(54,"C\xe9dula"),e.k0s(),e.j41(55,"input",29),e.mxI("ngModelChange",function(l){return e.DH7(t.selectedUser.cedula,l)||(t.selectedUser.cedula=l),l}),e.k0s()(),e.j41(56,"div",25)(57,"label",30),e.EFF(58,"Tel\xe9fono"),e.k0s(),e.j41(59,"input",31),e.mxI("ngModelChange",function(l){return e.DH7(t.selectedUser.telefono,l)||(t.selectedUser.telefono=l),l}),e.k0s()(),e.j41(60,"div",25)(61,"label",32),e.EFF(62,"Email"),e.k0s(),e.j41(63,"input",33),e.mxI("ngModelChange",function(l){return e.DH7(t.selectedUser.email,l)||(t.selectedUser.email=l),l}),e.k0s()(),e.j41(64,"div",25)(65,"label",34),e.EFF(66,"Rol"),e.k0s(),e.j41(67,"select",35),e.mxI("ngModelChange",function(l){return e.DH7(t.selectedUser.role,l)||(t.selectedUser.role=l),l}),e.j41(68,"option",36),e.EFF(69,"ADMINISTRADOR"),e.k0s(),e.j41(70,"option",37),e.EFF(71,"CLIENTE"),e.k0s(),e.j41(72,"option",38),e.EFF(73,"EMPLEADO"),e.k0s()()()(),e.j41(74,"div",39)(75,"button",40),e.EFF(76,"Cerrar"),e.k0s(),e.j41(77,"button",41),e.EFF(78,"Guardar cambios"),e.k0s()()()()()()()),2&a&&(e.R7$(5),e.Y8G("ngIf",t.successMessage),e.R7$(),e.Y8G("ngIf",t.errorMessage),e.R7$(4),e.Y8G("routerLink",e.lJ4(9,v)),e.R7$(28),e.Y8G("ngForOf",t.users),e.R7$(13),e.R50("ngModel",t.selectedUser.name),e.R7$(4),e.R50("ngModel",t.selectedUser.cedula),e.R7$(4),e.R50("ngModel",t.selectedUser.telefono),e.R7$(4),e.R50("ngModel",t.selectedUser.email),e.R7$(4),e.R50("ngModel",t.selectedUser.role))},dependencies:[d.MD,d.Sq,d.bT,b.G,u.iI,u.Wk,s.YN,s.qT,s.xH,s.y7,s.me,s.wz,s.BC,s.cb,s.YS,s.vS,s.cV],encapsulation:2})}}return r})();var E=function(r){return r.CLIENTE="CLIENTE",r.EMPLEADO="EMPLEADO",r.ADMINISTRADOR="ADMINISTRADOR",r}(E||{});function R(r,c){if(1&r&&(e.j41(0,"div",23),e.EFF(1),e.nrm(2,"button",24),e.k0s()),2&r){const o=e.XpG();e.R7$(),e.SpI(" ",o.successMessage," ")}}function T(r,c){if(1&r&&(e.j41(0,"div",25),e.EFF(1),e.nrm(2,"button",24),e.k0s()),2&r){const o=e.XpG();e.R7$(),e.SpI(" ",o.errorMessage," ")}}const y=[{path:"",component:I,data:{titulo:"Usuarios"}},{path:"create-usuario",component:(()=>{class r{constructor(o){this.apollo=o,this.successMessage=null,this.errorMessage=null,this.roles=Object.values(E),this.form=new s.gE({name:new s.MJ("",[s.k0.required]),password:new s.MJ(""),email:new s.MJ("",[s.k0.required,s.k0.email]),telefono:new s.MJ("",[s.k0.required]),role:new s.MJ("",[s.k0.required]),direccion:new s.MJ("",[s.k0.required]),cedula:new s.MJ("",[s.k0.required])})}ngOnInit(){}onSubmit(){if(this.form.valid){const{name:o,cedula:a,telefono:t,direccion:n,email:l,password:p,role:f}=this.form.value;this.createUser(o,a,t,n,l,p,f)}else this.errorMessage="Por favor, complete todos los campos correctamente."}createUser(o,a,t,n,l,p,f){this.apollo.mutate({mutation:m.kg,variables:{name:o,cedula:a,telefono:t,direccion:n,email:l,password:p,role:f}}).subscribe({next:M=>{this.successMessage="Usuario creado con \xe9xito!",this.errorMessage=null,this.form.reset(),setTimeout(()=>this.successMessage=null,3e3)},error:M=>{this.errorMessage="Error al crear el usuario. Por favor, intente nuevamente.",this.successMessage=null,console.error("Error:",M)}})}static{this.\u0275fac=function(a){return new(a||r)(e.rXU(F.Ic))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-usuario"]],standalone:!0,features:[e.aNF],decls:40,vars:3,consts:[[1,"container","mt-5"],["class","alert alert-success alert-dismissible fade show mt-3","role","alert",4,"ngIf"],["class","alert alert-danger alert-dismissible fade show mt-3","role","alert",4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","placeholder","Ingrese el nombre usuario",1,"form-control"],["for","cedula"],["type","text","id","cedula","formControlName","cedula","placeholder","Ingrese cedula..",1,"form-control"],["for","telefono"],["type","text","id","telefono","formControlName","telefono","placeholder","Ingrese el telefono del usuario",1,"form-control"],["for","direccion"],["type","text","id","direccion","formControlName","direccion","placeholder","Ingrese direccion",1,"form-control"],["for","email"],["id","email","formControlName","email","placeholder","Ingrese correo",1,"form-control"],["for","password"],["id","password","type","password","formControlName","password","placeholder","Ingrese contrase\xf1a",1,"form-control"],["for","role"],["id","role","formControlName","role",1,"form-control"],["value","ADMINISTRADOR"],["value","EMPLEADO"],["value","CLIENTE"],["type","submit",1,"btn","btn-primary","mt-3"],["role","alert",1,"alert","alert-success","alert-dismissible","fade","show","mt-3"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"],["role","alert",1,"alert","alert-danger","alert-dismissible","fade","show","mt-3"]],template:function(a,t){1&a&&(e.j41(0,"div",0),e.DNE(1,R,3,1,"div",1)(2,T,3,1,"div",2),e.j41(3,"form",3),e.bIt("ngSubmit",function(){return t.onSubmit()}),e.j41(4,"div",4)(5,"label",5),e.EFF(6,"Nombre:"),e.k0s(),e.nrm(7,"input",6),e.k0s(),e.j41(8,"div",4)(9,"label",7),e.EFF(10,"Cedula:"),e.k0s(),e.nrm(11,"input",8),e.k0s(),e.j41(12,"div",4)(13,"label",9),e.EFF(14,"Telefono:"),e.k0s(),e.nrm(15,"input",10),e.k0s(),e.j41(16,"div",4)(17,"label",11),e.EFF(18,"Direccion:"),e.k0s(),e.nrm(19,"input",12),e.k0s(),e.j41(20,"div",4)(21,"label",13),e.EFF(22,"email:"),e.k0s(),e.nrm(23,"input",14),e.k0s(),e.j41(24,"div",4)(25,"label",15),e.EFF(26,"Password:"),e.k0s(),e.nrm(27,"input",16),e.k0s(),e.j41(28,"div",4)(29,"label",17),e.EFF(30,"Seleccionar Rol"),e.k0s(),e.j41(31,"select",18)(32,"option",19),e.EFF(33,"ADMINISTRADOR"),e.k0s(),e.j41(34,"option",20),e.EFF(35,"EMPLEADO"),e.k0s(),e.j41(36,"option",21),e.EFF(37,"CLIENTE"),e.k0s()()(),e.j41(38,"button",22),e.EFF(39,"Crear Usuario"),e.k0s()()()),2&a&&(e.R7$(),e.Y8G("ngIf",t.successMessage),e.R7$(),e.Y8G("ngIf",t.errorMessage),e.R7$(),e.Y8G("formGroup",t.form))},dependencies:[u.iI,b.G,s.YN,s.qT,s.xH,s.y7,s.me,s.wz,s.BC,s.cb,s.X1,s.j4,s.JD,d.MD,d.bT],encapsulation:2})}}return r})(),data:{titulo:"Crear Usuarios"}}]}}]);