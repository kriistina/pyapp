<template>
  <footer class="footer">
    <div class="text-center mt-2">
      <div>
        <a v-for="icon in icons" :key="icon.ime" :href="icon.lokacija" class="mx-4" target="_blank">
          <v-icon class="icon">{{ icon.ime }}</v-icon>
        </a>
      </div><br>
      <hr /><br>
      <p class="text-white font-bold">app01</p>
      <p class="text-white">Kristina Đukić © 2024</p>
      <p class="text-white">Zaronite u svijet Pythona - svaka linija koda je prilika za otkrivanje nečeg novog.</p><br>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView',
  data: () => ({
    icons: [
      { 'ime': 'mdi-facebook', 'lokacija': 'https://www.facebook.com/fpmoz.ba/' },
      { 'ime': 'mdi-twitter', 'lokacija': 'https://twitter.com/SVE_Mostar' },
      { 'ime': 'mdi-youtube', 'lokacija': 'https://www.youtube.com/results?search_query=python+full+course' },
      { 'ime': 'mdi-instagram', 'lokacija': 'https://www.instagram.com/fpmoz.mostar/?hl=hr' },
    ],
  }),
}
</script>

<style scoped>
.footer {
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
  background-size: cover;
  padding: 20px;
}

.icon {
  color: rgb(4, 4, 84);
}

.font-bold {
  font-weight: bold;
}
</style>
