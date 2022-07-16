<template>
  <section
  v-for="projeto in projetos"
  > 
    <h1 v-if="projeto.id == $route.params.id" class="text-3xl text-center py-3 font-bold">{{projeto.title}}
    </h1>
    <!-- <div class="flex w-full min-h-[90vh] justify-around items-center">

      <div class=" bg-black h-80">
        <div class="w-[640px]">
            <p class="text-white
            ">jasfkahfuahfugsdfhasfjhv Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga provident sint cum quaerat rem nobis deserunt a voluptatem vel, est numquam nostrum illum reiciendis expedita consequuntur perferendis natus sit distinctio!</p>
        </div>
         
      </div>

      <div class="">
        <div class="w-[500px] flex flex-col gap-3">
          <h2 class="text-2xl font-semibold uppercase tracking-wide">Objetivos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in sed iure consequatur, animi enim earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam earum quis iste omnis non repellat eos?</p>
          <h2 class="text-2xl font-semibold uppercase tracking-wide">desafios</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae vitae libero quas corrupti consectetur ratione sit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eaque pariatur delectus nobis porro expedita culpa!</p>
          <h3 class="text-xl font-semibold uppercase tracking-wide">ferramentas utilizadas</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nobis.</p>
        </div>
      </div>
    </div> -->
  </section>
</template>
<script>
import HeaderBase from '@/components/HeaderBase.vue';
export default {
  components:{ HeaderBase },
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
