/* eslint-disable prefer-const */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Cart, CartProducto, Producto } from '@/types'
import ConsApiClass from '@/models/consApi'
import Swal from 'sweetalert2'
import apiPeticion from '@/utils/api'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: ref(<Cart>{} || null),
    productos: ref(<Array<Producto>>[] || null)
  }),
  getters: {
    getCart(): any {
      return this.cart
    },
    getProductos(): any {
      return this.productos
    },
    getCartQuantity: (state) => {
      return state.cart.quantity
    },
    getCartProducts: (state) => {
      return state.cart.productos
    }
  },
  actions: {
    async getProductoFeacture(lenguage: string) {
      const consApiClass = new ConsApiClass()
      const result = (await apiPeticion(consApiClass.urls.productos, lenguage)) as Array<Producto>
      this.productos = result
    },
    AddCart(producto: Producto) {
      if (this.cart) {
        if (!this.cart.productos) {
          this.cart = { productos: [], quantity: 0, total: 0 }
        }
      }
      //buscar si el producto ya esta en el carrito
      let index = this.cart.productos.findIndex(
        (element: CartProducto) => element.producto?.id == producto.id
      )

      if (index >= 0) {
        this.cart.productos[index].quantity += 1
        this.cart.productos[index].total =
          this.cart.productos[index].quantity * this.cart.productos[index].producto.precio
        this.cart.quantity = this.cart.productos.reduce((acc, element) => acc + element.quantity, 0)
        this.cart.total = this.cart.productos.reduce((acc, element) => acc + element.total, 0)
      } else {
        this.cart.productos.push({ producto: producto, quantity: 1, total: producto.precio })
        this.cart.quantity = this.cart.productos.reduce((acc, element) => acc + element.quantity, 0)
        this.cart.total = this.cart.productos.reduce((acc, element) => acc + element.total, 0)
      }
      const indexProducto = this.productos.findIndex(
        (element: Producto) => element.id == producto.id
      )
      this.productos[indexProducto].cantidad_disponible -= 1
      Swal.fire({
        title: 'Producto Agregado',
        text: 'Producto agregado al carrito',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    },
    removeToCart(producto: Producto) {
      // Accede al valor real del ref 'cart'
      if (!this.cart || !this.cart.productos) {
        this.cart = { productos: [], quantity: 0, total: 0 }
      }

      //buscar si el producto ya esta en el carrito
      let index = this.cart.productos.findIndex(
        (element: CartProducto) => element.producto?.id == producto.id
      )
      //si el producto esta en el carrito y la cantidad es mayor a 1
      if (index >= 0 && this.cart.productos[index].quantity > 1) {
        this.cart.productos[index].quantity -= 1
        this.cart.productos[index].total =
          this.cart.productos[index].quantity * this.cart.productos[index].producto.precio
        this.cart.quantity = this.cart.productos.reduce((acc, element) => acc + element.quantity, 0)
        this.cart.total = this.cart.productos.reduce((acc, element) => acc + element.total, 0)
      } else {
        this.cart.productos.splice(index, 1)
        this.cart.quantity = this.cart.productos.reduce((acc, element) => acc + element.quantity, 0)
        this.cart.total = this.cart.productos.reduce((acc, element) => acc + element.total, 0)
      }

      Swal.fire({
        title: 'Producto Agregado',
        text: 'Producto removido del carrito',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    },
    RemoveToCartAll(producto: Producto) {
      const indexProducto = this.productos.findIndex(
        (element: Producto) => element.id == producto.id
      )
      const index = this.cart.productos.findIndex(
        (element: CartProducto) => element.producto?.id == producto.id
      )
      this.productos[indexProducto].cantidad_disponible += this.cart.productos[index].quantity

      if (index >= 0) {
        this.cart.productos.splice(index, 1)
        this.cart.quantity = this.cart.productos.reduce((acc, element) => acc + element.quantity, 0)
        this.cart.total = this.cart.productos.reduce((acc, element) => acc + element.total, 0)
      }
    },
    updateCart(producto: Producto, cantidad: number) {
      const index = this.cart.productos.findIndex(
        (element: CartProducto) => element.producto?.id == producto.id
      )
      if (index >= 0) {
        if (cantidad <= this.cart.productos[index].producto.cantidad_disponible) {
          const dif = cantidad - this.cart.productos[index].quantity
          this.cart.productos[index].quantity = cantidad
          this.cart.productos[index].total =
            this.cart.productos[index].quantity * this.cart.productos[index].producto.precio
          this.cart.quantity = this.cart.productos.reduce(
            (acc, element) => acc + element.quantity,
            0
          )
          this.cart.total = this.cart.productos.reduce((acc, element) => acc + element.total, 0)
          //Buscar el producto en la lista de productos
          const indexp = this.productos.findIndex((element: Producto) => element.id == producto.id)
          if (dif > 0) {
            this.productos[indexp].cantidad_disponible -= dif
          } else {
            this.productos[indexp].cantidad_disponible += dif
          }
        }
      }
    },
    generarProductosEjemplo() {
      for (let i = 1; i <= 12; i++) {
        this.productos.push({
          id: i,
          idioma: 'es',
          nombre: `Producto ${i}`,
          cantidad_disponible: 10,
          vendidos: 0,
          descripcion: `Descripcion del producto ${i}`,
          precio: i * 1000,
          url: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        })
      }
    },
    inCart(producto: Producto) {
      if (this.cart) {
        if (!this.cart.productos) {
          this.cart = { productos: [], quantity: 0, total: 0 }
        }
      }
      //buscar si el producto ya esta en el carrito
      let index = this.cart.productos.findIndex(
        (element: CartProducto) => element.producto?.id == producto.id
      )
      if (index >= 0) {
        return true
      } else {
        return false
      }
    }
  },
  persist: {
    storage: sessionStorage
  }
})
