<script setup>
import { ref } from 'vue';
import ButtonCompositionApi from './ButtonCompositionApi.vue';

const showMenu = ref(false);

function toggleMenu(isMenuOpen) {
  showMenu.value = isMenuOpen;
}
</script>

<template>
  <header>
    <nav>
      <ul v-if="showMenu"> <!-- display: none; -->
        <li>Hem</li>
        <li>Om oss</li>
        <li>Kontakt</li>
      </ul>
      <ButtonCompositionApi @button-click="toggleMenu" />
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: yellow;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 20px;
}
button {
  margin-left: auto;
}
</style>











