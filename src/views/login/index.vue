<template>
  <div class="login-container">
    <!-- 头部 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <!-- 手机号 -->
      <van-field
        type="number"
        name="手机号"
        placeholder="请输入手机号"
        v-model="user.mobile"
      >
        <i slot="left-icon" class="toutiao toutiaoshouji"></i>
      </van-field>
      <!-- 验证码 -->
      <van-field
        type="number"
        name="验证码"
        placeholder="请输入验证码"
        v-model="user.code"
      >
        <i slot="left-icon" class="toutiao toutiaoyanzhengma"></i>
        <template #button>
          <van-button
            class="send-sms-btn"
            native-type="button"
            round
            size="small"
            type="default"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit() {
      try {
        const res = await login(this.user)
        console.log(res, '登入成功')
      } catch (err) {
        if (err.response.status === 400) {
          console.log('手机号或验证码出错')
        } else {
          console.log(err, '请稍后重试')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: rgb(255 157 181);
      border: none;
    }
  }
}
</style>
