<script setup>
import { useBebidasStore } from "../stores/bedidas";
import Bebida from "../components/Bebida.vue";
const bebidas = useBebidasStore();
</script>

<template>
  <h1 class="text-6xl">Inicio</h1>
  <p v-if="bebidas.noRecetas" class="font-bold text-orange-600 mt-3 text-center">No hay Recetas, utiliza el Formulario</p>

  <div
    class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-10"
  >
    <Bebida v-for="bebida in bebidas.bebidas" :bebida="bebida" :key="bebida.idDrink"/>
  </div>
</template>
