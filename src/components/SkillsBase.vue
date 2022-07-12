<template >
	<section id="skills" class=" mt-32 mb-32 flex items-center ">
		<div class="shadow-lg shadow-gray-300 mx-auto px-8 py-4 bg-slate-50 w-4/5 max-w-5xl rounded-lg">
			<h1 class="text-3xl sm:text-2xl  uppercase font-semibold pt-4 text-center tracking-widest">Habilidades</h1>
			<p class="text-center mt-1">Tecnologias que tenho conhecimento</p>

			<div class="text-5xl flex justify-center mt-10 gap-6">
				<div class="flex flex-col text-center">
					<img src="../assets/HTML5_logo_and_wordmark.svg" class="w-16 fill-white" alt="">
				</div>

				<div class="flex flex-col text-center">
					<img src="../assets/CSS3_logo_and_wordmark.svg" class="w-12 fill-white" alt="">
				</div>

				<div class="flex flex-col text-center">
					<img src="../assets/Unofficial_JavaScript_logo_2.svg" class="w-16 fill-white" alt="">
				</div>
			</div>

			<div class="text-5xl flex justify-center mt-10 gap-6">
				<div class="flex flex-col text-center">
					<img src="../assets/Sass_Logo_Color.svg" class="w-16 fill-white" alt="">
				</div>

				<div class="flex flex-col text-center">
					<img src="../assets/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" class="w-16 fill-white" alt="">
				</div>

				<div class="flex flex-col text-center">
					<img src="../assets/Vue.js_Logo_2.svg" class="w-16 fill-white" alt="">
				</div>

				<div class="flex flex-col text-center">
					<img src="../assets/React-icon.svg" class="w-16 fill-white" alt="">
				</div>
			</div>

			<div class="text-center my-8">
				<p>Consumo de APIs Rest e GraphQL</p>
			</div>

		</div>

	</section>
</template>

<script>
export default {
	name: 'SkillsBase'
}
</script>
