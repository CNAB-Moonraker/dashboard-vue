<script>
export default {
  name: "status-dot",
  props: {
    title: String
  },
  computed: {
    style() {
      return `background-color: ${this.color}` ? this.color : "#bbb";
    }
  }
};
</script>

<template>
  <span :style="style" class="dot"></span>
</template>

<style lang='scss' scoped>
.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}
</style>
