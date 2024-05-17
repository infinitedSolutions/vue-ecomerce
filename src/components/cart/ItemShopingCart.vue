<script lang="ts">
import { useCartStore } from '@/stores/Cart'
import type { CartProducto } from '@/types'

export default {
  name: 'ItemShopingCart',
  props: {
    pc: {
      type: Object as () => CartProducto,
      required: true
    }
  },
  components: {},
  computed: {},
  setup() {
    return {}
  },
  methods: {
    addProduct() {
      const store = useCartStore()
      store.AddCart(this.pc.producto)
    },
    removeProduct() {
      const store = useCartStore()
      store.removeToCart(this.pc.producto)
    },
    deleteProduct() {
      const store = useCartStore()
      store.RemoveToCartAll(this.pc.producto)
    }
  }
}
</script>

<template>
  <v-col cols="2"><v-avatar :image="pc.producto.url" rounded="0"></v-avatar> </v-col>
  <v-col cols="2">{{ pc.producto.nombre }} </v-col>
  <v-col cols="1">{{ pc.quantity }} </v-col>
  <v-col cols="1">$ {{ pc.producto.precio }} </v-col>
  <v-col cols="1">$ {{ pc.total * 0.16 }} </v-col>
  <v-col cols="1">$ {{ pc.total * 0.16 + pc.total }} </v-col>
  <v-col cols="3">
    <v-btn icon @click="addProduct">
      <v-icon color="blue">mdi-cart-plus</v-icon>
    </v-btn>
    <v-btn icon @click="removeProduct">
      <v-icon color="red-lighten-2">mdi-cart-minus</v-icon>
    </v-btn>
    <v-btn icon @click="deleteProduct">
      <v-icon color="red">mdi-cart-remove</v-icon>
    </v-btn>
  </v-col>
</template>
