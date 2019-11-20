<template>
<div id="loginLayout">
    <div class="container">
        <v-form ref="form">
            <v-text-field v-model="email" type="email" label="Email" required></v-text-field>
            <v-text-field v-model="password" type="password" label="Password" :error-messages="message" @keyup.enter="submitLogin(); load =true"></v-text-field>
            <div>
                <v-btn color="grey" :loading="load" @click="submitLogin(); load =true">
                    Masuk
                </v-btn>
            </div>
        </v-form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            error: false,
            email: '',
            password: '',
            message: '',
            load: false,
        }
    },
    methods: {
        submitLogin() {
            this.$http.post(this.$apiUrl + '/user/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                localStorage.setItem('token', response.data.token)
                this.$router.push({
                    name: 'UserController'
                })
            }).catch(error => {
                console.log(error)
                this.message = `Email / password tidak cocok`
                this.load = false
            })
        }
    }
}
</script>
