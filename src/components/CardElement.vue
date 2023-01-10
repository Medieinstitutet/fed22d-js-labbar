<script setup lang="ts">
const props = defineProps(['cardTitle', 'desc', 'img']);
</script>

<template>
  <article>
    <h2>{{ cardTitle }}</h2>
    <template v-if="img">
      <img :src="img.url" :alt="img.alt" />
    </template>
    <p>{{ desc }}</p>
  </article>
</template>

<style scoped lang="scss">
article {
  background-color: rgb(89, 89, 89);
  border-radius: 8px;
  min-width: 300px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  h2, p {
    width: 100%;
  }
  img {
    max-width: 100%;
  }
}
</style>