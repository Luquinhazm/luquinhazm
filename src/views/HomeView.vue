<template>
	<div class="home ">
		<HeaderBase />
		<HeroBase />
		<ProjetosSecao />
		<SkillsBase />
		<ContatoSecao />
		<FooterBase />
	</div>
</template>

<script>
import HeaderBase from '@/components/HeaderBase.vue'
import HeroBase from '@/components/HeroBase.vue'
import SkillsBase from '@/components/SkillsBase.vue'
import ProjetosSecao from '@/components/ProjetosSecao.vue'
import ContatoSecao from '../components/ContatoSecao.vue'
import FooterBase from '../components/FooterBase.vue'

export default {
	name: 'HomeView',
	components: {
		HeaderBase,
		HeroBase,
		SkillsBase,
		ProjetosSecao,
		ContatoSecao,
		FooterBase
	}
}
</script>
