<template  >
  <section v-for="projeto in projetos">
    <div v-if="projeto.id == $route.params.id">
      <div class="flex sm:shadow-lg  justify-center px-2 mt-12 items-center ">
        <a class=" mr-1 cursor-pointer" @click="$router.go(-1)"><i class="text-3xl fa-solid fa-angle-left"></i></a>
        <h1 class="text-2xl p-2  text-center  font-semibold"> {{ projeto.title }} </h1>
      </div>
     
      <div class="flex mt-20 gap-4 sm:gap-0  lg:flex-wrap-reverse lg:mt-10 px-4 justify-center">
        <div>
          
            <div class="shadow-lg rounded-lg sm:rounded-b-lg sm:rounded-t-none  sm:shadow-none shadow-gray-500">
             <img class="max-h-[320px] sm:rounded-b-lg sm:rounded-t-none rounded-lg" :src="projeto.img" alt="">
            </div>
          
            <p class="mt-3 text-center uppercase">Site do Projeto:
              <a :href="projeto.site" target="_blank" class="lowercase text-gray-600 underline">{{ projeto.site }}</a>
            </p>
        </div>


        <div class="p-4 min-h-[320px] bg-slate-100 rounded-lg sm:rounded-t-lg sm:rounded-b-none shadow-lg sm:shadow-none shadow-gray-500 box-border">
          <div class="max-w-[500px] w-[90%] h-full justify-center flex flex-col gap-3">
            <h2 class="text-2xl font-semibold uppercase tracking-wide">Objetivos</h2>
            <p>{{ projeto.objetivo }}</p>
            <h2 v-if="projeto.desafio" class="text-2xl font-semibold uppercase tracking-wide">desafios</h2>
            <p v-if="projeto.desafio">{{projeto.desafio}}</p>
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
          objetivo: 'Criação de um site institucional para a empresa ',
          desafio:'Desenvolver o site completo com um curto prazo de entrega',
          ferramentas: 'HTML, CSS e FormSubmit para o envio de formulario de contato'
        },
        {
          id: 2,
          title: "7 Days Of Code | Alura",
          objetivo: 'Praticar a essência do Front-End durante 7 dias seguidos desenvolvendo uma página a partir de um layout do figma.',
          ferramentas: 'HTML e CSS',
          img: require("../assets/7daysofcode.png"),
          site: "https://7days-of-code-nine.vercel.app/"
        },
        {
          id: 3,
          title: "Pedra, Papel, Tesoura | FrontEnd Mentor",
          objetivo: 'Criação de um jogo Jokenpô em javascript com turno de jogador e computador e um contador de pontuação. ',
          desafio:'No primeiro momento do desenvolvimento meu maior desafio foi a elaboração do algoritmo para a escolha do Computador',
          ferramentas: 'HTML, SCSS e Javascript para o desenvolvimento da logica do jogo ',
          img: require("../assets/pedrapapeltesoura.png"),
          site: "https://pedra-papel-tesoura-xi-one.vercel.app/"
        },
        {
          id: 4,
          title: "IgniteLab | Rocketseat",
          objetivo: 'Criação de uma plataforma de curso completa , no qual tenha facilidade para o cadastro de novas aulas por um ferramenta CMS (Content Management System)',
          ferramentas: 'React, TailwindCSS, GraphQL, Apollo Graph e Hygraph para CMS  ',
          img: require("../assets/ignitelab.png"),
          site: "https://ignitelabreact.vercel.app/"
        },
        {
          id: 5,
          title: "Advinha Número | CursoEmVideo",
          objetivo: 'Uma simples aplicação de adivinhação de um numero de 1 a 100 em 10 tentativas',
          ferramentas: 'HTML, CSS e Javascript  ',
          img: require("../assets/advinhaNumero.png"),
          site: "https://advinhanumero.vercel.app/"
        },
      ]
    };
  },
}
</script>
