<template>
  <div class="baseLayoutDrdMobile">

    <!-- food nav  2021/2/12-->
    <!-- <div class="sticky top-0 bg-white text-#333333 h-11 flex items-center pl-4 pr-4 z-10 justify-between ">
      <div trigger="click" class="" >首页</div>
      <el-dropdown trigger="click">产品中心</el-dropdown>
      <el-dropdown trigger="click">品牌实力</el-dropdown>
        <el-dropdown trigger="click">
        <h1 >关于展翠</h1>
        <el-dropdown-menu slot="dropdown" class=" ml-14 p-0  rounded-sm shadow-md  navMenu">

            <el-menu
              :default-active="$route.path"
              router
              background-color="#FFF5EF"
              text-color="#333333"
              active-text-color="#E66717"
            >

              <el-menu-item
                v-for="(menu, index) in navMenuList"
                :key="index"
                :index="menu.path"
                class="h-6 text-base pt-2 pb-2 border-t-2  first:border-t-0 box-content"
                :class="$route.path === menu.path ? 'bg-#FFF5EF' : 'bg-white'"
              >{{ menu.title }}</el-menu-item>
            </el-menu>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>logo</el-dropdown>
      <el-dropdown trigger="click">业务范围</el-dropdown>
      <el-dropdown trigger="click">新闻中心</el-dropdown>
      <el-dropdown trigger="click">联系我们</el-dropdown>
    </div> -->

    <!-- food nav2  2021/2/12  由于没有用循环拿到对应索引值导致全部三角一起转动-->
    <!-- <div class=" sticky top-0 bg-white h-32 z-10 bg-while flex justify-around items-center ">
        <ul class="inline-flex text-xl leading-loose  space ">
          <li><a class="px-4 " href="/">首页</a></li>
          <li @click="navTab" :class="isActive==true? 'iconChange':''"><a class="px-4 arrow-icon" href="#">产品中心
              <img src="@/assets/img_food/home/arrow-r.png" alt="">
              </a>
          </li>
          <li @click="navTab" :class="isActive==true? 'iconChange':''"><a class="px-4 arrow-icon" href="#">品牌实力
              <img src="@/assets/img_food/home/arrow-r.png" alt="">
              </a>
          </li>
          <li class="arrow-icon" > <img src="@/assets/img_food/home/arrow-r.png" alt="">
            <el-dropdown trigger="click">
              <div class="px-4  text-xl text-black hover:text-firstTextC" @click="navTab" :class="isActive==true? 'iconChange':''">关于展翠
              </div>
              <el-dropdown-menu slot="dropdown" class="p-0 border-r-0 rounded-sm overflow-hidden shadow-md mb-0 navMenu">
                <el-dropdown-item class="p-0 text-base">
                  <el-menu
                    :default-active="$route.path"
                    router
                    text-color="black"
                    active-text-color="#E66717"
                    active-background-color="#E66717"
                  >
                    <el-menu-item
                      v-for="(menu, index) in navMenuList"
                      :key="index"
                      :index="menu.path"
                      class="h-6 text-base pt-2 pb-2 border-t-2 border-white first:border-t-0 box-content"
                      :class="$route.path === menu.path ? 'bg-firstBgc border-bottom:3px solid' : 'bg-white'"
                    >{{ menu.title }}</el-menu-item>
                  </el-menu>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <el-image
            :src="require('@/assets/img_food/logo.png')"
            fit="cover"
            class="logo_size"
          />
          <li><a class="px-4 hover:text-orange" href="#">业务范围</a></li>
          <li @click="navTab" :class="isActive==true? 'iconChange':''"><a class="px-4 hover:text-orange arrow-icon" href="#">新闻中心
              <img src="@/assets/img_food/home/arrow-r.png" alt="">
              </a>
          </li>
          <li><a class="px-4 hover:text-orange" href="#">联系我们</a></li>
        </ul>
      </div> -->

    <!-- food nav3 2021/2/13
    刚想v-for循环拿索引值的时候发现我竟然一开始就没有用数组来创建li TAT~（流泪） 然后想着要不重新创一个，但是想到中间有个logo也不知道怎么在中间插进去
    结果 0.0 我在每一个三角所在的li都装了点击事件。。。ballball浩瑜总不要被气到
    还有“关于展翠”那里，字体颜色不知为何浅一些。。。我调的都没有效果。。  还有就是0.0 eslint好可怕
    -->
    <div class=" sticky top-0 bg-white h-32 z-10 bg-while flex justify-around items-center ">
      <ul class="inline-flex text-xl leading-loose  space ">
        <li><a class="px-4 " href="/">首页</a></li>
        <li
          :class="isActive1==true? 'iconChange':''"
          @click="navTab1"
        ><a class="px-4 arrow-icon" href="#">产品中心
          <img src="@/assets/img_food/home/arrow-r.png" alt="">
        </a>
        </li>
        <li
          :class="isActive2==true? 'iconChange':''"
          @click="navTab2"
        ><a class="px-4 arrow-icon" href="#">品牌实力
          <img src="@/assets/img_food/home/arrow-r.png" alt="">
        </a>
        </li>
        <li
          :class="isActive3==true? 'iconChange':''"
          class="arrow-icon"
          @click="navTab3"
        > <div class="arrow-icon"><img src="@/assets/img_food/home/arrow-r.png" alt=""></div>
          <el-dropdown trigger="click">
            <div class="px-4  text-xl text-black hover:text-firstTextC">关于展翠
            </div>
            <el-dropdown-menu slot="dropdown" class="p-0 border-r-0 rounded-sm overflow-hidden shadow-md mb-0 navMenu">
              <el-dropdown-item class="p-0 text-base">
                <el-menu
                  :default-active="$route.path"
                  router
                  text-color="black"
                  active-text-color="#E66717"
                  active-background-color="#E66717"
                >
                  <el-menu-item
                    v-for="(menu, index) in navMenuList"
                    :key="index"
                    :index="menu.path"
                    class="h-6 text-base pt-2 pb-2 border-t-2 border-white first:border-t-0 box-content"
                    :class="$route.path === menu.path ? 'bg-firstBgc border-bottom:3px solid' : 'bg-white'"
                  >{{ menu.title }}</el-menu-item>
                </el-menu>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <el-image
          :src="require('@/assets/img_food/logo.png')"
          fit="cover"
          class="logo_size"
        />
        <li><a class="px-4 hover:text-orange" href="#">业务范围</a></li>
        <li
          :class="isActive4==true? 'iconChange':''"
          @click="navTab4"
        ><a class="px-4 hover:text-orange arrow-icon" href="#">新闻中心
          <img src="@/assets/img_food/home/arrow-r.png" alt="">
        </a>
        </li>
        <li><a class="px-4 hover:text-orange" href="#">联系我们</a></li>
      </ul>
    </div>

    <!-- 页面内容 -->
    <!-- <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition> -->

    <!-- 了解更多 -->
    <!-- <div class="px-4 pt-9 ">
      <div class="bg-seconBgc">
        了解更多
      </div>
      <div class="text-base text-gray-500">
        用心对待每一份订单
      </div>
      <div class="flex flex-row flex-wrap mt-8 mb-5">
        <div
          v-for="(img, imgIndex) in moreList"
          :key="imgIndex"
          class="w-1/3 text-center mb-5"
        >
          <div class="h-10 flex items-center">
            <el-image
              :src="img.path"
              fit="cover"
              class="block w-10 mb-1 mx-auto"
            />
          </div>
          <div class="text-gray-500 text-sm mt-1">
            {{ img.title }}
          </div>
        </div>
      </div>
    </div> -->
    <!-- 页面底部 -->
    <!-- <div class="h-32 pt-6 pl-10 pr-10 bg-gray-200">
      <div class="text-gray-400 text-sm mb-2">
        Copyright © Dr.D Global Education的团队 保留所有权 广ICP备09052756号-1
      </div>
      <div class="text-gray-400 text-sm">
        广公网安备 33010802117769号
      </div>
    </div> -->

    <!-- 了解更多 —— food -->
    <div class="footer">
      <div class=" h-16 bg-red-900" />

      <div class=" h-56 bg-secondBgc flex flex-row flex-wrap">
        <div class="flex items-center">
          <div class=" bg-red-200 ml-64">
            <div class="title ">展翠食品-专注糖果研发</div>
            <div class="flex flex-row flex-wrap ">
              <div
                v-for="(img, imgIndex) in moreList"
                :key="imgIndex"
                class="w-1/2 text-left mb-5"
              >
                <div class="h-10 float-left items-left">
                  <el-image
                    :src="img.path"
                    fit="cover"
                    class="block w-10 mb-1 mx-auto"
                  />
                </div>
                <div class="text-gray-500 text-sm h-10 leading-10 pl-3 ">
                  {{ img.title }}
                </div>
              </div>
            </div>
          </div>
          <div class=" bg-red-400 ml-9">
            <div class="title ">展翠食品-专注糖果研发</div>
          </div>
          <div class=" bg-red-600 ml-9">
            <div class="title ">展翠食品-专注糖果研发</div>
          </div>
          <div class=" bg-red-700 ml-9 mr-64">
            <div class="title ">展翠食品-专注糖果研发</div>
          </div>
        </div>
      </div>

    </div>

    <div class=" h-12 bg-secondBgc  text-center text-sceondTextC text-sm ">备案号：</div>

  </div>
</template>

<script>

export default {
  name: 'BaseLayoutDrdMobile',
  props: {},
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      navMenuList: [
        {
          path: '/',
          title: '公司简介'
        },
        {
          path: '/DissertationTutoring',
          title: '品牌故事'
        },
        {
          path: '/GuaranteeAdmission',
          title: '企业文化'
        },
        {
          path: '/Appeal',
          title: '视频中心'
        }
      ],
      moreList: [
        {
          path: require('@/assets/img_drd_mobile/more1.png'),
          title: '专业'
        },
        {
          path: require('@/assets/img_drd_mobile/more2.png'),
          title: '高效'
        },
        {
          path: require('@/assets/img_drd_mobile/more3.png'),
          title: '1V1专属客服'
        },
        {
          path: require('@/assets/img_drd_mobile/more4.png'),
          title: '7X24'
        },
        {
          path: require('@/assets/img_drd_mobile/more5.png'),
          title: '英国G5师资'
        },
        {
          path: require('@/assets/img_drd_mobile/more6.png'),
          title: '高品质'
        },
        {
          path: require('@/assets/img_drd_mobile/more7.png'),
          title: '均分高'
        },
        {
          path: require('@/assets/img_drd_mobile/more8.png'),
          title: '提分快'
        },
        {
          path: require('@/assets/img_drd_mobile/more9.png'),
          title: 'QSTop200+'
        }
      ]
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  created() {},
  mounted() {
  },
  methods: {
    navTab1() {
      this.isActive1 = !this.isActive1
    },
    navTab2() {
      this.isActive2 = !this.isActive2
    },
    navTab3() {
      this.isActive3 = !this.isActive3
    },
    navTab4() {
      this.isActive4 = !this.isActive4
    }
  }
}
</script>

<style lang="scss">
.navMenu {
  margin-top: 0 !important;
  .popper__arrow {
    display: none;
  }

  .el-menu-item:hover, .el-submenu__title:hover {
    background-color: #FFF5EF !important;

  }
}
.logo_size{
  width: 123px;
  height: 70px;
  margin-left: 60px;
  margin-right: 60px;
}
.space li{
  position: relative;
  padding-top: 10px;
  margin-left: 20px;
}
.arrow-icon img{
  position: absolute;
  width: 15px;
  height: 15px;
  right: 0;
  top: 23px;
}

.space li:hover{
  color:#E66717 ;
  border-bottom:3px solid #E66717;
}

// .arrow-icon::after{
  // content: (@/assets/img_food/home/arrow-r.png);
  // background: url(@/assets/img_food/home/arrow-r.png),no-repeat;
// }
.iconChange{
  .arrow-icon img{
    transform: rotate(90deg);
  }

}
</style>
