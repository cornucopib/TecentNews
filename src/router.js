import Vue from "vue";
import Router from "vue-router";
import Main from "@/app/main/Main";
import News from "@/app/main/news/News";
import Video from "@/app/main/video/Video";
import Hot from "@/app/main/hot/Hot";
import Me from "@/app/main/me/Me";
import NewsTabManage from "@/app/main/news/NewsTabManage";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "App",
      zh_name: "入口",
      redirect: "/main"
    },
    {
      path: "/main",
      name: "Main",
      zh_name: "主界面",
      component: Main,
      redirect: "/main/news",
      children: [
        {
          path: "/main/news",
          name: "News",
          zh_name: "新闻",
          component: News
        },
        {
          path: "/main/video",
          name: "Video",
          zh_name: "视频",
          component: Video
        },
        {
          path: "/main/hot",
          name: "hot",
          zh_name: "热推",
          component: Hot
        },
        {
          path: "/main/me",
          name: "Me",
          zh_name: "我",
          component: Me
        }
      ]
    },
    {
      path: "/news-tab-manage",
      name: "NewsTabManage",
      zh_name: "新闻标签页管理",
      component: NewsTabManage
    }
  ]
});
