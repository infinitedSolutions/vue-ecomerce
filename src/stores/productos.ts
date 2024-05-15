import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Producto } from '@/types'


export const useProductosStore = defineStore("productos", {
  state: () => ({ productos: ref(<Array<Producto>>[] || null) }),
  getters: {
    getProducto(): any {
      return this.productos
    }
  },
  actions: {
    setProductos(producto: Array<Producto>) {
      this.productos = producto
    },
    addCart(producto: Producto) {
      //buscar si el producto ya esta en el carrito
      if (this.productos) {
        const index = this.productos.findIndex((element: Producto) => element.id == producto.id)
        if (index >= 0) {
          this.productos[index].cantidad_disponible -= 1
          this.productos[index].vendidos += 1
        }
      }
    },
    fillter(name: string) {
      if (this.productos) {
        return this.productos.filter((element: Producto) => element.nombre.includes(name))
      }
    }
  }
})