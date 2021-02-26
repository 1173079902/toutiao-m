<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button
        class="search-btn"
        slot="title"
        type="info"
        size="small"
        round
        icon="search"
        >搜索</van-button
      >
    </van-nav-bar>
    <!-- /导航栏 -->
    <!-- 频道列表 -->
    <van-tabs class="channel-tabs" v-model="active" animated swipeable>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data() {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less">
.home-container {
  /deep/.van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #f3f3f3;
    border: none;
    font-size: 28px;
    color: black;
    .van-icon {
      font-size: 32px;
      color: black;
    }
  }
  /deep/ .channel-tabs {
    .van-tabs__wrap {
      height: 82px;
    }
    // Tab 标签页
    .van-tab {
      border-right: 1px solid #edeff3;
      min-width: 200px;
      font-size: 30px;
      color: #777777;
    }
    .van-tab--active {
      color: #333333;
    }
    .van-tabs__nav {
      padding-bottom: 0;
    }
    .van-tabs__line {
      bottom: 8px;
      width: 31px !important;
      height: 6px;
      background-color: #3296fa;
    }
  }
}
</style>
