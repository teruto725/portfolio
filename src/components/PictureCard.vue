<template>
    <v-col md=4>
        <v-card class = "picture-card" height="400" width="300">
        <v-img
            height="300"
            width="300"
            :src=getSrc
            >
        </v-img>
        <v-card-text v-html=getText> </v-card-text>
        {{getSrc}}
        </v-card>
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
        }
    },
    data(){
        return {
            getSrc : this.src,
            getText : this.text
        }
    }

  }
</script>