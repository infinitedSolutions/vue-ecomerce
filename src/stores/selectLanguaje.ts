import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useLanguajeStore = defineStore("languaje", {
  state:()=>({languaje:ref(''),isLoading:ref(false)}),
  getters:{
    getIsLoading():boolean{
      return this.isLoading
    }
  },
  actions:{
    setLanguaje(idioma:string){
      this.languaje = idioma
    }
  },
  persist: {
    storage: localStorage,
  }
})