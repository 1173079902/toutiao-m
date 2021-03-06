<template>
  <div class="comment-reply">
    <van-nav-bar :title="`${comment.reply_count}条回复`">
      <van-icon slot="left" name="cross" @click="$emit('close')" />
    </van-nav-bar>
    <comment-item :comment="comment" />
    <comment-list :source="comment.com_id" type="c" />
  </div>
</template>

<script>
import CommentItem from './comment-item'
import CommentList from './comment-list'
export default {
  name: 'CommentReply',
  components: {
    CommentItem,
    CommentList
  },
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
