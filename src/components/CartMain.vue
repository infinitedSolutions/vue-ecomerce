<script lang="ts">
import Navbar from './shared/NavBar.vue'
import ShopingCart from './cart/ShopingCart.vue'

export default {
  name: 'CartMain',
  components: {
    Navbar,
    ShopingCart
  },
  setup() {
    return {}
  }
}
</script>
<template>
  <Navbar />
  <v-main>
    <v-container>
      <ShopingCart />
    </v-container>
  </v-main>
</template>
