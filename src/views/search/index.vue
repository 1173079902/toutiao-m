<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        background="rgb(255 157 181)"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(val) {
      console.log(val)
    },
    onCancel() {
      this.$router.push(this.$route.query.redirect || '/')
    }
  }
}
</script>

<style lang="less" scoped>
.search-container {
  .van-search__action {
    color: #fff;
    &:active {
      background-color: transparent;
    }
  }
}
</style>
