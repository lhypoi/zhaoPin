<template>
  <div class=" pt-20 flex justify-center align-middle ">
    <div class="flex flex-row justify-between mt-6 container mx-auto">
      <div
        v-for="(series, imgIndex) in seriesList"
        :key="imgIndex"
        class=" flex-col grid justify-items-center cursor-pointer"
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
          title: this.$t('m.a5')
        },
        {
          icon: '#icon-a-huaban2',
          title: this.$t('m.a6')
        },
        {
          icon: '#icon-a-huaban3',
          title: this.$t('m.a7')
        },
        {
          icon: '#icon-a-huaban4',
          title: this.$t('m.a8')
        },
        {
          icon: '#icon-a-huaban5',
          title: this.$t('m.a9')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>>
</style>
