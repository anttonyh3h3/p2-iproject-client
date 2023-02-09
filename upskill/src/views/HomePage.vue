<script>
import WelcomeSection from '../components/WelcomeSection.vue';
import CoachingSection from '../components/CoachingSection.vue';
import AgentSection from '../components/AgentSection.vue';

export default {
  name: "HomePage",
  components: {
    WelcomeSection,
    CoachingSection,
    AgentSection,
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="filler"></div>
  <!-- Welcome Section -->
    <WelcomeSection />
  <!-- End Welcome Section -->

  <!-- Coaching section -->
    <CoachingSection />
  <!-- End Coaching section -->

  <!-- Agent Section -->
    <AgentSection />
  <!-- Agent Section -->
  </div>
</template>

<style scoped>
.filler {
  min-height: 775px;
  /* border: 2px solid red; */
}
</style>