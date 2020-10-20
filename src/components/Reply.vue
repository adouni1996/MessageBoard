<template >
  <span class="reply">
    <span v-if="showdel" class="delbtn">
      <el-popconfirm
        confirmButtonText="不删啦"
        cancelButtonText="狠心删除"
        icon="el-icon-info"
        :hideIcon="true"
        iconColor="red"
        title="你真的忍心删除别人的评论吗？"
        @onCancel="deltest"
      >
        <i class="el-icon-delete" slot="reference"></i>
      </el-popconfirm>
    </span>
    <i class="replybtn el-icon-edit-outline" @click=" showreplycomon = !showreplycomon"></i>
    <div class="replycomon" v-if="showreplycomon">
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
      <div class="btn">
        <el-button @click="upReply">取消</el-button>
        <el-button @click="upReply(true)" type="primary">确定</el-button>
      </div>
    </div>
  </span>
</template>

<script>
import { deldata } from "@/api/getdata";
export default {
  props: {
    showdel: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      default: 0,
    },
    gettest: {
      type: Function,
      default: ()=>{},
    },
  },
  data() {
    return {
      textarea: "",
      showreplycomon: false,
    };
  },
  methods: {
    upReply(btn = false) {
      this.showreplycomon = false;
      if (btn) {
        return;
      }
    },
    async deltest() {
      const res = await deldata(this.id);
      this.$message({
        message: res.data.meta.msg,
        type: "success",
      });
      this.gettest();
    },
  },
};
</script>

<style scoped lang='scss'>
</style>