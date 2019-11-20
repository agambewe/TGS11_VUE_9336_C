<template> 
    <div> 
        <v-navigation-drawer v-model="drawer" class="grey darken-3" dark app clipped fixed temporary > 
            <v-list-item> 
                <v-list-item-content> 
                    <v-list-item-title class="title"> Modul 11 </v-list-item-title> 
                    <v-list-item-subtitle> Vue Consume REST API</v-list-item-subtitle> 
                </v-list-item-content> 
            </v-list-item> 
            <v-divider></v-divider> 
            <v-list> 
                <v-list-item v-for="item in items" :key="item.title" link > 
                    <v-list-item-icon> 
                        <v-icon>{{ item.icon }}</v-icon> 
                    </v-list-item-icon> 
                    <v-list-item-content> 
                        <router-link :to="item.path" tag="li" exact v-on:click.native="close()">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </router-link>
                    </v-list-item-content> 
                </v-list-item> 
            </v-list> 
            <template v-slot:append> 
                <div class="pa-2" v-if="logwhat">
                    <v-btn block @click="submitLogout()">Logout</v-btn>
                </div>
                <div class="pa-2" v-else>
                    <v-btn block @click="submitLogin()">Login</v-btn> 
                </div>
            </template> 
        </v-navigation-drawer> 
        <v-app-bar dark app fixed clipped-left height="70px" color="grey darken-3"> 
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> 
            <VSpacer /> 
            <img src="../assets/logo.svg" style="height:45px;width:45px"> 
            <v-toolbar-title style="font-size: 21px;" class="white--text ml-2" > PAW-UAJY </v-toolbar-title>
        </v-app-bar> 
        <VContent > 
            <router-view /> 
        </VContent> 
    </div> 
</template> 

<script> 
export default { 
    data () { 
        return { 
            drawer: null,
            load: false,
            logwhat: false,
            items: [ 
                { 
                    title: 'Dashboard', 
                    path: '/', 
                    icon: 'mdi-human-male' 
                }, 
                { 
                    title: 'User Controller', 
                    path: '/user', 
                    icon: 'mdi-human-male' 
                }, 
                { 
                    title: 'Branches Controller', 
                    path: '/branches',
                    icon: 'mdi-human-male' 
                }, 
            ],
        } 
    }, 
    mounted () {
        this.setLogwhat()
    },
    methods: {
        setLogwhat() {
            if(localStorage.getItem('token')){
                this.logwhat = true
            }else{
                this.logwhat = false
            }
        },
        submitLogout() {
            localStorage.removeItem('token')
            this.$router.push({
                    name: 'login'
                })
        },
        submitLogin() {
            this.$router.push({
                    name: 'login'
                })
        },
    }
} 
</script>