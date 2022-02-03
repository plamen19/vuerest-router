<template>
       <div id="tabla-usuarios">

              <br>
              <h3>Usuarios del sistema</h3>
              <p>Lista de los usuarios creados en el sistema.</p>

              <div
                     v-if="!usuarios.length"
                     class="alert alert-info"
                     role="alert"
              >
                     No se han agregado usuarios
              </div>
              <table class="table">
                     <thead>
                            <tr>
                                   <th>Nombre</th>
                                   <th>Email</th>
                                   <th>Acciones</th>
                            </tr>
                     </thead>
                     <tbody>
                            <tr v-for="usuario in usuarios" :key="usuario.id">
                                   <td v-if="editando === usuario.id">
                                          <input
                                                 type="text"
                                                 class="form-control"
                                                 v-model="usuario.name"
                                          />
                                   </td>
                                   <td v-else>
                                          {{ usuario.name }}
                                   </td>
                                   <td v-if="editando === usuario.id">
                                          <input
                                                 type="email"
                                                 class="form-control"
                                                 v-model="usuario.email"
                                          />
                                   </td>
                                   <td v-else>
                                          {{ usuario.email }}
                                   </td>
                                   <td v-if="editando === usuario.id">
                                          <button
                                                 class="btn btn-sm btn-outline-success"
                                                 @click="
                                                        guardarUsuario(usuario)
                                                 "
                                          >
                                                 💾 Guardar
                                          </button>
                                          <button
                                                 class="btn btn-sm btn-outline-secondary ml-2"
                                                 @click="
                                                        cancelarEdicion(usuario)
                                                 "
                                          >
                                                 ❌ Cancelar
                                          </button>
                                   </td>
                                   <td v-else>
                                          <button
                                                 class="btn btn-sm btn-outline-primary"
                                                 @click="editarUsuario(usuario)"
                                          >
                                                 ✏️ Editar
                                          </button>
                                          <button
                                                 class="btn btn-sm btn-outline-danger ml-2"
                                                 @click="deleteUsuario(usuario)"
                                          >
                                                 <span v-if="eliminando == usuario.id">
                                                        Cargando...
                                                 </span>
                                                 <span v-else>
                                                        🗑️ Eliminar
                                                 </span>
                                          </button>
                                   </td>
                            </tr>
                     </tbody>
              </table>
       </div>
</template>

<script>
export default {
       name: "tabla-usuarios",

       data() {
              return {
                     usuarios: [],
                     editando: null,
                     eliminando: null,
              };
       },
       methods: {
              async getUsuarios() {
                     try {
                            const response = await fetch(
                                   "https://my-json-server.typicode.com/plamen19/fakeapi/users"
                            );
                            this.usuarios = await response.json();
                     } catch (error) {
                            console.error(error);
                     }
              },
              async putUsuario(usuario) {
                     try {
                            const response = await fetch(
                                   `https://my-json-server.typicode.com/plamen19/fakeapi/users/${usuario.id}`,
                                   {
                                          method: "PUT",
                                          body: JSON.stringify(usuario),
                                          headers: {
                                                 "Content-type":
                                                        "application/json; charset=UTF-8",
                                          },
                                   }
                            );

                            const usuarioActualizado = await response.json();
                            this.usuarios = this.usuarios.map((u) =>
                                   u.id === usuario.id ? usuarioActualizado : u
                            );
                            console.log(usuarioActualizado);
                     } catch (error) {
                            console.error(error);
                     }
              },
              async deleteUsuario(usuario) {
                     
                     if( !this.eliminando ){

                            this.eliminando = usuario.id;
                            try {
                                   await fetch(
                                          `https://my-json-server.typicode.com/plamen19/fakeapi/users/${usuario.id}`,
                                          {
                                                 method: "DELETE",
                                          }
                                   );

                                   this.usuarios = this.usuarios.filter(
                                          (u) => u.id !== usuario.id
                                   );

                                   this.eliminando = null;
                            } catch (error) {

                                   this.eliminando = null;
                                   console.error(error);
                            }

                     }

              },
              editarUsuario(usuario) {
                     this.usuarioEditado = Object.assign({}, usuario);
                     this.editando = usuario.id;

                     this.putUsuario( usuario );
              },
              guardarUsuario(usuario) {
                     if (!usuario.name.length || !usuario.email.length) {
                            return;
                     }
                     this.$emit("actualizar-usuario", usuario);
                     this.editando = null;
              },
              cancelarEdicion(usuario) {
                     Object.assign(usuario, this.usuarioEditado);
                     this.editando = null;
              },
       },

       mounted(){
              this.getUsuarios();
       }

};
</script>

<style scoped>

       th{

              background-color: rgba(0,150,250,0.5);

       }

       td, tr{

              background-color: rgba(0,150,250,0.1);

       }

       td button{

              margin:5px;

       }

</style>