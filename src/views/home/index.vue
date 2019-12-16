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
  },
  beforeCreate(){
    // this.$i18n.locale = 'zh'
  }
};
</script>

<style lang="less" scoped>
</style>