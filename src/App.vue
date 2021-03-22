<template>
<v-app :style="{background: $vuetify.theme.themes[theme].background}">



  <head-bar/>

  <v-main>
    <v-container fluid> 


      <top-picture/> <!-- compornentの挿入 -->

      <vue-pic/>
      <v-row align-lg="">
        <router-link to="/">ホーム</router-link>
        <router-link to="/home">ページ１へ</router-link>
        <router-link to="/about">ページ２へ</router-link>
      </v-row>

      <router-view/>

    </v-container> 
  </v-main>

  <v-footer color = "primary" clipped-left >
    hello
  </v-footer>
</v-app>
</template>



<script>
import HelloWorld from '@/components/HelloWorld'
import TopPicture from '@/components/TopPicture'
import HeadBar from '@/components/HeadBar'
export default {// 外部からも参照できるようにする
  name: "App",
  components: { // キャメルケースでもいいらしい
    "vue-pic":HelloWorld,
    "top-picture":TopPicture,
    "head-bar":HeadBar
  },
  data(){// return で初期設定を指定したものを返す
    return{
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  }
};


</script>


<style>
.bar{
  padding:  0;
}
.card{
  padding: 13px;
}
</style>
