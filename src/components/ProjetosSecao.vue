<template>
	<section id="projetos" class=" mt-14 flex flex-col">
		<h2 class="text-3xl w-52 mx-auto p-1 uppercase font-semibold text-center  tracking-widest">
			Projetos</h2>
		<p class="text-center">Alguns dos meus projetos já feitos, tanto freelancers quanto estudos</p>

		<div class="my-4 sm:px-1 px-5 ">

			<div class="mt-6">
				<div class="flex flex-col  justify-center w-full">
					<h3 class="text-2xl  mb-2 font-bold uppercase tracking-wide">Freelancers</h3>

						<div class="flex items-center gap-2 sm:gap-0">
						
					<div class="flex h-fit sm:overflow-x-scroll sm:gap-1 scroll-smooth gap-4 overflow-x-hidden">
						<CardProjetos 
						v-for="projeto in projetos" 
						:key="projeto.id" 
						:website="projeto.site" 
						:img="projeto.img" 
						:title="projeto.title" 
						:id="projeto.id"
						/>
					</div>
					
					</div>
				</div>
			</div>

			<div class="mt-6">
				<div class="flex flex-col justify-center w-full ">
					
					<div class="flex items-baseline mb-2 justify-between">
						<h3 class="text-2xl  font-bold uppercase tracking-wide">Estudos</h3>
						<div class="mr-10 ">
							<button id="prevButton"   @click="sliderPrev" ><img src="../assets/left-arrow-svgrepo-com.svg" class="sm:hidden w-[35px]"></button>
							<button id="nextButton " @click="sliderNext"><img src="../assets/right-arrow-svgrepo-com.svg" class="sm:hidden w-[35px]"></button>
						</div>
					
					</div>

					

					<div class="flex justify-center items-start sm:h-auto gap-2 sm:gap-0">

						<div class="flex slider-estudo sm:overflow-x-scroll sm:gap-1 scroll-smooth gap-4 overflow-x-hidden">
							
								<CardProjetos 
									v-for="estudo in estudos" 
									:key="estudo.id" 
									:website="estudo.site" 
									:img="estudo.img" 
									:title="estudo.title" 
									:id="estudo.id"
								/>
							
						
						</div>

					</div>
			
				</div>
			</div>
			<!-- <div class="mt-6 mx-auto flex flex-col justify-center items-center w-full">
				<div class="flex flex-col gap-4 justify-center max-w-[850px] ">
					<h3 class="text-2xl px-[1.75%] font-bold uppercase tracking-widest">Estudos</h3>
					<div class="flex flex-wrap justify-center w-full gap-8">
						<CardProjetos 
						v-for="estudo in estudos" 
						:key="estudo.id" 
						:website="estudo.site" 
						:img="estudo.img" 
						:title="estudo.title" 
						:id="estudo.id"
						/>
					</div>
				</div>
			</div> -->

		</div>
	</section>
</template>

<script>
import BtnPrimary from './Buttons/BtnPrimary.vue'
import BtnSecond from './Buttons/BtnSecond.vue'
import CardProjetos from './card/CardProjetos.vue';
export default {
	name: "ProjetosSecao",
	components: { BtnPrimary, BtnSecond, CardProjetos },
	data() {
		return {
			projetos: [
				{
					id: 0,
					title: "Lutech Informatica",
					img: require("../assets/lutech.png"),
					site: "https://lutechinformatica.com.br/"
				},
				{
					id: 1,
					title: "SHS Tecnologia",
					img: require("../assets/shstech.png"),
					site: "http://www.shstecnologia.com/"
				
				},
			],
			estudos: [
				{
					id: 2,
					title: "Pedra, Papel, Tesoura",
					img: require("../assets/pedrapapeltesoura.png"),
					site: "https://pedra-papel-tesoura-xi-one.vercel.app/"
				},
				{
					id: 3,
					title: "7 Days Of Code | Alura",
					img: require("../assets/7daysofcode.png"),
					site: "https://7days-of-code-nine.vercel.app/"
				},
				{
					id: 4,
					title: "Advinha Número",
					img: require("../assets/advinhaNumero.png"),
					site: "https://advinhanumero.vercel.app/"
				},
				{
					id: 5,
					title: "IgniteLab | Rocketseat",
					img: require("../assets/ignitelab.png"),
					site: "https://ignitelabreact.vercel.app/"
				},
			],

		
		};
	},

	methods: {
		sliderNext(){
			const slider = document.querySelector('.slider-estudo')	
			let containerDimensions = slider.getBoundingClientRect()
			let containerWidth = containerDimensions.width 
						slider.scrollLeft += containerWidth
					},

		sliderPrev(){
			const slider = document.querySelector('.slider-estudo') 
			let containerDimensions = slider.getBoundingClientRect()
			let containerWidth = containerDimensions.width
						slider.scrollLeft -= containerWidth
						
					}
	},

}
</script>