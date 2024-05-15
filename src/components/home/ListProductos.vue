<script lang="ts">
import type { Producto } from '@/types'
import type { PropType } from 'vue'
import ItemProduct from './ItemProduct.vue'

export default {
  name: 'ListProductos',
  inheritAttrs: false,
  props: {
    productos: {
      type: Array as PropType<Producto[]>,
      required: true
    }
  },
  components: {
    ItemProduct
  },
  setup() {
    return {}
  }
}
</script>

<template>
  <v-row>
    <v-col cols="3" v-for="producto in productos" :key="producto.id">
      <ItemProduct :producto="producto" />
    </v-col>
  </v-row>
</template>
