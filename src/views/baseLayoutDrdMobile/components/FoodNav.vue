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
        // 自适应匹配当前路由
        return (
          <el-menu
            mode='horizontal'
            class='foodNavMenu'
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
      // 导航菜单的数据
      navMenu: [
        {
          title: '首页',
          path: '/',
          position: 'left'
        },
        {
          title: '产品中心',
          path: '/product',
          position: 'left',
          children: [
            {
              title: '产品中心',
              path: '/DissertationTutoring'
            },
            {
              title: '糖果系列',
              path: '/product/1'
            }
          ]
        },
        {
          title: '品牌实力',
          path: '/pb',
          position: 'left',
          children: [
            {
              title: '品牌实力',
              path: '/pb/index1'
            },
            {
              title: '品牌实力',
              path: '/pb/index2',
              children: [
                {
                  title: '品牌实力',
                  path: '/pb/index21'
                }
              ]
            },
            {
              title: '品牌实力',
              path: '/pb/index3'
            }
          ]
        },
        {
          title: '关于展翠',
          path: '/about',
          position: 'left',
          children: [
            {
              title: '关于展翠',
              path: '/about/index'
            }
          ]
        },
        {
          title: '业务范围',
          path: '/field',
          position: 'right'
        },
        {
          title: '新闻中心',
          path: '/news',
          position: 'right',
          children: [
            {
              title: '新闻中心',
              path: '/news/index'
            }
          ]
        },
        {
          title: '联系我们',
          path: '/chat',
          position: 'right'
        }
      ]
    }
  },
  computed: {
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
