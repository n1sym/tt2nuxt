<template>
  <div class="container">
    <div>
      <b>: アーティファクト一覧・解説</b><br><br>
      <div class="menu">
      <b-form-input v-model="text" v-on:keyup.enter="search" type="search" placeholder="AF名で検索" class="searchbar"></b-form-input>
      <div class="afname"></div>
      <b-button variant="outline-info" v-on:click="search"><b-icon icon="search"></b-icon> 検索 </b-button>
      </div>
      <b-button id="top_btn" v-on:click="scrollTop"><b-icon icon="caret-up-fill"></b-icon> TOP</b-button>
      <br>
      
      <b-form-group>
      <b-form-radio-group
        id="btn-radios-2"
        v-model="selected_lang"
        :options="options_lang"
        buttons
        button-variant="outline-secondary"
        size="sm"
        name="radio-btn-outline"
      ></b-form-radio-group>
      </b-form-group>
      <div class="afname"></div>
      <b-form-group>
      <b-form-checkbox-group
        v-model="selected_tier"
        :options="options_tier"
        name="flavour-1"
      ></b-form-checkbox-group>
      </b-form-group>

      <div class="afname"></div>
      <div class="menu">
        <b-form-group label="" v-b-tooltip.html title="<b>pool 1</b> : 1~5番目に発見<br> <b>pool 2</b> : 6~30番目に発見<br><b>pool 3</b> : 31番目以降に発見">
        <b-form-checkbox-group
        v-model="selected_pool"
        :options="options_pool"
        name="flavour-1"
      ></b-form-checkbox-group> 
      </b-form-group>
      

      
      
      </div>
      
      <br>

      <div v-for="(item) in items" :key="item.id">
        <div class="afmenu">
        <div :class="`afimage${item.enchant}`"><img class="img" :src="`${artimages[item.acronym]}`" width='40'></div>
        <div class="afname">
          <b>
            <div v-if="en"> {{ item.name }} </div>
            <div v-if="ja"> {{ item.name_jp }} </div>
            <div v-if="enja"> {{ item.name }} : {{ item.name_jp }} </div>
          </b></div>
        </div>
        <div div class="afinfo">
          tier: <b>{{tier_view(item.tier)}}</b> / pool: {{ item.pool }} / match: <b>{{ item.match }}</b> <a v-if="item.maxlevel"> / max_level: {{item.maxlevel}}</a>
        </div>

        <div div class="afdesc">
          {{ item.description }} <br> <br>
        </div>
         
      </div>
     
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      en: true,
      text: "",
      ja: false,
      enja: false,
      selected_lang: 'en',
      options_lang: [
        { text: '英語', value: 'en' },
        { text: '日本語', value: 'ja' },
        { text: '両方', value: 'enja' }
      ],
      selected_tier: [0,1,2,3],
      options_tier: [
        { text: ' tier S ', value: 0 },
        { text: ' tier A ', value: 1 },
        { text: ' tier B ', value: 2 },
        { text: ' tier C ', value: 3 }
      ],
      selected_pool: [1,2,3],
      options_pool: [
        { text: ' pool 1 ', value: 1 },
        { text: ' pool 2 ', value: 2 },
        { text: ' pool 3 ', value: 3 },
      ],

      artifacts: [
       {
         "id": 0,
         "name": "Book of Shadows",
         "name_jp": "影の書",
         "acronym": "BoS",
         "tier": 0,
         "pool": 2,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "取得レリック数を増加させる超重要AF。"
       },
       {
         "id": 1,
         "name": "Charged Card",
         "name_jp": "充電カード",
         "acronym": "CCa",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "合計カードレベルに合わせて全ゴールド強化"
       },
       {
         "id": 2,
         "name": "Stone of the Valrunes",
         "name_jp": "ヴァルリユーンズの石",
         "acronym": "SotV",
         "tier": 0,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "発動しているアクティブスキルの数だけゴールド取得量が増加する。なお最大効果は４スキル発動時なので、５つスキルを発動しても意味は無い。"
       },
       {
         "id": 3,
         "name": "Chest of Contentment",
         "name_jp": "充足の宝箱",
         "acronym": "CoC",
         "tier": 2,
         "pool": 3,
         "match": "Chest,Fairy",
         "enchant": "",
         "maxlevel": "",
         "description": "チェスターソンゴールドの増加。"
       },
       {
         "id": 4,
         "name": "Heroic Shield",
         "name_jp": "英雄の盾",
         "acronym": "HSh",
         "tier": 2,
         "pool": 1,
         "match": "Boss,HoM",
         "enchant": "",
         "maxlevel": "",
         "description": "BOSSゴールドの増加。"
       },
       {
         "id": 5,
         "name": "Book of Prophecy",
         "name_jp": "予言の書",
         "acronym": "BoP",
         "tier": 1,
         "pool": 1,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "All Gold 倍率が増加する。単純な効果だが全ビルドで役割を持つ。"
       },
       {
         "id": 6,
         "name": "Khrysos Bowl",
         "name_jp": "Khrysosボウル",
         "acronym": "KBo",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "All Gold + Inactive Gold（放置中のゴールド）倍率が増加する。"
       },
       {
         "id": 7,
         "name": "Zakynthos Coin",
         "name_jp": "ザキントスコイン",
         "acronym": "ZCo",
         "tier": 3,
         "pool": 3,
         "match": "Inactive",
         "enchant": "",
         "maxlevel": "",
         "description": "Inactive（非オンライン時） ゴールドの増加。"
       },
       {
         "id": 8,
         "name": "Great Fay Medallion",
         "name_jp": "フェイの雄大なメダリオン",
         "acronym": "GFM",
         "tier": 2,
         "pool": 3,
         "match": "Fairy",
         "enchant": "",
         "maxlevel": "",
         "description": "フェアリーゴールドの増加。"
       },
       {
         "id": 9,
         "name": "Neko Sculpture",
         "name_jp": "猫の彫刻",
         "acronym": "NSc",
         "tier": 2,
         "pool": 3,
         "match": "HoM",
         "enchant": "",
         "maxlevel": "",
         "description": "Heart of Midas（ミダスの心）ゴールドの増加。"
       },
       {
         "id": 10,
         "name": "Coins of Ebizu",
         "name_jp": "恵比寿のコイン",
         "acronym": "CoE",
         "tier": 2,
         "pool": 3,
         "match": "Chest",
         "enchant": "",
         "maxlevel": "",
         "description": "Multi-Spawn（モンスターが複数体に重なって現れる時）ゴールドの増加。"
       },
       {
         "id": 11,
         "name": "The Bronzed Compass",
         "name_jp": "青銅コンパス",
         "acronym": "TBC",
         "tier": 1,
         "pool": 3,
         "match": "HoM,Fairy",
         "enchant": "",
         "maxlevel": "",
         "description": "Fairy Gold + Heart of Midas Gold 倍率が増加する。"
       },
       {
         "id": 12,
         "name": "Evergrowing Stack",
         "name_jp": "蓄積スタック",
         "acronym": "ESt",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "合計カードレベルに合わせて全ダメージ強化"
       },
       {
         "id": 13,
         "name": "Flute of the Soloist",
         "name_jp": "ソリストのフルート",
         "acronym": "FotS",
         "tier": 0,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "発動しているアクティブスキルの数だけ All Damage に倍率が掛かる。最大効果は４スキル発動時。"
       },
       {
         "id": 14,
         "name": "Heavenly Sword",
         "name_jp": "天国の剣",
         "acronym": "HSw",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "All Artifact Damage 倍率の増加。"
       },
       {
         "id": 15,
         "name": "Divine Retribution",
         "name_jp": "神罰の剣",
         "acronym": "DRe",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "All Damage 倍率の増加。"
       },
       {
         "id": 16,
         "name": "Drunken Hammer",
         "name_jp": "酔いどれハンマー",
         "acronym": "DHa",
         "tier": 1,
         "pool": 1,
         "match": "Pet,SC,HS",
         "enchant": 1,
         "maxlevel": "",
         "description": "Tap Damage 倍率の増加。"
       },
       {
         "id": 17,
         "name": "Samosek Sword",
         "name_jp": "サモショークのソード",
         "acronym": "SSw",
         "tier": 2,
         "pool": 3,
         "match": "SC,HS",
         "enchant": "",
         "maxlevel": "",
         "description": "Sword Attack damage 倍率の増加。"
       },
       {
         "id": 18,
         "name": "The Retaliator",
         "name_jp": "Retaliator",
         "acronym": "TRe",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "Critical damage 倍率の増加。"
       },
       {
         "id": 19,
         "name": "Stryfe's Peace",
         "name_jp": "Stryfeの平和",
         "acronym": "SPe",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "All Hero + Tap damage 倍率の増加。"
       },
       {
         "id": 20,
         "name": "Hero's Blade",
         "name_jp": "ヒーローブレード",
         "acronym": "HBl",
         "tier": 1,
         "pool": 1,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "All hero damage 倍率の増加。"
       },
       {
         "id": 21,
         "name": "The Sword of Storms",
         "name_jp": "嵐の剣",
         "acronym": "TSoS",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "近接ヒーローダメージ倍率の増加。"
       },
       {
         "id": 22,
         "name": "Furies Bow",
         "name_jp": "憤怒の弓",
         "acronym": "FBo",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "遠隔ヒーローダメージ倍率の増加。"
       },
       {
         "id": 23,
         "name": "Charm of the Ancient",
         "name_jp": "古代の魔除け",
         "acronym": "CotA",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "呪文ヒーローダメージ倍率の増加。"
       },
       {
         "id": 24,
         "name": "Tiny Titan Tree",
         "name_jp": "タイニータイタンツリー",
         "acronym": "TTT",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "地上タイプのヒーローダメージ倍率の増加。"
       },
       {
         "id": 25,
         "name": "Helm of Hermes",
         "name_jp": "エルメスのヘルム",
         "acronym": "HoH",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "飛行タイプのヒーローダメージ倍率の増加。"
       },
       {
         "id": 26,
         "name": "Fruit of Eden",
         "name_jp": "エデンの果実",
         "acronym": "FoE",
         "tier": 2,
         "pool": 3,
         "match": "Pet",
         "enchant": "",
         "maxlevel": "",
         "description": "Pet ダメージの上昇。"
       },
       {
         "id": 27,
         "name": "Influential Elixir",
         "name_jp": "影響力のあるエリクサー",
         "acronym": "IEl",
         "tier": 2,
         "pool": 2,
         "match": "CS",
         "enchant": "",
         "maxlevel": "",
         "description": "Clan Ship ダメージの上昇。"
       },
       {
         "id": 28,
         "name": "O'Ryan's Charm",
         "name_jp": "オアーヤンのチャーム",
         "acronym": "ORC",
         "tier": 1,
         "pool": 3,
         "match": "Pet,CS,SC",
         "enchant": "",
         "maxlevel": "",
         "description": "Pet + Clan Ship + Shadow Clone damage（影分身）倍率の増加。"
       },
       {
         "id": 29,
         "name": "Heart of Storms",
         "name_jp": "嵐の心",
         "acronym": "HoS",
         "tier": 0,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "ダメージ系ペットの効果倍率が増加する。"
       },
       {
         "id": 30,
         "name": "Apollo Orb",
         "name_jp": "アポロオーブ",
         "acronym": "AOr",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "ゴールド系ペットの効果倍率が増加する。"
       },
       {
         "id": 31,
         "name": "Strange Fruit",
         "name_jp": "スティッキーフルーツ",
         "acronym": "SFr",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "ダメージ系エキゾチックペットの効果倍率が増加する。"
       },
       {
         "id": 32,
         "name": "Hades Orb",
         "name_jp": "ハデスオーブ",
         "acronym": "HOr",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "ゴールド系エキゾチックペットの効果倍率が増加する。"
       },
       {
         "id": 33,
         "name": "Earrings of Portara",
         "name_jp": "Portaraのイヤリング",
         "acronym": "EoP",
         "tier": 0,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "All Damage + Critical Damage 倍率の増加。"
       },
       {
         "id": 34,
         "name": "Avian Feather",
         "name_jp": "鳥の羽",
         "acronym": "AFe",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "Heavenly Strike（天空落とし）ダメージ＋剣攻撃ダメージの増加"
       },
       {
         "id": 35,
         "name": "Corrupted Rune Heart",
         "name_jp": "破損したルーンハート",
         "acronym": "CRH",
         "tier": 3,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "Splash damage（貫通ダメージ）の上昇。"
       },
       {
         "id": 36,
         "name": "Durendal Sword",
         "name_jp": "テスト文字列１",
         "acronym": "DSw",
         "tier": 2,
         "pool": 2,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "対雑魚モンスターへのダメージ上昇。"
       },
       {
         "id": 37,
         "name": "Helheim Skull",
         "name_jp": "Hellheimスカル",
         "acronym": "HSk",
         "tier": 1,
         "pool": 2,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "対Bossダメージ倍率の増加。"
       },
       {
         "id": 38,
         "name": "Oath's Burden",
         "name_jp": "誓いの負担",
         "acronym": "OBu",
         "tier": 1,
         "pool": 3,
         "match": "Pet,SC,HS",
         "enchant": "",
         "maxlevel": "",
         "description": "Tap, Pet, and Fire Sword（炎の剣）倍率の増加。Petビルドの超重要AF。"
       },
       {
         "id": 39,
         "name": "Crown of the Constellation",
         "name_jp": "星座の王冠",
         "acronym": "CotC",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "All Hero, Clan Ship, and War Cry（雄叫び）倍率の増加。CSビルドの超重要AF。"
       },
       {
         "id": 40,
         "name": "Titania's Sceptre",
         "name_jp": "チタニアのセプター",
         "acronym": "TSc",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "Heavenly Strike（天空落とし）, Hand of Midas（ミダスの祝福）, and Shadow Clone（影分身）ダメージ倍率の増加。"
       },
       {
         "id": 41,
         "name": "Fagin's Grip",
         "name_jp": "Faginのグリップ",
         "acronym": "FGr",
         "tier": 2,
         "pool": 3,
         "match": "Pet,SC,CS",
         "enchant": "",
         "maxlevel": "",
         "description": "Deadly Strike（致命的な一撃）, Inactive Gold 倍率が増加する。"
       },
       {
         "id": 42,
         "name": "Ring of Calisto",
         "name_jp": "カリストの指輪",
         "acronym": "RoC",
         "tier": 0,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "全ての装備効果の倍率が増加する。"
       },
       {
         "id": 43,
         "name": "Blade of Damocles",
         "name_jp": "ダモクレスの刃",
         "acronym": "BoD",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "剣装備の倍率上昇。"
       },
       {
         "id": 44,
         "name": "Helmet of Madness",
         "name_jp": "狂気の兜",
         "acronym": "HoM",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "頭装備の倍率上昇。"
       },
       {
         "id": 45,
         "name": "Titanium Plating",
         "name_jp": "タイタニアム プレーティング",
         "acronym": "TPl",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "鎧装備の倍率上昇。"
       },
       {
         "id": 46,
         "name": "Moonlight Bracelet",
         "name_jp": "ムーンライトブレスレット",
         "acronym": "MBr",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "オーラ装備の倍率上昇。"
       },
       {
         "id": 47,
         "name": "Amethyst Staff",
         "name_jp": "アメジストの杖",
         "acronym": "ASt",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "スラッシュ装備の倍率上昇。"
       },
       {
         "id": 48,
         "name": "Sword of the Royals",
         "name_jp": "ロイヤルズの剣",
         "acronym": "SotR",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "剣装備効果＋近接ヒーローダメージの増加"
       },
       {
         "id": 49,
         "name": "Spearit's Vigil",
         "name_jp": "Spearitのビジル",
         "acronym": "SVi",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "ヘルメット装備効果＋飛翔ヒーローダメージの増加"
       },
       {
         "id": 50,
         "name": "The Cobalt Plate",
         "name_jp": "コバルトプレート",
         "acronym": "TCP",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "鎧装備効果＋地上ヒーローダメージの増加"
       },
       {
         "id": 51,
         "name": "Sigils of Judgement",
         "name_jp": "審判のシギル",
         "acronym": "SoJ",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "オーラ装備効果＋呪文ヒーローダメージの増加"
       },
       {
         "id": 52,
         "name": "Foliage of the Keeper",
         "name_jp": "キーパーの葉",
         "acronym": "FotK",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "スラッシュ装備効果＋遠隔ヒーローダメージの増加"
       },
       {
         "id": 53,
         "name": "Invader's Gjallarhorn",
         "name_jp": "インベーダーのギャラルホルン",
         "acronym": "IGj",
         "tier": 0,
         "pool": 3,
         "match": "All",
         "enchant": 1,
         "maxlevel": "",
         "description": "全てのアクティブスキル効果倍率が増加する。"
       },
       {
         "id": 54,
         "name": "Titan's Mask",
         "name_jp": "タイタンの仮面",
         "acronym": "TMas",
         "tier": 2,
         "pool": 2,
         "match": "HS",
         "enchant": "",
         "maxlevel": "",
         "description": "Heavenly Strike（天空落とし）ダメージの上昇。"
       },
       {
         "id": 55,
         "name": "Royal Toxin",
         "name_jp": "ロイヤル毒素",
         "acronym": "RTo",
         "tier": 2,
         "pool": 2,
         "match": "Pet,SC,CS",
         "enchant": "",
         "maxlevel": "",
         "description": "Deadly Strike（致命的な一撃）ダメージの増加。"
       },
       {
         "id": 56,
         "name": "Laborer's Pendant",
         "name_jp": "労働者のペンダント",
         "acronym": "LPe",
         "tier": 1,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "Hand of Midas（ミダスの祝福）の倍率上昇。"
       },
       {
         "id": 57,
         "name": "Bringer of Ragnarok",
         "name_jp": "ラグナロクをもたらすもの",
         "acronym": "BoR",
         "tier": 1,
         "pool": 2,
         "match": "Pet,SC,HS",
         "enchant": "",
         "maxlevel": "",
         "description": "Fire Sword（炎の剣）の倍率上昇。"
       },
       {
         "id": 58,
         "name": "Parchment of Foresight",
         "name_jp": "予見の羊皮紙",
         "acronym": "PoF",
         "tier": 1,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": "",
         "description": "War Cry（雄叫び）の倍率上昇。"
       },
       {
         "id": 59,
         "name": "Elixir of Eden",
         "name_jp": "エデンの霊薬",
         "acronym": "EoE",
         "tier": 2,
         "pool": 2,
         "match": "SC",
         "enchant": "",
         "maxlevel": "",
         "description": "Shadow Clone（影分身）ダメージの上昇。"
       },
       {
         "id": 60,
         "name": "Hourglass of the Impatient",
         "name_jp": "せっかちの砂時計",
         "acronym": "HotI",
         "tier": 2,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "全てのアクティブスキルのクールダウン時間を減少させる。周回中に便利。HSビルドで周回するなら必須級。"
       },
       {
         "id": 61,
         "name": "Phantom Timepiece",
         "name_jp": "ファントムタイムピース",
         "acronym": "PTi",
         "tier": 2,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 30,
         "description": "全てのアクティブスキルの効果時間を増加させる。MAXで＋30秒。"
       },
       {
         "id": 62,
         "name": "Forbidden Scroll",
         "name_jp": "禁じられた巻物",
         "acronym": "FSc",
         "tier": 3,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 30,
         "description": "Deadly Strike（致命的な一撃）の効果時間を増加させる。"
       },
       {
         "id": 63,
         "name": "Ring of Fealty",
         "name_jp": "忠義の指輪",
         "acronym": "RoF",
         "tier": 3,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 30,
         "description": "Hand of Midas（ミダスの祝福）の効果時間を増加させる。"
       },
       {
         "id": 64,
         "name": "Glacial Axe",
         "name_jp": "氷河の斧",
         "acronym": "GAx",
         "tier": 3,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 30,
         "description": "Fire Sword（炎の剣）効果時間を増加させる。"
       },
       {
         "id": 65,
         "name": "Aegis",
         "name_jp": "エージス",
         "acronym": "Aeg",
         "tier": 3,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 30,
         "description": "War Cry（雄叫び）効果時間を増加させる。"
       },
       {
         "id": 66,
         "name": "Swamp Gauntlet",
         "name_jp": "スワンプガントレット",
         "acronym": "SGa",
         "tier": 3,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 30,
         "description": "Shadow Clone（影分身）の効果時間を増加させる。"
       },
       {
         "id": 67,
         "name": "Infinity Pendulum",
         "name_jp": "無限の振り子",
         "acronym": "IPe",
         "tier": 2,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 20,
         "description": "Heavenly Strike（天空落とし）のマナコスト減少。MAXで-20コスト。"
       },
       {
         "id": 68,
         "name": "Glove of Kuma",
         "name_jp": "クマの手袋",
         "acronym": "GoK",
         "tier": 2,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 30,
         "description": "Deadly Strike（致命的な一撃）のマナコスト減少。MAXで-30コスト。"
       },
       {
         "id": 69,
         "name": "Titan Spear",
         "name_jp": "タイタンスピアー",
         "acronym": "TSp",
         "tier": 2,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "Hand of Midas（ミダスの祝福）のマナコスト減少。MAXで-40コスト。"
       },
       {
         "id": 70,
         "name": "Oak Staff",
         "name_jp": "樫の杖",
         "acronym": "OSt",
         "tier": 2,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 30,
         "description": "Fire Sword（炎の剣）のマナコスト減少。MAXで-30コスト。"
       },
       {
         "id": 71,
         "name": "The Arcana Cloak",
         "name_jp": "アルカナの外套",
         "acronym": "TAC",
         "tier": 2,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "War Cry（雄叫び）のマナコスト減少。MAXで-40コスト。"
       },
       {
         "id": 72,
         "name": "Hunter's Ointment",
         "name_jp": "狩人の軟膏",
         "acronym": "HOi",
         "tier": 2,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "Shadow Clone（影分身）のマナコスト減少。MAXで-40コスト。"
       },
       {
         "id": 73,
         "name": "Ambrosia Elixir",
         "name_jp": "アムブロシアーのエリキシル",
         "acronym": "AEl",
         "tier": 3,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "Mana capacity の上昇。最大で+80"
       },
       {
         "id": 74,
         "name": "Mystic Staff",
         "name_jp": "ミスティックスタッフ",
         "acronym": "MSt",
         "tier": 3,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "マナ回復速度を増加。最大で+3/min"
       },
       {
         "id": 75,
         "name": "Mystical Beans of Senzu",
         "name_jp": "Senzuの神秘的な豆",
         "acronym": "MBoS",
         "tier": 2,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "アクティブスキル使用時に最大で使用コストの10％のマナが返される。"
       },
       {
         "id": 76,
         "name": "Egg of Fortune",
         "name_jp": "幸運の卵",
         "acronym": "EoF",
         "tier": 3,
         "pool": 2,
         "match": "Chest,Fairy",
         "enchant": "",
         "maxlevel": 40,
         "description": "チェスターソンの出現確率増加。"
       },
       {
         "id": 77,
         "name": "Divine Chalice",
         "name_jp": "神聖なる杯",
         "acronym": "DCh",
         "tier": 3,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 50,
         "description": "ゴールド10倍チャンスの出現確率増加。"
       },
       {
         "id": 78,
         "name": "Invader's Shield",
         "name_jp": "侵略者の盾",
         "acronym": "ISh",
         "tier": 3,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 50,
         "description": "フェアリーの出現確率増加。"
       },
       {
         "id": 79,
         "name": "Axe of Muerte",
         "name_jp": "ムエルテの斧",
         "acronym": "AoM",
         "tier": 2,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "クリティカル率の上昇（MAXで+10%）。"
       },
       {
         "id": 80,
         "name": "Essence of the Kitsune",
         "name_jp": "キツネのエッセンス",
         "acronym": "EotK",
         "tier": 3,
         "pool": 3,
         "match": "Chest",
         "enchant": "",
         "maxlevel": 40,
         "description": "Multi-spawn chance の確率増加。"
       },
       {
         "id": 81,
         "name": "Boots of Hermes",
         "name_jp": "エルメスのブーツ",
         "acronym": "BoH",
         "tier": 0,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "Portarの出現確率が増加する。周回速度が大幅に上昇するため、このゲームの攻略において影の書とほぼ同等の重要度と言ってよい。"
       },
       {
         "id": 82,
         "name": "Unbound Gauntlet",
         "name_jp": "未結合のガントレット",
         "acronym": "UGa",
         "tier": 1,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "スナップの出現確率増加。Portar ほどではないが周回速度が上がる。"
       },
       {
         "id": 83,
         "name": "Oberon Pendant",
         "name_jp": "オベロンのペンダント",
         "acronym": "OPe",
         "tier": 3,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "マニマナの出現確率増加"
       },
       {
         "id": 84,
         "name": "Lucky Foot of Al-Mi-Raj",
         "name_jp": "アルミラージのラッキー足",
         "acronym": "LFoA",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "All probabilities（すべての確率）を上昇させる。"
       },
       {
         "id": 85,
         "name": "Lost King's Mask",
         "name_jp": "王のマスクを失いました",
         "acronym": "LKM",
         "tier": 3,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "アップグレードコスト80%減。全ゴールド5倍と等価。"
       },
       {
         "id": 86,
         "name": "Staff of Radiance",
         "name_jp": "光輝の杖",
         "acronym": "SoR",
         "tier": 3,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "ヒーローコスト80%減。同上。"
       },
       {
         "id": 87,
         "name": "Morgelai Sword",
         "name_jp": "Morgelai剣",
         "acronym": "MSw",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 50,
         "description": "Hero weapon bonuse（トナメ報酬で貰えるヒーロー武器）を1.5倍にする。ゲームを始めたての武器が揃ってない頃だと効果が実感できないが、終盤に武器が数セット揃ってくると強力なAFになる。"
       },
       {
         "id": 88,
         "name": "Ringing Stone",
         "name_jp": "リンギング石",
         "acronym": "RSt",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 50,
         "description": "ヒーロー武器セット効果を強化"
       },
       {
         "id": 89,
         "name": "Quill of Scrolls",
         "name_jp": "スクロールのクイル",
         "acronym": "QoS",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 50,
         "description": "ヒーロースクロールを強化"
       },
       {
         "id": 90,
         "name": "Old King's Stamp",
         "name_jp": "古い王のスタンプ",
         "acronym": "OKS",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 50,
         "description": "ヒーロースクロールセット効果を強化"
       },
       {
         "id": 91,
         "name": "The Master's Sword",
         "name_jp": "マスターズソード",
         "acronym": "TMS",
         "tier": 2,
         "pool": 2,
         "match": "Pet,SC,HS",
         "enchant": "",
         "maxlevel": 40,
         "description": "幾らかの Hero ダメージを Tap ダメージ に変換する。"
       },
       {
         "id": 92,
         "name": "The Magnifier",
         "name_jp": "大鏡",
         "acronym": "TMag",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "他のアーティファクトのダメージ倍率を増加させる。ただ適用されるのは効果欄に”ダメージ”の字が入っているアーティファクトのみ。"
       },
       {
         "id": 93,
         "name": "The Treasure of Fergus",
         "name_jp": "ファーガスの宝",
         "acronym": "TToF",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "The Magnifier【大鏡】のゴールド版。"
       },
       {
         "id": 94,
         "name": "The White Dwarf",
         "name_jp": "白色矮星",
         "acronym": "TWD",
         "tier": 1,
         "pool": 3,
         "match": "All",
         "enchant": "",
         "maxlevel": 50,
         "description": "所持しているアーティファクトの数だけ All Damage に倍率が掛かる（サルベージ欄にあるものはノーカウント）。"
       },
       {
         "id": 95,
         "name": "Aram Spear",
         "name_jp": "アラムスピア",
         "acronym": "ASp",
         "tier": 3,
         "pool": 1,
         "match": "All",
         "enchant": "",
         "maxlevel": 40,
         "description": "All Titan の体力80%減。全ダメージ5倍と等価。"
       },
       {
         "id": 96,
         "name": "Ward of the Darkness",
         "name_jp": "闇のウォード",
         "acronym": "WotD",
         "tier": 3,
         "pool": 2,
         "match": "All",
         "enchant": "",
         "maxlevel": 60,
         "description": "BOSSの制限時間増加（最大+60秒）"
       }
      ],
      artimages:[],
      items: [

      ],     
    }
  },
  computed: {
  },
  watch: {
    selected_lang: function(){
      this.cookie_set_af()
      switch(this.selected_lang){
        case "en":
          this.en = true; this.ja = false; this.enja = false; break
        case "ja":
          this.en = false; this.ja = true; this.enja = false; break
        case "enja":
          this.en = false; this.ja = false; this.enja = true; break    
      }
    },
    selected_tier: function(){
      this.art_set()
    },
    selected_pool: function(){
      this.art_set()
    },
  },
  methods: {
    search: function(){
      this.art_set()
    },
    scrollTop: function(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  },
  created() {
    this.art_set()
    var images = {}
    for (let index = 0; index < this.artifacts.length; index++) {
      var name_set = this.artifacts[index].acronym
      var url = "https://firebasestorage.googleapis.com/v0/b/tt2tools.appspot.com/o/artifact%2F" + this.artifacts[index].acronym +".png?alt=media&token=08de3603-abc0-4a74-b420-770d309aca88"
      images[name_set] = url
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
.menu{
  display: flex;
  flex-wrap: wrap;
}
.afmenu{
  display: flex;
}
.afimage{
  padding: 3px;
}
.afimage1{
  padding: 3px;
  background: rgb(231, 204, 49);
}
.afname{
  padding-left: 10px;
}
.afdesc{
  padding-top: 10px;
  padding-bottom: 10px;
}
.afinfo{
  padding: 1px;
  margin-top: 8px;
  padding-left: 5px;
  background: rgb(233, 230, 226);
}

.searchbar{
  width: 200px;
}


#upd {
  padding-bottom: 10px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#top_btn
{
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 6px;
  background-color: rgba(85, 82, 79, 0.8);
  padding-left: 10px;
  padding-right: 10px;
}

</style>