<template>
	<main class="flex mt-16 px-4 justify-around md:flex-wrap-reverse md:justify-start min-h-[60vh] lg:mt-10  ">
		<div class="flex px-4 flex-col gap-4 justify-around">
			<div class="max-w-[450px] w-[95%]">
				<h1 class="font-bold text-2xl uppercase mt-6 mb-2">Sou Lucas</h1>
				<p class="mb-8"> Tenho 20 Anos e sou um estudante autoditada, tenho estudado Front-End desde <strong>HTML, CSS e Javascript</strong> a frameworks e biblotecas modernas como <strong>React, Vue e TailwindCSS</strong></p>
				<div class="flex gap-8 sm:flex-wrap sm:gap-2 ">
					
					<BtnPrimary>Download CV</BtnPrimary>

					<a href="mailto:luquinhazm@gmail.com">
						<BtnPrimary >Entre em Contato</BtnPrimary>	
					</a>
					
				</div>
			</div>
			
			<h1 class="text-3xl max-w-[720px] font-bold sm:hidden">Olá! Me Chamo Lucas Mendes e sou um Desenvolvedor Front-End</h1>
			
		</div>

		<div class="lg:w-[75%] md:h-full md:px-4 max-w-[472px]">
			<img class="max-w-[472px] w-[100%] rounded-md shadow-md shadow-gray-900  " src="../assets/Perfil.jpg"
				alt="Foto de perfil Lucas">
		</div>

	</main>
</template>
<script>
import BtnPrimary from './Buttons/BtnPrimary.vue';
export default {
    name: "HeroBase",
    components: { BtnPrimary }
}
</script>