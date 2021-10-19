@@ -0,0 +1,183 @@
<template>
  <div class="sticky top-0 bg-white h-24 z-10">
    <div class="h-full container mx-auto flex items-center justify-around overflow-auto">
      <Menu :menus="leftNavMenu" />
      <el-image
        :src="require('@/assets/img_food/logo.png')"
        fit="cover"
        class="w-24"
      />
      <Menu :menus="rightNavMenu" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodNav',
  components: {
    // 菜单组件
    Menu: {
      props: {
        // 菜单列表
        menus: {
          type: Array,
          default: () => []
        }
      },
      methods: {
        // 递归组装菜单选项
        MenuItem(menu) {
          if (menu.children) {
            return (
              <el-submenu index={menu.path} popper-class='foodNavSubMenu'>
                <template slot='title'>{menu.title}</template>
                {menu.children.map(childMenu => this.MenuItem(childMenu))}
              </el-submenu>
            )
          }
          return <el-menu-item index={menu.path}>{menu.title}</el-menu-item>
        }
      },
      render() {
        const menus = this.menus
        const path = this.$route.path
        const i18nClass = this.$i18n.locale === 'en' ? 'enFoodNavMenu' : ''
        // 自适应匹配当前路由
        return (
          <el-menu
            mode='horizontal'
            class={`foodNavMenu ${i18nClass}`}
            background-color='#fff'
            text-color='#333333'
            active-text-color='#E66717'
            router
            default-active={path}
          >
            {menus.map(childMenu => this.MenuItem(childMenu))}
          </el-menu>
        )
      }
    }
  },
  props: {},
  data() {
    return {

    }
  },
  computed: {
    // 导航菜单的数据
    navMenu() {
      return [
        {
          title: this.$t('m.o1'),
          path: '/',
          position: 'left'
        },
        {
          title: this.$t('m.o2'),
          path: '/product',
          position: 'left',
          children: [
            {
              title: this.$t('m.o2'),
              path: '/productCenter'
            },
            {
              title: this.$t('m.o3'),
              path: '/product1Candy'
            },
            {
              title: this.$t('m.o4'),
              path: '/product2Oat'
            },
            {
              title: this.$t('m.o5'),
              path: '/product3foShou'
            },
            {
              title: this.$t('m.o6'),
              path: '/product4Chocolate'
            },
            {
              title: this.$t('m.o7'),
              path: '/product5Biscuit'
            }
          ]
        },
        {
          title: this.$t('m.o8'),
          path: '/pb',
          position: 'left',
          children: [
            {
              title: this.$t('m.o9'),
              path: '/Bquality'
            },
            {
              title: this.$t('m.o10'),
              path: '/BexportCountry'
            },
            {
              title: this.$t('m.o11'),
              path: '/BexportQuality'
            },
            {
              title: this.$t('m.o12'),
              path: '/Bexhibition'
            },
            {
              title: this.$t('m.o13'),
              path: '/Bglory'
            }

          ]
        },
        {
          title: this.$t('m.o14'),
          path: '/about',
          position: 'left',
          children: [
            {
              title: this.$t('m.o15'),
              path: '/cIntro'
            },
            {
              title: this.$t('m.o16'),
              path: '/cStory'
            },
            {
              title: this.$t('m.o17'),
              path: '/cCulture'
            },
            {
              title: this.$t('m.o18'),
              path: '/cVideoCenter'
            }
          ]
        },
        {
          title: this.$t('m.o19'),
          path: '/ScopeOfServices',
          position: 'right'
        },
        {
          title: this.$t('m.o20'),
          path: '/news',
          position: 'right',
          children: [
            {
              title: this.$t('m.o21'),
              path: '/newsDetail',
              children: [
                {
                  title: this.$t('m.o21'),
                  path: '/newsCompany'
                },
                {
                  title: this.$t('m.o22'),
                  path: '/newsDetail'
                }
              ]
            },
            {
              title: this.$t('m.o23'),
              path: '/newsOfIndustry'
            }
          ]
        },
        {
          title: this.$t('m.o24'),
          path: '/contactUsFood',
          position: 'right'
        }
        // {
        //   title: '切换语言',
        //   path: '',
        //   position: 'right',
        //   methods:{

        //   }
        // }
      ]
    },
    // 左侧菜单
    leftNavMenu() {
      return this.navMenu.filter(menu => menu.position === 'left')
    },
    // 右侧菜单
    rightNavMenu() {
      return this.navMenu.filter(menu => menu.position === 'right')
    }
  }
}
</script>

<style lang="scss">
// 头部一级菜单的定制样式
.foodNavMenu {
  flex: 1;
  display: flex;
  justify-content: space-around;
  border-bottom: none !important;

  .el-menu-item,
  .el-submenu .el-submenu__title {
    height: 36px;
    line-height: 36px;
    border-bottom: none !important;
    font-size: 20px;
    font-weight: bold;

    .el-submenu__icon-arrow {
      font-size: inherit;
      color: inherit;
    }

    &:hover {
      background: #fff !important;
      color: #e66717 !important;
    }
  }

  .el-menu-item.is-active,
  .el-submenu.is-active  .el-submenu__title {
    font-size: 28px !important;
    background: #fff !important;
  }

  &.enFoodNavMenu {
    .el-menu-item,
    .el-submenu .el-submenu__title {
      font-size: 16px;
    }
    .el-menu-item.is-active,
    .el-submenu.is-active  .el-submenu__title {
      font-size: 18px !important;
    }
  }
}

// 悬浮的二级菜单的定制样式
.foodNavSubMenu {
  > .el-menu {
    padding: 0;

    > li:first-child {
      border-top: 1px solid transparent;
    }
  }

  .el-menu-item,
  .el-submenu .el-submenu__title {
    height: 48px !important;
    line-height: 45px !important;
    padding-left: 24px !important;
    box-sizing: border-box;
    font-size: 14px;
    border-top: 1px solid rgba(226, 226, 226, 1);
    padding-top: 2px !important;
    color: rgba(102, 102, 102, 1) !important;
    font-weight: bold;

    .el-submenu__icon-arrow {
      font-size: inherit;
      color: inherit;
    }

    &:hover,
    &.is-active {
      background: #FFF5EF !important;
      color: rgba(230, 103, 23, 1) !important;
      border-top: 3px solid rgba(230, 103, 23, 1) !important;
      padding-top: 0 !important;
    }
  }
}
</style>
