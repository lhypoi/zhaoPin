<template>
  <div class="bg-secondBgc pt-16">
    <!-- 总的大盒子，顶部空余的地方不需要另外写一个盒子来占位，直接使用padding-top -->
    <!-- container 使用mx-auto使得容器居中 -->
    <div class="footer container mx-auto">
      <!-- 通过flex + overflow 自适应布局，防止有些元素挤到下面去  align-middle将元素在父元素的高度居中-->
      <div class=" h-64 bg-secondBgc flex align-middle flex-row mt-0 overflow-hidden">
        <!-- 第一部分，占大盒子的一半宽w-1/2 -->
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
              <!-- whitespace-nowrap 防止文本在元素中被包裹 -->
              <div class=" text-grey text-sm h-10 leading-10 whitespace-nowrap">
                {{ img.title }}
              </div>
              <!-- overflow-ellipsis 用...来截断溢出文本  title属性：鼠标上去可显示全部内容 -->
              <div class=" text-10 h-10 leading-10 text-firstTextC font-bold overflow-ellipsis whitespace-nowrap overflow-hidden" :title="img.info">
                {{ img.info }}
              </div>
            </div>
          </div>
        </div>
        <!-- 第二部分，占大盒子的1/6宽  -->
        <div class=" form bg-secondBgc w-1/6">
          <div class="title text-white">联系我们</div>
          <div class=" w-6 h-1 bg-orange mt-5" />
          <div><input type="text" placeholder="姓名" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="邮箱" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="电话" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="内容" class="bg-secondBgc"></div>
          <div><h1 class="">提交</h1></div>
        </div>
        <!-- 第三部分，占大盒子的1/3，靠右显示，自适应流出与第二部分的间隙，而不是自己添加宽度 -->
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
      <!-- 边界线（设置border-t）跟着父盒子宽度变化，很多长宽不要自己给定值之后又缝缝补补，可用比例来规划大小，大小可根据内容自适应变化 -->
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
          title: '中国·广东省潮州市潮安县东凤镇展翠工业园'
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
