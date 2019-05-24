<template>
  <div class="news">
    <header>
      <div class="news-header-left-button">
        <img src="@/assets/images/tecent_news_icon.png" alt>
      </div>

      <div class="news-header-search">
        <img src="@/assets/images/search_icon.png" alt>
        <div>你好！世界你好！</div>
      </div>

      <div class="news-header-right-button">
        <img src="@/assets/images/headphone.png" alt>
      </div>
    </header>
    <nav>
      <div class="gt-tab-bar-container">
        <gt-tab-bar v-model="current" :items="items" :maxLength="5" @change="onTabChange"/>
      </div>
      <router-link to="/news-tab-manage" tag="div" class="add-item">+</router-link>
    </nav>

    <gt-swiper
      ref="swiper"
      :autoplay="0"
      :is-prevent="false"
      :is-loop="false"
      :has-dots="false"
      @before-change="onSwiperChange"
    >
      <gt-swiper-item v-for="(item,index) in items" :key="index">
        <div class="content-item">
          <component v-bind:is="tabsComponent[index]" :title="item.label"></component>
        </div>
      </gt-swiper-item>
    </gt-swiper>
  </div>
</template>

<script>
import TabBar from "components/tab-bar/index";
import Swiper from "components/swiper/index";
import SwiperItem from "components/swiper/swiper-item";

export default {
  components: {
    [TabBar.name]: TabBar,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    ImportantNews: () => import("./ImportantNews"),
    Default: () => import("./Default")
  },
  data() {
    return {
      current: 1,
      items: [
        {
          name: 1,
          label: "要闻"
        },
        {
          name: 2,
          label: "数码"
        },
        {
          name: 3,
          label: "视频"
        },
        {
          name: 4,
          label: "推荐"
        },
        {
          name: 5,
          label: "深圳"
        },
        {
          name: 6,
          label: "娱乐"
        },
        {
          name: 7,
          label: "股票"
        },
        {
          name: 8,
          label: "体育"
        },
        {
          name: 9,
          label: "游戏"
        }
      ],
      tabsComponent: [
        "ImportantNews",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default",
        "Default"
      ]
    };
  },

  methods: {
    onSwiperChange(from, to) {
      console.log(to);
      this.current = to + 1;
    },
    onTabChange(item, index) {
      this.$refs.swiper.goto(index);
    },
    goToAdd() {}
  }
};
</script>

<style scoped>
.news {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

header {
  width: 100%;
  display: flex;
  height: 40px;
  margin: 1px auto;
}

nav {
  display: flex;
}

nav .gt-tab-bar-container {
  width: calc(100% - 20px);
}

nav .add-item {
  width: 20px;
  height: 100%;
  text-align: center;
  line-height: 40px;
}

.news-header-left-button {
  width: 40px;
  height: 40px;
  text-align: center;
  flex: 0 0 40px;
}

.news-header-left-button img {
  width: 24px;
  height: 24px;
  margin: 8px auto;
}

.news-header-search {
  flex: 1;
  height: 35px;
  margin: auto 0px;
  background-color: #f7f7f7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: calc(100% - 80px);
}
.news-header-search img {
  width: 15px;
  height: 15px;
  margin: auto 5px;
}
.news-header-search div {
  color: #bebebe;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 5px;
  max-width: calc(100% -25px);
  font-size: 12px;
}

.news-header-right-button {
  width: 40px;
  height: 40px;
  text-align: center;
  flex: 0 0 40px;
}

.news-header-right-button img {
  width: 24px;
  height: 24px;
  margin: 8px auto;
}

.content-item {
  width: 100%;
  height: calc(100vh - 130px);
  text-align: center;
  overflow: auto;
  padding-right: 17px;
}
</style>
