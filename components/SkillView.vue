<template>
<div>
  <div class="afmenu">
    <div class="afimage"><img class="img" :src="`${images[item.Acr]}`" width='50'></div>
    <div class="afname"> <b>{{item.Name}} / {{item.Name_jp}}</b> <br>
    <b-badge :variant="skill_type">Tier {{item.Tier}}</b-badge>
    <b-badge :variant="skill_type">Max {{item.MaxLevel}}</b-badge>
    </div>
  </div>
  <div class="afdescs"> {{item.Note_jp}} </div>
  <div class="des_en"> {{item.Note}} </div>
   <b-form-checkbox class="moreinfo" v-model="info" name="check-button" switch>
     More Info
   </b-form-checkbox> 
   <div v-if="info">
     <div> <b>Eff1</b> : {{item.BonusTypeA_jp}}</div>
     <div class="table_card"><b>Eff2</b> : {{item.BonusTypeB_jp}}</div>
     <b-table 
       striped 
       hover
       small
       :items="skill_info"
       >
     </b-table>
   </div>
   <br>
   
</div>

</template>

<script>
export default {
  data () {
    return {
      info: false,
      skill_info: []
    }
  },
  props: {
    item: {
    },
    images:{
    }
  },
  watch: {
    info: function(){
      console.log(this.item)
    },
  },
  computed: {
    skill_type(){
      switch(this.item.Class){
        case "Knight":
          return "danger"
        case "Sorcerer":
          return "info"
        case "Warlord":
          return "warning"
        case "Rogue":
          return "success"    

      }
      
    }

  },
  created() {
    var skill_info = []
    var n = this.item.MaxLevel
    for (let index = 0; index < n; index++) {
       var a = "A" + String(index+1)
       var b = "B" + String(index+1)
       var c = "C" + String(index)
       skill_info.push({lvl: index+1, cost: this.item[c], Eff1: this.item[a], Eff2: this.item[b]})
    }
    
    this.skill_info = skill_info
  },
}
</script>

<style>
.moreinfo{
  margin-bottom: 5px;
  margin-top: 5px;
}

</style>