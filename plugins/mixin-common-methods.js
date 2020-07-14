import Vue from 'vue'

Vue.mixin({
  methods: {
    invalid_detect: function() {
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
      var invalid_damage_list = []
      for(var j=0; j<count; j++){
         invalid_damage_list.push({"name":[],"titan":[], "parts":[], "damage":[]})
       }
      for (var i = 0; i < data.length; i++) {
        if (data[i][4] == undefined) {break;}
        if ((data[i][4]).includes('Terro') || (data[i][4]).includes('テロ―')){
          for (var k = 6; k < 22; k++){
            if (invalid_parts["terro"].includes(k)){
              if (data[i][k] != "0" && Number(data[i][k]) > this.kagen ){
                invalid_damage_list[(data[i][3])]["name"].push(data[i][0])
                invalid_damage_list[(data[i][3])]["titan"].push(data[i][4])
                invalid_damage_list[(data[i][3])]["parts"].push(data[0][k])
                invalid_damage_list[(data[i][3])]["damage"].push(data[i][k])
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
              }
            }
          }
        }
      }
      this.invalid_list = invalid_damage_list
      this.open = true
    },
    parts_cookie_set: function() {
      const parts_setCached = this.check_items
      this.$cookies.set('parts_cookies', parts_setCached, {
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