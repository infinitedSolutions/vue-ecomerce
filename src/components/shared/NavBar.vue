<script lang="ts">
export default {
  name: 'NavBar',
  components: {},
  setup() {
    return {}
  }
}
</script>
<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <router-link custom to="/" v-slot="{ navigate }">
        <v-btn variant="text" color="primary" @click="navigate"> Home </v-btn>
      </router-link>
      <router-link custom to="/cart" v-slot="{ navigate }">
        <v-btn variant="text" color="primary" @click="navigate">Cart</v-btn>
      </router-link>
    </v-container>
  </v-app-bar>
</template>
