<script setup>
import { ref } from "vue";
import Bebida from "../components/Bebida.vue";
import {useFavoritosStore} from '../stores/favoritos';
const favoritos = useFavoritosStore();
console.log(favoritos.favoritos);
</script>

<template>
  <h1 class="text-6xl">Favoritos</h1>
  <p v-if="favoritos.noFavoritos" class="font-bold text-orange-600 mt-3">No hay Favoritos</p>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 my-10">
    <Bebida
      v-for="bebida in favoritos.favoritos"
      :bebida="bebida"
      :key="bebida.idDrink"
    />
  </div>
  
</template>
