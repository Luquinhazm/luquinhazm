<template>
    <header class="h-16 flex items-center justify-between px-10">
        <span class="text-xl uppercase font-bold text-gray-800">Luquinhazm</span>
        <nav class="  flex gap-6 ">
            <ul class="flex items-center gap-8">
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <button class="bg-gray-900 text-white px-2 py-1 font-semibold border-none hover:scale-105 hover:bg-gray-300 hover:text-black transition-all delay-75 ease-in-out ">Download CV</button>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'HeaderBase',
}
</script>
