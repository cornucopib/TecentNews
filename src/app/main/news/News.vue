<template>
  <div class="news">
    <header>
      <div class="news-header-left-button">
        <img src="@/assets/images/tecent_news_icon.png" alt>
      </div>

      <div class="news-header-search">
        <img src="@/assets/images/search_icon.png" alt>
        <div>你好！世界你好！世界你好！世界你好！世界你好！世界你好！世界你好！世界你好！世界你好！世界</div>
      </div>

      <div class="news-header-right-button">
        <img src="@/assets/images/headphone.png" alt>
      </div>
    </header>
    <md-tab-bar v-model="current" :items="items" :maxLength="5"/>
  </div>
</template>

<script>
import TabBar from "@/common/components/tab-bar/index";

export default {
  components: {
    [TabBar.name]: TabBar
  },
  data(){
    return {
      current:1,
      items:[
        {
          name: 1, label: "要闻"
        }, {
          name: 2, label: "数码"
        }, {
          name: 3, label: "视频"
        }, {
          name: 4, label: "推荐"
        }, {
          name: 5, label: "深圳"
        }, {
          name: 6, label: "娱乐"
        },
        {
          name: 7, label: "股票"
        },
        {
          name: 8, label:"体育"
        },
        {
          name: 9, label: "游戏"
        }
      ]
    }
  }
};
</script>

<style scoped>
.news {
  padding: 0;
  margin: 0;
}

header {
  width: 100%;
  display: flex;
  height: 40px;
  margin: 1px auto;
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
</style>
