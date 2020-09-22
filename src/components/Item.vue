<template>
  <div class="content">
    <div class="thumb">
      <img :src="item.user.profile_image_url" alt="profile_image_url" />
    </div>
    <div class="subject">
      <a :href="item.url">{{ item.title }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: [ 'item' ]
})
</script>

<style scoped>
.content {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 8px 5px;
  font-size: 14px;
}
.thumb {
  width: 48px;
  height: 48px;
  margin-right: 10px;
}
.thumb img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.subject {
  flex: 1 1 0%;
  word-break: break-all;
}
</style>
