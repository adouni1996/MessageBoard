<template>
  <div id="app">
    <Tabs></Tabs>
    <el-backtop ></el-backtop>
  </div>
</template>

<script>
import Tabs from './components/tabs'

export default {
  name: 'App',
  components: {
    Tabs
  }
}
</script>

<style lang="scss">
@import '@/assets/style/common.scss'
</style>
