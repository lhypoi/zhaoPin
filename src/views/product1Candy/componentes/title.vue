<template>
  <div>
    <div class="flex items-center justify-center mt-32">
      <div class=" w-32 border-b-2 border-gray-200" />
      <div class=" text-4xl font-bold px-6"><slot name="center" /></div>
      <div class=" w-32 border-b-2 border-gray-200" />
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
