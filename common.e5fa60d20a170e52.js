"use strict";(self.webpackChunkSpike=self.webpackChunkSpike||[]).push([[76],{111:(r,i,t)=>{t.d(i,{N:()=>o,d:()=>a});var e=t(1806);const a=e.J1`
  query getDesigns($page: Int!, $size: Int!) {
    getDesigns(page: $page, size: $size) {
     pageInfo {
        totalPaginas
        totalElementos
        paginaActual
        pageSize
      }
      items{
        id
        nombre
        descripcion
        imagen
      }
    }
  }
`,o=e.J1`
query {
  getAllDesigns {
    id
    nombre
    descripcion
    imagen
    }
}
`},9283:(r,i,t)=>{t.d(i,{dK:()=>a,fW:()=>o});var e=t(1806);const a=e.J1`
  query getShirts($page: Int!, $size: Int!) {
    getShirts(page: $page, size: $size) {
      pageInfo {
        totalPaginas
        totalElementos
        paginaActual
        pageSize
      }
      items {
        id
       nombre
       descripcion
       talla
       imagen
       precio
       stock
        design{
        id
        nombre
        descripcion
       imagen
        }
      }
    }
  }
`,o=e.J1`
  query {
    getAllShirts {
      id
      nombre
       descripcion
       talla
       precio
       stock
    }
  }
`;e.J1`
  query getShirt($id: ID!) {
    getShirt(id: $id){
    id
    numeroHabitacion
    precioPorNoche
    estado
    tipo
    capacidad
    detalles
    }
  }
`},3794:(r,i,t)=>{t.d(i,{$u:()=>a,TK:()=>s,hG:()=>l,kg:()=>o});var e=t(1806);const a=e.J1`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`,o=e.J1`
      mutation createUser($name: String!, $cedula: String!, $telefono: String!, $direccion: String!, $email: String!, $password: String!, $role: Role!) {
  createUser(user: { name: $name,cedula: $cedula,telefono: $telefono,direccion: $direccion, email: $email, password: $password, role: $role }) {
    id
    name
    cedula
    telefono
    direccion
    email
    role
  }
}
`,s=e.J1`
      mutation UpdateUser($user: UpdatedUser!) {
    updateUser(user: $user) {
      id
      name
      cedula
      telefono
      direccion
      email
      role
    }
  }
`,l=e.J1`
mutation deleteUser($id: ID!) {
  deleteUser(id: $id)
}
`},1832:(r,i,t)=>{t.d(i,{C:()=>a});const a=t(1806).J1`
query {
  getAllUsers {
    id
    name
    cedula
    telefono
    direccion
    email
    role
    }
}
`},4746:(r,i,t)=>{t.d(i,{M:()=>o});var e=t(4438),a=t(1562);let o=(()=>{class s{constructor(n){this.http=n,this.apiUrl="https://api-smartcontract-shirt-muddy-meadow-8957.fly.dev"}registerCertificacion(n){return console.log("Datos enviados al backend:",n),this.http.post(`${this.apiUrl}/registerCertificacion`,n)}getCertificaciones(){return this.http.get(`${this.apiUrl}/getAllRegistros`)}getCertificacion(n){return this.http.get(`${this.apiUrl}/getCertificacion/${n}`)}static{this.\u0275fac=function(c){return new(c||s)(e.KVO(a.Qq))}}static{this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})()}}]);