<template>
  <div id="allmap" class="baidumap">
    <baidu-map :center="center" class="bm-view" ak="jYY1KXL45Nnpa5bh7GGY29NtLMCo8ISu" @ready="handler" />
  </div>
</template>

<script>
import { BaiduMap } from 'vue-baidu-map'

module.exports = {
  components: {
    BaiduMap
  },
  data() {
    return {
      center: { lng: 0, lat: 0 }
    }
  },
  mounted() {
    this.baiduMap() // 函数调用
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
    },
    baiduMap() {
      var map = new BMap.Map('allmap') // 创建地图实例

      var point = new BMap.Point(116.331398, 39.897445) // 创建点坐标
      map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放

      map.addControl(new BMap.NavigationControl())
      map.addControl(new BMap.ScaleControl())
      map.addControl(new BMap.OverviewMapControl())
      map.addControl(new BMap.MapTypeControl())
      // map.setMapStyle({ style: 'midnight' }) //地图风格

      var marker = new window.BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中

      // 提示信息
      var infoWindow = new BMap.InfoWindow('这是提示信息')
      // 鼠标移上标注点要发生的事
      marker.addEventListener('mouseover', function() {
        this.openInfoWindow(infoWindow)
      })

      // 鼠标移开标注点要发生的事
      marker.addEventListener('mouseout', function() {
        // this.closeInfoWindow(infoWindow)
      })
    }
  }

}
</script>

<style scoped>
.baidumap {
    width: 1000px;
    height: 500px;
    border: 1px solid red;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

/* 去除百度地图版权那行字 和 百度logo */
.baidumap > .BMap_cpyCtrl {
    display: none !important;
}
.baidumap > .anchorBL {
    display: none !important;
}
</style>
