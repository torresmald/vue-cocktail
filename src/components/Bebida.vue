<script setup>
import { useBebidasStore } from '../stores/bedidas';
const store = useBebidasStore();
const props = defineProps({
    bebida: {
        type: Object
    }
});
</script>

<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
        <img :src="bebida.strDrinkThumb" :alt="'Imagen Cocktail' + bebida.id" class="hover:scale-110 transition-transform hover:rotate-2">
    </div>
    <div class="p-5">
        <h2 class="text-2xl truncate font-extrabold">{{ bebida.strDrink }}</h2>
        <button type="button" class="bg-orange-400 mt-5 w-full p-3 font-bold text-lg hover:bg-orange-800 rounded-lg" @click="store.seleccionarBebida(bebida.idDrink)">Ver Receta</button>
    </div>
  </div>
</template>

