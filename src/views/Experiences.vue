<template>
<v-container fluid> 
    <v-row justify=center>
      <v-col cols="10">
        <bar-title title = "My Educational Backgrounds"></bar-title>
        <v-row justify=center>
          <dialog-button
            v-for="(mlbutton) in mlbuttons"
            :key="mlbutton.title"
            :title="mlbutton.title"
            :text="mlbutton.text"
          >
          </dialog-button>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify=center>
      <v-col cols="10">
        <bar-title title = "Contests"></bar-title>
        <v-row justify=center>
          <dialog-button
            v-for="(mlbutton) in mlbuttons"
            :key="mlbutton.title"
            :title="mlbutton.title"
            :text="mlbutton.text"
          >
          </dialog-button>
        </v-row>
      </v-col>
    </v-row>
</v-container>
</template>


<script>
import BarTitle from '@/components/BarTitle'
import DialogButton from '@/components/DialogButton'
  export default {
    components: { // キャメルケースでもいいらしい
      "bar-title":BarTitle,
      "dialog-button":DialogButton,
    },
    data(){
      return {
      }
    }
  }
</script>