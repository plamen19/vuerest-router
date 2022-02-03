<template>
       <div id="formulario-usuario">
              <br />
              <form @submit.prevent="enviarFormulario">
                     <div class="container">
                            <div class="row">
                                   <h3>Agrega un nuevo usuario</h3>
                                   <div class="container">
                                          <div class="row">
                                                 <div class="col-md-12">
                                                        <div
                                                               v-if="
                                                                      error &&
                                                                      procesando
                                                               "
                                                               class="alert alert-danger"
                                                               role="alert"
                                                        >
                                                               Debes rellenar
                                                               todos los campos!
                                                        </div>
                                                        <div
                                                               v-if="correcto"
                                                               class="alert alert-success"
                                                               role="alert"
                                                        >
                                                               El usuario ha
                                                               sido agregado
                                                               correctamente!
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                                   <div class="col-md-4">
                                          <div class="form-group">
                                                 <label>Nombre</label>
                                                 <input
                                                        ref="name"
                                                        v-model="usuario.name"
                                                        type="text"
                                                        class="form-control"
                                                        :class="{
                                                               'is-invalid':
                                                                      procesando &&
                                                                      nameInvalido,
                                                        }"
                                                        @focus="resetEstado"
                                                        @keypress="resetEstado"
                                                 />
                                          </div>
                                   </div>
                                   <div class="col-md-4">
                                          <div class="form-group">
                                                 <label>Email</label>
                                                 <input
                                                        v-model="usuario.email"
                                                        type="email"
                                                        :class="{
                                                               'is-invalid':
                                                                      procesando &&
                                                                      emailInvalido,
                                                        }"
                                                        class="form-control"
                                                        @focus="resetEstado"
                                                 />
                                          </div>
                                   </div>
                            </div>
                            <br />
                            <div class="row">
                                   <div class="col-md-4">
                                          <div class="form-group">
                                                 <button
                                                        class="btn btn-primary"
                                                 >
                                                        Añadir usuario
                                                 </button>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </form>
       </div>
</template>

<script>
export default {
       name: "formulario-usuario",
       data() {
              return {
                     procesando: false,
                     correcto: false,
                     error: false,
                     usuario: {
                            name: "",
                            email: "",
                     },
              };
       },
       methods: {
              async postUsuario(usuario) {
                     try {
                            const response = await fetch(
                                   "https://my-json-server.typicode.com/plamen19/fakeapi/users",
                                   {
                                          method: "POST",
                                          body: JSON.stringify(usuario),
                                          headers: {
                                                 "Content-type":
                                                        "application/json; charset=UTF-8",
                                          },
                                   }
                            );

                            const usuarioCreado = await response.json();

                            console.log(usuarioCreado);
                     } catch (error) {
                            console.error(error);
                     }
              },
              enviarFormulario() {
                     this.procesando = true;
                     this.resetEstado();

                     // Comprobamos la presencia de errores
                     if (this.nameInvalido || this.emailInvalido) {
                            this.error = true;
                            return;
                     }

                     this.postUsuario(this.usuario);

                     this.$refs.name.focus();
                     this.error = false;
                     this.correcto = true;
                     this.procesando = false;

                     // Restablecemos el valor de la variables
                     this.usuario = {
                            name: "",
                            email: "",
                     };
              },
              resetEstado() {
                     this.correcto = false;
                     this.error = false;
              },
       },
       computed: {
              nameInvalido() {
                     return this.usuario.name.length < 1;
              },
              emailInvalido() {
                     return this.usuario.email.length < 1;
              },
       },
};
</script>
