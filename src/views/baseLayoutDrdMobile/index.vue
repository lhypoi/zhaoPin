<template>
  <div class="baseLayoutDrdMobile">
    <!-- 导航 -->
    <div class="sticky top-0 bg-white h-11 flex items-center pl-4 pr-5 z-10 justify-between">
      <!-- 网站icon -->
      <el-image
        :src="require('@/assets/img_drd_mobile/nav.png')"
        fit="cover"
      />
      <!-- 导航菜单 -->
      <el-dropdown trigger="click">
        <!-- 菜单图标 -->
        <i
          class="el-icon-s-operation text-xl"
        />
        <el-dropdown-menu slot="dropdown" class="p-0 border-r-0 rounded-md overflow-hidden shadow-md mb-0 navMenu">
          <el-dropdown-item class="p-0">
            <!-- 菜单列表 -->
            <el-menu
              :default-active="$route.path"
              router
              text-color="#333333"
              active-text-color="#333333"
            >
              <!-- 菜单选项 -->
              <el-menu-item
                v-for="(menu, index) in navMenuList"
                :key="index"
                :index="menu.path"
                class="h-6 text-base pt-2 pb-2 border-t-2 border-gray-200 first:border-t-0 box-content"
                :class="$route.path === menu.path ? 'bg-gray-200' : 'bg-white'"
              >{{ menu.title }}</el-menu-item>
            </el-menu>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 页面内容 -->
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <!-- 了解更多 -->
    <div class="px-4 pt-9">
      <div class="text-2xl text-black font-bold">
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
    </div>
    <!-- 页面底部 -->
    <div class="h-32 pt-6 pl-10 pr-10 bg-gray-200">
      <div class="text-gray-400 text-sm mb-2">
        Copyright © Dr.D Global Education的团队 保留所有权 广ICP备09052756号-1
      </div>
      <div class="text-gray-400 text-sm">
        广公网安备 33010802117769号
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseLayoutDrdMobile',
  props: {},
  data() {
    return {
      navMenuList: [
        {
          path: '/',
          title: '首页'
        },
        {
          path: '/DissertationTutoring',
          title: '论文辅导'
        },
        {
          path: '/GuaranteeAdmission',
          title: '保录升学'
        },
        {
          path: '/Appeal',
          title: '权益申诉'
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
  methods: {}
}
</script>

<style lang="scss">
.navMenu {
  margin-top: 0 !important;

  .popper__arrow {
    display: none;
  }

  .el-menu-item:hover, .el-submenu__title:hover {
    background-color: #e5e7eb !important;
  }
}
</style>
