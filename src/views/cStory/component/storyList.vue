<template>
  <div class="flex">
    <div class=" flex flex-col  justify-center items-center">
      <div class=" w-60 h-16 bg-orange text-white text-4xl flex items-center justify-center ">
        <slot name="year" />
      </div>
      <div class=" border-l-2 border-orange h-full " />
    </div>
    <div class=" border-t-2 border-orange mx-5 w-12 mt-8 " />
    <div class="mb-24">
      <slot name="bg" />
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

<style scoped>

</style>
