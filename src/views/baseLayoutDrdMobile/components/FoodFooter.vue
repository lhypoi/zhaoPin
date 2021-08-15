<template>
  <div class="bg-secondBgc pt-16">
    <!-- TODO:仅可能用必要的div实现布局，像这里的头部占位，在父级写padding-top就行 -->
    <div class="footer container mx-auto">
      <!-- TODO:通过flex + overflow 自适应布局，防止有些元素挤到下面去 -->
      <div class=" h-64 bg-secondBgc flex align-middle flex-row mt-0 overflow-hidden">
        <!-- TODO:按设计稿，左边的信息应该是占 50% -->
        <div class=" bg-secondBgc box1 w-1/2 pr-5">
          <div class="title text-white ">展翠食品-专注糖果研发</div>
          <div class=" w-6 h-1 bg-orange mb-7 mt-5" />
          <div class="flex flex-row flex-wrap ">
            <div
              v-for="(img, imgIndex) in moreList"
              :key="imgIndex"
              class="w-1/2 text-left mb-5 flex"
            >
              <div class="h-10 float-left items-left">
                <el-image
                  :src="img.path"
                  fit="cover"
                  class="block w-10 mb-1 mr-4"
                />
              </div>
              <!-- TODO:label型的文字，确保显示完全 -->
              <div class=" text-grey text-sm h-10 leading-10 whitespace-nowrap">
                {{ img.title }}
              </div>
              <!-- TODO:内容型的文字，基于父容器剩下的宽度显示，溢出了用省略号显示，同时用html的title属性，是鼠标移上去可以显示全部文字 -->
              <div class=" text-10 h-10 leading-10 text-firstTextC font-bold overflow-ellipsis whitespace-nowrap overflow-hidden" :title="img.info">
                {{ img.info }}
              </div>
            </div>
          </div>
        </div>
        <!-- TODO:中间的信息比较短且不容易变，所以留 1/6 -->
        <div class=" form bg-secondBgc w-1/6">
          <div class="title text-white">联系我们</div>
          <div class=" w-6 h-1 bg-orange mt-5" />
          <div><input type="text" placeholder="姓名" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="邮箱" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="电话" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="内容" class="bg-secondBgc"></div>
          <div><h1 class="">提交</h1></div>
        </div>
        <!-- TODO:右边的三张图片占位比较多，所以留 1/3.并且靠右，自适应留出和中间盒子的间隙 -->
        <div class=" bg-secondBgc flex flex-row justify-end w-1/3">
          <div
            v-for="(codeimg, imgIndex) in moreList2"
            :key="imgIndex"
            class=" text-left mb-50 ml-5 2xl:ml-12"
          >
            <div class="flex flex-row text-white">
              {{ codeimg.title }}
            </div>
            <div class=" w-6 h-1 bg-orange mb-7 mt-5" />
            <div class="h-10 float-left items-left">
              <el-image
                :src="codeimg.path"
                fit="cover"
                class="block w-24 mb-1 mx-auto mr-4"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- TODO:这里有条边界线，挪进这里，可以借用父容器的宽度 -->
      <div class="h-10 mt-5 leading-10 bg-secondBgc text-center text-sceondTextC text-sm border-t border-gray-500 border-opacity-50">备案号：</div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      moreList: [
        {
          path: require('@/assets/img_food/home/more1.png'),
          title: '咨询热线 ：',
          info: '86-768-5420886'
        },
        {
          path: require('@/assets/img_food/home/more4.png'),
          title: '邮箱 ：',
          info: '515634'
        },
        {
          path: require('@/assets/img_food/home/more2.png'),
          title: '热线查询：',
          info: '86-768-5425799'
        },
        {
          path: require('@/assets/img_food/home/more5.png'),
          title: '传真：',
          info: '86-768-5420281'
        },
        {
          path: require('@/assets/img_food/home/more3.png'),
          title: '中国·广东省'
        },
        {
          path: require('@/assets/img_food/home/more6.png'),
          title: '邮箱：',
          info: 'marketing@zhancui.cn'
        }
      ],
      moreList2: [
        {
          path: require('@/assets/img_food/home/code1.png'),
          title: '天猫二维码'
        },
        {
          path: require('@/assets/img_food/home/code1.png'),
          title: '微信二维码'
        },
        {
          path: require('@/assets/img_food/home/code1.png'),
          title: 'whatsAPP'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* .box1{
    width: 700px;
} */
.form input {
    background: #2A2931;
    border-bottom: 2px #fff solid;
    outline: none;
    font-size: 20px;
    padding: 5px 10px;
}
input::-webkit-input-placeholder{
    color:#FFFFFF ;
    font-size: 10px;
}
.form h1{
    height: 25px;
    line-height: 25px;
    background-color: #66656E;
    text-align: center;
    margin-top: 10px;
    font-size: 10px;
    color: #fff;
}

</style>
