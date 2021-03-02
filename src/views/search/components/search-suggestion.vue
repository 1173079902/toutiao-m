<template>
  <div class="search-suggestion">
    <van-cell
      :title="text"
      icon="search"
      :key="index"
      v-for="(text, index) in suggestions"
    ></van-cell>
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
    }
  }
}
</script>

<style scoped lang="less"></style>
