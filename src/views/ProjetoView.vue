<template>
  <section v-for="projeto in projetos">
    <div v-if="projeto.id == $route.params.id">
      <div class="flex justify-center mt-4 items-center relative ">
        <a 
        class="absolute cursor-pointer left-10 " 
        @click="$router.go(-1)"
        >
        <i class="text-3xl fa-solid fa-angle-left"></i>
        </a>
        <h1 class="text-3xl text-center font-bold">{{ projeto.title }} </h1>
      </div>
     
      <div class="flex w-full min-h-[90vh] justify-around items-center">

        <div>
          <div class=" bg-black h-80">
            <div class="w-[640px]">
             <img :src="projeto.img" alt="">
            </div>
          </div>
            <p class="mt-3 text-center text-lg">Site do Projeto:
              <a :href="projeto.site" class="text-base text-gray-600 underline">{{ projeto.site }}</a>
            </p>
        </div>


        <div class="">
          <div class="w-[500px] flex flex-col gap-3">
            <h2 class="text-2xl font-semibold uppercase tracking-wide">Objetivos</h2>
            <p>{{ projeto.objetivo }}</p>
            <h2 v-if="projeto.desafio" class="text-2xl font-semibold uppercase tracking-wide">desafios</h2>
            <p v-if="projeto.desafio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae vitae libero quas
              corrupti consectetur ratione sit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eaque
              pariatur delectus nobis porro expedita culpa!</p>
            <h3 class="text-xl font-semibold uppercase tracking-wide">ferramentas utilizadas</h3>
            <p>{{ projeto.ferramentas }} </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
import HeaderBase from '@/components/HeaderBase.vue';
export default {
  components: { HeaderBase },
  data() {
    return {
      projetos: [
        {
          id: 0,
          title: "SHS Tecnologia",
          img: require("../assets/shstech.png"),
          site: "http://www.shstecnologia.com/",
          desafio: '',
          objetivo: 'Criação de um site institucional para a empresa, no qual seja simples e eficiente para a representação da mesma na internet. ',
          ferramentas: 'HTML, CSS e FormSubmit para o envio de formulario de contato'

        },
        {
          id: 1,
          title: "Lutech Informatica",
          img: require("../assets/lutech.png"),
          site: "https://lutechinformatica.com.br/",
          ferramentas: 'HTML, CSS e FormSubmit para o envio de formulario de contato'
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
