<script>
import { RouterLink } from 'vue-router'
import { mapActions, mapState } from 'pinia';
import { useDataStore } from '../stores';

export default {
  name: "Navbar",
  methods: {
    ...mapActions(useDataStore, ["handleLogout"]),
    logoutClick() {
      this.handleLogout()
    }
  },
  computed: {
    ...mapState(useDataStore, ["isLogin"])
  }
};
</script>

<template>
  <nav class="navbar bg-body-tertiary fixed-top navbar-dark">
    <div class="container-fluid navbar-content">
      <RouterLink to="/" class="navbar-brand" href="#">
        <span class="material-symbols-outlined">
          arrow_upward
        </span>
        UpSkill
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-light" id="offcanvasNavbarLabel">
            <span class="material-symbols-outlined">
              arrow_upward
            </span>
            UpSkill
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" href="#">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/agents" class="nav-link" href="#">Agent List</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/pros" class="nav-link" href="#">Pros</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link" href="#" v-if="!isLogin">Login</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/register" class="nav-link" href="#" v-if="!isLogin">Register</RouterLink>
            </li>
            <li class="nav-item dropdown" v-if="isLogin">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Username
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">My Coaching</a></li>
                <li><a @click.prevent="logoutClick" class="dropdown-item" href="#">Logout</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #111111 !important;
}
.navbar-content{
  margin: 0 15px 0 15px;
}

.material-symbols-outlined {
  margin-right: -5px;
}
</style>