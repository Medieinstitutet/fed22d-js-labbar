<script setup lang="ts">
import { ref } from 'vue';
import CardElement from './components/CardElement.vue';
import LogoSvg from './components/LogoSvg.vue';
import banana from './assets/banana.jpg';
import strawberry from './assets/strawberry.jpg';

const cardData = ref([
  {
    title: 'Banan',
    desc: 'Lorem',
    img: {
      url: banana,
      alt: 'Banan'
    },
  },
  {
    title: 'Avokado',
    desc: 'Ipsum ...'
  },
  {
    title: 'Jordgubbe',
    desc: 'Dolor',
    img: strawberry,
    img: {
      url: strawberry,
      alt: 'Jordgubbe'
    },
  },
  {
    title: 'Blåbär',
    desc: 'Sit'
  },
  {
    title: 'Hallon',
    desc: 'Amet'
  },
]);
</script>

<template>
  <div>
    <LogoSvg />
  </div>
  <CardElement 
    v-for="card in cardData"
    :key="card.title"
    :card-title="card.title"
    :desc="card.desc"
    :img="card.img"
     />
</template>
