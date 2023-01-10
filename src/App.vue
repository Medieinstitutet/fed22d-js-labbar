<script setup>
import HeaderNav from './components/HeaderNav.vue';
import HeroImage from './components/HeroImage.vue';
import ThemeSwitch from './components/ThemeSwitch.vue';
</script>

<template>
  <div>
    <HeaderNav class="test" />
    <HeroImage />
    <ThemeSwitch />
    <div>
      page content
    </div>
    <footer>
      footer
    </footer>
  </div>
</template>

<style scoped>
.margin-top {
  margin-top: 20px;
}
</style>