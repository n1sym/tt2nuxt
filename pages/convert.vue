<template>
  <div class="container">


    <h2>レイドログ変換くん v2</h2><br>


    <b-form-textarea 
      v-model="message" 
      rows="8"
      placeholder="レイドログを入力してください..."
      ></b-form-textarea>
    <br>
    <b-alert
      :show="dismissCountDown"
      dismissible
      inline
      class="mb-2"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      コピーしました!
    </b-alert>
    <b-button variant="primary" v-on:click="clear">Clear</b-button>
    <b-button variant="outline-info" v-on:click="onCopy(message); showAlert()">Copy!</b-button>
    <br><br>
    
    
     <b-form-checkbox v-model="small" inline>Small</b-form-checkbox>
     <b-form-checkbox v-model="striped" inline>Striped</b-form-checkbox>
     <b-form-checkbox v-model="rank_open" inline>Rank</b-form-checkbox>
     <b-form-checkbox v-model="code_open" inline>Code</b-form-checkbox>
     <b-form-checkbox v-model="attack_open" inline>Attack</b-form-checkbox>
     <b-form-checkbox v-model="ave_open" inline>Ave</b-form-checkbox>
     <b-form-checkbox v-model="detail_open" inline>Detail</b-form-checkbox>
    <br><br>
    <b-table :striped="striped" hover :items="items" :fields="fields" v-if="open" :small="small">

      <template v-slot:cell(details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} 
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>detail:</b></b-col>
            <b-col>{{ row.items.code }}</b-col>
            <b-col>{{ "実装中..." }}</b-col>
          </b-row>

        </b-card>
      </template>
    </b-table>
    
  </div>
</template>


<script>
export default {
  data () {
    return {
      message: '',
      output_message: '',
      results: [],
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      open: false,
      striped: true,
      ave_open: false,
      rank_open: true,
      code_open: true,
      attack_open: true,
      detail_open: false,
      small: true,
      fields: ['rank', 'name', 'code', 'attack', 'damage'],
      items: [
          { name:"test" , damage:0},
        ]
    }
  },
  watch: {
    ave_open: function(val){
      if (val === false){
       this.fields = this.fields.filter(i => { return i !== 'ave'})
     } else {
     this.fields.push('ave')
     this.fields = this.order_fields(this.fields)
     }
    },
    rank_open: function(val){
      if (val === false){
       this.fields = this.fields.filter(i => { return i !== 'rank'})
     } else {
     this.fields.push('rank')
     this.fields = this.order_fields(this.fields)
     }
    },
    code_open: function(val){
      if (val === false){
       this.fields = this.fields.filter(i => { return i !== 'code'})
     } else {
     this.fields.push('code')
     this.fields = this.order_fields(this.fields)
     }
    },
    attack_open: function(val){
      if (val === false){
       this.fields = this.fields.filter(i => { return i !== 'attack'})
     } else {
     this.fields.push('attack')
     this.fields = this.order_fields(this.fields)
     }
    },
    detail_open: function(val){
      if (val === false){
       this.fields = this.fields.filter(i => { return i !== 'details'})
     } else {
     this.fields.push('details')
     this.fields = this.order_fields(this.fields)
     }
    },
    message: function (val) {
      var message = val
      if (this.message.includes(',') && this.message.length > 500){
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
         var result = new Array(50)
         this.items = [{ name:"test" , damage:0}]
         this.items.pop()

         for (var i = 0; i < 50; i++) {
                result[i] = data[i*count + 1][0]
                var player_name = data[i*count + 1][0]
                var player_code = data[i*count + 1][1]
                if (player_code === undefined){ break }
                var total_attack = data[i*count + 1][2]
                var total_damage = 0
                for(var j=0; j<count; j++){
                  total_damage += Number(data[i*count + j + 1][5])
                }
                var ave_damage = 0
                if (total_attack !== 0){ave_damage = total_damage / total_attack}
                ave_damage = Math.round(ave_damage)
                this.items.push({ rank: i+1, 
                                  name: player_name, 
                                  code: player_code,
                                  attack: total_attack,
                                  damage: total_damage,
                                  ave: ave_damage
                                  })
         }
         
         this.open = true
         return 
       } else {
         return "hello"
       }
      this.output_message = "hello"
      this.items.pop()
      this.items.push({ name: val})
    },
  },
  methods: {
   clear: function(){
     this.message = ""
     this.open = false
   },
   countDownChanged(dismissCountDown) {
     this.dismissCountDown = dismissCountDown
   },
   showAlert() {
     if (this.message.length < 300){return}
     this.dismissCountDown = this.dismissSecs
   },
   onCopy: function(message){
     if (this.message.length < 300){return}
     var text = ""
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
     
     for (var i = 0; i < 50; i++){
       var player_name = data[i*count + 1][0]
       var player_code = data[i*count + 1][1]
       if (player_code === undefined){ break }
       var total_attack = data[i*count + 1][2]
       var total_damage = 0
       for(var j=0; j<count; j++){
         total_damage += Number(data[i*count + j + 1][5])
       }
       var ave_damage = 0
       if (total_attack !== 0){ave_damage = total_damage / total_attack}
       ave_damage = Math.round(ave_damage)

       if (this.rank_open === true) {text += i+1 + ','}
       text += player_name + ','
       if (this.code_open === true) {text += player_code + ','}
       if (this.attack_open === true) {text += String(total_attack) + ','}
       text += String(total_damage) + ','
       if (this.ave_open === true) {text += String(ave_damage) + ','}
       text = text.slice(0,-1)
       text += "\n"
     }
     this.$copyText(text);
   }
  }
}
</script>
<style>
.container {
  padding: 20px;
}
.error {
  color: red;
}
</style>