<template>
    <main class="flex mt-16 justify-around min-h-[78vh] ">
        <div class="w-2/4 flex flex-col justify-around">
            <div class="max-w-sm">

                <h1 class="text-cyan-300 font-bold text-2xl uppercase mb-2">Lucas Mendes</h1>
                <p class="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officia magnam ad ea unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempora.</p>

                <div class="flex gap-8">
                    <button class="bg-gray-900 text-white px-2 py-1 font-semibold border-none ">Download CV</button>
                    <button class="bg-gray-900 text-white px-2 py-1 font-semibold border-none ">Entre em Contato</button>
                </div>

            </div>
           
            <div>
                <h1 class="text-3xl font-bold">Olá! Me Chamo Lucas Mendes e sou um Desenvolvedor Front-End</h1>
            </div>
        </div>
        <div>
            <img
            class="w-[472px]" 
            src="../assets/Perfil.jpg" 
            alt="Foto de perfil Lucas"
            >
        </div>
    </main>
</template>
<script>
export default {
    name: 'HeroBase'
}
</script>