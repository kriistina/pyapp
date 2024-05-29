<template>

    <div class="container">
        <div class="bg-white p-5">

            <div class="mb-5 mt-5">
                <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    :src="'https://maps.google.com/maps?q=' + encodeURIComponent(address) + '&t=&z=13&ie=UTF8&iwloc=&output=embed'"
                    allowfullscreen></iframe>
            </div>

            <h1 class="text-center fw-bold">Kontakt</h1><br>
            <hr />
            <p class="mb-5 mt-5 text-center">
                Ovo su neke informacije kako nas možete kontaktirati, a u slučaju da imate dodatno pitanje slobodno
                ga postavite.
            </p>

            <div>
                <div class="mb-5 mt-5 text-center">
                    <h5>Adresa:</h5>
                    <p>Ulica Matice hrvatske bb, <br />88000 Mostar</p>
                </div>

                <div class="mb-5 mt-5 text-center">
                    <h5>Telefon:</h5>
                    <p>+387 36 355-455 <br />+387 36 355-458</p>
                </div>
                <div class=" mt-5 text-center">
                    <h5>Vaše pitanje:</h5>
                    <br />
                    <v-textarea label="?" variant="outlined" class="text-center"
                        style="padding-left: 100px; padding-right: 100px;"></v-textarea>
                </div>

                <div class="text-center" style=" padding-bottom: 20px;">
                    <v-btn color="primary" >
                        Pošalji
                    </v-btn>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            address: 'Ulica Matice hrvatske bb, 88000 Mostar'
        };
    },
};
</script>

<style scoped>
.container {
    width: 100%;
}
</style>