<template>
  <el-tabs type="border-card" value="first">
    <el-tab-pane label="留言板" name="first">
      <HelloWorld :showdel="showdel" />
    </el-tab-pane>
    <el-tab-pane label="权限管理" name="second">
      <Jurisdiction
        :showdel="showdel"
        :checkKeyshowdel="checkKeyshowdel"
        :checkKeyNoshowdel="checkKeyNoshowdel"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Jurisdiction from "@/components/Jurisdiction.vue";
export default {
  components: {
    HelloWorld,
    Jurisdiction,
  },
  data() {
    return {
      showdel: false,
      key: "19961201*+",
    };
  },
  methods: {
    checkKeyshowdel(inputkey) {
      if (this.key === inputkey) {
        this.showdel = true;
        this.$message({
          message: "启动成功",
          type: "success",
        });
      } else {
        this.$message({
          message: "密钥错误",
          type: "error",
        });
      }
    },
    checkKeyNoshowdel(inputkey) {
      if (this.key === inputkey) {
        this.showdel = false;
        this.$message({
          message: "禁用成功",
          type: "success",
        });
      } else {
        this.$message({
          message: "密钥错误",
          type: "error",
        });
      }
    },
  },
};
</script>