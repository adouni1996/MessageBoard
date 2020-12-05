<template>
  <div>
    <el-form ref="form" label-width="80px" @submit.native.prevent>
      <el-form-item label="权限密钥" @submit.native.prevent>
        <el-input v-model="key" @keyup.enter.native="debeunceopendel" type="password"></el-input>
      </el-form-item>
      <el-form-item label="删除键">
        <el-button type="primary"  @click="debeunceopendel">启用</el-button>
        <el-button @click="del">禁用</el-button>
      </el-form-item>
    </el-form>
    <div>
      <div>
        <span>删除键状态：{{showdel?'启用':'禁用'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      key: "",
      debeunceopendel:'',
      debeuncedel:''
    };
  },
  props: {
    showdel: {
      type: Boolean,
      default: false,
    },
    checkKeyshowdel: {
      type: Function,
      default: () => {},
    },
    checkKeyNoshowdel: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    opendel() {
      this.checkKeyshowdel(this.key)
    },
    del() {
      this.checkKeyNoshowdel(this.key);
    },
  },
  mounted(){
      this.debeunceopendel=_.throttle(this.opendel,1000)
      this.debeuncedel=_.throttle(this.del,1000)
  }
};
</script>