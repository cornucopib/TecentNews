<template>
  <router-link
    class="gt-tab-item"
    @click.native="$parent.$emit('input',id)"
    :class="{'is-selected':isSelected}"
    :to="link"
    replace
  >
    <!-- slot中不能使用v-show -->
    <div class="gt-tab-item-icon">
      <slot name="icon" v-if="!isSelected"></slot>
      <slot name="icon-hightlight" v-if="isSelected"></slot>
    </div>
    <div class="gt-tab-item-label">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "gt-tab-item",
  props: ["id", "link"],
  computed: {
    isSelected: function() {
      return this.$parent.value === this.id;
    }
  }
};
</script>



<style >
.gt-tab-item.is-selected {
  color: #3488e6;
}

.gt-tab-item {
  display: block;
  padding: 4px 0;
  flex: 1;
  text-decoration: none;
  color: #666666;
  user-select: none;
}

.gt-tab-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 2px;
  font-size: 0px;
}

.gt-tab-item-icon > * {
  display: block;
  width: 24px;
  height: 24px;
}

.gt-tab-item-icon:empty {
  display: none;
}

.gt-tab-item-label {
  color: inherit;
  font-size: 10px;
}
</style>

