<template>
  <div class="home">
    <HeaderBase/>
    <HeroBase/>
  </div>
</template>

<script>
import HeaderBase from '@/components/HeaderBase.vue'
import HeroBase from '@/components/HeroBase.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderBase, HeroBase
  }
}
</script>
