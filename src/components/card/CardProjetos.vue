<template>
  <div
    class=" flex-shrink-0  relative text-center hover:scale-105 transition-transform ease-linear delay-150 w-98">
    <!-- <a target="_blank" :href="website"> -->
    <router-link to="/projeto">
      <div
        class="h-64 mb-2 flex items-center justify-center absolute opacity-0  bg-white w-full max-w-sm hover:opacity-80 transition-all">
       <BtnSecond>Veja Mais</BtnSecond>
      </div>
    </router-link>
    <!-- </a> -->
    <img :src="img" class="h-64 mb-2 w-full max-w-sm flex-shrink-0" alt="">
    <span class="text-lg px-2 text-gray-900">{{ title }}</span>
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
    },
  components:{ BtnSecond }
}
</script>
