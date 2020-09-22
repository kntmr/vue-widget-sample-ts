<template>
  <div id="app" class="my-widget">
    <nav-header></nav-header>
    <items :query="query" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavHeader from '@/components/NavHeader.vue'
import Items from '@/components/Items.vue'
export default Vue.extend({
  components: { NavHeader, Items },
  props: {
    query: String
  }
})
</script>

<style scoped>
.my-widget {
  overflow: auto;
}
</style>
