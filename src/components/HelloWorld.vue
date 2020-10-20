<template>
  <div class="main">
    <h1>奇奇怪怪的留言板你敢信？</h1>
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" style="color:red"></el-input>
    <div class="setting">
      <div class="block">
        <el-color-picker v-model="color"></el-color-picker>
      </div>
      <div>
        <el-button class="subbtn" @click="dialogVisible = true" type="primary">发送消息</el-button>
      </div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="20%"
      :before-close="handleClose"
      custom-class="dialog"
    >
      <span>确定发给佳灿嘛？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addtest()">确 定</el-button>
      </span>
    </el-dialog>
    <el-card v-for="item in datamsg" :key="item.id" shadow="hover">
      <div :style="'color:'+item.color">{{item.msg}}</div>
      <span class="addtime">
        <span>{{item.adddata_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
      </span>
      <Reply :showdel='showdel' :id='item.id' :gettest='gettest' />
    </el-card>
  </div>
</template>

<script>
import { getdata, updata } from "@/api/getdata";
import Reply from "@/components/Reply.vue";
export default {
  name: "HelloWorld",
  props: {
    showdel: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Reply,
  },
  data() {
    return {
      datamsg: {},
      textarea: "",
      color: "#000000",
      dialogVisible: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.gettest();
    }, 500000);
    this.gettest();
  },
  computed: {
    textcolor: function () {
      return `color:${this.color}`;
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    async addtest() {
      let data = {
        msg: this.textarea,
        color: this.color,
      };
      const res = await updata(data);
      this.$message({
        message: res.data.meta.msg,
        type: "success",
      });
      this.gettest();
      this.dialogVisible = false;
    },
    async gettest() {
      const res = await getdata();
      this.datamsg = res.data.data.reverse();
      this.textarea = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
