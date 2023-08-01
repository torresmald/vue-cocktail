import api from "./api";

export default {
    obtenerCategorias(){
        return api.get('/list.php?c=list')
    },
    buscarRecetas({categoria, nombre}){
        return api.get(`/filter.php?c=${categoria}&i=${nombre}`)
    },
    obtenerBebidaId(id){
        return api.get(`/lookup.php?i=${id}`)
    }
}