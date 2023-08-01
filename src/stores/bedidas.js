import { defineStore } from "pinia";
import { ref, onMounted, reactive } from "vue";
import api from '../services/CallApi.js';
import { useModalStore } from "./modal.js";
export const useBebidasStore = defineStore('bebidas', () => {
    const modal = useModalStore()
    const categorias = ref([]);
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    const bebidas = ref([]);
    const bebida = ref({});

    onMounted( async () => {
        const {data: {drinks}} = await api.obtenerCategorias();
        categorias.value = drinks;
    })
    const obtenerRecetas = async () => {
        const {data: {drinks}} = await api.buscarRecetas(busqueda);
        bebidas.value = drinks;
    };
    const seleccionarBebida = async (id) => {
        const {data: {drinks}} = await api.obtenerBebidaId(id);
        bebida.value = drinks[0];
        modal.handleClickModal()
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        bebidas,
        bebida,
        seleccionarBebida
    }

})