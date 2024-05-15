<script lang="ts">
import HomeMain from '@/components/HomeMain.vue'
export default {
  name: 'HomeView',
  components: {
    HomeMain
  },
  setup() {
    return {}
  }
}
</script>

<template>
  <v-app>
    <main>
      <HomeMain />
    </main>
  </v-app>
</template>
