<template>
  <v-app id="inspire">
    <v-app-bar image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" dark prominent>

      <v-spacer></v-spacer>

      <v-tabs color="white" centered>
        <v-tab v-for="link in links" :key="link.tekst" :text="link.tekst" :to="link.lokacija" class="text-white"
          :class="{ 'active-link': $route.path === link.lokacija }"></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <v-container>

        <v-sheet min-height="70vh" class="sheet">
          <router-view></router-view>

        </v-sheet>

      </v-container>
      <FooterView></FooterView>
    </v-main>
  </v-app>

</template>


<script>
import FooterView from '@/views/FooterView.vue';
export default {
  components: {
    FooterView
  },
  data: () => ({
    links: [
      {
        'tekst': 'Početna',
        'lokacija': '/'
      },
      {
        'tekst': 'O Pythonu',
        'lokacija': '/opythonu'
      },
      {
        'tekst': 'Kontakt',
        'lokacija': '/kontakt'
      },
    ],

  }),
}
</script>

<style scoped>
.active-link {
  border-bottom: 2px solid white;
}



.sheet {
  padding: 10;
  background-color:whitesmoke
}
</style>