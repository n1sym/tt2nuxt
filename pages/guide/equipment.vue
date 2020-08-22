<template>
  <div class="container">
    <div>
      <b-button id="top_btn" v-on:click="scrollTop"><b-icon icon="caret-up-fill"></b-icon> TOP</b-button>
      <b>: TapTitans2 装備セットガイド</b><br><br>
      <p>なにかありましたら <a href="https://forms.gle/rPgeWz2KmLrBpqv7A" target="_blank">Googleフォーム</a> まで</p>
      <p> 2020/07/22：v3.12 対応</p>
      <blockquote>
        <p>原文：<a href="https://www.reddit.com/r/TapTitans2/comments/8suqly/equipment_set_guide/" target="_blank">Equipment Set Guide</a></p>
      </blockquote>
      <hr>
      <h5>## はじめに</h5>
        <ul class="upd">
          <li>
            Mythic【神話】セットはLegendary【レジェンド】セットよりも強力です。セットを揃えるのは困難ですが、後半の進行度を重視したいならば、
            神話セットを優先しましょう。
          </li>
          <ul>
            <li>
              しかし、神話セットのレリックブーストは加算式なので、初めの2,3セット以降は効果が薄くなっていきます。
            </li>
            <li>
              そのため、初めに神話セットをいくつか揃えた後、レジェンドセット収集に移行していくことが重要になっています。
            </li>
          </ul>
          <li>
            装備自体の効果に着目してクラフトするより、装備セット効果に重点を置いてクラフトしましょう。
            装備は進行するたびに変えていくものですが、装備セット効果は永続です。
          </li>
        </ul>
      <br>
      <h5>## 目次</h5>
      <ul>
        <li>
          Mythics【神話】セット
        </li>
          <ul>
            <li>
              <nuxt-link v-scroll-to="'#AnWa'" to>
                ★ Ancient Warrior【古代の戦士】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#AnGu'" to>
                ★ Angelic Guardian【天使のガーディアン】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#MeSw'" to>
                ★ Mechanized Sword【機化の剣】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#TrHu'" to>
                Treasure Hunter【トレジャーハンター】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#DaPr'" to>
                Dark Predator【ダークプレデター】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#FaSa'" to>
                Fatal Samurai【致命的な侍】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#RuNe'" to>
                Ruthless Necromancer【冷酷なネクロマンサー】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#IrCr'" to>
                 Ironheart, the Crackling Tiger【電気軍閥】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#StSi'" to>
                Styxsis, the Single Touch【地球ならず者】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#IgVo'" to>
                 Ignus, the Volcanic Phoenix【火の騎士】
               </nuxt-link>
            </li>
            <li>
              <nuxt-link v-scroll-to="'#KoWh'" to>
                Kor, the Whispering Wave【水の魔術師】
               </nuxt-link>
            </li>
          </ul>
        <li>
          Legendary【レジェンド】セット
        </li>
        <ul>
          <li>
            <nuxt-link v-scroll-to="'#GoMo'" to>
               Golden Monarch【黄金の君主】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#ReFi'" to>
               Reckless Firepower【無謀な火力】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#AzKn'" to>
               Azure Knight【紺碧の騎士】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#HiVi'" to>
               Hidden Viper【隠された毒蛇】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#NiHu'" to>
               Nimble Hunter【軽快ハンター】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#AnDi'" to>
               Anniversary Diamond【アニバーサリーダイヤモンド】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#BoMe'" to>
               Bone Mender【骨の修理人】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#CeEn'" to>
               Celestial Enchanter【天体エンチャンター】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#NoFe'" to>
               ★ Noble Fencer【高貴な剣士】
            </nuxt-link>
          </li>
          <li>
            
            <nuxt-link v-scroll-to="'#ThDe'" to>
                ★ Thundering Deity【雷の神】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#EtMo'" to>
               ★ Eternal Monk【永遠の僧侶】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#ShDi'" to>
               Shadow Disciple【シャドウシーフ】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#AnPl'" to>
               ★ Anniversary Platinum【記念プラチナ】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#DeSp'" to>
               Defiant Spellslinger【反抗的な魔法使い】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#TiAt'" to>
               ★ Titan Attacker【タイタン攻撃】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#FrWa'" to>
               Frost Warden【フロスト看守】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#ChCl'" to>
               Chained Clockwork 【チェーン時計仕掛け】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#CaTi'" to>
               Captain Titan【キャプテンのタイタン】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#AmPr'" to>
               Amazon Princess【アマゾンプリンセス】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#ThSl'" to>
               The Sly Wolf【スライウルフ】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#CoEm'" to>
               Corrupt Emerald Knight【壊れたエメラルドの騎士】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#DrSl'" to>
               Dragon Slayer【ドラゴンスレイヤー】
            </nuxt-link>
          </li>
          <li>
            <nuxt-link v-scroll-to="'#AnGo'" to>
               Anniversary Gold【記念ゴールド】
            </nuxt-link>
          </li>

        </ul>
       
      </ul>

      

      <br>
      <br>
      <h4>Mythics【神話】セット</h4>
      <br>

      <h5 id="AnWa"><b># Ancient Warrior【古代の戦士】</b>
      </h5>
      <b-badge variant="danger">Tier S</b-badge>
      <div class="pbottom">
        Ancient Warrior はすぐに効果を実感できる優れた装備セットです。
        farming（周回）にも pushing（MS押し上げ）にも大きい効果があり、レリックボーナスに加えて Way Cry【雄叫び】中に 
        Shadow Clone【影分身】、クランシップ、ペットの攻撃速度を２倍にする効果を持ちます。
      </div>
      <div>
        これらのダメージソースを用いない場合でも、ほぼすべてのpushビルドで使用される Anchoring Shot【アンかリング ショット】の砲撃間隔も短縮されるので
        、どのセットを作ろうか迷っているならばこのセットから作り始めることが薦められます。
      </div>
      <br><br>

      <h5 id="AnGu"><b># Angelic Guardian【天使のガーディアン】</b></h5>
      <b-badge variant="danger">Tier S</b-badge>
      <div class="pbottom">
        Angelic Guardian も Ancient セットに次ぐ優れた装備セットです。レリックボーナス、Heavenly Strike【天空落とし】のダメ上昇、
        そして最大スプラッシュカウント＋８。これは周回速度を十分に底上げするものであり、ボス貫通のスプラッシュ攻撃を持っているビルドへの
        恩恵は特に大きくなります。
      </div>
      <div>
        HSビルド以外にとっては直接的に共通ダメージを増やす装備セットではありませんが、重要なセットであることには間違いないでしょう。
      </div>
      <br><br>

      <h5 id="MeSw"><b># Mechanized Sword【機化の剣】</b></h5>
      <b-badge variant="danger">Tier S</b-badge>
      <div class="pbottom">
       この装備セットは最も優秀であるといえますが、しかしその効果を実感できるのはゲーム最終盤に達している者のみでしょう。
       このセットは取得済みのミシックセット毎に x2 All ダメージ、そしてパッシブスキルのコストを -20% させる効果を持ちます。
       これは威圧感などのパッシブスキルのレベルが20%上昇することと同値であり、即ちゲーム終盤で多大な効果を発揮することになります。
      </div>
      <div>
        はじめにクラフトするミシックセットとしてはオススメできませんが、ゲーム終盤の周回時間短縮のためには間違いなく必要なセットです。

      </div>
      <br><br>

      <h5 id="TrHu"><b># Treasure Hunter【トレジャーハンター】</b></h5>
      <div class="pbottom">
       Treasure Hunter はレリックボーナス、Hand of Midas【ミダスの手】の効果アップ、
       そして rare, legendary, mythic 装備のドロップ率を５０％増やすという効果を持ちます。これはすなわち、得るダイヤモンドが多くなるということでもあります。
      </div>
      <div>
        それぞれのドロップ確率を rare (6.25%), legendary (1.25%), mythic (0.1%) として１日の２０装備ドロップをダイヤモンドに換算すると
        平均で 32.98 ダイヤモンドになりますが、これに Treasure Hunter の効果が加わると、平均で 39.47 ダイヤモンドになります。直接的な恩恵は少ないものの、
        この装備セットの効果はシャードの節約に繋がり、得られるダイヤの量も増加します。揃えて損は無い装備であることは確かです。
      </div>
      <br><br>

      <h5 id="DaPr"><b># Dark Predator【ダークプレデター】</b></h5>
      <div>
       Dark Predator はレリックボーナス、Deadly Strike【致命的な一撃】ボーナス、そしてスニークカウントに倍率が掛かります。
       放置進行をメインにするプレイスタイルなら優先度は高くなるでしょう。
      </div>

      <br><br>

      <h5 id="FaSa"><b># Fatal Samurai【致命的な侍】</b></h5>
      <div class="pbottom">
       Fatal Samurai は push 力を押し上げる良い装備セットです。ただしその効果は既に大量のペットを持っているプレイヤーにしか
       実感できないかもしれません。レリックボーナス、Fire Sword【炎の剣】ボーナス、そしてアクティブペットのレベルを２５％上昇させる効果を持ちます。
       この効果が push 力を押し上げる理由は、行き詰ったらゴールド効果ペットに換えてゴ―ルドを稼ぎ、そしてダメージ効果ペットに換えて push すると
       いうことを繰り返せるからです。
      </div>
      <div>
        さらにフラッッファーの効果を２５％増させることもできるので、Mana供給に飢えているビルドにもおすすめです。
        高レベルのペットを持っているプレイヤーにとって優良セットであることは間違いありません。
      </div>
      <br><br>

      <h5 id="RuNe"><b># Ruthless Necromancer【冷酷なネクロマンサー】</b></h5>
      <div>
       Ruthless Necromancer は SCビルド以外のプレイヤーにとっては最も弱い装備セットです。レリックボーナス、Shadow Clone のダメージボーナス、
       そしてShadow Clone にボス貫通スプラッシュ属性を付与するという効果を持ちます。それはSCビルドの周回速度を大幅に上昇させるものであり、
       SCビルドのプレイヤーは最優先で揃えたい装備セットです。
      </div>
      <br><br>

      <h5 id="IrCr"><b># Ironheart, the Crackling Tiger【電気軍閥】</b></h5>
      <div>
       Ironheart, the Crackling Tiger は Warlord【軍閥】ツリーのTier4スキルをブーストします。
       これはtier4スキルのレベルカウントを+1することを意味しており、ダメージ倍率を大幅に強化します。
       Warlordブーストでは、他にもヒーロー、War Cry【雄叫び】、クランシップのダメージも強化されます。
       強力なセットではありますが、他の主要なミシックセットよりは優先度は低めです。
      </div>
      <br><br>

      <h5 id="StSi"><b># Styxsis, the Single Touch【地球ならず者】</b></h5>
      <div>
       Styxsis, the Single Touch は Rogue【ローグ】ツリーのTier4スキルをブーストします。
       これはtier4スキルのレベルカウントを+1することを意味しており、ダメージ倍率を大幅に強化します。
       Rogueブーストでは、他にもDeadly Strike【致命的な一撃】ダメージ、放置ゴールドも強化されます。
       強力なセットではありますが、他の主要なミシックセットよりは優先度は低めです。
      </div>
      <br><br>

      <h5 id="IgVo"><b># Ignus, the Volcanic Phoenix【火の騎士】</b></h5>
      <div>
       Ignus, the Volcanic Phoenix は Knight【騎士】ツリーのTier4スキルをブーストします。
       これはtier4スキルのレベルカウントを+1することを意味しており、ダメージ倍率を大幅に強化します。
       Knightブーストでは、他にもタップ、ペット、Fire Sword【炎の剣】ダメージも強化されます。
       強力なセットではありますが、他の主要なミシックセットよりは優先度は低めです。
      </div>
      <br><br>

      <h5 id="KoWh"><b># Kor, the Whispering Wave【水の魔術師】</b></h5>
      <div>
       Kor, the Whispering Wave は Sorcerer【魔術師】ツリーのTier4スキルをブーストします。
       これはtier4スキルのレベルカウントを+1することを意味しており、ダメージ倍率を大幅に強化します。
       Sorcererブーストでは、他にもSCとHSのダメージ、Hand of Midas【ミダスの手】ゴールドも強化されます。
       強力なセットではありますが、他の主要なミシックセットよりは優先度は低めです。
      </div>
      <br><br>
      <h4>Legendary【レジェンド】セット</h4>
      <br>

      <h5 id="GoMo"><b># Golden Monarch【黄金の君主】</b></h5>
      <div>
        HoM【ミダスの手】の継続時間バフに加えて、レジェンドセットのコンプリート数だけゴールドを強化します。これは終盤になるにつれ効果が増します。
      </div>
      <br><br>

      <h5 id="ReFi"><b># Reckless Firepower【無謀な火力】</b></h5>
      <div>
        ボーナスタップカウント追加、Warlordブースト（ヒーロー、War Cry【雄叫び】、クランシップのダメージ強化）の効果を持ちます。
        強化の度合いは軽微なので、そこまで優先度は高くありません。
      </div>
      <br><br>

      <h5 id="AzKn"><b># Azure Knight【紺碧の騎士】</b></h5>
      <div>
        HSダメージとマナ回復を強化します。
      </div>
      <br><br>

      <h5 id="HiVi"><b># Hidden Viper【隠された毒蛇】</b></h5>
      <div>
        クロークドステージ（クローク可能なステージ範囲）とローグツリー（Deadly Strike【致命的な一撃】と放置ゴールド）が強化されます。
        クローキングを使用するなら揃えて損はありません。
      </div>
      <br><br>

      <h5 id="NiHu"><b># Nimble Hunter【軽快ハンター】</b></h5>
      <div>
        アクティブスキルの発動時間延長と、マークスマンブースト（遠距離ヒーロー＋スラッシュ装備強化）の効果を持ちます。
        全てのビルドに恩恵のある良セットです。
      </div>
      <br><br>

      <h5 id="AnDi"><b># Anniversary Diamond【アニバーサリーダイヤモンド】</b></h5>
      <div>
        揃っているレジェンドセット数だけ全ダメージに強化が掛かります。乗算で増えていくので終盤での効果は絶大です。
        ソードマスターレベル分、ゴールドも強化されます。しかし序盤で揃えても効果は少ないので注意が必要でしょう。
      </div>
      <br><br>

      <h5 id="BoMe"><b># Bone Mender【骨の修理人】</b></h5>
      <div>
        コンパニオン（LB,HoM,FZ,CO）のクールダウンが短縮されます。実質AShの砲撃間隔も短くなるので全ビルドに恩恵があります。
        フェアリー確率が上がるのも地味に重宝します。
      </div>
      <br><br>

      <h5 id="CeEn"><b># Celestial Enchanter【天体エンチャンター】</b></h5>
      <div>
        エンチャントされたAFの効果を2倍、持っているAFの数だけ全ダメx1.05倍という、終盤に絶大な効果を発揮するセットです。
        エンチャントが揃っていなくてもBoSの効果が2倍になるだけでも強いので優先度は高いです。

      </div>
      <br><br>

      <h5 id="NoFe"><b># Noble Fencer【高貴な剣士】</b></h5>
      <b-badge variant="danger">Tier S</b-badge>
      <div>
        アドバンスドステージが増える（プレステ後、より高いステージからスタートできる）ので低XPクランに所属しているプレイヤーにとっては非常に強力なセットとなります。
        高位のクランに所属しているプレイヤーにもそれなりの効果があり、全てのビルドで周回時間が短くなるのでかなり優先度が高いです。

      </div>
      <br><br>

      <h5 id="ThDe"><b># Thundering Deity【雷の神】</b></h5>
      <b-badge variant="danger">Tier S</b-badge>
      <div>
        スナップ出現確率増加、そしてスナップ効果の重ね掛け（スナップ発動中にスナップを倒したら雑魚タイタンの数が4分の1になる）が可能になるという効果を持ちます。
       周回速度上昇の一助となり、特にトナメ1周目などでは顕著になるでしょう。
       なお Max Snap Effect Stacks（重ね掛け可能回数）は +1 で固定されています。

      </div>
      <br><br>

      <h5 id="EtMo"><b># Eternal Monk【永遠の僧侶】</b></h5>
      <b-badge variant="danger">Tier S</b-badge>
      <div>
        ポーター出現率とステージスキップ数を増加させる効果を持ちます。全てのプレイヤーがまず始めに揃えるべきレジェンドセットです。

      </div>
      <br><br>

      <h5 id="ShDi"><b># Shadow Disciple【シャドウシーフ】</b></h5>
      <div>
        DS（致命的な一撃）と放置時のゴールド、マルチスポーン確率を強化します。

      </div>
      <br><br>

      <h5 id="AnPl"><b># Anniversary Platinum【記念プラチナ】</b></h5>
      <b-badge variant="danger">Tier S</b-badge>
      <div>
        コンパニオンダメージ（SC+Pet+CSダメージ）を8倍、全てのスプラッシュスキップカウントを10%増加させる効果を持ちます。
        後者の効果は十分なスキップカウントを得るために多くのSPを必要とする
        SCビルドやHSビルドの周回速度短縮に多大な効果を発揮します。

      </div>
      <br><br>

      <h5 id="DeSp"><b># Defiant Spellslinger【反抗的な魔法使い】</b></h5>
      <div>
        SCダメージ、HSダメージ、ミダスの手、マナ返還効果（アクティブスキルを使用した際に消費マナの一部が還元される効果）が数パーセント上がります。

      </div>
      <br><br>

      <h5 id="TiAt"><b># Titan Attacker【タイタン攻撃】</b></h5>
      <b-badge variant="danger">Tier S</b-badge>
      <div>
        このセットはタイタンの召喚を10%短縮する効果と、Fundamental Damage（Tap damage + All Hero damage) を3倍にする効果を持ちます。
        周回速度を永続的に上げるという意味で、最も優先度が高いレジェンドセットの１つであると考えられます。
        アドレナリンラッシュは65%短縮ですが、このセットがあれば71.5%短縮となります。

      </div>
      <br><br>

      <h5 id="FrWa"><b># Frost Warden【フロスト看守】</b></h5>
      <div>
        All Hero, Clan Ship, War Cry【雄叫び】damage を増加、加えてチェスターソンの出現確率を上昇させます。

      </div>
      <br><br>

      <h5 id="ChCl"><b># Chained Clockwork 【チェーン時計仕掛け】</b></h5>
      <div>
        Shadow Clone のダメージボーナスと special attempt を増やす効果を持ちます。
        後者の効果はSC発動中に Mana Siphon【マナサイホン】と Lightning Strike【ライトニングストライク】の発動率を増やす効果で
        、SC以外のビルドにも需要があります。

      </div>
      <br><br>

      <h5 id="CaTi"><b># Captain Titan【キャプテンのタイタン】</b></h5>
      <div>
        Tap, Fire Sword【炎の剣】,Pet ダメージを強化、そしてクリティカルチャンスを増加させる効果を持ちます。
        Pet, SC, HS ビルドのプレイヤーは是非とも手に入れたいセットです。

      </div>
      <br><br>

      <h5 id="AmPr"><b># Amazon Princess【アマゾンプリンセス】</b></h5>
      <div>
        装備セットの効果を強化します。Ring of Calisto【カリストの指輪】の効果がn倍されるのと同値です。
      </div>
      <br><br>

      <h5 id="ThSl"><b># The Sly Wolf【スライウルフ】</b></h5>
      <div>
        放置時に進めるステージがMS90%⇒99%になり、スニークカウントも一定数加算されます。放置プレイを主軸にする場合は必須級のセットです
        。

      </div>
      <br><br>

      <h5 id="CoEm"><b># Corrupt Emerald Knight【壊れたエメラルドの騎士】</b></h5>
      <div>
        ペットダメージボーナス+50%、つまり Heart of Storms【嵐の心】の効果を1.5倍することと同等の効果を持ちます。

      </div>
      <br><br>

      <h5 id="DrSl"><b># Dragon Slayer【ドラゴンスレイヤー】</b></h5>
      <div>
        全てのアクティブスキルの効果を2倍、マナ最大値を+50する効果を持ちます。

      </div>
      <br><br>

      <h5 id="AnGo"><b># Anniversary Gold【記念ゴールド】</b></h5>
      <div>
        All damage と All Gold をそれぞれ５倍する効果を持ちます。

      </div>
      <br><br>
      

      
     


  
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTop: function(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
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
.badge {
  margin-bottom: 10px;
}
.pbottom{
  padding-bottom: 15px;
}

ul.upd {
    padding-inline-start: 0px;
}

ul.upd li {
  padding-bottom: 10px;
  padding-inline-start: 0px;
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
