<template>
  <div class="baseLayoutFood">
    <!-- 导航菜单 -->
    <FoodNav class=" z-30" />

    <!-- 页面内容 -->
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>

    <FoodFooter class=" z-30" />

  </div>
</template>

<script>
import FoodNav from './components/FoodNav'
import FoodFooter from './components/FoodFooter'

export default {
  name: 'BaseLayoutFood',
  components: {
    FoodNav,
    FoodFooter
  },
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
