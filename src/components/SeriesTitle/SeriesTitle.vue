<template>
  <div class=" pt-20 flex justify-center align-middle ">
    <div class="flex flex-row justify-between mt-6 container mx-auto">
      <div
        v-for="(series, imgIndex) in seriesList"
        :key="imgIndex"
        class=" flex-col grid justify-items-center cursor-pointer"
        @click="$router.push(series.router)"
      >
        <svg class="icon block w-20 h-20 mb-4 " aria-hidden="true">
          <use :xlink:href="series.icon" />
        </svg>
        <div>
          <div class=" text-2xl text-black ">
            {{ series.title }}
          </div>
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
  },
  computed: {
    seriesList() {
      return [
        {
          icon: '#icon-a-huaban1',
          title: this.$t('m.a5'),
          router: 'product1Candy'
        },
        {
          icon: '#icon-a-huaban2',
          title: this.$t('m.a6'),
          router: 'product2Oat'
        },
        {
          icon: '#icon-a-huaban3',
          title: this.$t('m.a7'),
          router: 'product3foShou'
        },
        {
          icon: '#icon-a-huaban4',
          title: this.$t('m.a8'),
          router: 'product4Chocolate'
        },
        {
          icon: '#icon-a-huaban5',
          title: this.$t('m.a9'),
          router: 'product5Biscuit'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>>
</style>
