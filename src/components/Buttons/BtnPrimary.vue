<template>
    	<button
				class="bg-gray-900 text-white rounded shadow shadow-gray-800 px-2 py-1 font-semibold border-none hover:scale-105 hover:bg-gray-300 hover:text-black transition-all delay-75 ease-in-out "
      >
        <slot></slot>
      </button>
</template>
<script>
export default {
  name: 'BtnPrimary'
}
</script>
