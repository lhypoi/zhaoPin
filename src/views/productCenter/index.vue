<template>
  <div class=" foodProductCenter">

    <!-- 头部大图 -->
    <div class="flex justify-center">
      <div class="relative ">
        <el-image
          :src="require('@/assets/img_food/productCenter/蒙版组 254.png')"
          fit="cover"
          class="relative z-0"
        />
        <div class="flex mt-20  container mx-auto max-w-screen-lg">
          <!-- <div class="leftBox flex-none w-2/12" /> -->
          <!-- <div class="flex-grow"> -->
          <div class=" absolute top-0 w-2/3 h-full pt-10 2xl:pt-20">
            <div class="text-5xl 2xl:text-6xl text-orange1 mb-10">搜索你喜欢的糖果！</div>
            <div class=" text-3xl 2xl:text-4xl text-white mb-10">享受美妙的感觉</div>
            <div class="searchBar">
              <form class=" h-16">
                <input class="pl-5" type="text" placeholder="请输入您想要的糖果">
                <button class=" " type="submit" />
              </form>
            </div>
            <!--这种按钮堆叠的场景，应该让按钮根据本身的文字自动撑开整个容器 -->
            <div class="flex mt-12 -mx-4">
              <div class="rounded-full border-solid border-2 border-white h-16 text-white text-xl flex items-center justify-center px-8 mx-4 cursor-pointer">软糖</div>
              <div class="rounded-full border-solid border-2 border-white h-16 text-white text-xl flex items-center justify-center px-8 mx-4 cursor-pointer">棒棒糖</div>
              <div class="rounded-full border-solid border-2 border-white h-16 text-white text-xl flex items-center justify-center px-8 mx-4 cursor-pointer">订制糖果</div>
            </div>
          </div>
          <div class="rightBox flex-none w-2/12" />
          <!-- </div> -->
        </div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <div class=" max-w-screen-lg container mx-auto">
      <!-- 选择糖果类型-->
      <div class="mt-20">
        <titleNav0>
          <div slot="leftTop">选择糖果类型</div>
          <div slot="leftBottom">CHOOSE THE TYPE OF CANDY</div>
          <div slot="right">CHOOSE THE TYPE OF CANDY</div>
        </titleNav0>

        <SeriesTitle />

        <div class="">
          <el-image
            :src="require('@/assets/img_food/productCenter/bigP4.png')"
            fit="cover"
            class="block mt-20"
          />
        </div>
      </div>

      <!-- 订制糖果 -->
      <div class=" mt-32">
        <titleNav0>
          <div slot="leftTop">订制糖果</div>
          <div slot="leftBottom">CUSTOM CANDY</div>
          <div slot="right">订制你想要的糖果</div>
        </titleNav0>

        <div class="flex mt-12 relative">
          <el-image
            :src="require('@/assets/img_food/productCenter/bigP3.png')"
            fit="cover"
            class=" absolute w-1/3 "
          />
          <div class=" w-1/2 flex-col flex items-center justify-center relative  ">
            <div class=" w-1/2">
              <div class=" mb-14 text-3xl font-bold">订制糖果</div>
              <div class=" mb-8 text-sm">订制你自己想要的糖果类型：不同的糖果图案、不同的口味、不同的包装设计，定制出你自己梦想中的糖果！</div>
              <div class="text-3xl font-bold">DIY不同的糖果</div>
            </div>
          </div>
          <div class=" w-1/2"> <slideShow2 /> </div>

        </div>
      </div>

      <!-- 糖果系列选择 -->
      <div class=" mt-28">
        <titleNav>
          <div slot="leftTop">糖果系列选择</div>
          <div slot="leftBottom">CANDY SERIES SELECTION</div>
          <div slot="more" @click="gocandy"> 查看更多</div>
        </titleNav>
        <slideShow />
      </div>

      <!-- 燕麦系列选择 -->
      <div class=" mt-28">
        <titleNav>
          <div slot="leftTop">燕麦系列选择</div>
          <div slot="leftBottom">OATS SERIES SELECTION</div>
          <div slot="more" @click="gooat"> 查看更多</div>
        </titleNav>
        <slideShow />
      </div>

      <!-- 佛手果系列选择 -->
      <div class=" mt-28">
        <titleNav>
          <div slot="leftTop">燕麦系列选择</div>
          <div slot="leftBottom">OATS SERIES SELECTION</div>
          <div slot="more" @click="gofoshou"> 查看更多</div>
        </titleNav>
        <slideShow />
      </div>

      <!-- 巧克力系列选择 -->
      <div class=" mt-28">
        <titleNav>
          <div slot="leftTop">巧克力系列选择</div>
          <div slot="leftBottom">CHOCOLATE SERIES SELECTION</div>
          <div slot="more" @click="gochocolate"> 查看更多</div>
        </titleNav>
        <slideShow />
      </div>

      <!-- 饼干系列选择 -->
      <div class=" mt-28">
        <titleNav>
          <div slot="leftTop">饼干系列选择</div>
          <div slot="leftBottom">BISCUIT SERIES SELECTION</div>
          <div slot="more" @click="gobiscuit"> 查看更多</div>
        </titleNav>
        <slideShow />
      </div>

      <!-- 尾部大图 -->
      <div class=" mt-28 mb-32">
        <div class=" relative flex items-center ">
          <img src="@/assets/img_food/productCenter/bigP2.png" class="w-full" alt="">
          <div class="wenzi absolute  right-7 text-right ">
            <div class=" text-2xl">丰富的水果维生素</div>
            <div class=" text-sceondTextC pt-3 pb-3">让每一颗都好像在吃水果一般<br>让你回味无穷</div>
            <div>展翠用心打造健康食品</div>
          </div>
        </div>
      </div>

      <!-- </div> -->
      <!-- <div class="rightBox flex-none w-2/12" /> -->
    </div>
    <!-- 左右留白盒子结束 -->
  </div>
</template>

<script>
import SeriesTitle from '../../components/SeriesTitle/SeriesTitle.vue'

import slideShow from './componentes/slideShow.vue'
import titleNav from './componentes/titleNav.vue'
import titleNav0 from './componentes/titleNav0.vue'
import slideShow2 from './componentes/slideShow2.vue'

export default {
  name: 'FoodProductCenter',
  components: {
    slideShow,
    titleNav,
    titleNav0,
    SeriesTitle,
    slideShow2
  },
  props: {},
  data() {
    return {
      seriesList: [
        {
          icon: require('@/assets/img_food/home/series1.png'),
          title: '糖果系列'
        },
        {
          icon: require('@/assets/img_food/home/series2.png'),
          title: '燕麦系列'
        },
        {
          icon: require('@/assets/img_food/home/series3.png'),
          title: '佛手果系列'
        },
        {
          icon: require('@/assets/img_food/home/series4.png'),
          title: '巧克力系列'
        },
        {
          icon: require('@/assets/img_food/home/series5.png'),
          title: '饼干系列'
        }

      ],
      slidePageList: [
        {
          imgPath: require('@/assets/img_food/productCenter/smallP2.png')
        },
        {
          imgPath: require('@/assets/img_food/productCenter/smallP2.png')
        }
      ],
      msg: 'hh'
    }
  },
  methods: {
    gocandy() {
      // console.log(this.msg);
      this.$router.push('product1Candy')
    },
    gooat() {
      this.$router.push('product2Oat')
    },
    gofoshou() {
      this.$router.push('product3foShou')
    },
    gochocolate() {
      this.$router.push('product4Chocolate')
    },
    gobiscuit() {
      this.$router.push('product5Biscuit')
    }

  }
}
</script>

<style lang="scss">
        .searchBar input {
            background: white;
            width: 392px;
            height: 69px;
        }
        .searchBar button {
            background:#E66717;
            width: 212px;
            height: 69px;
        }
        .searchBar button:before {
            content: "搜索";
            font-size: 13px;
            color: white;
        }
</style>
