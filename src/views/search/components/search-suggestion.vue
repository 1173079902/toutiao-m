<template>
  <div class="search-suggestion">
    <van-cell
      icon="search"
      :key="index"
      v-for="(text, index) in suggestions"
      @click="$emit('search', item)"
    >
      <span slot="title" v-html="highlight(text)"></span>
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestion } from '@/api/search.js'
import { debounce } from 'lodash'
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      suggestions: []
    }
  },
  computed: {},
  watch: {
    searchText: {
      // 监视的处理函数
      handler: debounce(function(value) {
        this.loadSearchSuggestion(value)
      }, 200),
      // 首次监视触发
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    async loadSearchSuggestion(q) {
      try {
        const { data } = await getSearchSuggestion(q)
        this.suggestions = data.data.options
      } catch (err) {
        this.$toast('获取失败')
      }
    },
    highlight(text) {
      const htmlStr = `<span class="active">${this.searchText}</span>`
      const reg = new RegExp(this.searchText, 'gi')
      return text.replace(reg, htmlStr)
    }
  }
}
</script>

<style scoped lang="less">
.search-suggestion {
  /deep/ span.active {
    color: rgb(255 157 181);
  }
}
</style>
