
import { ref } from 'vue';

export const isModalOpen = ref(false);

export function openModal() {
    isModalOpen.value = true;
}

export function closeModal() {
    isModalOpen.value = false;
}
