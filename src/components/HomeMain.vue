<script lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../stores/Cart'
import ListProductos from './home/ListProductos.vue'
import ListCategorias from './home/ListCategorias.vue'
import Navbar from './shared/NavBar.vue'

export default {
  name: 'HomeMain',
  components: {
    Navbar,
    ListProductos,
    ListCategorias
  },
  setup() {
    const productos = computed(() => useCartStore().getProductos)

    return { productos }
  },
  created() {
    if (useCartStore().getProductos.length === 0) useCartStore().generarProductosEjemplo()
  }
}
</script>
<template>
  <Navbar />
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="2">
          <ListCategorias />
        </v-col>
        <v-col cols="10">
          <ListProductos :productos="productos" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
