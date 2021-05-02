<template>
  <div>
    <v-row justify=center>
      <v-col cols="10">
          <v-row >
              <div class="title-text">
                  I use these programming languages.
              </div>
          </v-row>
      </v-col>
    </v-row>


    <v-row justify=center>
      <skill-card v-for="(skill) in skills"
        :key="skill.title"
        ref="skillCards"
        :position="position"
        :title ="skill.title"
        :src ="require(`@/assets/icons/${skill.src}`)"
        :stars ="skill.stars"
        :text ="skill.text"
        >
      </skill-card>
    </v-row>


    <v-row justify=center>
      <v-col cols="10">
        <v-row>
            <div class="title-text">
                My strength is Practical ML skill.
            </div>
        </v-row>
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




  </div>
</template>




<script>
import SkillCard from '@/components/SkillCard'
import DialogButton from '@/components/DialogButton'
  export default {
    components: { // キャメルケースでもいいらしい
      "skill-card":SkillCard,
      "dialog-button":DialogButton,
    },
    data () {
      return {
        position: 0,
        skills: [
          {
            title: 'Python',
            src: 'python.svg',
            stars: 5,
            text: '競技プログラミングや研究、インターン等で日常的に使う。基本、応用文法はもちろん、一般的なライブラリは大体使ったことある。'
          },
          {
            title: 'Java',
            src: 'java.svg',
            stars: 4,
            text: '高専時代はメインで使用していた。基礎は完璧で、Swing等のライブラリも使えるので、学習すれば知らないライブラリでも対応できる。'
          },
          {
            title: 'JavaScript',
            src: 'javascript.svg',
            stars: 3,
            text: 'GASやWeb等で使用頻度が高い言語、調べながらなら全然かける。'
          },
          {
            title: 'C#',
            src: 'c-sharp.svg',
            stars: 3,
            text: 'これもちょくちょく書く言語、Javaと類似しているので基本的にサクサク書ける。'
          },
          {
            title: 'Ruby',
            src: 'ruby.svg',
            stars: 2,
            text: 'Railsを使う際に使用する。体系的に一回勉強すれば一週間程度で使えるようになる。'
          },
        ],
        mlbuttons : [
          {
            title : "Data\n Analyzing",
            text : "インターンで1年近くMLOps業務を行っています。また研究も高専5年生から3年間以上取り組んでいます。これらの経験からビックデータを与えられたときに、そのデータを整形し、可視化し、読み手に有益な価値提供を高いレベルで行うことが出来ます。"
          },
          {
            title : "Project\nfrom Zero",
            text : "プログラミングコンテストではブルーオーシャンで勝負することになるため、データセットすらない状態からプロジェクトがスタートします。そんなコンテストをくぐり抜けてきた経験から、ゼロからMLプロジェクトを遂行する力があります。"
          },
          {
            title : "Modeling",
            text : "機械学習コンペに複数回参加経験があります。コンテストやインターンを通して画像認識、自然言語処理を中心にモデル作成経験が豊富にあります。これらの経験から適切に素早くモデルを作成する事ができます。"
          }
        ]
      }
    },
    mounted() {//dataのつぎ
      window.addEventListener("scroll", this.scrollEvent)
      this.scrollEvent()
    },
    beforeDestroy(){
      window.removeEventListener("scroll", this.scrollEvent)
    },
    methods: {
      scrollEvent(){
        this.position = document.documentElement.scrollTop || document.body.scrollTop
      }
    }
  }
</script>
<style lang="scss" scoped>
.skill-card {
  overflow : hidden;//スライド部分を削除できる
  background-color: transparent;
}
.btn-text {
  font-size : x-large;
  white-space:pre-wrap; 
  word-wrap:break-word;

  text-align:center;
  padding:20px 0;
}
</style>