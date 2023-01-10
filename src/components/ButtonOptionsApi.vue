<script>
export default {
  data() {
    return {
      abc: 'hej',
    };
  },
  methods: {
    handleButtonClick() {
      console.log('klickade på den andra knappen');
    },
  },
}
</script>

<template>
  <button @click="handleButtonClick">Button Options version</button>
</template>

<style scoped>
</style>
