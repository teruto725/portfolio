<template>
<v-app :style="{background: $vuetify.theme.themes[theme].background}">
  <head-bar/><!-- headbar --> 
  <v-main>
    <v-container fluid> 
      <bar-title title = "Welcome to my portfolio."></bar-title>
        <top-picture/>

      <bar-title title = "My name is Akihito Ihara."></bar-title>
      <v-row class = "content-area" justify="center">
        <v-col md=auto>
          <v-card class = "picture-card" height="400" width="300">
            <v-img height="300" width="300" :src="require('@/assets/my_picture.jpg')">
            </v-img>
            <v-card-text>
              いい感じの写真これしか無いから<br>プロフィール写真いつもこれ...
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md=auto>
          <v-row>
            <v-card class="mx-auto" height="150" width = "300">
              <v-card-title>Basic Profile</v-card-title>
              <v-list>
                  <v-list-item>
                    <v-list-item-icon> <v-icon> mdi-human</v-icon> </v-list-item-icon>
                    <v-list-item-content><v-list-item-title> 22 years old</v-list-item-title></v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon> <v-icon> mdi-school</v-icon> </v-list-item-icon>
                    <v-list-item-content><v-list-item-title> NAIST in 1st grade</v-list-item-title></v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon> <v-icon> mdi-map-marker-radius-outline</v-icon> </v-list-item-icon>
                    <v-list-item-content><v-list-item-title> Nara </v-list-item-title></v-list-item-content>
                  </v-list-item>
              </v-list>
            </v-card>
          </v-row>
          <v-row>
            
          </v-row>
        </v-col> 
      </v-row>


      <bar-title title = "I love them so much."></bar-title>
      <v-row class = "content-area" justify="center">
        <v-col md=auto>
          <v-card class = "picture-card" height="400" width="300" href="https://www.youtube.com/channel/UCtHqD5chQk_SrMa9hnyWS8g">
            <v-img class="white--text align-end" height="300" width="300" :src="require('@/assets/eisyu.jpeg')">
            <v-card-title> 映秀</v-card-title>
            </v-img>
            <v-card-text>
              この子に憧れてギターを始めた<br>東京散歩って曲が一番好き<br>最近1stアルバム出た
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md=auto>
          <v-card class = "picture-card" height="400" width="300" href = "https://www.youtube.com/channel/UCjlmCrq4TP1I4xguOtJ-31w">
            <v-img class="white--text align-end" height="300" width="300" :src="require('@/assets/debi.jpg')">
            <v-card-title> でびでびでびる</v-card-title>
            </v-img>
            <v-card-text>
              日々の癒やし、行動の活力<br>ときおり見せる優しい一面が好き
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md=auto>
          <v-card class = "picture-card" height="400" width="300" href = "https://www.youtube.com/channel/UCfBkUgaJ6eqYA9_TX2cmq9A">
            <v-img class="white--text align-end" height="300" width="300" :src="require('@/assets/rime.jpeg')">
            <v-card-title> 理芽 </v-card-title>
            </v-img>
            <v-card-text>
              v-singer 理芽ちゃん<br>儚い歌声が素敵<br> 楽曲がダークな感じでもっと素敵
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>


      <bar-title title = "I'm usually doing them in my freetime."></bar-title>
      <v-row class = "content-area" justify="center">
        <v-col md=auto>
          <v-card class = "picture-card" height="400" width="300">
            <v-img class="white--text align-end" height="300" width="300" :src="require('@/assets/steam.jpeg')">
            <v-card-title> PCゲーム</v-card-title>
            </v-img>
            <v-card-text>
              毎晩友達とゲームしてる<br>戦略とか考えるゲームが好き<br>最近のイチオシはSatisfactory
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md=auto>
          <v-card class = "picture-card" height="400" width="300" herf = "https://www.youtube.com/channel/UCtHqD5chQk_SrMa9hnyWS8g">
            <v-img class="white--text align-end" height="300" width="300" :src="require('@/assets/guitor.jpg')">
            <v-card-title> ギター</v-card-title>
            </v-img>
            <v-card-text>
              初めてもうすぐ２年<br>コードしか弾かないので全然上達しない<br>誰か教えて...
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md=auto>
          <v-card class = "picture-card" height="400" width="300">
            <v-img class="white--text align-end" height="300" width="300" :src="require('@/assets/boardgame.jpg')">
            <v-card-title> ボードゲーム </v-card-title>
            </v-img>
            <v-card-text>
              研究室の教授の影響でハマりだした<br>研究室に残って20時くらいまで遊んでた<br> お気に入りはFate Grail War
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <bar-title title = "I love making products too."></bar-title>
      <v-row class = "content-area">
        
      </v-row>
      <bar-title title = "I use those technics."></bar-title>
      <v-row class = "content-area">
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
export default {// 外部からも参照できるようにする
  name: "App",
  components: { // キャメルケースでもいいらしい
    "top-picture":TopPicture,
    "head-bar":HeadBar,
    "bar-title":BarTitle,
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
