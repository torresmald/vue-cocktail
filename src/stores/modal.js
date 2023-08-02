import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useFavoritosStore } from "./favoritos";
import { useBebidasStore } from "./bedidas";
export const useModalStore = defineStore('modal', () => {
    const bebidas = useBebidasStore();
    const favoritos = useFavoritosStore();
    const showModal = ref(false);

    const textoBoton = computed(() => {
        return favoritos.existeFavorito(bebidas.bebida.idDrink)
    })

    const handleClickModal = () => {
        showModal.value = !showModal.value
    }
    return {
        showModal,
        handleClickModal,
        textoBoton
    }

})