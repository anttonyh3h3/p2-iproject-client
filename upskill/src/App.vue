<script>
import { RouterView } from 'vue-router'
import { mapWritableState, mapActions } from "pinia"
import { useDataStore } from './stores';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  },

  methods: {
    ...mapActions(useDataStore, ["getUsername"])
  },

  created() {
    if (localStorage.access_token) {
      this.getUsername()
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
