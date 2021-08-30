<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span @click="showZhName">{{ zhName }}</span>
        <el-button @click='sendSchoolName' style="float: right; padding: 3px 0" type="text">{{ btnName }}</el-button>
      </div>
      <div>英文名：{{ enName }}</div>
      <div>历史：{{ newAge }}年</div>
      <button @click="unbind">解绑事件</button>
    </el-card>
  </div>
</template>

<script>
// import {mixin} from './mixin'

export default {
  name: "School",
  // props:['zhName','enName','btnName','age'] // 简单接收
  // props:{
  //   zhName:String,
  //   enName:String,
  //   btnName:String,
  //   age:Number
  // }
  data() {
    return {
      newAge: this.age + 1
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.zhName)
    },
    unbind(){
      // this.$off('getSchoolName') // 解绑一个自定义事件 如果是多个事件，则需要写在一个数组当中
      // 如果要解绑所有事件，不填参数
      this.$off()
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
    getSchoolName:{
      type:Function,
      required:false
    }
  }
}
</script>

<style lang="css" scoped>
.text {
  font-size: 20px;
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