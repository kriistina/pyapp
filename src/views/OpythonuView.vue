<template>
  <div class="container mt-5 mb-5">
    <h1 class="fw-bold">Što je Python?</h1><br>
    <p class="lead">Python je popularan programski jezik koji je kreirao Guido van Rossum i objavljen je 1991. godine.
      Koristi se za različite svrhe:</p>

    <ul>
      <li>Web razvoj (na strani poslužitelja)</li>
      <li>Razvoj softvera</li>
      <li>Matematika</li>
      <li>Sistemsko skriptiranje</li>
    </ul><br>

    <v-row>
      <v-col cols="6">
        <h2 class="mt-5 mb-4">Što Python može?</h2>
        <p>Python ima mnoge upotrebe:</p>

        <ul>
          <li>Web aplikacije</li>
          <li>Radni procesi</li>
          <li>Baze podataka</li>
          <li>Obrada velikih podataka</li>
          <li>Prototipiranje softvera</li>
        </ul>
      </v-col>
      <v-col cols="6">
        <v-img :width="500" cover
          src="https://assets.digitalocean.com/articles/how-to-code-in-python-banner/how-to-code-in-python.png"></v-img>
      </v-col>
    </v-row>

    <h2 class="mt-5 mb-4">Zašto Python?</h2>
    <p>Postoji nekoliko razloga za korištenje Pythona:</p>

    <ul>
      <li>Radi na različitim platformama</li>
      <li>Jednostavna sintaksa</li>
      <li>Brza izrada prototipova</li>
      <li>Može se koristiti na različite načine (proceduralni, objektno orijentiran, funkcionalan)</li>
    </ul>

    <h2 class="mt-5 mb-4">Dobro je znati</h2>
    <p>Najnovija verzija Pythona je Python 3, iako je Python 2 još uvijek prilično popularan. Python se može pisati u
      različitim okruženjima, uključujući integrirana razvojna okruženja poput Thonny, Pycharm, Netbeans ili Eclipse.
    </p>

    <h2 class="mt-5 mb-4">Python sintaksa u usporedbi s drugim programskim jezicima</h2>
    <p>Python je dizajniran za čitljivost i ima neke sličnosti s engleskim jezikom. Koristi novi red za dovršetak
      naredbe i oslanja se na uvlačenje umjesto vitičastih zagrada za definiranje opsega.</p><br><br>

    <div class="text-center">
      <h1 style="color: white;">Example:</h1>
      <p style="color: white;">print("Hello, World!")</p><br>

      <v-btn @click="runExample()">Run</v-btn>
      <div class="mt-3" v-show="showOutput">
        <h2><strong style="color: white;">Output:</strong></h2>
        <p style="color: white;">{{ output }}</p>
      </div>
    </div><br>
    <p>Ukoliko želite naučiti više, posjetite stranicu: <a href="https://www.w3schools.com/python/python_intro.asp"
        target="_blank">w3schools</a>.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: 'Hello, World!',
      showOutput: false
    };
  },
  methods: {
    runExample() {
      try {
        this.showOutput = !this.showOutput; 
      } catch (error) {
        this.output = 'Error occurred: ' + error.message;
        this.showOutput = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 5%;
}

.text-center {
  background-image: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
  background-size: cover;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;

}
</style>
