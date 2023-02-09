<script>
import { RouterView } from 'vue-router'
import { mapWritableState } from "pinia"
import { useDataStore } from './stores';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true
    }
  },
  computed: {
    ...mapWritableState(useDataStore, ["isLogin"])
  }
}
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
