<template>
	<section id="projetos" class="min-h-[80vh] mt-14 flex  flex-col">
		<h2 class="text-3xl uppercase font-semibold text-center mt-4 tracking-widest">Projetos</h2>
		<p class="text-center">Alguns dos meus projetos já feitos</p>

		<div class="mb-8 mt-12">
			
			<div class="mt-6 mb-20 mx-auto flex flex-col justify-center items-center w-11/12">
				<h3 class="text-2xl font-bold uppercase tracking-wider mb-6">Freelancers</h3>
				<div class="flex gap-4">
					<div class="flex flex-wrap gap-8">
						<div  
						v-for=" projeto in projetos" :key="projeto.id"
						class=" flex-shrink-0 text-center hover:scale-105 transition-transform ease-linear delay-150 w-98">
							<a target="_blank" :href="projeto.site"> 
								<img :src="projeto.img" class="h-64 mb-2 w-full max-w-sm flex-shrink-0" alt=""> 
							</a>
							<span class="text-lg px-2 text-gray-900">{{projeto.title}}</span>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-14 mx-auto flex flex-col items-center">
				<h3 class="text-2xl font-bold uppercase tracking-wider mb-6">Estudos</h3>
				<div class="flex gap-4 justify-center max-w-[850px] ">
					<div class="flex flex-wrap justify-center w-full gap-8">
						<div 
						v-for=" estudo in estudos" :key="estudo.id"
						class=" flex-shrink-0 text-center hover:scale-105 transition-transform ease-linear delay-150">
							<a target="_blank" :href="estudo.site"> 
								<img :src="estudo.img"
								class="h-64 mb-2 w-full max-w-sm flex-shrink-0  " alt=""> </a>
							<span class="text-lg px-2 text-gray-900">{{estudo.title}}</span>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
export default {
	name: 'ProjetosSecao',
data(){
	return {
		projetos:[
			{
					id: 0,
					title: 'SHS Tecnologia',
					img: require('../assets/shstech.png'),
					site:'http://www.shstecnologia.com/'
			},

			
			{
				id: 1,
				title: 'Lutech Informatica',
				img: require('../assets/lutech.png'),
				site:'https://lutechinformatica.com.br/'
			},
		],
		estudos:[
			{
					id: 0,
					title: '7 Days Of Code | Alura',
					img: require('../assets/7daysofcode.png'),
					site:'https://7days-of-code-nine.vercel.app/'
			},
			{
					id: 1,
					title: 'Pedra, Papel, Tesoura | FrontEnd Mentor',
					img: require('../assets/pedrapapeltesoura.png'),
					site:'https://pedra-papel-tesoura-xi-one.vercel.app/'
			},
			{
					id: 2,
					title: 'IgniteLab | Rocketseat',
					img: require('../assets/ignitelab.png'),
					site:'https://ignitelabreact.vercel.app/'
			},
			{
					id: 3,
					title: 'Advinha Número',
					img: require('../assets/advinhaNumero.png'),
					site:'https://advinhanumero.vercel.app/'
			},
		]
	}
}
}
</script>