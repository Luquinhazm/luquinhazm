<template >
    <section class="min-h-[60vh] bg-slate-500 text-slate-50">
        <h1 class="text-3xl uppercase font-semibold pt-4 text-center tracking-widest">Habilidades</h1>
        <p class="text-center mt-1">Tecnologias que tenho conhecimento</p>

        <div class="text-5xl flex justify-center mt-10 gap-6">
            <div class="flex flex-col text-center">
                <i class="fa-brands fa-css3-alt"></i>
                <span class="text-base font-semibold">CSS</span>
            </div>
            
            <div class="flex flex-col text-center">
                <i class="fa-brands fa-html5"></i>
                <span class="text-base font-semibold">HTML</span>
            </div>
          
            <div class="flex flex-col text-center">
                <i class="fa-brands fa-js"></i>
                <span class="text-base font-semibold">Javascript</span>
            </div>
        </div>

        <div class="text-5xl flex justify-center mt-10 gap-6">
            <div class="flex flex-col text-center">
                <i class="fa-brands fa-sass"></i>
                
            </div>
            
            <div class="flex flex-col text-center">
                <img src="../assets/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" class="w-16 fill-white" alt="">
            </div>
          
            <div class="flex flex-col text-center">
                <i class="fa-brands fa-vuejs"></i>
            </div>

            <div class="flex flex-col text-center">
                <i class="fa-brands fa-react"></i>
            </div>
        </div>
       
       <div>
        <p>Consumo de APIs Rest e GraphQL</p>
       </div>

    </section>
</template>

<script>
export default {
    name:'SkillsBase'
}
</script>
