import { defineStore } from "pinia";
import { ref, onMounted, computed } from "vue";
import { useBebidasStore } from "./bedidas";
import { useModalStore } from "./modal";
import { useNotificacionStore } from "./notificaciones";
export const useFavoritosStore = defineStore('favoritos', () => {
    const favoritos = ref([]);
    const bebida = useBebidasStore();
    const modal = useModalStore();
    const notificacion = useNotificacionStore()
    onMounted(()=> {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
      });
    const existeFavorito = (id) => {
        const favoritosStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritosStorage.find((favorito) => favorito.idDrink === id)
    }
    const handleClickFavorito = (id) => {
        if(existeFavorito(bebida.bebida.idDrink)){
            favoritos.value = favoritos.value.filter((favorito) => favorito.idDrink != id)
            notificacion.error = true;
            notificacion.mostrar = true;
            notificacion.texto = 'Eliminado con Éxito'
            setTimeout(() => {
                notificacion.$reset()
            }, 2000);
            localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
        } else {
            notificacion.error = false;
            notificacion.mostrar = true;
            notificacion.texto = 'Agregado con éxito'
            favoritos.value.push(bebida.bebida)
            localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
            setTimeout(() => {
                notificacion.$reset()
            }, 2000);
        }
        modal.showModal = false
    }
    const noFavoritos = computed(() => {
        return favoritos.value.length <= 0
    })
    return {
        handleClickFavorito,
        favoritos,
        existeFavorito,
        noFavoritos
    }

})