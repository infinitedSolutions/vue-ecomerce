<script lang="ts">
import { useCartStore } from '../../stores/Cart'
import ItemShopingCart from './ItemShopingCart.vue'

export default {
  name: 'ShopingCart',
  components: {
    ItemShopingCart
  },
  computed: {
    cart() {
      const store = useCartStore()
      return store.getCartProducts
    }
  },
  setup() {
    return {}
  }
}
</script>

<template>
  <v-card>
    <v-card-title class="text-center">Carrito de compras</v-card-title>
    <v-card-text v-if="cart">
      <v-row>
        <v-col cols="2">Imagen</v-col>
        <v-col cols="2">Nombre</v-col>
        <v-col cols="1">Cantidad</v-col>
        <v-col cols="1">Precio</v-col>
        <v-col cols="1">IVA</v-col>
        <v-col cols="1">Total</v-col>
        <v-col cols="4">Acciones</v-col>
      </v-row>
      <v-row v-for="pc in cart" :key="pc.producto.id" align="center">
        <ItemShopingCart :pc="pc" />
      </v-row>
    </v-card-text>
    <v-card-text v-else>
      <v-row>
        <v-col cols="12" class="text-center"
          >No hay productos en el carrito. Has click aquí para ver los productos disponibles
          <router-link custom to="/" v-slot="{ navigate }">
            <v-btn variant="text" color="primary" @click="navigate"> Home </v-btn>
          </router-link></v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>
