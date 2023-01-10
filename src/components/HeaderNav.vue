<script setup>
import { ref } from 'vue';
import ButtonCompositionApi from './ButtonCompositionApi.vue';
import ButtonOptionsApi from './ButtonOptionsApi.vue';

const showMenu = ref(false);

function toggleMenu(isMenuOpen) {
  showMenu.value = isMenuOpen;
}
</script>

<template>
  <header :class="{ 'headerIsOpen': showMenu }">
    <nav>
      <ul v-if="showMenu"> <!-- display: none; -->
        <li>Hem</li>
        <li>Om oss</li>
        <li>Kontakt</li>
      </ul>
      <ButtonOptionsApi @button-click="toggleMenu" />
      <ButtonCompositionApi @button-click="toggleMenu" />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: yellow;
  &.headerIsOpen {
    background-color: green;
  }
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











