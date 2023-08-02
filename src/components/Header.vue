<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useBebidasStore } from "../stores/bedidas";
import { useNotificacionStore } from "../stores/notificaciones";
const store = useBebidasStore();
const notificaciones = useNotificacionStore();
const route = useRoute();
const inicio = computed(() => {
  return route.name === "inicio";
});

const handleSumbit = () => {
  if (Object.values(store.busqueda).includes("")) {
    notificaciones.error = true;
    notificaciones.texto = "Todos los campos son Obligatorios";
    notificaciones.mostrar = true;
    setTimeout(() => {
      notificaciones.$reset();
    }, 2000);
    return;
  }

  store.obtenerRecetas();
  setTimeout(() => {
    notificaciones.$reset();
  }, 2000);
};
</script>

<template>
  <header class="bg-slate-800" :class="{ header: inicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink to="/">
            <img src="/src/assets/img/logo.svg" alt="Logo" class="w-32" />
          </RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink
            to="/"
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
          >
            Inicio
          </RouterLink>
          <RouterLink
            to="/favoritos"
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
          >
            Favoritos
          </RouterLink>
        </nav>
      </div>
      <form
        class="md:w-1/2 lg:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        v-if="inicio"
        @submit.prevent="handleSumbit"
      >
        <div class="space-y-4">
          <label
            for="ingrediente"
            class="block text-white uppercase font-bold text-lg"
          >
            Nombre o Ingredientes
          </label>
          <input
            id="ingrediente"
            type="text"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o Ingrediente"
            v-model="store.busqueda.nombre"
          />
        </div>
        <div class="space-y-4">
          <label
            for="categoria"
            class="block text-white uppercase font-bold text-lg"
          >
            Categoria
          </label>
          <select
            id="categoria"
            class="p-3 w-full rounded-lg focus:outline-none"
            v-model="store.busqueda.categoria"
          >
            <option value="">--Seleccione--</option>
            <option
              :value="categoria.strCategory"
              v-for="categoria in store.categorias"
            >
              {{ categoria.strCategory }}
            </option>
          </select>
        </div>
        <input
          type="submit"
          value="Buscar"
          class="bg-orange-600 hover:bg-orange-900 cursor-pointer text-white font-bold rounded-lg p-2 w-full"
        />
      </form>
    </div>
  </header>
</template>
<style>
.header {
  background-image: url("../assets/img/bg.jpg");
  background-position: center;
  background-size: cover;
}
</style>
