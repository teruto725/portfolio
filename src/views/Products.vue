<template>
  <div class="about">
    <v-row>
    <v-col>
      <v-spacer></v-spacer>
    </v-col>
    </v-row>
    <v-row class = "content-area" justify="center">
      <picture-card 
        href ="https://github.com/teruto725/ai_review_char"
        :src ="require('@/assets/kakikata.png')"
        title = "かきかた先生"
        text ="小学生の漢字採点アプリ<br>ロジックとDLを組み合わせて採点しているのでアドバイスまでできるのがおし"
        >
      </picture-card>
      <picture-card 
        href ="https://github.com/teruto725/kingyo_learn"
        :src ="require('@/assets/kingyo.png')"
        title = "金魚認識システム"
        text ="金魚の個体識別アプリ<br>CNNとTrackingを組み合わせて作った<br>残念なことに実際の環境では試せてない..."
        >
      </picture-card>
      <picture-card 
        href ="https://qiita.com/teruto725/items/4fb91aee55fbb6a37189"
        :src ="require('@/assets/tango_bot.png')"
        title = "TangoBot"
        text ="MS Teams上で動く単語帳bot<br>Azureで画像認識とかもしてくれる<br>ふざけた機能もいっぱいつけた"
      >
      </picture-card>
            <picture-card 
        href ="https://terublog.hatenablog.com/entry/2019/04/16/160412"
        :src ="require('@/assets/wordbook.png')"
        title = "ブラウザ英単語帳"
        text ="高専5年生で作った処女作<br>PHPベタ書きで頑張った！<br>ユーザ90人突破してるのが自慢"
        >
      </picture-card>
      <picture-card 
        href ="https://terublog.hatenablog.com/entry/2019/02/08/154553"
        :src ="require('@/assets/lol.png')"
        title = "SSTimer"
        text ="技の時間を管理するタイマーアプリ<br>一瞬でめんどくさくなって使わなくなったのは内緒笑"
        >
      </picture-card>
      <picture-card 
        href ="https://github.com/teruto725/hopers"
        :src ="require('@/assets/hoper.png')"
        title = "Hopers"
        text ="友達に頼まれて無料で作ったLP<br>結局チーム解散しちゃったらしくて悲しい..."
        > 
      </picture-card> 
      <picture-card 
        href ="https://github.com/teruto725/python-online-game"
        :src ="require('@/assets/geschenkt-top.jpeg')"
        title = "BoardCoder"
        text ="オンラインボードゲームシミュレータ<br>AIをプログラミングして対決する!<br>GUI完成したらみんなで遊びたい！"
        >
      </picture-card>
      <picture-card 
        href ="https://terublog.hatenablog.com/entry/2019/02/08/154553"
        :src ="require('@/assets/gamelog.png')"
        title = "GameLog"
        text ="ゲームのレビューサイト<br>起業目指してる友達に相談されて作ったのに空中分解しちゃった..."
        >
      </picture-card>
      <picture-card 
        href ="https://qiita.com/teruto725/items/2ebbac15637a11d9271d"
        :src ="require('@/assets/azure_toeic.png')"
        title = "Azure-for-TOEIC"
        text ="TOEICの写真を撮ったら中の英単語抜き出してくれたりその他便利な機能いっぱい!<br>Azureの精度がもうちょっと良ければ..."
        >
      </picture-card>
    </v-row>
    <v-row>
      <v-col>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import PictureCard from '@/components/PictureCard'
export default {// 外部からも参照できるようにする
  name: "App",
  components: { // キャメルケースでもいいらしい
    "picture-card":PictureCard,
  },
  data(){// return で初期設定を指定したものを返す
    return{
    }
  },
};


</script>

<style lang="scss" scoped>
.content-area {
  margin: 10px;
  padding: 10px;
}
</style>