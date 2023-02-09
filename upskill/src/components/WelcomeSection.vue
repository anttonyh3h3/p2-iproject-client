<script>
export default {
  name: "WelcomeSection",
};
</script>

<template>
  <video autoplay muted loop id="bg-video">
    <source src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt778f65cedfee54fd/63bcad5b08dfb21202a7794d/VAL_Ep6_Homepage-CG-Video_V5.mp4" type="video/mp4">
  </video>

  <div class="d-flex flex-column justify-content-center welcome-contents">
    <h3 class="text-1">The best place to improve your skill</h3>
    <h4 class="text-2">
      See valorant agents stats and skills. 
      Watch specific agent's pro playerand content creator videos
    </h4>
    <h1 class="text-brand">
      <!-- <span class="material-symbols-outlined" style="height: 50px;">arrow_upward</span> -->
      <b>UpSkill</b>
    </h1>
  </div>
</template>

<style scoped>
#bg-video {
  position: fixed;
  right: 0;
  top: 0;
  min-width: 100%;
  min-height: 80%;
  z-index: -1;
}
.welcome-contents{
  /* margin-top: 80px; */
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  min-height: 82.9%;
  padding: 20px;
  z-index: -1;
}

.text-1 {
  font-size: 40px;
  margin-bottom: 10px;
}
.text-brand {
  margin-top: 40px;
  font-size: 80px;
}
</style>
