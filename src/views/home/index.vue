<template>
  <div>
    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>
<script>
import tabBar from "./components/tabBar";
export default {
  name: "index",
  components: {
    tabBar
  }
};
</script>

<style lang="less" scoped>
</style>