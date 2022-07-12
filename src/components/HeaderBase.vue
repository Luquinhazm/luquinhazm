<template>
	<header class="h-16 flex items-center justify-between px-10">
		<a href="" class="text-xl uppercase font-bold text-gray-800">Luquinhazm</a>
		<nav class="flex gap-6 ">
			<ul class="sm:hidden flex items-center gap-8">
				<li><a class="hover:text-gray-500" href="#skills">Habilidades</a></li>
				<li><a class="hover:text-gray-500" href="#projetos">Projetos</a></li>
				<li><a class="hover:text-gray-500" href="#contato">Contato</a></li>
			</ul>
			<BtnPrimary>Download CV</BtnPrimary>
		</nav>
	</header>
</template>

<script>
import BtnPrimary from './Buttons/BtnPrimary.vue';
export default {
    name: "HeaderBase",
    components: { BtnPrimary }
}
</script>
