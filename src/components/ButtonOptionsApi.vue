<script>
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    handleButtonClick() {
      this.menuIsOpen = !this.menuIsOpen;
      this.$emit('buttonClick', this.menuIsOpen);
    },
  },
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
