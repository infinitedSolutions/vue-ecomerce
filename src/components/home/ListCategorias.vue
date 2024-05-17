<script lang="ts">
import { type Categoria } from '@/types'
export default {
  name: 'ListCategorias',
  components: {},

  setup() {
    const categorias: Array<Categoria> = [
      { id: 1, nombre: 'Categoría 1' },
      { id: 2, nombre: 'Categoría 2' },
      { id: 3, nombre: 'Categoría 3' },
      { id: 4, nombre: 'Categoría 4' },
      { id: 5, nombre: 'Categoría 5' }
    ]
    return {
      categorias
    }
  }
}
</script>

<template>
  <v-sheet rounded="lg" elevation="2" class="pa-4">
    <v-list lines="one" rounded="lg">
      <v-list-item link v-for="item in categorias" :key="item.id">
        <v-list-item-title>{{ item.nombre }}</v-list-item-title>
      </v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item link>
        <v-list-item-title>Ordenar por precio</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>
