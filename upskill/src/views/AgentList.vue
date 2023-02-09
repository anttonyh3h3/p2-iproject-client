<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../stores";
import AgentCard from "../components/AgentCard.vue";

export default {
  name: "AgentList",
  components: {
    AgentCard,
  },
  methods: {
    ...mapActions(useDataStore, ["fetchAgents"]),
  },
  created() {
    this.fetchAgents();
  },
  computed: {
    ...mapState(useDataStore, ["agents"]),
  },
};
</script>

<template>
  <div class="container-fluid agent-section">
    <h1 style="font-size: 70px; margin-bottom: 30px">AGENT LIST</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <AgentCard v-for="agent in agents" :key="agent.uuid" :agentDetail="agent" />
    </div>
  </div>
</template>

<style scoped>
.agent-section {
  padding: 80px 0 0;
  width: 80vw;
}
</style>
