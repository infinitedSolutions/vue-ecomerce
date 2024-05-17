<script lang="ts">
import { useCartStore } from '@/stores/Cart'
export default {
  name: 'NavBar',
  components: {},

  computed: {
    items() {
      const store = useCartStore()
      return store.getCartQuantity
    }
  },

  setup() {
    return {}
  }
}
</script>
<template>
  <v-app-bar>
    <v-container class="mx-auto d-flex align-center justify-center">
      <router-link custom to="/" v-slot="{ navigate }">
        <v-btn variant="text" color="primary" @click="navigate"> Home </v-btn>
      </router-link>
      <router-link custom to="/cart" v-slot="{ navigate }">
        <v-badge :content="items" color="red" :model-value="items > 0">
          <v-btn variant="text" color="primary" @click="navigate">Cart</v-btn>
        </v-badge>
        <v-btn variant="text" color="primary" @click="navigate">Cart</v-btn>
      </router-link>
    </v-container>
  </v-app-bar>
</template>
