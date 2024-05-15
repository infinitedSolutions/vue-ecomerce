<script lang="ts">
import type { Producto } from '@/types'
import type { PropType } from 'vue'
import { useCartStore } from '@/stores/Cart'
import { ref } from 'vue'

export default {
  name: 'ItemProduct',
  inheritAttrs: false,
  props: {
    producto: {
      type: Object as PropType<Producto>,
      required: true
    }
  },
  setup() {
    const inCart = ref(false)

    return {
      inCart
    }
  },
  created() {
    this.inCart = useCartStore().inCart(this.producto)
  },
  methods: {
    comprar() {
      useCartStore().AddCart(this.producto)
      this.inCart = useCartStore().inCart(this.producto)
    },
    quitar() {
      useCartStore().RemoveToCartAll(this.producto)
      this.inCart = useCartStore().inCart(this.producto)
    }
  }
}
</script>

<template>
  <v-card>
    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
    <v-card-title>{{ producto.nombre }}</v-card-title>
    <v-card-text>{{ producto.descripcion }}</v-card-text>
    <v-card-text>
      <v-chip>$ {{ producto.precio }}</v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        @click="comprar"
        text="Agregar"
        append-icon="mdi-cart-plus"
        variant="text"
      >
      </v-btn>
      <v-btn
        color="error"
        text="Quitar"
        append-icon="mdi-cart-minus"
        v-if="inCart"
        @click="quitar"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
