<template>
  <div>
      <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item to="/">Home </b-nav-item>
      
      <b-nav-item-dropdown text="Tools" right>
        <b-dropdown-item to="/convert">ログ変換</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown text="Pages" right>
        <b-dropdown-item to="/page/artifact">アーティファクト解説</b-dropdown-item>
        <b-dropdown-item to="/updates/devupdate">アップデート情報</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item to="/history"><b-icon icon="file-text"></b-icon> 更新履歴 </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey2 {
  display: inline-block;
  color: #657f9b;
  text-decoration: none;
  padding: 10px 0px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
