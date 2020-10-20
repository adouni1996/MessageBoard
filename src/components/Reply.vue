<template >
  <div class="reply">
    <span class='replybtn'>评论</span>
    <div class='replycomon'>
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
      <div class='btn'>
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style scoped lang='scss'>
</style>