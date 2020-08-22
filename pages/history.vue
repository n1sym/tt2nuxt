<template>
  <div class="container">
    <div>
      <b>: 更新履歴</b><br><br>
      <p>ご意見ご要望あれば、<a href="https://forms.gle/rPgeWz2KmLrBpqv7A" target="_blank">Googleフォーム</a>までお願いします。</p>
      <ul>
      <li id="upd">
        装備セットガイド翻訳ページを作成。<br>(2020-07-22)
      </li>
      <li id="upd">
        AF一覧・解説ページを更新。エンチャント済みのみ表示と、tier表記をゲーム内準拠に変更。<br>(2020-07-19)
      </li>
      <li id="upd">
        v3.12に対応したスキルツリー一覧・解説ページを作成。レベルテーブル情報などの詳細情報も確認可能。<br>(2020-07-19)
      </li>
      <li id="upd">
        v3.12に対応したレイドカード一覧・解説ページを作成。レベルテーブル情報などの詳細情報も確認可能。<br>(2020-07-18)
      </li>
      <li id="upd">
        AF一覧・解説ページを作成。tier、pool毎に表示、AF名検索機能を実装。<br>(2020-07-17)
      </li>
      <li id="upd">
        レイドログ変換に禁止部位チェッカー機能を追加しました。<br>(2020-07-15)
      </li>
      <li id="upd">
        レイドログ変換に各部位の攻撃割合カラム、ソート機能、各ユーザーの攻撃先の詳細を確認できる機能を追加しました（グラフ描画）。<br>(2020-07-12)
      </li>
      <li id="upd">
        レイドログ変換の基本機能を実装しました。<br>(2020-07-11)
      </li>
      
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>
