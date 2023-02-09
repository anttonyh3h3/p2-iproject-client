<script>
export default {
  name: "AbilityCard",
  props: ["abilityDetail"]
};
</script>

<template>
  <div class="card mb-3 ability-content" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-2">
        <img
          :src="abilityDetail.displayIcon"
          class="img-fluid rounded-start"
          alt="ability-icon"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            <span class="badge text-bg-secondary" v-if="abilityDetail.slot === 'Ability1'">Q</span>
            <span class="badge text-bg-secondary" v-if="abilityDetail.slot === 'Ability2'">E</span>
            <span class="badge text-bg-secondary" v-if="abilityDetail.slot === 'Grenade'">C</span>
            <span class="badge text-bg-secondary" v-if="abilityDetail.slot === 'Ultimate'">Z</span>
            <span class="badge text-bg-secondary" v-if="abilityDetail.slot === 'Passive'">P</span>
            {{ abilityDetail.displayName }}
          </h5>
          <p class="card-text">{{ abilityDetail.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ability-content {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>