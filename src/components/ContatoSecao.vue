<template>
    <section id="contato" class="min-h-[80vh] text-slate-50 flex items-center justify-center">
        <div class="flex shadow-lg  shadow-gray-500">
            <div class="bg-slate-900 flex items-center px-6 w-[480px]">
                <h3 class="text-6xl  my-6 font-bold">Entre em contato</h3>
            </div>
            
            <form action="" class="flex flex-col justify-center bg-slate-50 max-w-[420px] h-[450px] w-4/5 p-5 ">
                <input type="text" name="name" placeholder="Nome" class="mb-4 p-2 text-gray-900 shadow-sm shadow-gray-500 h-11 bg-transparent border-2 placeholder:p-2">
                <input type="email" placeholder="Email" name="email" class="mb-4 p-2 text-gray-900 shadow-sm shadow-gray-500 h-11 bg-transparent border-2 placeholder:p-2">
                <textarea name="mensagem" placeholder="Sua Mensagem" id="" class="mb-4 p-2 text-gray-900 shadow-sm shadow-gray-500 h-24 bg-transparent border-2 placeholder:p-2 "></textarea>

                <button 
                    class="bg-gray-900 text-white px-2 py-1 w-64 mx-auto font-semibold border-none hover:scale-105 hover:bg-gray-300 hover:text-black transition-all delay-75 ease-in-out   "
                    >
                    Enviar contato
                </button>
        </form>
        </div>
       
    </section>
</template>

<script>
export default {
    name:'ContatoSecao'
}
</script>
