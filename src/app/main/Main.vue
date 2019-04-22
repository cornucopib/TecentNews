<template>
  <div class="app_container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <gt-tabbar v-model="selected" fixed>
      <gt-tab-item id="0" link="/main/news">
        <img slot="icon" src="@/assets/images/news_default.png">
        <img slot="icon-hightlight" src="@/assets/images/news_selected.png">
        新闻
      </gt-tab-item>
      <gt-tab-item id="1" link="/main/video">
        <img slot="icon" src="@/assets/images/video_default.png">
        <img slot="icon-hightlight" src="@/assets/images/video_selected.png">
        视频
      </gt-tab-item>
      <gt-tab-item id="2" link="/main/hot">
        <img slot="icon" src="@/assets/images/hot_default.png">
        <img slot="icon-hightlight" src="@/assets/images/hot_selected.png">
        热推
      </gt-tab-item>
      <gt-tab-item id="3" link="/main/me">
        <img slot="icon" src="@/assets/images/me_default.png">
        <img slot="icon-hightlight" src="@/assets/images/me_selected.png">
        我
      </gt-tab-item>
    </gt-tabbar>
  </div>
</template>

<script>
import GtTabbar from "components/tabbar/tabbar.vue";
import GtTabItem from "components/tab-item/tab-item.vue";

export default {
  components: {
    [GtTabbar.name]: GtTabbar,
    [GtTabItem.name]: GtTabItem
  },
  data() {
    return {
      selected: "0"
    };
  },
  mounted() {}
};
</script>
<style scoped>
.app_container {
  height: 100%;
  padding-bottom: 48px;
}
</style>
