<template>
  <div class="ScopeOfServices">
    <div class=" relative bg-gray-100 pb-28 ">
      <!-- 头部大图 -->
      <div class=" flex flex-col justify-center">
        <div class="banner relative flex items-center  ">
          <el-image
            :src="require('@/assets/img_food/contact/banner.png')"
            fit="cover"
            class="z-0"
          />
          <div class=" absolute text-left pl-28">
            <div class=" text-6xl text-white">联系我们</div>
            <div class=" text-4xl text-white py-5 tracking-widest">找到自己喜欢的或者有任何建议就联系我们吧！</div>
          </div>
        </div>
      </div>
      <!-- 中间联系方式 -->
      <div class="flex flex-col items-center justify-center   ">
        <!-- TODO:如何实现下边的盒子往上踩一些高度 -->
        <div class="bg-white w-1/2 -mt-20 z-10">
          <div class=" flex justify-start border-b-2 py-14 ">
            <div class=" flex flex-col w-1/2 pl-12 border-r-2 ">
              <div>
                <el-image
                  :src="require('@/assets/img_food/contact/组 380.png')"
                  fit="cover"
                />
              </div>
              <div class=" text-2xl font-bold">
                (0086)18688001472
              </div>
              <div>总经理电话</div>
            </div>
            <div class=" flex flex-col w-1/2 pl-12">
              <div>
                <el-image
                  :src="require('@/assets/img_food/contact/组 380.png')"
                  fit="cover"
                />
              </div>
              <div class=" text-2xl font-bold">
                (0086)18688001472
              </div>
              <div>总经理电话</div>
            </div>
          </div>

          <div class=" flex justify-between py-9">
            <div class=" flex items-center w-1/3 pl-12">
              <div class=" mr-2">
                <el-image
                  :src="require('@/assets/img_food/contact/组 382.png')"
                  fit="cover"
                />
              </div>
              <div class=" flex flex-col">
                <div>
                  中国·广东省
                </div>
                <div>
                  潮州市潮安县东凤镇展翠工业园
                </div>
              </div>
            </div>
            <div class=" flex items-center w-1/3 pl-12">
              <div class=" mr-2">
                <el-image
                  :src="require('@/assets/img_food/contact/组 384.png')"
                  fit="cover"
                />
              </div>
              <div class=" flex flex-col">
                <div>
                  公司传真
                </div>
                <div>
                  86-768-5420281
                </div>
              </div>
            </div>
            <div class=" flex items-center w-1/3 pl-12">
              <div class=" mr-2">
                <el-image
                  :src="require('@/assets/img_food/contact/组 386.png')"
                  fit="cover"
                />
              </div>
              <div class=" flex flex-col">
                <div>
                  公司邮箱
                </div>
                <div>
                  marketing@zhancui.cn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 联系我们 -->
    <div class=" flex flex-col items-center justify-center pb-12 pt-16">
      <div class=" flex flex-col items-center">
        <div class=" text-gray-300 text-4xl">联系我们</div>
        <div class=" text-gray-300 py-3">contact us</div>
        <div class=" border-b-4 w-6" />
      </div>
      <div class=" pt-16">
        <div class=" flex items-center justify-between pb-12">
          <div><input type="text" placeholder="姓名：" class=" border-b-2 outline-none mr-24 "></div>
          <div><input type="text" placeholder="电话：" class="border-b-2 outline-none mr-24"></div>
          <div><input type="text" placeholder="邮件：" class="border-b-2 outline-none"></div>
        </div>
        <div><input type="text" placeholder="留言：" class="border-b-2 w-full outline-none"></div>
        <div class=" flex justify-center pt-12">
          <div class=" mr-10 px-12 py-2 border-2"><button><h1 class="">提交</h1></button></div>
          <div class="px-12 py-2 bg-blue-400 text-white"><button><h1 class="">重置</h1></button></div>
        </div>
      </div>
    </div>

    <!-- 地图 -->
    <div class="pt-16">
      <div class=" flex flex-col items-center">
        <div class="text-gray-300 text-4xl">地图</div>
        <div class="text-gray-300 py-3">map</div>
        <div class=" border-b-4 w-6" />
      </div>
      <div>
        地图
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CIntro',
  components: {
  },
  data() {
    return {
      BrandNavList: [
        {
          imgPath: require('@/assets/img_food/about/icon/组 427.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 422.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 421.png')
        },
        {
          imgPath: require('@/assets/img_food/about/icon/组 420.png')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
