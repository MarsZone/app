<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="switchTabbar('home')">{{ $t("index.tabbar.home") }}</van-tabbar-item>
    <van-tabbar-item icon="search">暂定</van-tabbar-item>
    <van-tabbar-item><span>地图</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
    </van-tabbar-item>
    <van-tabbar-item icon="user-o" @click="switchTabbar('user')">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
      icon: {
        normal: 'assets/icons/home/map.svg',
        active: 'assets/icons/home/map-active.svg'
      }
    }
  },
  methods:{
    switchTabbar(tab){
      this.$router.push(tab);
    }
  }
};
</script>

<style>
</style>