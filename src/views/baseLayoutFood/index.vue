<template>
  <div class="baseLayoutFood">
    <!-- 导航菜单 -->
    <div class=" flex items-center justify-center sticky top-0 bg-white h-24 z-10 ">
      <div>
        <FoodNav class=" z-30" />
      </div>
      <div class=" flex justify-center items-center text-xl font-bold pl-6 cursor-pointer" @click="change">{{ $t('m.Languageswitch') }}</div>
    </div>

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
    change() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'zh'
      } else {
        this.$i18n.locale = 'en'
      }
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
