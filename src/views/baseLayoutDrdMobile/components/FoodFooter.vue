<template>
  <div>
    <div class="footer">
      <div class=" h-16 bg-secondBgc" />

      <div class=" h-64 bg-secondBgc flex justify-center align-middle flex-row flex-wrap mt-0">

        <div class=" bg-secondBgc box1">
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
              <div class=" text-grey text-sm h-10 leading-10 ">
                {{ img.title }}
              </div>
              <div class=" text-10 h-10 leading-10 text-firstTextC font-bold">
                {{ img.info }}
              </div>
            </div>
          </div>
        </div>
        <div class=" form bg-secondBgc ml-9">
          <div class="title text-white">联系我们</div>
          <div class=" w-6 h-1 bg-orange mt-5" />
          <div><input type="text" placeholder="姓名" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="邮箱" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="电话" class="bg-secondBgc"></div>
          <div><input type="text" placeholder="内容" class="bg-secondBgc"></div>
          <div><h1 class="">提交</h1></div>
        </div>

        <div class=" bg-secondBgc flex flex-row  ml-28">
          <div
            v-for="(codeimg, imgIndex) in moreList2"
            :key="imgIndex"
            class=" text-left mb-50"
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
    </div>

    <div class=" h-10 leading-10 bg-secondBgc text-center text-sceondTextC text-sm ">备案号：</div>

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
