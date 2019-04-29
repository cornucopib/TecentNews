<template>
  <div class="mydiv">
    <div class="mydiv1" v-for="item in items" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "哈哈1",
        "哈哈2",
        "哈哈3",
        "哈哈4",
        "哈哈5",
        "哈哈6",
        "哈哈7",
        "哈哈8",
        "哈哈9",
        "哈哈10",
        "哈哈11",
        "哈哈12",
        "哈哈13",
        "哈哈14",
        "哈哈15",
        "哈哈16",
        "哈哈17",
        "哈哈18",
        "哈哈19",
        "哈哈20",
        "哈哈21",
        "哈哈22",
        "哈哈23",
        "哈哈24",
        "哈哈25",
        "哈哈26",
        "哈哈27",
        "哈哈28",
        "哈哈29",
        "哈哈30",
        "哈哈31",
        "哈哈32",
        "哈哈33",
        "哈哈34",
        "哈哈35",
        "哈哈36",
        "哈哈37",
        "哈哈38",
        "xx39"
      ]
    };
  },

  mounted() {
    this.a();
  },
  methods: {
    a() {
      let mydiv1 = this.$el.querySelector(".mydiv1");
      console.log("mydiv.clientheight", mydiv1.clientHeight);
    }
  }
};
</script>

<style scoped>
.mydiv {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
