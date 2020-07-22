<template>
  <div class="container">
    <div>
      ：レミング氏によるTT2ガイド翻訳<br><br>
      <p>ご意見ご要望あれば、<a href="https://forms.gle/rPgeWz2KmLrBpqv7A" target="_blank">Googleフォーム</a>までお願いします。</p>
      <ul>
      <li>
        <nuxt-link to="/guide/equipment"
        class="button--grey2"
        >装備セットガイド <b-icon icon="link45deg"></b-icon></nuxt-link>
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
