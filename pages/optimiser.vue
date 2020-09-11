<template>
  <div class="container">
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
    
    <div v-for="(item, index) in items" :key="item.id">
      <img class="img" :src="`${artimages[index]}`" width='40'>
     {{ item.name }} : {{ item.value }}
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
    "PET": 1,
    "SC": 1,
    "HS": 1,
    "SHIP": 1
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
        var data = JSON.parse(val)
        console.log(data)
        this.items = [{ name:"test" , damage:0}]
        this.items.pop()

        this.af_data = data.artifacts
        for(var i=0; i<this.af_count; i++){
          var key = Object.keys(data.artifacts)[i]
          this.items.push({ name: key, value: this.af_data[key].level})
        }

    },
   },

   methods: {
    clear: function(){
      this.message = ""
      this.af_data = ""
      this.items = []
    },
   },

   created() {
    var images = {}
    for (let index = 0; index < this.af_count; index++) {
      var name_set = this.optimiser_data[index].Acronym
      var url = "https://firebasestorage.googleapis.com/v0/b/tt2tools.appspot.com/o/artifact%2F" + name_set +".png?alt=media&token=08de3603-abc0-4a74-b420-770d309aca88"
      images[index] = url
    }
    this.artimages = images
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

