<template>
<v-app :style="{background: $vuetify.theme.themes[theme].background}">
  <head-bar/><!-- headbar --> 
  <v-main>
    <v-container fluid> 
      <bar-title title = "Welcome to my portfolio."></bar-title>
        <top-picture/>

      <bar-title title = "My name is Akihito Ihara."></bar-title>
      <v-row class = "content-area" justify="center">
        <picture-card 
          href =""
          :src ="require('@/assets/my_picture.jpg')"
          title = ""
          text ="いい感じの写真これしか無いから<br>プロフィール写真いつもこれ..."
          >
        </picture-card>
        <v-col md=auto>
          <v-row>
            <v-col>
            <v-card class="mx-auto" height="150" width = "310">
              <v-card-title>Basic Profile</v-card-title>
              <v-list>
                  <v-list-item>
                    <v-list-item-icon> <v-icon> mdi-human</v-icon> </v-list-item-icon>
                    <v-list-item-content><v-list-item-title> 22 years old</v-list-item-title></v-list-item-content>
                  </v-list-item>
                  <v-list-item href = "http://www.naist.jp/">
                    <v-list-item-icon> <v-icon> mdi-school</v-icon> </v-list-item-icon>
                    <v-list-item-content><v-list-item-title> 奈良先端大 情報科学領域 １年</v-list-item-title></v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon> <v-icon> mdi-map-marker-radius-outline</v-icon> </v-list-item-icon>
                    <v-list-item-content><v-list-item-title> Nara </v-list-item-title></v-list-item-content>
                  </v-list-item>
                  <v-list-item href = "https://twitter.com/teruto_725">
                    <v-list-item-icon> <v-icon color = "twitter"> mdi-twitter</v-icon> </v-list-item-icon>
                    <v-list-item-content> <v-list-item-title> @teruto_725 </v-list-item-title> </v-list-item-content>
                  </v-list-item>
              </v-list>
            </v-card>
            </v-col>
          </v-row>
        </v-col> 
      </v-row>


      <bar-title title = "I love them so much."></bar-title>
      <v-row class = "content-area" justify="center">
        <picture-card 
          href ="https://www.youtube.com/channel/UCtHqD5chQk_SrMa9hnyWS8g"
          :src ="require('@/assets/eisyu.jpeg')"
          title = "映秀"
          text ="この子に憧れてギターを始めた<br>東京散歩って曲が一番好き<br>最近1stアルバム出た"
          >
        </picture-card>
        <picture-card 
          href ="https://www.youtube.com/channel/UCjlmCrq4TP1I4xguOtJ-31w"
          :src ="require('@/assets/debi.jpg')"
          title = "でびでびでびる"
          text ="日々の癒やし、行動の活力<br>ときおり見せる優しい一面が好き"
          >
        </picture-card>
        <picture-card 
          href ="https://www.youtube.com/channel/UCfBkUgaJ6eqYA9_TX2cmq9A"
          :src ="require('@/assets/rime.jpeg')"
          title = "理芽"
          text ="V-singer<br>儚い歌声が素敵<br> 楽曲がダークな感じでさらに素敵"
          >
        </picture-card>
      </v-row>


      <bar-title title = "I'm usually doing them in my freetime."></bar-title>
      <v-row class = "content-area" justify="center">
        <picture-card 
          href =""
          :src ="require('@/assets/steam.jpeg')"
          title = "PCゲーム"
          text ="毎晩友達とゲームしてる<br>戦略とか考えるゲームが好き<br>最近のイチオシはSatisfactory"
          >
        </picture-card>
        <picture-card 
          href ="https://www.youtube.com/channel/UCtHqD5chQk_SrMa9hnyWS8g"
          :src ="require('@/assets/guitor.jpg')"
          title = "ギター"
          text ="初めてもうすぐ２年<br>コードしか弾かないので全然上達しない<br>誰か教えて..."
          >
        </picture-card>
        <picture-card 
          href =""
          :src ="require('@/assets/boardgame.jpg')"
          title = "ボードゲーム"
          text ="研究室の教授の影響でハマりだした<br>研究室に残って20時くらいまで遊んでた<br> お気に入りはFate Grail War"
          >
        </picture-card>
      </v-row>

      <bar-title title = "I love making products too."></bar-title>
      <v-row class = "content-area" justify="center">
      </v-row>

      <bar-title title = "I can use those technics."></bar-title>
      <v-row class = "content-area" justify="center">
        <v-col md=auto>
          <v-btn elevation="2" x-large  color = "thirdary"> LOOK MORE</v-btn>
        </v-col>
      </v-row>
      <v-row height="100">
      </v-row>
    </v-container> 
  </v-main>

  <v-footer color = "primary" clipped-left >
  </v-footer>
</v-app>
</template>



<script>
import TopPicture from '@/components/TopPicture'
import HeadBar from '@/components/HeadBar'
import BarTitle from '@/components/BarTitle'
import PictureCard from '@/components/PictureCard'
export default {// 外部からも参照できるようにする
  name: "App",
  components: { // キャメルケースでもいいらしい
    "top-picture":TopPicture,
    "head-bar":HeadBar,
    "bar-title":BarTitle,
    "picture-card":PictureCard,
  },
  data(){// return で初期設定を指定したものを返す
    return{
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};


</script>


<style>

.base-row{
  padding:20px;
}
.content-area{
  background:"gray";
}

.picture-card{
  font-size: large; 
  text-align:center;
  font-weight: bold; 
}
.text-card{
  text-align:center;
  font-size: large; 
  margin: 10px auto;
  background: orange;
  height:100;
  width:150;
}
</style>
