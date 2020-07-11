<template>
  <div class="container">

    <h2>レイドログ変換くん v2</h2>
    <br>
    <b-form-textarea 
      v-model="message" 
      rows="8"
      placeholder="レイドログを入力してください..."
      ></b-form-textarea>
    <br>
    <b-button variant="primary" v-on:click="clear">clear</b-button><br><br>
    <b-table striped hover :items="items" v-if="open"></b-table>
    
  </div>
</template>


<script>
export default {
  data () {
    return {
      message: '',
      output_message: '',
      results: [],
      open: false,
      items: [
          { name:"test" , damage:0},
        ]
    }
  },
  watch: {
    message: function (val,oldval) {
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
                var total_damage = 0
                for(var j=0; j<count; j++){
                  total_damage += Number(data[i*count + j + 1][5])
                }
                this.items.push({ name: player_name, damage: total_damage})
         }
         this.results = result
         this.open = true
         return this.items.length
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