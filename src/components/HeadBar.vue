<template>
<v-card color="white">
    
    <v-app-bar 
        app 
        color = "primary" 
        shrink-on-scroll
        :src="require('@/assets/header.jpg')"
        fade-img-on-scroll
        dark
        >
        <v-toolbar-title class = "h1">Teru's Portfolio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon href="https://twitter.com/teruto_725">
            <v-icon color = "twitter">mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/teruto725">
            <v-icon color = "github">mdi-github</v-icon>
        </v-btn>
        <v-btn icon href="https://qiita.com/teruto725">
            <v-icon color = "qiita">mdi-alpha-q-circle</v-icon>
        </v-btn>
        <v-btn icon href="https://terublog.hatenablog.com/">
            <v-icon color = "black">mdi-fountain-pen-tip</v-icon>
        </v-btn>
        <template v-slot:extension>
        <v-tabs 
            align-with-title
            grow
            centered
            dark
            color = "white"
            >
        <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab to="/" >TOP</v-tab>
          <v-tab to = "products">PRODUCTS</v-tab>
          <v-tab to = "skills">Skills</v-tab>
          <v-tab to = "experiences">experiences</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
</v-card>

</template>

<script>
    export default {
        name: 'Header',
        
        data(){
            return {
                drawer: null,
                bar_icons:[
                    {
                    icon: 'mdi-vuetify',
                    link:'/consulting-and-support'
                    },
                    {
                    icon: 'mdi-discord',
                    link:'/discord-community'},
                    {
                    icon: 'mdi-bug',
                    link:'/report-a-bug'
                    },
                    {
                    icon: 'mdi-github-face',
                    link:'/guthub-issue-board'
                    },
                ]
            }
        }
    }
</script>
