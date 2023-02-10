<script>
import { mapActions, mapState } from "pinia";
import { useDataStore } from "../stores";
import AbilityCard from "../components/AbilityCard.vue";

export default {
  name: "AgentDetail",
  components: {
    AbilityCard
  },

  methods: {
    ...mapActions(useDataStore, ["fetchAgentDetails"]),
  },

  created() {
    this.fetchAgentDetails(this.$route.params.uuid);
  },

  computed: {
    ...mapState(useDataStore, ["agentDetail"]),
  },
};
</script>

<template>
  <div class="page-wrapper">
    <div class="container-fluid detail-section">
      <div class="container">
        <div class="row">
          <!-- Left Section -->
          <div class="col">
            <div class="card desc-card" style="width: 100%">
              <img :src="agentDetail.imgUrl" class="card-img-top mb-5" alt="agent-img" id="agent-img" />
              <div class="card-body">
                <div class="d-flex">
                  <h2 class="card-title me-md-3">
                    <b>{{ agentDetail.name }}</b>
                  </h2>
                  <p>CODENAME</p>
                </div>
                <h5 class="card-title">
                  <b>{{ agentDetail.role.displayName }}</b>
                </h5>
                <p class="card-text">{{ agentDetail.description }}</p>
              </div>
            </div>
          </div>
          <!-- End Left Section -->

          <!-- Center Section -->
          <div class="col">
            <div class="card ability-card justify-content-center" style="width: 100%">
              <AbilityCard v-for="abilityDetail in agentDetail.abilities" :abilityDetail="abilityDetail" />
            </div>
          </div>
          <!-- End Center Section -->

          <!-- Right Section -->
          <div class="col">
            <div class="card pros-card justify-content-center" style="width: 100%">
              <h2 class="card-title me-md-3">{{ agentDetail.name }} pro players</h2>
              <h5 class="card-title">COMING SOON</h5>
            </div>
          </div>
          <!-- End Right Section -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  background-image: url("https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.detail-section {
  /* border: 2px solid greenyellow; */
  padding: 80px 0 0;
  width: 90vw;
}

.desc-card,
.pros-card {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}

.ability-card {
  background-color: rgba(0, 0, 0, 0);
  border-color: transparent;
  color: white;
}

.ability-content {
  background-color: rgba(0, 0, 0, 0.6);
}

#agent-img {
  /* border: 2px solid yellow; */
  width: 100%;
}
</style>
