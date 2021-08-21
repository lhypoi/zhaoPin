<template>
  <div>
    <div class="flex justify-between mb-12">
      <div class="left">
        <div class=" text-4xl font-bold text-grey1"><slot name="leftTop" /></div>
        <div class=" text-grey2"><slot name="leftBottom" /></div>
      </div>
      <div class="right flex flex-1 border-b-2 flex-row-reverse items-center ">
        <div class="flex text-grey1"><div><img src="@/assets/img_food/productCenter/smallP1.png" class=" mr-3"></div>
          查看更多
          <img src="@/assets/img_food/productCenter/halfArrow.png" class=" ml-1">
        </div>
      </div>
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
