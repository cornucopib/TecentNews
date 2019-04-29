<template>
  <div class="container">
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let test = this.$el.querySelector(".test");
    console.log("clientHeight", test.clientHeight);

    const rect = test.getBoundingClientRect();
    console.log(
      "top right bottom left",
      rect.top + " " + rect.right + " " + rect.bottom + " " + rect.left
    );
    console.log("clientTop clientLeft", test.clientTop + " " + test.clientLeft);
  }
};
</script>

<style scoped>
body {
  margin: 0;
}
.test {
  width: 100px;
  height: 100px;
  background-color: brown;
  border: 1px solid gray;
}
</style>
