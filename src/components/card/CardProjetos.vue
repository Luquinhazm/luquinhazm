<template>
  <div class="shadow-sm sm:rounded-none h-fit sm:rounded-t-lg rounded-lg shadow-black">
    <span class=" p-[1.5%] block rounded-t-lg bg-gray-900 font-semibold text-white">{{ title }}</span>
    <div class="relative rounded-lg">
      <router-link :to="`projeto/${id}`">
        <div
          class="h-full flex items-center justify-center rounded-b-lg sm:rounded-none absolute opacity-0  bg-white w-full hover:opacity-60 transition-all">
          <BtnSecond>Veja Mais</BtnSecond>
        </div>
      </router-link>
        <img :src="img"
          class=" sm:w-[310px] sm:h-[200px] rounded-b-lg max-w-sm flex-shrink-0 sm:rounded-none sm:shadow-none"
          alt="">
    </div>

  </div>

</template>

<script>
import BtnSecond from '../Buttons/BtnSecond.vue';
export default {
  name: "CardProjetos",
  props: {
    website: String,
    img: String,
    title: String,
    id: Number,
  },

  data() {
    return {

    }
  },
  components: { BtnSecond }
}
</script>
