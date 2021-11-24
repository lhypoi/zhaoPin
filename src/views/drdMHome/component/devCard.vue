<template>
  <div class=" bg-white my-5 py-5 px-4">
    <div class=" text-xl font-bold"><slot name="title" /></div>
    <div class="centertext py-2"> <slot name="text" /></div>
    <div class=" font-bold"><slot name="subtitle" class="" /></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.centertext{
  text-indent: 2em;
}
</style>
