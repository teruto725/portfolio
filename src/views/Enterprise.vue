<template>
  <div>
    <v-row justify=center>
      <v-col cols="10">
          <v-row >
              <div class="title-text">
                  I'm using these programming languages.
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
      </v-col>
    </v-row>
  </div>
</template>
<script>

import SkillCard from '@/components/SkillCard'
  export default {
    components: { // キャメルケースでもいいらしい
      "skill-card":SkillCard,
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
</style>