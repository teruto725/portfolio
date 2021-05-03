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

    <v-row justify=center>
      <v-col cols="10">
        <v-row>
            <div class="title-text">
                I have knowledge of these ML fields.
            </div>
        </v-row>
        <v-row justify=center>
          <skill-card v-for="(field) in mlfields"
            :key="field.title"
            ref="skillCards"
            :position="position"
            :title ="field.title"
            :src ="require(`@/assets/icons/${field.src}`)"
            :stars ="field.stars"
            :text ="field.text"
            >
          </skill-card>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify=center>
      <v-col cols="10">
        <v-row>
            <div class="title-text">
                I have a knowledge of web application too.
            </div>
        </v-row>
        <v-row justify=center>
          
          <skill-card v-for="(skill) in skills_web"
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
      </v-col>
    </v-row>

    <v-row justify=center>
      <v-col cols="10">
        <v-row>
            <div class="title-text">
                Other Skills
            </div>
        </v-row>
      <v-row justify=center>
          
      <skill-card v-for="(skill) in otherskills"
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
        skills_web: [
          {
            title: 'Flask',
            src: 'flask.svg',
            stars: 3,
            text: '割と頻繁に使う。基礎は復習しながらかける。'
          },
          {
            title: 'Django',
            src: 'django.svg',
            stars: 3,
            text: '何回かコンテストで書いた経験がある。基礎は復習しながらかける。'
          },
          {
            title: 'Vue',
            src: 'vue.svg',
            stars: 3,
            text: '最近勉強中、SPA、コンポーネントあたりは大丈夫。'
          },
          {
            title: 'Ruby on Rails',
            src: 'rails.svg',
            stars: 2,
            text: 'インターンで一時期使用していた言語、だいぶ前なのである程度の復習が必要。'
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
        ],
        mlfields : [
          {
            title: '自然言語処理',
            src: 'nlp.svg',
            stars: 5,
            text: '研究で使用したためかなり知見がある。前処理からBERTくらいまで使える。'
          },
          {
            title: '画像処理',
            src: 'cv.svg',
            stars: 4,
            text: 'コンテストでガッツリ書いた。OpenCVの基本ができて、CNNを用いた学習ができる。'
          },
          {
            title: '時系列処理',
            src: 'stock.svg',
            stars: 4,
            text: 'インターンのタスクが時系列分析だったので、ノウハウがある。'
          },
        ],
        otherskills :[
          {
            title: '競技プログラミング',
            src: 'atcoder.jpeg',
            stars: 3,
            text: 'Rating: 840、 緑　（上位30%くらい)、アルゴリズム問題は大体解けるくらい。'
          },
          {
            title: 'TOEIC',
            src: 'toeic.jpeg',
            stars: 3,
            text: 'L&Rスコア780点、海外短期留学で1ヶ月間シンガポールのNYPに行った。'
          },
                    {
            title: 'オブジェクト指向',
            src: 'ooj.png',
            stars: 4,
            text: '研究で触れてきた。基本的なクラス設計が得意で保守性の高いコードを設計、コーディングできる。'
          },
        ],
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