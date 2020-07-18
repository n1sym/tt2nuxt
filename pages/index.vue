<template>
  <div class="container">
    <div>
      TapTitans2 の攻略・便利ツールなど<br><br>
      <p>ご意見ご要望あれば、<a href="https://forms.gle/rPgeWz2KmLrBpqv7A" target="_blank">Googleフォーム</a>までお願いします。</p>
      <ul>
      <li>
        <nuxt-link to="/page/artifact"
        class="button--grey2"
        >アーティファクト一覧・解説 <b-icon icon="link45deg"></b-icon></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/page/card"
        class="button--grey2"
        >レイドカード一覧・解説 <b-icon icon="link45deg"></b-icon></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/updates/devupdate"
        class="button--grey2"
        >アップデート情報まとめ <b-icon icon="link45deg"></b-icon></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/convert"
        class="button--grey2"
        >レイドログ変換くん <b-icon icon="link45deg"></b-icon></nuxt-link>
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
  padding-top: 10px;
}
</style>
