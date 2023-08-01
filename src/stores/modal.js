import { defineStore } from "pinia";
import { ref } from "vue";
export const useModalStore = defineStore('modal', () => {

    const showModal = ref(false);

    const handleClickModal = () => {
        showModal.value = !showModal.value
    }
    return {
        showModal,
        handleClickModal
    }

})