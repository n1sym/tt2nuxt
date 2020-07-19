import Vue from 'vue'
import firebase from "@/plugins/firebase"

Vue.mixin({
  methods: {
    cookie_set_af: function () {
      const setCached = 
        {
          selected_lang: this.selected_lang,
          selected_tier: this.selected_tier,
          selected_pool: this.selected_pool,
        }
      this.$cookies.set('cookie_set_af', setCached, {
        path: '/',
        maxAge: 60 * 60 * 24 * 70
      })
    },
    check_opt: function(i) {
      var art = this.artifacts[i]
      if(this.selected_tier.includes(art.tier) == false){
        return false
      }
      if(this.selected_pool.includes(art.pool) == false){
        return false
      }
      if(this.enchant == true && art.enchant == ""){
        return false
      }
      if(this.text != ""){
        if(art.name.toUpperCase().match(this.text.toUpperCase()) == null && art.name_jp.toUpperCase().match(this.text.toUpperCase()) == null){
          return false
        }
      }
      return true
      
    },
    art_set: function(){
      var items = []
      for(var i=0; i<this.artifacts.length; i++){
        if(this.check_opt(i)){
        items.push(this.artifacts[i])
        }
      }
      this.items = items
    },
    tier_view: function (i) {
      switch(i){
        case 0: return "S"; case 1: return "A"; case 2: return "B"; case 3: return "C"
      }
    },
    save_data: function() {
      var date = new Date()
      var month = String(date.getMonth()+1)
      var day = String(date.getDate())
      var hour = String(date.getHours())
      var minute = String(date.getMinutes())
      var sec = String(date.getSeconds())
      var name = "raidlog" + String(date.getFullYear()) + month +"/raid_log-" + this.items[0].name + ":" + this.items[1].name + ":" + this.items[2].name + ":" + this.clan_ave_damage + ":" + month + "-" + day + " " + hour + ":" + minute + ":" + sec
      var text = ""
      for (var i = 0; i < this.items.length; i++){
        text += i+1 + ','
        text += this.items[i].name + ','
        text += this.items[i].code + ','
        text += String(this.items[i].attack) + ','
        text += String(this.items[i].total) + ','
        text += String(this.items[i].ave) + ','
        text += String(this.items[i].head) + ','
        text += String(this.items[i].torso) + ','
        text += String(this.items[i].arm) + ','
        text += String(this.items[i].leg) + ','
        text = text.slice(0,-1)
        text += "<br>"
      }
      var file = new File([text], name, {
        type: "text/html;charset=utf-8",
      })
      var ref = firebase.storage().ref().child(file.name)
      ref.put(file).then(function(snapshot) {
      })
      console.log(name)
    },
    invalid_detect: function() {
      if (this.message.includes(',') == null || this.message.length < 500){return}
      const regax = /\n/gi
        var s = this.message.replace(regax,',')
        var arr = new Array()
        arr = s.split(',')
        var data = new Array(1000)
        for (var i=0; i<data.length; i++){
          data[i] = new Array(30)
        }
        for (var i = 0; i < data.length; i++) {
               for (var j = 0; j < data[i].length; j++) {
                   var k = j + 30*i
                   data[i][j] = arr[k]
               }
        }
        var count = 0
        const name = data[1][0]
        while(data[count+1][0]==name){
          count++
        }
      var invalid_parts = {
        "terro": [], "sterl": [], "jukk":[], "lojak":[], "mohaca": [], "takedar":[]
      }

      for (var i = 0; i < 5 ; i++){
        for (var j = 1; j < 9 ; j++){
          if (this.check_items[i][j] === true){
            switch (j) {
              case 1:
                invalid_parts[this.check_items[i][0]].push(8,16)
                break;
              case 2:
                invalid_parts[this.check_items[i][0]].push(10,18)
                break;
              case 3:
                invalid_parts[this.check_items[i][0]].push(12,20)
                break;
              case 4:
                invalid_parts[this.check_items[i][0]].push(13,21)
                break;
              case 5:
                invalid_parts[this.check_items[i][0]].push(11,19)
                break;
              case 6:
                invalid_parts[this.check_items[i][0]].push(9,17)
                break;
              case 7:
                invalid_parts[this.check_items[i][0]].push(6,14)
                break;
              case 8:
                invalid_parts[this.check_items[i][0]].push(7,15)     
                break;         
            }
          }
        }
      }
      var invalid_damage_total = 0
      var invalid_damage_list = []
      for(var j=0; j<count; j++){
         invalid_damage_list.push({"name":[],"titan":[], "parts":[], "damage":[]})
       }
      for (var i = 0; i < data.length; i++) {
        if (data[i][4] == undefined) {break;}
        if ((data[i][4]).includes('Terro') || (data[i][4]).includes('テロ')){
          for (var k = 6; k < 22; k++){
            if (invalid_parts["terro"].includes(k)){
              if (data[i][k] != "0" && Number(data[i][k]) > this.kagen ){
                invalid_damage_list[(data[i][3])]["name"].push(data[i][0])
                invalid_damage_list[(data[i][3])]["titan"].push(data[i][4])
                invalid_damage_list[(data[i][3])]["parts"].push(data[0][k])
                invalid_damage_list[(data[i][3])]["damage"].push(data[i][k])
                invalid_damage_total += Number(data[i][k])
              }
            }
          }
        }
      }
      
      for (var i = 0; i < data.length; i++) {
        if (data[i][4] == undefined) {break;}
        if ((data[i][4]).includes('Sterl') || (data[i][4]).includes('スタール')){
          for (var k = 6; k < 22; k++){
            if (invalid_parts["sterl"].includes(k)){
              if (data[i][k] != "0" && Number(data[i][k]) > this.kagen ){
                invalid_damage_list[(data[i][3])]["name"].push(data[i][0])
                invalid_damage_list[(data[i][3])]["titan"].push(data[i][4])
                invalid_damage_list[(data[i][3])]["parts"].push(data[0][k])
                invalid_damage_list[(data[i][3])]["damage"].push(data[i][k])
                invalid_damage_total += Number(data[i][k])
              }
            }
          }
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i][4] == undefined) {break;}
        if ((data[i][4]).includes('Mohaca') || (data[i][4]).includes('モハカ')){
          for (var k = 6; k < 22; k++){
            if (invalid_parts["mohaca"].includes(k)){
              if (data[i][k] != "0" && Number(data[i][k]) > this.kagen ){
                invalid_damage_list[(data[i][3])]["name"].push(data[i][0])
                invalid_damage_list[(data[i][3])]["titan"].push(data[i][4])
                invalid_damage_list[(data[i][3])]["parts"].push(data[0][k])
                invalid_damage_list[(data[i][3])]["damage"].push(data[i][k])
                invalid_damage_total += Number(data[i][k])
              }
            }
          }
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i][4] == undefined) {break;}
        if ((data[i][4]).includes('Jukk') || (data[i][4]).includes('ジャック')){
          for (var k = 6; k < 22; k++){
            if (invalid_parts["jukk"].includes(k)){
              if (data[i][k] != "0" && Number(data[i][k]) > this.kagen ){
                invalid_damage_list[(data[i][3])]["name"].push(data[i][0])
                invalid_damage_list[(data[i][3])]["titan"].push(data[i][4])
                invalid_damage_list[(data[i][3])]["parts"].push(data[0][k])
                invalid_damage_list[(data[i][3])]["damage"].push(data[i][k])
                invalid_damage_total += Number(data[i][k])
              }
            }
          }
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i][4] == undefined) {break;}
        if ((data[i][4]).includes('Lojak') || (data[i][4]).includes('ロジャク')){
          for (var k = 6; k < 22; k++){
            if (invalid_parts["lojak"].includes(k)){
              if (data[i][k] != "0" && Number(data[i][k]) > this.kagen ){
                invalid_damage_list[(data[i][3])]["name"].push(data[i][0])
                invalid_damage_list[(data[i][3])]["titan"].push(data[i][4])
                invalid_damage_list[(data[i][3])]["parts"].push(data[0][k])
                invalid_damage_list[(data[i][3])]["damage"].push(data[i][k])
                invalid_damage_total += Number(data[i][k])
              }
            }
          }
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i][4] == undefined) {break;}
        if ((data[i][4]).includes('Takedar') || (data[i][4]).includes('テーケダー')){
          for (var k = 6; k < 22; k++){
            if (invalid_parts["takedar"].includes(k)){
              if (data[i][k] != "0" && Number(data[i][k]) > this.kagen ){
                invalid_damage_list[(data[i][3])]["name"].push(data[i][0])
                invalid_damage_list[(data[i][3])]["titan"].push(data[i][4])
                invalid_damage_list[(data[i][3])]["parts"].push(data[0][k])
                invalid_damage_list[(data[i][3])]["damage"].push(data[i][k])
                invalid_damage_total += Number(data[i][k])
              }
            }
          }
        }
      }
      this.invalid_list = invalid_damage_list
      this.open = true
      this.invalid_damage_total = invalid_damage_total
      this.kagen_check()
      console.log("禁止部位処理です")
    },
    kagen_check: function() {
      console.log(this.kagen)
      var list = this.invalid_list
      var view_list = []
      for(var j=0; j<this.titans.length; j++){
        view_list.push({"name":[],"titan":[], "parts":[], "damage":[]})
      }
      var kagen = this.kagen
      var invalid_damage_total = 0
      for(var i=0; i<list.length; i++){
        for(var j=0; j<list[i].name.length; j++){
          if (Number(list[i].damage[j]) >= kagen){
            view_list[i]["name"].push(list[i].name[j])
            view_list[i]["titan"].push(list[i].titan[j])
            view_list[i]["parts"].push(list[i].parts[j])
            view_list[i]["damage"].push(list[i].damage[j])
            invalid_damage_total += Number(list[i].damage[j])
          }
        }
      }
      this.invalid_list_view = view_list
      this.invalid_damage_total_view = invalid_damage_total
    },
    parts_cookie_set: function() {
      const parts_setCached = this.check_items
      this.$cookies.set('parts_cookies', parts_setCached, {
        path: '/',
        maxAge: 60 * 60 * 24 * 70
      })
    },
    kagen_cookie_set: function() {
      const kagen_setCached = this.kagen
      this.$cookies.set('kagen_cookies', kagen_setCached, {
        path: '/',
        maxAge: 60 * 60 * 24 * 70
      })
    },
    cookie_set: function () {
      const setCached = 
        {
          striped: this.striped,
          ave_open: this.ave_open,
          total_open: this.total_open,
          rank_open: this.rank_open,
          code_open: this.code_open,
          attack_open: this.attack_open,
          detail_open: this.detail_open,
          head_open: this.head_open,
          torso_open: this.torso_open,
          arm_open: this.arm_open,
          leg_open: this.leg_open,
          small: this.small,
          kagen: this.kagen
        }
      this.$cookies.set('convert_cookies', setCached, {
        path: '/',
        maxAge: 60 * 60 * 24 * 70
      })
    },
    order_fields: function (fields) {
      var order_fields = []
      function isRank(fruit) { 
        return fruit.key === 'rank';
      }
      function isAttack(fruit) { 
        return fruit.key === 'attack';
      }
      function isTotal(fruit) { 
        return fruit.key === 'total';
      }
      function isAve(fruit) { 
        return fruit.key === 'ave';
      }
      function isArm(fruit) { 
        return fruit.key === 'arm';
      }
      function isHead(fruit) { 
        return fruit.key === 'head';
      }
      function isTorso(fruit) { 
        return fruit.key === 'torso';
      }
      function isLeg(fruit) { 
        return fruit.key === 'leg';
      }
      if (fields.find(isRank)){order_fields.push({ key: 'rank', sortable: true })}
      if (fields.includes('name')){order_fields.push('name')}
      if (fields.includes('code')){order_fields.push('code')}
      if (fields.find(isAttack)){order_fields.push({ key: 'attack', sortable: true })}
      if (fields.find(isTotal)){order_fields.push({ key: 'total', sortable: true })}
      if (fields.find(isAve)){order_fields.push({ key: 'ave', sortable: true })}
      if (fields.find(isHead)){order_fields.push({ key: 'head', sortable: true })}
      if (fields.find(isTorso)){order_fields.push({ key: 'torso', sortable: true })}
      if (fields.find(isArm)){order_fields.push({ key: 'arm', sortable: true })}
      if (fields.find(isLeg)){order_fields.push({ key: 'leg', sortable: true })}
      if (fields.includes('details')){order_fields.push('details')}
      return order_fields
    }
  }
})