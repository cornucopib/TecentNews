<template>
  <div
    class="gt-tabbar"
    :class="{'is-fixed':fixed}"
  >
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'gt-tabbar',
  props: {
    fixed: Boolean,
    value: {}
  }
}
</script>

<style>
.gt-tabbar {
  background-color: #f0f0f0;
  display: flex;
  text-align: center;
  border-top: 1px solid #cccccc;
  height: 48px;
}

/* @when fixed == is-fixed  */
.gt-tabbar.is-fixed {
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 1;
}
</style>

