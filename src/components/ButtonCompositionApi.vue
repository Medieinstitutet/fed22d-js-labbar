<script setup>
import { ref } from "vue";

const menuIsOpen = ref(false);

const emit = defineEmits(['buttonClick']);

function handleButtonClick() {
  menuIsOpen.value = !menuIsOpen.value;

  // Emittera ett event och skicka med värdet om knappen just nu
  // är öppen eller stängd (menuIsOpen.value)
  emit('buttonClick', menuIsOpen.value);

  /*if (menuIsOpen.value === true) {
    menuIsOpen.value = false;
  } else {
    menuIsOpen.value = true;
  }*/
}
</script>

<template>
  <button aria-label="Menyknapp" @click="handleButtonClick">
    <span class="material-symbols-outlined" v-if="!menuIsOpen">menu</span>
    <span class="material-symbols-outlined" v-if="menuIsOpen">close</span>
  </button>
</template>

<style scoped>

</style>
