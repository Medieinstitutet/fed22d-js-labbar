<script>
import { avokado, } from './avokado';

    export default {
        data() {
            return {
                button: false,
                avokado: avokado,
                symbol: ['avokado', 'banan'],
            }
        },

        methods: {
            handleBtnClick() {
                this.button = !this.button;
                document.body.classList.toggle("dark");
            }
        }
    }

</script>

<template>
    <button @click="handleBtnClick" :class="{ 'button': button }">
    {{     avokado.color }}
    {{   avokado.ripeness  }}
        <span v-if="button">{{ symbol[1] }}</span>
       <span v-if="!button">{{ symbol[0] }}</span>
    </button>
</template>



<style lang="scss">
  .dark {
    background-color: rgb(39, 38, 38);
  }

  .button {
    background-color: yellow;
  }

  button {
    background-color: green;
  }

</style>

