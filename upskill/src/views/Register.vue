<script>
import { mapActions } from "pinia";
import { useDataStore } from "../stores";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phoneNumber: ""
    };
  },
  methods: {
    ...mapActions(useDataStore, ["handleRegister"]),
    handleRegisterPage() {
      const { username, email, password, phoneNumber } = this

      const value = { username, email, password, phoneNumber }

      this.handleRegister(value)
    }
  }
};
</script>

<template>
  <div class="page-wrapper">
    <div class="container-fluid">
      <form @submit.prevent="handleRegisterPage" class="form-container">
        <h2 style="margin-bottom: 25px">Register</h2>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingUsername"
            placeholder="name@example.com"
            v-model="username"
          />
          <label for="floatingUsername">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingPhone"
            placeholder="name@example.com"
            v-model="phoneNumber"
          />
          <label for="floatingPhone">Phone Number</label>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  background-image: url("https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc3bf97021e2b2130/63b8afcc438f80612c39678d/Valorant_2022_EP6-1_PlayVALORANT_PlayValorantHomepage_3440x1020_MB01.png.jpg");
  background-size: cover;
}

.container-fluid {
  height: 100vh;
  border: 1px solid transparent;
}

.form-container {
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(209, 72, 54, 0.5) 0px 2px 4px 0px,
    rgba(209, 72, 54, 0.5) 0px 2px 16px 0px;
  padding: 40px 25px;
  width: 60vh;
  margin: 250px auto 0;
  border: 1px solid red;
}

.form-container h2 {
  text-align: center;
}
</style>
