<template>
	<section id="projetos" class="min-h-[80vh] mt-14 flex  flex-col">
		<h2 class="text-3xl uppercase font-semibold text-center mt-4 tracking-widest">Projetos</h2>
		<p class="text-center">Alguns dos meus projetos já feitos</p>

		<div class="mb-8 mt-12">

			<div class="mt-6 mb-20 mx-auto flex flex-col justify-center items-center w-11/12">
				<h3 class="text-2xl font-bold uppercase tracking-wider mb-6">Freelancers</h3>

				<div class="flex gap-4">
					<div class="flex flex-wrap gap-8">

						<div class=" flex-shrink-0 text-center hover:scale-105 transition-transform ease-linear delay-150 w-98">
							<a target="_blank" href="http://www.shstecnologia.com/"> 
								<img src="../assets/shstech.png " class="h-64 mb-2 w-full max-w-sm flex-shrink-0" alt=""> 
							</a>
							<span class="text-lg px-2 text-gray-900">SHS Tecnologia</span>
						</div>

						<div class=" flex-shrink-0 text-center hover:scale-105 transition-transform ease-linear delay-150 w-98">
							<a target="_blank" href="https://lutechinformatica.com.br/">
								<img src="../assets/lutech.png " class="h-64 mb-2 w-full max-w-sm flex-shrink-0 " alt=""> 
							</a>
							<span class="text-lg px-2 text-gray-900">Lutech Informatica</span>
						</div>

					</div>
				</div>
			</div>

			<div class="mt-14 mx-auto flex flex-col items-center">
				<h3 class="text-2xl font-bold uppercase tracking-wider mb-6">Estudos</h3>


				<div class="flex gap-4 justify-center max-w-[850px] ">

					<div class="flex flex-wrap justify-center w-full gap-8">

						<div class=" flex-shrink-0 text-center hover:scale-105 transition-transform ease-linear delay-150">
							<a target="_blank" href="https://7days-of-code-nine.vercel.app/"> <img src="../assets/7daysofcode.png "
									class="h-64 mb-2 w-full max-w-sm flex-shrink-0  " alt=""> </a>
							<span class="text-lg px-2 text-gray-900">7 days of code | Alura</span>
						</div>
						
						<div class=" flex-shrink-0 text-center hover:scale-105 transition-transform ease-linear delay-150">
							<a target="_blank" href="https://pedra-papel-tesoura-xi-one.vercel.app/"> <img
									src="../assets/pedrapapeltesoura.png " class="h-64 mb-2 w-full max-w-sm flex-shrink-0 " alt=""> </a>
							<span class="text-lg  text-gray-900">Pedra, Papel, Tesoura <br> FrontEnd Mentor </span>
						</div>
						<div class=" flex-shrink-0 text-center hover:scale-105 transition-transform ease-linear delay-150">
							<a target="_blank" href="https://ignitelabreact.vercel.app/"><img src="../assets/ignitelab.png "
									class="h-64 mb-2 w-full max-w-sm flex-shrink-0  " alt=""> </a>
							<span class="text-lg px-2 text-gray-900">IgniteLab | Rocketseat</span>
						</div>
						<div class=" flex-shrink-0 text-center hover:scale-105 transition-transform ease-linear delay-150">
							<a target="_blank" href="https://advinhanumero.vercel.app/"><img src="../assets/advinhaNumero.png "
									class="h-64 mb-2 w-full max-w-sm flex-shrink-0  " alt=""></a>
							<span class="text-lg px-2 text-gray-900">Adivinha Número | Curso Em Video</span>
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
}
</script>
