<script lang="ts">
import CartMain from '@/components/CartMain.vue'
export default {
  name: 'CartView',
  components: {
    CartMain
  },
  setup() {
    return {}
  }
}
</script>

<template>
  <v-app>
    <main>
      <CartMain />
    </main>
  </v-app>
</template>
