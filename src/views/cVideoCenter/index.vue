<template>
  <div class="cVideo">
    <!-- 导航图标 -->
    <div>
      <div class=" pt-20 flex justify-center align-middle ">
        <div class="flex flex-row justify-between mt-6 container mx-auto">
          <div
            v-for="(img, imgIndex) in BrandNavList"
            :key="imgIndex"
            class=" flex-col mb-8 grid justify-items-center"
          >
            <el-image
              :src="img.imgPath"
              fit="cover"
              class=" mb-4 ml-1/2  "
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 左右留白盒子开始 -->
    <!-- TODO:去除后面的hidden，可以对比看原来的效果。学完下面todo的要点后，这段模板和相关的变量记得删掉 -->
    <div class="container mx-auto hidden">
      <!-- 轮播图1 -->
      <div>
        <el-carousel indicator-position="outside" height="20vw">
          <el-carousel-item
            v-for="(item, index) in slidePageList"
            :key="index"
          >
            <div class="flex flex-row w-full h-full justify-center">
              <div class=" flex pt-7" style="width: 55vw;" @click="$router.push(item.router)">
                <!-- logo -->
                <div class=" flex-col flex justify-between">
                  <div>
                    <el-image
                      :src="require('@/assets/img_food/logo.png')"
                      class=""
                    />
                  </div>
                  <!-- 小标题 -->
                  <div class=" mb-6">
                    <div class=" border-b-8 border-orange w-14 mb-8" />
                    <div class=" text-xl text-grey3">展翠宣传视频</div>
                  </div>
                </div>
                <!-- 图片背景 -->
                <div class=" h-full pl-16 mr-10">
                  <el-image
                    :src="item.imgPath"
                    class="block absolute w-4/5 h-full"
                  />
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class=" text-7xl">展翠宣传视频</div>
      <div class=" border-b-2 mb-24 mt-20" />

      <!-- 轮播图2 -->
      <div>
        <el-carousel indicator-position="outside" height="20vw">
          <el-carousel-item
            v-for="(item, index) in slidePageList"
            :key="index"
          >
            <div class="flex flex-row w-full h-full justify-center">
              <div class=" flex pt-7" style="width: 55vw;" @click="$router.push(item.router)">
                <!-- logo -->
                <div class=" flex-col flex justify-between">
                  <div>
                    <el-image
                      :src="require('@/assets/img_food/logo.png')"
                      class=""
                    />
                  </div>
                  <!-- 小标题 -->
                  <div class=" mb-6">
                    <div class=" border-b-8 border-orange w-14 mb-8" />
                    <div class=" text-xl text-grey3">软糖车间</div>
                  </div>
                </div>
                <!-- 图片背景 -->
                <div class=" h-full pl-16 mr-10">
                  <el-image
                    :src="item.imgPath"
                    class="block absolute w-4/5 h-full"
                  />
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class=" text-7xl">软糖车间</div>
      <div class=" border-b-2 mb-24 mt-20" />
    </div>

    <!-- TODO:新版的效果，几个要点：
    1、全屏式的border线实现。
    2、左边小标题的位置如何和视频下边界对齐。
    3、从外到内，如何分配每层要做的padding、margin，让后续要继续迭代的时候好扩展。 -->
    <!-- 视频模块列表 -->
    <!-- 外层大容器，可以让内部的first生效到内部的第一个div -->
    <div>
      <div v-for="(item, index) in videoList" :key="index" class="py-20 border-t-2 border-gray-200 first:border-t-0">
        <!-- 自适应宽度和微调左右边距，因为视频盒子太大了不好看 -->
        <div class="container mx-auto px-28 flex">
          <!-- 左边：图标和小标题，底部通过padding-bottom，让小标题文字和视频盒子高度对应 -->
          <div class="flex flex-col justify-between pb-16">
            <div>
              <el-image
                :src="require('@/assets/img_food/logo.png')"
              />
            </div>
            <div>
              <div class="border-b-8 border-orange w-14 mb-3" />
              <!-- 行高重置为1，确保文字的下边界和视频下边界对齐 -->
              <div class="text-xl leading-none text-grey3">{{ item.title }}</div>
            </div>
          </div>
          <!-- 右边 -->
          <div class="flex-1 pl-16">
            <el-image
              :src="item.imgPath"
              class="block w-full h-auto"
            />
            <div class="h-16 flex items-end text-4xl">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CVideo',
  components: {
  },
  data() {
    return {
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/about/icon/组 423.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 422.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 421.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 424.png')
        }
      ],
      slidePageList: [
        {
          imgPath: require('@/assets/img_food/about/视频1.png')
        }
      ],
      videoList: [
        {
          title: '展翠宣传视频',
          imgPath: require('@/assets/img_food/about/视频1.png')
        },
        {
          title: '软糖车间',
          imgPath: require('@/assets/img_food/about/视频2.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__arrow {

}
.el-carousel__indicator--horizontal{
  display: none;
}
</style>
