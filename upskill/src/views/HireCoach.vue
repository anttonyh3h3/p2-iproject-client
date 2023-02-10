<script>
import { mapActions } from 'pinia';
import { useDataStore } from '../stores';

export default {
  name: "HirePage",
  data() {
    return {
      date: "",
      link: "",
    }
  },

  methods: {
    ...mapActions(useDataStore, ["hireCoach"]),
    handleSubmit() {
      const value = {
        uuid: this.$route.params.uuid,
        date: this.date,
        link: this.link
      }

      this.hireCoach(value)
    }
  }
};
</script>

<template>
  <div class="page-wrapper">
    <div class="container-fluid hire-section">
      <div class="container">
        <div class="row justify-content-md-center">
          <form class="hire-form" @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="staticName" class="form-label" style="font-size: 20px;">Coach</label>
              <!-- <input type="email" class="form-control" id="staticName" aria-describedby="emailHelp"> -->
              <input type="text" readonly class="form-control-plaintext" id="staticName" value="Coach name">
            </div>
            <div class="form-floating mb-3">
              <input type="date" class="form-control" id="floatingDate" v-model="date">
              <label for="floatingDate">Date</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingLink" placeholder="Your vod link" v-model="link">
              <label for="floatingLink">VOD</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
}

.hire-form {
  padding: 20px;
  max-width: 60vw;
  border: 2px solid red;
}

.hire-section {
  /* border: 2px solid greenyellow; */
  padding: 80px 0 0;
  width: 90vw;
}
</style>
