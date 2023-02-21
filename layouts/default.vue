<script lang="ts" setup>
import VuesticLogo from '../components/VuesticLogo.vue'
let tabIndex = 0
</script>

<template>
  <div class="auth-layout row align-content-center">
    <div class="flex xs12 pa-3 justify-center">
      <router-link class="py-5 justify-center d-flex" to="/">
        <vuestic-logo height="32" />
      </router-link>
    </div>

    <div class="flex xs12 pa-3">
      <div class="d-flex justify-center">
        <va-card class="auth-layout__card">
          <va-card-content>
            <va-tabs v-model="tabIndex" center>
              <template #tabs>
                <va-tab name="login">Login</va-tab>
                <va-tab name="signup">Create New Account</va-tab>
              </template>
            </va-tabs>

            <va-separator />

            <div class="pa-3">
              <router-view />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
