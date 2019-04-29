<template>
  <div class="important-news-container">
    <gt-scroll-view ref="scrollView" :scrolling-x="false" @refreshing="$_onRefresh">
      <gt-scroll-view-refresh
        slot="refresh"
        slot-scope="{ scrollTop, isRefreshActive, isRefreshing }"
        :scroll-top="scrollTop"
        :is-refreshing="isRefreshing"
        :is-refresh-active="isRefreshActive"
      ></gt-scroll-view-refresh>

      <section>
        <gt-swiper
          @before-change="beforeChange"
          @after-change="afterChange"
          ref="swiper"
          :is-prevent="false"
          :useNative-driver="false"
          :autoplay="2000"
          :is-stop="true"
        >
          <gt-swiper-item :key="$index" v-for="(item, $index) in items">
            <div class="swiper-item-container">
              <div class="banner-item" :style="{'background': `${item.color}`}">{{item.text}}</div>
            </div>
          </gt-swiper-item>
        </gt-swiper>
      </section>
    </gt-scroll-view>
  </div>
</template>

<script>
import ScrollView from "components/scroll-view/index.vue";
import ScrollViewRefresh from "components/scroll-view/refresh.vue";
import Swiper from "components/swiper/index.vue";
import SwiperItem from "components/swiper/swiper-item.vue";

export default {
  components: {
    [ScrollView.name]: ScrollView,
    [ScrollViewRefresh.name]: ScrollViewRefresh,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem
  },
  data() {
    return {
      items: [
        {
          color: "#4390EE",
          text: "给时光以生命，给岁月以文明。"
        },
        {
          color: "#364d79",
          text: "你的无畏来源于无知。"
        },
        {
          color: "#CA4040",
          text: "一切都将逝去，只有死神永生。"
        }
      ]
    };
  },
  methods: {
    $_onRefresh() {
      setTimeout(() => {
        this.list += 5;
        this.$refs.scrollView.finishRefresh();
      }, 2000);
    },
    beforeChange() {},
    afterChange() {}
  }
};
</script>

<style lang="stylus" scoped>
.important-news-container {
  width: 100%;
  height: 100%;

  .swiper-item-container {
    margin-top: 10px;
    border-left: 10px solid #fff;
    border-right: 10px solid #fff;
    width: calc(100% - 20px);
  }

  .banner-item {
    margin-top: 10px;
    float: left;
    width: 100%;
    border-radius: 4px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 14px;
    color: #FFF;
  }
}
</style>



