<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../stores";
import ProsCard from '../components/ProsCard.vue';

export default {
  name: "ProList",
  components: {
    ProsCard
  },
  methods: {
    ...mapActions(useDataStore, ["fetchPros"])
  },
  created() {
    this.fetchPros()
  },
  computed: {
    ...mapState(useDataStore, ["pros"])
  }
}
</script>

<template>
  <div class="container-fluid pro-section">
    <h1 style="font-size: 70px; margin-bottom: 30px">OUR PROS</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <ProsCard v-for="pro in pros" :key="pro.uuid" :proDetail="pro"/>
    </div>
  </div>
</template>

<style>
.pro-section {
  padding: 80px 0 0;
  width: 80vw;
}
</style>