<template>
  <div class="container">
    <h4>かんたんAFオプティマイザー</h4><br>
    <div>
      <b-form-textarea 
      v-model="message" 
      rows="3"
      placeholder="exportデータを入力してください"
      ></b-form-textarea>
    </div>

    <br>

    <b-button variant="outline-primary" v-on:click="clear"><b-icon icon="trash" font-scale="1"></b-icon> Clear </b-button>

    <br><br>

    <div>
     <b-tabs v-model="tabIndex" content-class="mt-3">
      <b-tab title="説明">
        <p>
          アーティファクトの最適化ツールです。
        </p>
        <p> 
          exportデータはゲーム内オプションの Export(書き出す) ボタンでクリップボードに保存されます。
        </p>
        <p>
          それを上のテキストエリアにペーストしてください。
        </p>
        <p>
          上から順に優先度の高いAFが表示されます。%表示を参考にしつつ、レリックを割り振ってください。
          正確に振る必要はないので、<b>25%振りで上から順に振るだけでも全然OKです。</b>
        </p>
        <p>
          Book of Shadows (影の書)、Durendal Sword (テスト文字列１) 、Corrupted Rune Heart (破損したルーンハート) は計算に含まれていません。各位自由に振ってください。
        </p>
        <p>
           何かありましたら、<a href="https://forms.gle/rPgeWz2KmLrBpqv7A" target="_blank">Googleフォーム</a>までお願いします。
        </p>
      </b-tab>
      
      <b-tab title="入力">

      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="info"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      >
        {{ alert_message }}
      </b-alert>

        <b-form-group label="ビルド">
        <b-form-radio-group
        id="btn-radios-1"
        v-model="build_selected"
        :options="build_options"
        name="radio-inline"
        ></b-form-radio-group>
        </b-form-group>

        <b-form-group label="ゴールド">
        <b-form-radio-group
        id="btn-radios-2"
        v-model="gold_selected"
        :options="gold_options"
        name="radio-inline-2"
        ></b-form-radio-group>
        </b-form-group>

        <b-form-group label="ヒーロー属性1">
        <b-form-radio-group
        id="btn-radios-3"
        v-model="hero1_selected"
        :options="hero1_options"
        name="radio-inline-3"
        ></b-form-radio-group>
        </b-form-group>

        <b-form-group label="ヒーロー属性2">
        <b-form-radio-group
        id="btn-radios-4"
        v-model="hero2_selected"
        :options="hero2_options"
        name="radio-inline-4"
        ></b-form-radio-group>
        </b-form-group>

        <b-form-group label="詳細設定">
        <b-form-checkbox v-model="no_gold" name="check-button" switch>
         ゴールド系AFを無視する
        </b-form-checkbox>
        </b-form-group>

        <b-button variant="outline-primary" v-on:click="save(); showAlert()"> 保存 </b-button>
        <br><br>
        {{ save_message }}

      </b-tab>
      <b-tab title="リザルト">
        <div v-if="open">
        <div v-for="(item) in items" :key="item.id" >
         <img class="img" :src="`${artimages[item.acr]}`" width='40'>
          {{ item.name }} {{ item.eff }}%
        </div>
        </div>
      </b-tab>
     </b-tabs>
    </div>
    
    

  </div>
</template>

<script>
export default {
   data () {
    return {
      message: '',
      artimages: [],
      af_count: 60,
      tabIndex: 0,
      dismissSecs: 3,
      dismissCountDown: 0,
      save_message: "",
      alert_message: "",
      open: false,
      do_select_open: false,
      no_gold: false,
      build_selected: '',
      build_options: [
          { text: 'HS', value: 'HS' },
          { text: 'SC', value: 'SC' },
          { text: 'SHIP', value: 'SHIP' },
          { text: 'PET', value: 'PET' }
      ],
      gold_selected: '',
      gold_options: [
          { text: 'フェアリー', value: 0 },
          { text: 'pHoM', value: 1 },
          { text: 'チェスター', value: 2 },
      ],
      hero1_selected: '',
      hero1_options: [
          { text: '地面', value: 0 },
          { text: '飛行', value: 1 },
      ],
      hero2_selected: '',
      hero2_options: [
          { text: '近接', value: 0 },
          { text: '遠隔', value: 1 },
          { text: '魔術', value: 2 },
      ],
      items: [
          { name:"test" , value:0},
      ],
      optimiser_data: [
  {
    "EffectPerLevel": 0.05,
    "GrowthExpo": 1.087,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 2.5,
    "Name": "Book of Shadows",
    "NameJp": "影の書",
    "Acronym": "BoS",
    "PET": 0,
    "SC": 0,
    "HS": 0,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.35,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.8,
    "Name": "Charged Card",
    "NameJp": "充電カード",
    "Acronym": "CCa",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.01,
    "GrowthExpo": 0.97,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.8,
    "Name": "Stone of the Valrunes",
    "NameJp": "ヴァルリユーンズの石",
    "Acronym": "SotV",
    "PET": 3.2,
    "SC": 3.2,
    "HS": 3.2,
    "SHIP": 3.2
  },
  {
    "EffectPerLevel": 0.25,
    "GrowthExpo": 1.35,
    "DamageBonus": 0.4,
    "CostCoef": 1,
    "CostExpo": 1.8,
    "Name": "Chest of Contentment",
    "NameJp": "充足の宝箱",
    "Acronym": "CoC",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.75,
    "GrowthExpo": 1.35,
    "DamageBonus": 0.4,
    "CostCoef": 0.7,
    "CostExpo": 1.8,
    "Name": "Heroic Shield",
    "NameJp": "英雄の盾",
    "Acronym": "HSh",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.75,
    "GrowthExpo": 1.45,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Book of Prophecy",
    "NameJp": "予言の書",
    "Acronym": "BoP",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.04,
    "GrowthExpo": 1.149,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.8,
    "Name": "Khrysos Bowl",
    "NameJp": "Khrysosボウル",
    "Acronym": "KBo",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.6,
    "GrowthExpo": 1.4,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.8,
    "Name": "Zakynthos Coin",
    "NameJp": "ザキントスコイン",
    "Acronym": "ZCo",
    "PET": 0,
    "SC": 0,
    "HS": 0,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.3,
    "GrowthExpo": 1.4,
    "DamageBonus": 0.4,
    "CostCoef": 1,
    "CostExpo": 1.8,
    "Name": "Great Fay Medallion",
    "NameJp": "フェイの雄大なメダリオン",
    "Acronym": "GFM",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.3,
    "GrowthExpo": 1.4,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 1.8,
    "Name": "Neko Sculpture",
    "NameJp": "猫の彫刻",
    "Acronym": "NSc",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.2,
    "GrowthExpo": 1.4,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.8,
    "Name": "Coins of Ebizu",
    "NameJp": "恵比寿のコイン",
    "Acronym": "CoE",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.04,
    "GrowthExpo": 1.4,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.8,
    "Name": "The Bronzed Compass",
    "NameJp": "青銅コンパス",
    "Acronym": "TBC",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.5,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 2.2,
    "Name": "Evergrowing Stack",
    "NameJp": "蓄積スタック",
    "Acronym": "ESt",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.01,
    "GrowthExpo": 1.135,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 2.2,
    "Name": "Flute of the Soloist",
    "NameJp": "ソリストのフルート",
    "Acronym": "FotS",
    "PET": 4,
    "SC": 4,
    "HS": 4,
    "SHIP": 4
  },
  {
    "EffectPerLevel": 0.05,
    "GrowthExpo": 1.5,
    "DamageBonus": 1,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Heavenly Sword",
    "NameJp": "天国の剣",
    "Acronym": "HSw",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.28,
    "DamageBonus": 1,
    "CostCoef": 1,
    "CostExpo": 2,
    "Name": "Divine Retribution",
    "NameJp": "神罰の剣",
    "Acronym": "DRe",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.3,
    "GrowthExpo": 1.22,
    "DamageBonus": 0.3,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Drunken Hammer",
    "NameJp": "酔いどれハンマー",
    "Acronym": "DHa",
    "PET": 1,
    "SC": 0.6,
    "HS": 1,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.2,
    "GrowthExpo": 1.6,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2,
    "Name": "Samosek Sword",
    "NameJp": "サモショークのソード",
    "Acronym": "SSw",
    "PET": 0,
    "SC": 0.6,
    "HS": 0.8,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.22,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "The Retaliator",
    "NameJp": "Retaliator",
    "Acronym": "TRe",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.04,
    "GrowthExpo": 1.149,
    "DamageBonus": 1,
    "CostCoef": 1,
    "CostExpo": 2,
    "Name": "Stryfe's Peace",
    "NameJp": "Stryfeの平和",
    "Acronym": "SPe",
    "PET": 1.5,
    "SC": 1.2,
    "HS": 1.5,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.45,
    "GrowthExpo": 1.2,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 1.7,
    "Name": "Hero's Blade",
    "NameJp": "ヒーローブレード",
    "Acronym": "HBl",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.5,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.2,
    "GrowthExpo": 1.22,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.7,
    "Name": "The Sword of Storms",
    "NameJp": "嵐の剣",
    "Acronym": "TSoS",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.5,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.2,
    "GrowthExpo": 1.22,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.7,
    "Name": "Furies Bow",
    "NameJp": "憤怒の弓",
    "Acronym": "FBo",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.5,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.2,
    "GrowthExpo": 1.22,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.7,
    "Name": "Charm of the Ancient",
    "NameJp": "古代の魔除け",
    "Acronym": "CotA",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.5,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.2,
    "GrowthExpo": 1.22,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.7,
    "Name": "Tiny Titan Tree",
    "NameJp": "タイニータイタンツリー",
    "Acronym": "TTT",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.5,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.2,
    "GrowthExpo": 1.22,
    "DamageBonus": 0.3,
    "CostCoef": 0.7,
    "CostExpo": 1.7,
    "Name": "Helm of Hermes",
    "NameJp": "エルメスのヘルム",
    "Acronym": "HoH",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.5,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.4,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2,
    "Name": "Fruit of Eden",
    "NameJp": "エデンの果実",
    "Acronym": "FoE",
    "PET": 1,
    "SC": 0,
    "HS": 0,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.2,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 1.7,
    "Name": "Influential Elixir",
    "NameJp": "影響力のあるエリクサー",
    "Acronym": "IEl",
    "PET": 0,
    "SC": 0,
    "HS": 0,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.25,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 1.8,
    "Name": "O'Ryan's Charm",
    "NameJp": "オアーヤンのチャーム",
    "Acronym": "ORC",
    "PET": 1,
    "SC": 1,
    "HS": 0,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.005,
    "GrowthExpo": 1,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Heart of Storms",
    "NameJp": "嵐の心",
    "Acronym": "HoS",
    "PET": 6,
    "SC": 5.6,
    "HS": 6,
    "SHIP": 6
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.177,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Apollo Orb",
    "NameJp": "アポロオーブ",
    "Acronym": "AOr",
    "PET": 1.58,
    "SC": 1.58,
    "HS": 1.58,
    "SHIP": 1.58
  },
  {
    "EffectPerLevel": 0.005,
    "GrowthExpo": 0.8,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Strange Fruit",
    "NameJp": "スティッキーフルーツ",
    "Acronym": "SFr",
    "PET": 1.5,
    "SC": 1.6,
    "HS": 1.5,
    "SHIP": 2
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.1,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Hades Orb",
    "NameJp": "ハデスオーブ",
    "Acronym": "HOr",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.03,
    "GrowthExpo": 1.177,
    "DamageBonus": 0.3,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Earrings of Portara",
    "NameJp": "Portaraのイヤリング",
    "Acronym": "EoP",
    "PET": 2,
    "SC": 2,
    "HS": 2,
    "SHIP": 2
  },
  {
    "EffectPerLevel": 0.5,
    "GrowthExpo": 0.55,
    "DamageBonus": 0.3,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Avian Feather",
    "NameJp": "鳥の羽",
    "Acronym": "AFe",
    "PET": 1,
    "SC": 1,
    "HS": 2,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.00025,
    "GrowthExpo": 1.2,
    "DamageBonus": 0.3,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Corrupted Rune Heart",
    "NameJp": "破損したルーンハート",
    "Acronym": "CRH",
    "PET": 0,
    "SC": 0,
    "HS": 0,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.24,
    "GrowthExpo": 1.35,
    "DamageBonus": 1,
    "CostCoef": 1,
    "CostExpo": 2,
    "Name": "Durendal Sword",
    "NameJp": "テスト文字列１",
    "Acronym": "DSw",
    "PET": 0,
    "SC": 0,
    "HS": 0,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.12,
    "GrowthExpo": 1.3,
    "DamageBonus": 1,
    "CostCoef": 1,
    "CostExpo": 2,
    "Name": "Helheim Skull",
    "NameJp": "Hellheimスカル",
    "Acronym": "HSk",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.177,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2.2,
    "Name": "Oath's Burden",
    "NameJp": "誓いの負担",
    "Acronym": "OBu",
    "PET": 3,
    "SC": 1.2,
    "HS": 2,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.177,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2.2,
    "Name": "Crown of the Constellation",
    "NameJp": "星座の王冠",
    "Acronym": "CotC",
    "PET": 1,
    "SC": 1.2,
    "HS": 1,
    "SHIP": 3
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.177,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2.2,
    "Name": "Titania's Sceptre",
    "NameJp": "チタニアのセプター",
    "Acronym": "TSc",
    "PET": 0.48,
    "SC": 1.48,
    "HS": 1.48,
    "SHIP": 0.48
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.177,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2.2,
    "Name": "Fagin's Grip",
    "NameJp": "Faginのグリップ",
    "Acronym": "FGr",
    "PET": 0.7,
    "SC": 0.6,
    "HS": 0,
    "SHIP": 0.5
  },
  {
    "EffectPerLevel": 0.01,
    "GrowthExpo": 0.9,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2.2,
    "Name": "Ring of Calisto",
    "NameJp": "カリストの指輪",
    "Acronym": "RoC",
    "PET": 4.29,
    "SC": 4.39,
    "HS": 4.59,
    "SHIP": 4.79
  },
  {
    "EffectPerLevel": 0.08,
    "GrowthExpo": 1.36,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2,
    "Name": "Blade of Damocles",
    "NameJp": "ダモクレスの刃",
    "Acronym": "BoD",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.08,
    "GrowthExpo": 1.36,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2,
    "Name": "Helmet of Madness",
    "NameJp": "狂気の兜",
    "Acronym": "HoM",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.8,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.08,
    "GrowthExpo": 1.55,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2,
    "Name": "Titanium Plating",
    "NameJp": "タイタニアム プレーティング",
    "Acronym": "TPl",
    "PET": 0.79,
    "SC": 0.79,
    "HS": 0.79,
    "SHIP": 0.79
  },
  {
    "EffectPerLevel": 0.08,
    "GrowthExpo": 1.36,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2,
    "Name": "Moonlight Bracelet",
    "NameJp": "ムーンライトブレスレット",
    "Acronym": "MBr",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.8,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.08,
    "GrowthExpo": 1.36,
    "DamageBonus": 0.5,
    "CostCoef": 0.65,
    "CostExpo": 2,
    "Name": "Amethyst Staff",
    "NameJp": "アメジストの杖",
    "Acronym": "ASt",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.1,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Sword of the Royals",
    "NameJp": "ロイヤルズの剣",
    "Acronym": "SotR",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.1,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Spearit's Vigil",
    "NameJp": "Spearitのビジル",
    "Acronym": "SVi",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.1,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "The Cobalt Plate",
    "NameJp": "コバルトプレート",
    "Acronym": "TCP",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.1,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Sigils of Judgement",
    "NameJp": "審判のシギル",
    "Acronym": "SoJ",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1.1,
    "DamageBonus": 0.5,
    "CostCoef": 0.7,
    "CostExpo": 2.2,
    "Name": "Foliage of the Keeper",
    "NameJp": "キーパーの葉",
    "Acronym": "FotK",
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.02,
    "GrowthExpo": 1,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.8,
    "Name": "Invader's Gjallarhorn",
    "NameJp": "インベーダーのギャラルホルン",
    "Acronym": "IGj",
    "PET": 2.68,
    "SC": 3.28,
    "HS": 2.98,
    "SHIP": 1.98
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.28,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Titan's Mask",
    "NameJp": "タイタンの仮面",
    "Acronym": "TMas",
    "PET": 0,
    "SC": 0,
    "HS": 1,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.35,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Royal Toxin",
    "NameJp": "ロイヤル毒素",
    "Acronym": "RTo",
    "PET": 0.7,
    "SC": 0.6,
    "HS": 0,
    "SHIP": 0.5
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.35,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Laborer's Pendant",
    "NameJp": "労働者のペンダント",
    "Acronym": "LPe",
    "PET": 0.48,
    "SC": 0.48,
    "HS": 0.48,
    "SHIP": 0.48
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.25,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Bringer of Ragnarok",
    "NameJp": "ラグナロクをもたらすもの",
    "Acronym": "BoR",
    "PET": 1,
    "SC": 0.6,
    "HS": 1,
    "SHIP": 0
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.25,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Parchment of Foresight",
    "NameJp": "予見の羊皮紙",
    "Acronym": "PoF",
    "PET": 0.5,
    "SC": 0.6,
    "HS": 0.5,
    "SHIP": 1
  },
  {
    "EffectPerLevel": 0.1,
    "GrowthExpo": 1.28,
    "DamageBonus": 0.2,
    "CostCoef": 0.6,
    "CostExpo": 1.7,
    "Name": "Elixir of Eden",
    "NameJp": "エデンの霊薬",
    "Acronym": "EoE",
    "PET": 0,
    "SC": 1,
    "HS": 0,
    "SHIP": 0
  }
        ],
    }
   },

   watch: {
     message: function (val) {
        if (val.length < 500){ return }
        if (this.build_selected === '' || this.gold_selected === '' || this.hero1_selected === '' || this.hero2_selected === ''){
          this.tabIndex = 1
          this.alert_message = "プレイヤー情報を入力してください"
          this.showAlert()
          return
        }
        var data = JSON.parse(val)
        this.items = [{ name:"test" , damage:0}]
        this.items.pop()

        this.af_data = data.artifacts
        var af_lvl = []
        for(var i=0; i<this.af_count; i++){
          var key = Object.keys(data.artifacts)[i]
          af_lvl.push(parseFloat(this.af_data[key].level))
        }
        
        var zero_or_one = []
        var gold_af = [1,2,3,4,5,6,7,8,9,10,11,30,32,45,56]
        for(var i=0; i<this.af_count; i++){
          if (this.no_gold == true && gold_af.includes(i)){
            zero_or_one.push(0)
          } else {
            zero_or_one.push(1)
          }
        }
        var nohave = []
        for(var i=0; i<this.af_count; i++){
          if (af_lvl[i] == 0){
            zero_or_one[i] = 0
            af_lvl[i] = 1
            nohave.push(1)
          } else {
            nohave.push(0)
          }
        }
        var effect = []
        for(var i=0; i<this.af_count; i++){
          var eff = 1 + this.optimiser_data[i].EffectPerLevel * (af_lvl[i] ** this.optimiser_data[i].GrowthExpo)
          effect.push(eff)
        }
        var total_cost = 0
        var cumcost = []
        for(var i=0; i<this.af_count; i++){
          var cost = (this.optimiser_data[i].CostCoef / (1 + this.optimiser_data[i].CostExpo)) * (af_lvl[i] ** (1 + this.optimiser_data[i].CostExpo))
          cumcost.push(cost)
          total_cost += cost
        }
        this.updateReductionData()
        var last_eff = []
        var total_eff = 0
        
        for(var i=0; i<this.af_count; i++){
          var last_effect = zero_or_one[i] * (Math.log(effect[i] **  this.optimiser_data[i][this.build_selected])) / cumcost[i]
          last_eff.push(last_effect)
          total_eff += last_effect
          var key = Object.keys(data.artifacts)[i]
          if (nohave[i] == 0){this.items.push({ name: key, value: last_effect, acr: this.optimiser_data[i].Acronym, eff: last_effect})}
        }
        for(var i=0; i<this.items.length; i++){
          this.items[i].eff = ((this.items[i].eff / total_eff) * 100).toFixed(1)
        }
        this.items = this.items.sort(function (b, a) {return a.value - b.value;});
        this.open = true
        this.tabIndex = 2

    },
   },

   methods: {
    clear: function(){
      this.message = ""
      this.af_data = ""
      this.items = []
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    updateReductionData(){
      var gold  = [0,0,0] 
      var hero1 = [0,0]      
      var hero2 = [0,0,0]    

      switch(this.gold_selected){
        case 0: gold[0] = 1; break
        case 1: gold[1] = 1; break
        case 2: gold[2] = 1; break
      }
      switch(this.hero1_selected){
        case 0: hero1[0] = 1; break
        case 1: hero1[1] = 1; break
      }
      switch(this.hero2_selected){
        case 0: hero2[0] = 1; break
        case 1: hero2[1] = 1; break
        case 2: hero2[2] = 1; break
      }
      console.log(hero2)

      var data = this.optimiser_data[3]
      data.HS = data.SHIP = data.SC = data.PET = 0.79*(gold[0] + gold[2])
      var data = this.optimiser_data[4]
      data.HS = data.SHIP = data.SC = data.PET = 0.79*(gold[1])
      var data = this.optimiser_data[8]
      data.HS = data.SHIP = data.SC = data.PET = 0.79*(gold[0])
      var data = this.optimiser_data[9]
      data.HS = data.SHIP = data.SC = data.PET = 0.79*(gold[1])
      var data = this.optimiser_data[10]
      data.HS = data.SHIP = data.SC = data.PET = 0.79*(gold[2])
      var data = this.optimiser_data[11]
      data.HS = data.SHIP = data.SC = data.PET = 0.79*(gold[0] + gold[1])
      var data = this.optimiser_data[21]
      if (hero2[1]+hero2[2] == 1){data.HS = data.SHIP = data.SC = data.PET = 0} else {data.HS = 0.5; data.SHIP = 1; data.SC = 0.6; data.PET = 0.5}
      var data = this.optimiser_data[22]
      if (hero2[2]+hero2[0] == 1){data.HS = data.SHIP = data.SC = data.PET = 0} else {data.HS = 0.5; data.SHIP = 1; data.SC = 0.6; data.PET = 0.5}
      var data = this.optimiser_data[23]
      if (hero2[1]+hero2[0] == 1){data.HS = data.SHIP = data.SC = data.PET = 0} else {data.HS = 0.5; data.SHIP = 1; data.SC = 0.6; data.PET = 0.5}
      var data = this.optimiser_data[24]
      if (hero1[1] == 1){data.HS = data.SHIP = data.SC = data.PET = 0} else {data.HS = 0.5; data.SHIP = 1; data.SC = 0.6; data.PET = 0.5}
      var data = this.optimiser_data[25]
      if (hero1[0] == 1){data.HS = data.SHIP = data.SC = data.PET = 0} else {data.HS = 0.5; data.SHIP = 1; data.SC = 0.6; data.PET = 0.5}
      var data = this.optimiser_data[48]
      data.HS = 1+0.5*hero2[0]
      data.SHIP = 1+hero2[0]
      data.SC = 1+0.6*hero2[0]
      data.PET = 1+0.5*hero2[0]
      var data = this.optimiser_data[49]
      data.HS = 0.8+0.5*hero1[1]
      data.SHIP = 1+hero1[1]
      data.SC = 0.6+0.6*hero1[1]
      data.PET = 0.5+0.5*hero1[1]
      var data = this.optimiser_data[50]
      data.HS = 0.79+0.5*hero1[0]
      data.SHIP = 0.79+hero1[0]
      data.SC = 0.79+0.6*hero1[0]
      data.PET = 0.79+0.5*hero1[0]
      var data = this.optimiser_data[51]
      data.HS = 1+0.5*hero2[2]
      data.SHIP = 1+hero2[2]
      data.SC = 1+0.6*hero2[2]
      data.PET = 1+0.5*hero2[2]
      var data = this.optimiser_data[52]
      data.HS = 1+0.5*hero2[1]
      data.SHIP = 1+hero2[1]
      data.SC = 1+0.6*hero2[1]
      data.PET = 1+0.5*hero2[1]
    },
    save: function(){
      const setCached = 
        {
          no_gold: this.no_gold,
          build_selected: this.build_selected,
          gold_selected: this.gold_selected,
          hero1_selected: this.hero1_selected,
          hero2_selected: this.hero2_selected,
        }
      this.$cookies.set('cookie_set_afopti', setCached, {
        path: '/',
        maxAge: 60 * 60 * 24 * 70
      })
      this.alert_message = "保存しました"
      this.do_select_open = true
      this.message = ''
    },
   },

   created() {
    var images = {}
    for (let index = 0; index < this.af_count; index++) {
      var name_set = this.optimiser_data[index].Acronym
      var url = "https://firebasestorage.googleapis.com/v0/b/tt2tools.appspot.com/o/artifact%2F" + name_set +".png?alt=media&token=08de3603-abc0-4a74-b420-770d309aca88"
      images[name_set] = url
    }
    this.artimages = images
    if (this.$cookies.get('cookie_set_afopti') != null){
      var parse = JSON.parse(this.$cookies.get('cookie_set_afopti'))
      this.no_gold = parse.no_gold
      this.build_selected = parse.build_selected
      this.gold_selected = parse.gold_selected
      this.hero1_selected = parse.hero1_selected
      this.hero2_selected = parse.hero2_selected
    }
  },

}
</script>

<style>
.container {
  padding: 20px;
}
@media screen and (min-width: 768px) {
.container {
  padding: 20px;
  width: 900px;
}
}
</style>

