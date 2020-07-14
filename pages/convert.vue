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
      レイドリザルトをコピーしました!
    </b-alert>
    <b-button variant="outline-primary" v-on:click="clear"><b-icon icon="trash" font-scale="1"></b-icon> Clear </b-button>
    <b-button variant="outline-info" v-on:click="onCopy(message); showAlert()"><b-icon icon="clipboard" font-scale="1"></b-icon> Copy!</b-button>
    <b-button variant="outline-secondary" v-b-toggle.collapse-1><b-icon icon="gear" font-scale="1"></b-icon> Option ▼</b-button>
    <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <div class="card-text">
        <p><b>:禁止部位の設定</b></p>
        <img class="img" :src="require(`@/assets/image/titanexample.png`)" width='280'><br><br>
        <div class="parts-table">
         <b-table small striped hover :items="check_items" :fields="parts_fields">
           <template v-slot:cell(titan)="row">
            {{ check_items[row.index][0] }}
           </template>
           <template v-slot:cell(1)="row">
            <b-form-checkbox v-model="check_items[row.index][1]"></b-form-checkbox>
           </template>
           <template v-slot:cell(2)="row">
            <b-form-checkbox v-model="check_items[row.index][2]"></b-form-checkbox>
           </template>
           <template v-slot:cell(3)="row">
            <b-form-checkbox v-model="check_items[row.index][3]"></b-form-checkbox>
           </template>
           <template v-slot:cell(4)="row">
            <b-form-checkbox v-model="check_items[row.index][4]"></b-form-checkbox>
           </template>
           <template v-slot:cell(5)="row">
            <b-form-checkbox v-model="check_items[row.index][5]"></b-form-checkbox>
           </template>
           <template v-slot:cell(6)="row">
            <b-form-checkbox v-model="check_items[row.index][6]"></b-form-checkbox>
           </template>
           <template v-slot:cell(7)="row">
            <b-form-checkbox v-model="check_items[row.index][7]"></b-form-checkbox>
           </template>
           <template v-slot:cell(8)="row">
            <b-form-checkbox v-model="check_items[row.index][8]"></b-form-checkbox>
           </template>
         </b-table>
        </div>
      </div>
    </b-card>
    </b-collapse>
    <br><br>
    <div>
     <b-tabs v-model="tabIndex" content-class="mt-3">
      <b-tab title="説明"><p>I'm the first tab {{tabIndex}}</p></b-tab>
      <b-tab title="リザルト">

     <b-form-checkbox v-model="small" inline>Small</b-form-checkbox>
     <b-form-checkbox v-model="striped" inline>Stripe</b-form-checkbox>
     <b-form-checkbox v-model="rank_open" inline>Rank</b-form-checkbox>
     <b-form-checkbox v-model="code_open" inline>Code</b-form-checkbox>
     <b-form-checkbox v-model="attack_open" inline>Attack</b-form-checkbox>
     <b-form-checkbox v-model="total_open" inline>Total</b-form-checkbox>
     <b-form-checkbox v-model="ave_open" inline>Ave</b-form-checkbox>
     <b-form-checkbox v-model="head_open" inline>Head</b-form-checkbox>
     <b-form-checkbox v-model="torso_open" inline>Torso</b-form-checkbox>
     <b-form-checkbox v-model="arm_open" inline>Arm</b-form-checkbox>
     <b-form-checkbox v-model="leg_open" inline>Leg</b-form-checkbox>
     <b-form-checkbox v-model="detail_open" inline>Detail</b-form-checkbox>
    <br><br>
    <b-table :striped="striped" 
             hover 
             :items="items" 
             :fields="fields" 
             v-if="open" 
             :small="small" 
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc">
      <template v-slot:cell(details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} 
        </b-button>
      </template>

      <template v-slot:cell(head)="row">
        {{ row.item.head }}%
      </template>
      <template v-slot:cell(torso)="row">
        {{ row.item.torso }}%
      </template>
      <template v-slot:cell(arm)="row">
        {{ row.item.arm }}%
      </template>
      <template v-slot:cell(leg)="row">
        {{ row.item.leg }}%
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <div class="chart_container">
              <p class="donut"> <doughnut-chart :chart-data="chartData(row.item.rank -1)" :options="chartOptions"/></p>
          </div>
          <br>
          <br>
          <b-row class="mb-2">
            <b-col class="text-left">
              <ul v-for="(titan, index) in titans" :key="titan">
                <li>
                 <b>{{ titan }}</b>
                 <ul v-for="(dmg,index2) in items[row.item.rank -1].titans[index]" :key="dmg">
                   <li>
                    {{index2.charAt(0).toUpperCase() + index2.slice(1)}} - {{ dmg.toLocaleString() }}
                   </li>
                 </ul>
                </li>
              </ul>
            </b-col>
          </b-row>

        </b-card>
      </template>
    </b-table>
    </b-tab>
      <b-tab title="禁止部位チェック">
         <b-row class="my-1">
           <b-col sm="4">
            <label for="input-default">下限ダメージ:</label>
          </b-col>
        </b-row>
        <b-row class="my-1">
           <b-col sm="4">
            <b-form-input id="input-default" v-model="kagen"></b-form-input>
          </b-col>
        </b-row><br>
        <b-row class="mb-2">
            <b-col class="text-left">
              <ul v-for="(titan, index) in titans" :key="titan">
                <li>
                 <b>{{ titan }}</b>
                 <ul v-for="(dmg,index2) in invalid_list[index].name" :key="dmg">
                   <li>
                   {{ invalid_list[index].name[index2]}}, {{ invalid_list[index].parts[index2]}}, {{ invalid_list[index].damage[index2]}}
                   </li>
                 </ul>
                </li>
              </ul>
            </b-col>
          </b-row>

      </b-tab>
     </b-tabs>
    </div>
    
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
      tabIndex: 0,
      showDismissibleAlert: false,
      sortBy: 'rank',
      kagen: 30000,
      sortDesc: false,
      open: false,
      striped: true,
      ave_open: false,
      total_open: true,
      rank_open: true,
      code_open: true,
      attack_open: true,
      detail_open: true,
      head_open: false,
      torso_open: false,
      arm_open: false,
      leg_open: false,
      small: true,
      check_items: [
          ["terro",false,false,false,false,false,false,false,false],
          ["sterl",false,false,false,false,false,false,false,false],
          ["jukk",false,false,false,false,false,false,false,false],
          ["lojak",false,false,false,false,false,false,false,false],
          ["mohaca",false,false,false,false,false,false,false,false],
          ["takedar",false,false,false,false,false,false,false,false],
      ],
      chartColors: [
        '#f0e68c',
        '#4682b4',
        '#ffc0cb',
        '#90ee90',
      ],
      chartLabels: ['head', 'torso', 'arm', 'leg'],
      fields: [{ key: 'rank', sortable: true },
               'name',
               'code', 
               { key: 'attack', sortable: true },
               { key: 'total', sortable: true },
               'details',
               ],
      parts_fields: ['titan','1','2','3','4','5','6','7','8'],
      chartOptions: { responsive: true,
                      maintainAspectRatio: true},
      titans: [],
      invalid_list: [],
      items: [
          { name:"test" , damage:0},
        ]
    }
  },

  computed: {
    
  },

  watch: {
    kagen: function(){
      this.invalid_detect()
    },
    check_items: function() {
      this.parts_cookie_set()
    },
    head_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i.key !== 'head'})
     } else {
     this.fields.push({ key: 'head', sortable: true })
     this.fields = this.order_fields(this.fields)
     }
    },
    torso_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i.key !== 'torso'})
     } else {
     this.fields.push({ key: 'torso', sortable: true })
     this.fields = this.order_fields(this.fields)
     }
    },
    arm_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i.key !== 'arm'})
     } else {
     this.fields.push({ key: 'arm', sortable: true })
     this.fields = this.order_fields(this.fields)
     }
    },
    leg_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i.key !== 'leg'})
     } else {
     this.fields.push({ key: 'leg', sortable: true })
     this.fields = this.order_fields(this.fields)
     }
    },
    ave_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i.key !== 'ave'})
     } else {
     this.fields.push({ key: 'ave', sortable: true })
     this.fields = this.order_fields(this.fields)
     }
    },
    total_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i.key !== 'total'})
     } else {
     this.fields.push({ key: 'total', sortable: true })
     this.fields = this.order_fields(this.fields)
     }
    },
    rank_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i.key !== 'rank'})
     } else {
     this.fields.push({ key: 'rank', sortable: true })
     this.fields = this.order_fields(this.fields)
     }
    },
    code_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i !== 'code'})
     } else {
     this.fields.push('code')
     this.fields = this.order_fields(this.fields)
     }
    },
    attack_open: function(val){
      this.cookie_set()
      if (val === false){
       this.fields = this.fields.filter(i => { return i.key !== 'attack'})
     } else {
     this.fields.push({ key: 'attack', sortable: true })
     this.fields = this.order_fields(this.fields)
     }
    },
    detail_open: function(val){
      this.cookie_set()
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
        this.titans = []
        for(var j=0; j<count; j++){
          var s = String(j+1) + " - " + data[j+1][4]
           this.titans.push(s)
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
                var total_damage = 1
                var parts_damage = {head:0, torso:0, arm:0, leg:0}
                var titans = []
                for(var j=0; j<count; j++){
                 titans.push({head:0, torso:0, arm:0, leg:0})
                }
                
                for(var j=0; j<count; j++){
                  total_damage += Number(data[i*count + j + 1][5])
                  for(var k=6; k<22; k++){
                    if(k==6 || k==14){
                      parts_damage.head += Number(data[i*count + j + 1][k])
                      titans[j].head += Number(data[i*count + j + 1][k])
                      }
                    if(k==7 || k==15){
                      parts_damage.torso += Number(data[i*count + j + 1][k])
                      titans[j].torso += Number(data[i*count + j + 1][k])
                      }
                    if(k==8 || k==10 || k==18 || k==16 || k==11 || k==19 || k==9 || k==17){
                      parts_damage.arm += Number(data[i*count + j + 1][k])
                      titans[j].arm += Number(data[i*count + j + 1][k])
                      }
                    if(k==12 || k==20 || k==13 || k==21){
                      parts_damage.leg += Number(data[i*count + j + 1][k])
                      titans[j].leg += Number(data[i*count + j + 1][k])
                      }
                  }
                }
                var persents = {head:0, torso:0, arm:0, leg:0}
                persents.head = (100* parts_damage.head / total_damage).toFixed(1)
                persents.torso = (100*parts_damage.torso / total_damage).toFixed(1)
                persents.arm = (100*parts_damage.arm / total_damage).toFixed(1)
                persents.leg = (100*parts_damage.leg / total_damage).toFixed(1)

                var ave_damage = 0
                if (total_attack !== 0){ave_damage = total_damage / total_attack}
                ave_damage = Math.round(ave_damage)
                this.items.push({ rank: i+1, 
                                  name: player_name, 
                                  code: player_code,
                                  attack: total_attack,
                                  total: total_damage,
                                  ave: ave_damage,
                                  parts: parts_damage,
                                  percents: persents,
                                  titans: titans,
                                  head: persents.head,
                                  torso: persents.torso,
                                  arm: persents.arm,
                                  leg: persents.leg,
                                  })
        }
        this.invalid_detect()
        this.tabIndex = 1
        return
       } else {
         return "hello"
       }
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
   chartData: function (id) {
     console.log(this.items.length)
      return {
        datasets: [
          {
            data:[this.items[id].parts.head, 
                  this.items[id].parts.torso, 
                  this.items[id].parts.arm,
                  this.items[id].parts.leg,
                  ],
            backgroundColor: this.chartColors,
          },
        ],
        labels: this.chartLabels,
      };
    },
   onCopy: function(message){
     if (this.message.length < 300){return}
     var text = ""
     if (this.rank_open === true) {text += 'Rank,'}
     text += 'Name,'
     if (this.code_open === true) {text += 'Code,'}
     if (this.attack_open === true) {text += 'TotalAttacks,'}
     if (this.total_open === true) {text += 'TotalDamage,'}
     if (this.ave_open === true) {text += 'AverageDamage,'}
     if (this.head_open === true) {text += 'Head(%),'}
     if (this.torso_open === true) {text += 'Torso(%),'}
     if (this.arm_open === true) {text += 'Arm(%),'}
     if (this.leg_open === true) {text += 'Leg(%),'}
     text = text.slice(0,-1)
     text += "\n"
     for (var i = 0; i < this.items.length; i++){
       if (this.rank_open === true) {text += i+1 + ','}
       text += this.items[i].name + ','
       if (this.code_open === true) {text += this.items[i].code + ','}
       if (this.attack_open === true) {text += String(this.items[i].attack) + ','}
       if (this.total_open === true) {text += String(this.items[i].total) + ','}
       if (this.ave_open === true) {text += String(this.items[i].ave) + ','}
       if (this.head_open === true) {text += String(this.items[i].head) + ','}
       if (this.torso_open === true) {text += String(this.items[i].torso) + ','}
       if (this.arm_open === true) {text += String(this.items[i].arm) + ','}
       if (this.leg_open === true) {text += String(this.items[i].leg) + ','}
       text = text.slice(0,-1)
       text += "\n"
     }
     this.$copyText(text);
   }
  },
  created() {
    if (this.$cookies.get('convert_cookies') != null){
　　　var parse = JSON.parse(this.$cookies.get('convert_cookies'))
    　this.striped = parse.striped
    　this.ave_open = parse.ave_open
    　this.total_open = parse.total_open
    　this.rank_open = parse.rank_open
    　this.code_open = parse.code_open
    　this.attack_open = parse.attack_open
    　this.detail_open = parse.detail_open
    　this.head_open = parse.head_open
    　this.torso_open = parse.torso_open
    　this.arm_open = parse.arm_open
    　this.leg_open = parse.leg_open
    　this.small = parse.small
    }
    if (this.$cookies.get('parts_cookies') != null){
　　　var parse = JSON.parse(this.$cookies.get('parts_cookies'))
        this.check_items = parse
    }
  },
}
</script>
<style>
.container {
  padding: 20px;
}

.donut {
   width: 280px;
   margin: auto;
}
@media screen and (min-width: 768px) {
  .donut {
     width: 400px;
     margin: auto;
  }
  .parts-table {
    width: 500px;
  }
}
.error {
  color: red;
}
</style>