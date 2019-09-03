<template>
  <div class="iswiper">
    <van-swipe :autoplay="5000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import { Button } from "vant";
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button
  }
};
</script>

<style lang="less">
.iswiper {
  .van-swipe {
    cursor: pointer;
    &-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      &:nth-child(even) {
        background-color: #39a9ed;
      }
      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }
    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: #fff;
      pointer-events: none;
    }
  }
}
</style>