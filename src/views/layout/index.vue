<template>
  <div class="layout-container">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/">
        <i slot="icon" class="toutiao toutiaoshouye"></i>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i slot="icon" class="toutiao toutiaowenda"></i>
        <span>问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <i slot="icon" class="toutiao toutiaoshipin"></i>
        <span>视频</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="toutiao toutiaowode"></i>
        <span class="text">{{ $store.state.user ? '我的' : '未登录' }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',

  data() {
    return {
      active: 0
    }
  },
  mounted() {
    // 渲染好之后再次添加缓存
    this.$store.commit('addCachePage', 'LayoutIndex')
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
