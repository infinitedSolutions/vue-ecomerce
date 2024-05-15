<script lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../stores/Cart'
import ListProductos from './home/ListProductos.vue'
import Navbar from './shared/NavBar.vue'

export default {
  name: 'HomeMain',
  components: {
    Navbar,
    ListProductos
  },
  setup() {
    const productos = computed(() => useCartStore().getProductos)
    const cart = computed(() => useCartStore().getCart)
    const productosInCart = computed(() => cart.value.productos)

    return { productos, cart, productosInCart }
  },
  created() {
    if (useCartStore().getProductos.length === 0) useCartStore().generarProductosEjemplo()
  }
}
</script>
<template>
  <v-container>
    <Navbar />
    <ListProductos :productos="productos" />

    <v-list lines="one">
      <v-list-item v-for="item in productosInCart" :key="item.id"
        >{{ item.producto.nombre }}-{{ item.quantity }}</v-list-item
      >
    </v-list>
  </v-container>
</template>
