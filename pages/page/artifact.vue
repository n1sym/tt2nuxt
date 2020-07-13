<template>
  <div class="container">
    <div>
      <b>: AF tier list</b><br><br><p><b-icon icon="cone-striped" animation="fade" font-scale="1.5"></b-icon>  工事中... </p><br>
      <p v-for="(item,index) in items" :key="item.id">
         <img class="img" :src="require(`@/assets/image/artifact/${item.acronym}.png`)" width='40'> {{ item }} {{index}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {id: 0, name: "Book of Shadows", acronym: "BoS", name_jp: "影の書"},
        {id: 1, name: "Charged Card", acronym: "CCa", name_jp: "充電カード"},
        {id: 2, name: "Stone of the Valrunes", acronym: "SotV", name_jp: "ヴァルリユーンズの石"},
      ]
    }
  },
}
</script>

<style>
.container {
  padding: 20px;
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