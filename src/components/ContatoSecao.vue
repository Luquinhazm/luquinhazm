<template>
	<section id="contato" class="  text-slate-50 flex items-center justify-center">
		<div class="flex my-10 bg-slate-50 shadow-lg md:flex-wrap md:justify-center w-5/6 max-w-[780px] shadow-gray-500">

			<div class="bg-slate-900 flex items-center px-6 w-[480px]">
				<h3 class="text-6xl  my-6 font-bold">Entre em contato</h3>
			</div>

			<form action="https://formsubmit.co/luquinhazm@gmail.com" method="POST"
				class="flex flex-col justify-center  max-w-[420px] h-[450px] w-ful p-5 ">
				<input type="text" name="name" placeholder="Nome"
					class="mb-4 p-2 text-gray-900 shadow-sm shadow-gray-500 h-11 bg-transparent border-2 placeholder:p-2"
					required>

				<input type="email" placeholder="Email" name="email"
					class="mb-4 p-2 text-gray-900 shadow-sm shadow-gray-500 h-11 bg-transparent border-2 placeholder:p-2"
					required>

				<textarea name="mensagem" placeholder="Sua Mensagem" id=""
					class="mb-4 p-2 text-gray-900 shadow-sm shadow-gray-500 h-24 bg-transparent border-2 placeholder:p-2 "
					required></textarea>

				<BtnPrimary type="submit"> Enviar Contato</BtnPrimary>

			</form>
		</div>
	
	</section>
</template>

<script>
import BtnPrimary from './Buttons/BtnPrimary.vue';

export default {
	name: 'ContatoSecao',
	components:{BtnPrimary}
}
</script>