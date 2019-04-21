<template>
  <div  ref="mydiv">
      <div class="mydiv1">哈哈</div>
  </div>
</template>

<script>
export default {
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
</style>
