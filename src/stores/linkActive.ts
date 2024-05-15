import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Urls } from '@/models/types';
import { useLanguajeStore } from '@/stores/selectLanguaje';


export const useUrlsSStore = defineStore("languaje", {
  state: () => ({ urls: computed(async() => { try {
    const res = await fetch(`http://localhost/api/public/idiomas/${useLanguajeStore().languaje}`);
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data:Urls[] = await res.json();// Imprime los datos devueltos
    //recorrer el array de objetos y agregarle propiedad active en false
    data.forEach(element => {
        element.active = false;
    });
    data[0].active = true;
    return data;
} catch (error:any) {
    console.error('There was a problem with the fetch operation: ' + error.message);
    return [];
} finally {
}}) }),
  getters: {
    getUrls(): Promise<Array<Urls>>{
      return this.urls
    }

  },
  actions: {
    async setLinkActive(link:Urls): Promise<void>{
      this.urls.then((urls) => {
        urls.forEach(element => {
          element.active = element.url === link.url ? true : false;
        });

      });
    },
  },
})