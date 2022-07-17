<template>
  <div
    class="relative sm:hover:scale-100 hover:scale-105 transition-transform ease-linear delay-150">
    <!-- <a target="_blank" :href="website"> -->
    <router-link :to="`projeto/${id}`">
      <div
        class="h-[90%] mb-2 flex items-center justify-center rounded-lg sm:rounded-none absolute opacity-0  bg-white w-full hover:opacity-80 transition-all">
       <BtnSecond>Veja Mais</BtnSecond>
      </div>
    </router-link>
    <!-- </a> -->
    <img :src="img" class="max-h-64 mb-2 w-full shadow-md shadow-gray-900 rounded-lg  max-w-sm flex-shrink-0 sm:max-w-full sm:rounded-none sm:shadow-none sm:mb-0" alt="">
    <span class="text-lg px-[1.75%] text-gray-900">{{ title }}</span>
  </div>
</template>

<script>
import BtnSecond from '../Buttons/BtnSecond.vue';
export default {
  name:"CardProjetos",
  props: {
    website: String,
    img: String,
    title: String,
    id: Number,
    },

    data(){
      return{
       
      }
    },
  components:{ BtnSecond }
}
</script>
