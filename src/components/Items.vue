<template>
  <div>
    <Item v-for="item in items" :item="item" :key="item.id"></Item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Item from '@/components/Item.vue'
export default Vue.extend({
  components: { Item },
  props: {
    query: String
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    await axios.get(`https://qiita.com/api/v2/items?query=${this.query}`)
    .then(resp => this.items = resp.data)
  }
})
</script>

<style scoped>
</style>
