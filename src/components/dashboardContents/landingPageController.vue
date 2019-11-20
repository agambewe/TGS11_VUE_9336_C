<template> 
    <v-container> 
        <v-container grid-list-md mb-0>
            <v-layout text-center wrap>
                <v-flex mb-4>
                    <h1 class="display-2 font-weight-bold mb-3" style="color: brown;">
                        Welkam di UGD11ku bro
                    </h1>
                    <p class="subheading font-weight-regular">
                        ini landing page UGDku, landing page ini dijadikan bonus pada UGD kali ini bro
                    </p>
                    <img src="https://static.zerochan.net/Feitan.full.893167.jpg" alt="Ugd 11 kiri Bro" height="400" width="500">
                </v-flex>

                <v-flex mb-5>
                    <h2 class="headline mb-3" style="color: gray;">Who am i?</h2>
                    <v-layout justify-center>
                        <h3 class="mx-3">
                            {{ myBio.name }}<br>
                            {{ myBio.npm }}<br>
                            {{ myBio.class }}
                        </h3>
                    </v-layout>
                    <img src="https://pm1.narvii.com/6429/e1241e43b6b9791cd887d3063642c9d1781d803a_hq.jpg" alt="Ugd 11 kanan Bro" height="375" width="400">
                </v-flex>
            </v-layout>
        </v-container> 
        <v-snackbar 
            v-model="snackbar"
            :color="color" 
            :multi-line="true" 
            :timeout="3000" 
        > {{ text }} 
            <v-btn dark text @click="snackbar = false" > Close </v-btn> 
        </v-snackbar> 
    </v-container> 
</template> 
<script>
export default {
    data: () => ({
    myBio:
        {
            name: 'Agam Bagaswanda',
            npm: '170709336',
            class: 'C',
        },
    }),
};
</script>