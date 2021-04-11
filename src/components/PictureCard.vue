<template>
    <v-col md="auto">
        <v-hover v-slot:default="{ hover }"><!-- hover で浮き上がる -->
            <v-card 
                class = "picture-card" 
                height="400" 
                width="300"
                :elevation="hover ? 12 : 3" 
                color = "secondary"
                v-bind:href = "getHref" 
                >
                <v-img
                    height="300"
                    width="300"
                    v-bind:src="getSrc"
                    class="white--text align-end"
                    >
                <v-card-title class="font-weight-black thirdary--text"> {{getTitle}} </v-card-title>
                </v-img>
                <v-card-text v-html=getText> </v-card-text>
            </v-card>
        </v-hover>
    </v-col>
</template>

<script>
  export default {
    name: 'PicutureCard',
    props:{
        src:{
            type: Object
        },
        text:{
            type: String
        },
        href:{
            type: String
        },
        title:{
            type: String
        }
    },
    data(){
        return {
            getSrc: this.src,
            getText: this.text,
            getHref: this.href,
            getTitle: this.title
        }
    }
  }
</script>