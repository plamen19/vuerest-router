import { createWebHistory, createRouter } from "vue-router";
import TablaUsuarios from "@/components/TablaUsuarios.vue";
import FormularioUsuario from "@/components/FormularioUsuario.vue";

const routes = [
       {
              path: "/vuerest-router",
              name: "Tabla",
              component: TablaUsuarios,
       },
       {
              path: "/agregar",
              name: "Agregar",
              component: FormularioUsuario,
       },
];

const router = createRouter({
       history: createWebHistory(),
       routes,
});

export default router;
