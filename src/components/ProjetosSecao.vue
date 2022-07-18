<template>
	<section id="projetos" class=" mt-14 flex flex-col">
		<h2 class="text-3xl w-52 mx-auto p-1 uppercase font-semibold text-center  tracking-widest">
			Projetos</h2>
		<p class="text-center">Alguns dos meus projetos já feitos, tanto freelancers quanto estudos</p>

		<div class="my-4">

			<div class="mt-6 mx-auto flex flex-col justify-center items-center w-full">
				<div class="flex flex-col gap-4 justify-center w-full max-w-[850px]">
					<h3 class="text-2xl px-[1.75%] font-bold uppercase tracking-widest">Freelancers</h3>
					<div class="flex flex-wrap justify-center w-full gap-8">
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

			<div class="mt-6 mx-auto flex flex-col justify-center items-center w-full">
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
			</div>

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
					title: "SHS Tecnologia",
					img: require("../assets/shstech.png"),
					site: "http://www.shstecnologia.com/"
				
				},
				{
					id: 1,
					title: "Lutech Informatica",
					img: require("../assets/lutech.png"),
					site: "https://lutechinformatica.com.br/"
				},
			],
			estudos: [
				{
					id: 2,
					title: "7 Days Of Code | Alura",
					img: require("../assets/7daysofcode.png"),
					site: "https://7days-of-code-nine.vercel.app/"
				},
				{
					id: 3,
					title: "Pedra, Papel, Tesoura | FrontEnd Mentor",
					img: require("../assets/pedrapapeltesoura.png"),
					site: "https://pedra-papel-tesoura-xi-one.vercel.app/"
				},
				{
					id: 4,
					title: "IgniteLab | Rocketseat",
					img: require("../assets/ignitelab.png"),
					site: "https://ignitelabreact.vercel.app/"
				},
				{
					id: 5,
					title: "Advinha Número",
					img: require("../assets/advinhaNumero.png"),
					site: "https://advinhanumero.vercel.app/"
				},
			]
		};
	},

}
</script>