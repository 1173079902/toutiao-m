import Vue from 'vue'

import dayjs from 'dayjs'

// 加载中文语言包
import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'

// 配置使用处理相对时间的插件
dayjs.extend(relativeTime)

// 全局使用中文
dayjs.locale('zh-cn')

// dayjs（）获取当前最新时间
// 定义一个全局过滤器，然后就可以在任何组件的模板中使用了
// 其实过滤器就相当于一个全局可用的方法
Vue.filter('relativeTime', value => {
  return dayjs().to(dayjs(value))
})
