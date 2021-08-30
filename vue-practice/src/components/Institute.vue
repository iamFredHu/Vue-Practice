<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span @click="showZhName">{{ zhName }}</span>
        <el-button @click='sendInstituteName' style="float: right; padding: 3px 0" type="text">{{ btnName }}</el-button>
      </div>
      <div>英文名：{{ enName }}</div>
      <div>历史：{{ newAge }}年</div>
    </el-card>
  </div>
</template>

<script>
// import {mixin} from './mixin'

export default {
  name: "Institute",
  // props:['zhName','enName','btnName','age'] // 简单接收
  // props:{
  //   zhName:String,
  //   enName:String,
  //   btnName:String,
  //   age:Number
  // }
  methods: {
    sendInstituteName() {
      // 触发App组件上事件
      this.$emit('getInsName', this.zhName)
    }
  },
  data() {
    return {
      newAge: this.age + 1
    }
  },
  // mixins: [mixin],
  props: {
    zhName: {
      type: String,
      required: true
    },
    enName: {
      type: String,
      required: true
    },
    btnName: {
      type: String,
      // required:false, 默认就是false
      default: '传输数据'
    },
    age: {
      type: Number,
      required: true
    },
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>