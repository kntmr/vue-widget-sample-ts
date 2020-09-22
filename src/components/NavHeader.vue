<template>
  <div class="nav">
    <div class="nav-left">
      <h2>Vue Widget</h2>
    </div>
    <div class="nav-right"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style scoped>
.nav {
  width: 100%;
  display: flex;
  align-items: center;
}
.nav-left {
  width: 60%;
}
.nav-right {
  width: 40%;
  text-align: right;
}
</style>
