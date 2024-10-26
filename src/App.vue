<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";

</script>

<template>
  <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink to="/cvcristian" class="nav-link active" aria-current="page">Cristian</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/cvjuan" class="nav-link active" aria-current="page">Juan</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/cvalexander" class="nav-link active" aria-current="page">Alexander</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  </header>

  <RouterView />

  <Footer />
</template>

<style scoped>
</style>
