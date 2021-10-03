<!-- @format -->

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="10">
        <bar-title title="This is my Experiences."></bar-title>
        <!-- タイムラインコンポーネント -->
        <v-timeline dense>
          <v-timeline-item v-for="year in years" :key="year">
            <span slot="opposite">{{ year.year }}</span>
            <v-card class="elevation-2">
              <v-card-title
                class="text-h5 card-title white--text font-weight-black"
              >
                {{ year.title }}
              </v-card-title>
              <v-banner>{{ year.overview }}</v-banner>
              <v-card-text>
                <v-list-item
                  v-for="content in year.contents"
                  :key="content"
                  :href="content.url"
                >
                  <v-list-item-icon>
                    <v-icon v-text="content.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      class="item-text"
                      v-text="content.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <v-chip-group>
                    <v-chip
                      v-for="tag in content.tags"
                      :key="tag"
                      outlined
                      small
                      left
                    >
                      {{ tag }}
                    </v-chip>
                  </v-chip-group>
                  <v-btn icon v-if="content.url" :href="content.url">
                    <v-icon>
                      mdi-link
                    </v-icon>
                  </v-btn>
                </v-list-item>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import BarTitle from '@/components/BarTitle';
  //import DialogButton from '@/components/DialogButton'
  export default {
    components: {
      // キャメルケースでもいいらしい
      'bar-title': BarTitle,
      //"dialog-button":DialogButton,
    },
    data: () => ({
      // 経歴の項目データ
      years: [
        {
          year: '2014~2019',
          title: '奈良高専 情報工学科',
          overview: '部活と課題とテスト勉強、バイトの日々でした。',
          contents: [
            {
              url: '',
              icon: 'mdi-basketball',
              text: '剣道部 副キャプテン',
              tags: [],
            },
            {
              url: '',
              icon: 'mdi-school',
              text: '卒業研究',
              tags: ['研究'],
            },
          ],
        },
        {
          year: '2019~2021',
          title: '奈良高専 専攻科 情報システムコース',
          overview: 'プログラミング・コンテストにのめり込んだ２年間でした。',
          contents: [
            {
              url: 'https://terublog.hatenablog.com/entry/2020/11/10/215131',
              icon: 'mdi-crown',
              text: '高専プロコン2020',
              tags: ['プロコン'],
            },
            {
              url: '',
              icon: 'mdi-crown',
              text: '朝日新聞自然言語処理コンペ',
              tags: ['MLコンペ'],
            },
            {
              url: '',
              icon: 'mdi-crown',
              text: 'Peakers Twitterコンペ',
              tags: ['MLコンペ'],
            },
            {
              url: 'https://terublog.hatenablog.com/entry/2021/02/14/174806',
              icon: 'mdi-crown',
              text: '高専DCON2021',
              tags: ['プロコン'],
            },
            {
              url: '',
              icon: 'mdi-briefcase',
              text: 'ダイナミックプライシングテクノロジー',
              tags: ['長期インターン'],
            },
            {
              url: 'https://terublog.hatenablog.com/entry/2021/02/16/235502',
              icon: 'mdi-crown',
              text: 'BranCo!2021',
              tags: ['ビジコン'],
            },
            {
              url: 'https://terublog.hatenablog.com/entry/2020/10/08/181656',
              icon: 'mdi-earth',
              text: 'Nanyang Polytechnic',
              tags: ['短期留学'],
            },
            {
              url: '',
              icon: 'mdi-crown',
              text: 'RPAビジネスプランコンテスト',
              tags: ['ビジコン'],
            },
            {
              url: '',
              icon: 'mdi-school',
              text: '卒業研究',
              tags: ['研究'],
            },
          ],
        },
        {
          year: '2021~2023',
          title: '奈良先端科学技術大学院大学 情報科学領域',
          overview: '研究と就活を頑張る！',
          contents: [
            {
              url: '',
              icon: 'mdi-school',
              text: 'ソフトウェアシンポジウム2021',
              tags: ['研究'],
            },
            {
              url: '',
              icon: 'mdi-briefcase',
              text: '株式会社カラビナテクノロジー',
              tags: ['長期インターン'],
            },
            {
              url: '',
              icon: 'mdi-crown',
              text: 'Geiot',
              tags: ['ハッカソン', 'ビジコン'],
            },
            {
              url: '',
              icon: 'mdi-briefcase',
              text: '株式会社Datafluct',
              tags: ['長期インターン', '機械学習エンジニア'],
            },
            {
              url: '',
              icon: 'mdi-briefcase',
              text: '日本ユニシス株式会社',
              tags: ['ハッカソン型サマーインターン'],
            },
            {
              url: 'https://terublog.hatenablog.com/entry/2021/09/18/163034',
              icon: 'mdi-briefcase',
              text: 'freee株式会社',
              tags: ['就業形サマーインターン'],
            },
            {
              url: '',
              icon: 'mdi-briefcase',
              text: '株式会社d-tosh',
              tags: ['長期インターン', 'フロントエンドエンジニア'],
            },
            {
              url: '',
              icon: 'mdi-briefcase',
              text: 'ヤフー株式会社',
              tags: ['就業形サマーインターン', 'バックエンドエンジニア'],
            },
            {
              url: '',
              icon: 'mdi-crown',
              text: '立命館大学　学生ベンチャーコンテスト',
              tags: ['ビジコン'],
            },
          ],
        },
      ],
    }),
  };
</script>

<style>
  .card-title {
    background-color: #e8b499;
  }
  .item-text {
    color: #696969;
  }
</style>
