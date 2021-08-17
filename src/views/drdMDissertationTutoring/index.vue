<template>
  <div class=" drdMDissertationTutoring">

    <!-- 头部大图 -->
    <div class="relative">
      <el-image
        :src="require('@/assets/img_food/productCenter/bigP1.png')"
        fit="cover"
        class="relative z-0"
      />
      <div class="flex mt-20">
        <div class="leftBox flex-none w-2/12" />
        <div class="flex-grow">
          <div class=" absolute top-48  w-1/3  ">
            <div class="text-6xl text-orange1 mb-12">搜索你喜欢的糖果！</div>
            <div class=" text-4xl text-white mb-12">享受美妙的感觉</div>
            <div class="searchBar">
              <form class=" h-16">
                <input class=" " type="text" placeholder="请输入您想要的糖果">
                <button class=" " type="submit" />
              </form>
            </div>
            <div class="flex items-center justify-center space-x-14  mt-12">
              <div class=" flex-1 rounded-full border-solid border-2 border-white h-16 ">软糖</div>
              <div class=" flex-1 rounded-full border-solid border-2 border-white h-16">棒棒糖</div>
              <div class=" flex-1 rounded-full border-solid border-2 border-white h-16">订制糖果</div>
            </div>
          </div>
          <div class="rightBox flex-none w-2/12" />
        </div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <div class="flex mt-20">
      <div class="leftBox flex-none w-2/12 relative" />
      <div class="flex-grow">

        <!-- 选择糖果类型-->
        <div>
          <!-- 大标题 -->
          <div class="flex justify-between">
            <div class="left">
              <div class=" text-4xl font-bold text-grey1">选择糖果类型</div>
              <div class=" text-grey2">CHOOSE THE TYPE OF CANDY</div>
            </div>
            <div class="right flex flex-1 border-b-2 flex-row-reverse items-center ">
              <div class="flex text-grey1"><div><img src="@/assets/img_food/productCenter/smallP1.png" class=" mr-3"></div>
                CHOOSE THE TYPE OF CANDY</div>
            </div>
          </div>

          <div class=" pt-20 flex justify-center align-middle ">
            <div class="flex flex-row justify-between mt-6 container mx-auto">
              <div
                v-for="(appeal, imgIndex) in appealList"
                :key="imgIndex"
                class=" flex-col mb-8 grid justify-items-center"
              >
                <el-image
                  :src="appeal.icon"
                  fit="cover"
                  class=" w-32 h-32 mb-4 ml-1/2  "
                />
                <div>
                  <div class=" text-3xl text-black  ">
                    {{ appeal.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <el-image
              :src="require('@/assets/img_food/productCenter/bigP4.png')"
              fit="cover"
              class="block mt-20"
            />
          </div>
        </div>

        <!-- 定制糖果 -->
        <div class="">
          <!-- 大标题 -->
          <div class="flex justify-between mt-32">

            <div class="left">
              <div class=" text-4xl font-bold text-grey1">订制糖果</div>
              <div class=" text-grey2">CUSTOM CANDIES</div>
            </div>
            <div class="right flex flex-1 border-b-2 flex-row-reverse items-center ">
              <div class="flex text-grey1"><div><img src="@/assets/img_food/productCenter/smallP1.png" class=" mr-3"></div>
                订制你想要的糖果</div>
            </div>
          </div>

          <div class="flex mt-12 relative">
            <el-image
              :src="require('@/assets/img_food/productCenter/bigP3.png')"
              fit="cover"
              class=" absolute w-1/3  z-0"
            />
            <div class=" w-1/3 flex-col flex items-center justify-center relative  ">
              <div class=" w-2/3">
                <div class=" mb-14 text-3xl font-bold">订制糖果</div>
                <div class=" mb-8 text-sm">订制你自己想要的糖果类型：不同的糖果图案、不同的口味、不同的包装设计，定制出你自己梦想中的糖果！</div>
                <div class="text-3xl font-bold">DIY不同的糖果</div>
              </div>
            </div>
            <div><img src="@/assets/img_food/productCenter/smallP2.png" alt=""></div>
            <div><img src="@/assets/img_food/productCenter/smallP2.png" alt=""></div>
          </div>
        </div>

        <!-- 糖果系列选择 -->
        <div>
          <div class="flex justify-between mb-16">
            <div class="left">
              <div class=" text-4xl font-bold text-grey1">糖果系列选择</div>
              <div class=" text-grey2">CANDY SERIES SELECTION</div>
            </div>
            <div class="right flex flex-1 border-b-2 flex-row-reverse items-center ">
              <div class="flex text-grey1"><div><img src="@/assets/img_food/productCenter/smallP1.png" class=" mr-3"></div>
                查看更多
                <img src="@/assets/img_food/productCenter/halfArrow.png" class=" ml-1">
              </div>
            </div>
          </div>

          <el-carousel indicator-position="outside" height="20vw">
            <el-carousel-item
              v-for="(item, index) in modulePageList"
              :key="index"
            >
              <div class="flex flex-col ml-auto mr-auto mt-4 w-full" @click="$router.push(item.router)">
                <el-image
                  :src="item.imgPath"
                  fit="cover"
                  class="block w1/3"
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- 尾部大图 -->
        <div class=" mt-28 mb-32">
          <div class=" relative flex items-center ">
            <img src="@/assets/img_food/productCenter/bigP2.png" alt="">
            <div class="wenzi absolute  right-7 text-right ">
              <div class=" text-2xl">丰富的水果维生素</div>
              <div class=" text-sceondTextC pt-3 pb-3">让每一颗都好像在吃水果一般<br>让你回味无穷</div>
              <div>展翠用心打造健康食品</div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBox flex-none w-2/12" />
    </div>
    <!-- 左右留白盒子结束 -->
  </div>
</template>

<script>

export default {
  name: 'DrdMDissertationTutoring',
  props: {},
  data() {
    return {
      appealList: [
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
      modulePageList: [
        {
          imgPath: require('@/assets/img_food/productCenter/smallP2.png')
        },
        {
          imgPath: require('@/assets/img_food/productCenter/smallP2.png')
        }
      ]
    }
  },
  computed: {

  },
  created() {},
  mounted() {
  },
  methods: {}
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
