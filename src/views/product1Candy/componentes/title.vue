<template>
  <div class=" mt-16">
    <div class=" flex items-center justify-center text-3xl font-bold"><slot name="top" /></div>
    <div class="flex items-center justify-center">
      <div class=" w-full  border-b-2 border-gray-200" />
      <div class=" text-xl font-bold px-6 text-orange1 w-full text-center "><slot name="center" /></div>
      <div class=" w-full  border-b-2 border-gray-200" />
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {

    }
  }
}
</script>

<style  scoped>

</style>
