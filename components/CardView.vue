<template>
<div>
   <div class="afmenu">
          <div><img class="img" :src="`${item.image}`" width='50'></div>
          <div class="afname"> 
            <b>{{ item.Name }} : {{ item.NameJP }} </b>
            <br>
            <img class="img"  :src="`${category[item.Category]}`" width='18'> {{item.Category}}
          </div>
        </div>
        
        <div div class="afinfo">
          MaxStacks: {{ item.MaxStacks }} / Duration: {{ duration}} / Chance: {{chance}}
        </div>

        <div div class="afdescc">
          {{ item.Description }} 
        </div>
        <div class="des_en">
          {{ item.DescriptionEN }} 
         
        </div>
        <b-form-checkbox class="moreinfo" v-model="info" name="check-button" switch>
        More Info
        </b-form-checkbox> 
        <div v-if="info">
          <b-table 
            striped 
            hover
            small
            :items="card_info"
            >
          </b-table>
        </div>
        
        <br> <br>
</div>

</template>

<script>
export default {
  data () {
    return {
      info: false,
      category: 
        {
         "Burst" : "https://firebasestorage.googleapis.com/v0/b/tt2tools.appspot.com/o/cards%2FBurst.png?alt=media&token=e941d69e-7580-4517-9d5c-16fa30d62bf1", 
         "Affliction": "https://firebasestorage.googleapis.com/v0/b/tt2tools.appspot.com/o/cards%2FAffliction.png?alt=media&token=6c408379-fc19-4a49-9b9e-ecab0393db82", 
         "Support" : "https://firebasestorage.googleapis.com/v0/b/tt2tools.appspot.com/o/cards%2FSupport.png?alt=media&token=23b81092-52a3-428e-890b-198f2e0770d3",
         },
      card_info: [],
      data: [
        {
          "card": 1,
          "dust": 0,
          "cum_dust": 20
        },
        {
          "card": 4,
          "dust": 45,
          "cum_dust": 125
        },
        {
          "card": 9,
          "dust": 55,
          "cum_dust": 280
        },
        {
          "card": 16,
          "dust": 60,
          "cum_dust": 480
        },
        {
          "card": 25,
          "dust": 100,
          "cum_dust": 760
        },
        {
          "card": 36,
          "dust": 120,
          "cum_dust": 1100
        },
        {
          "card": 54,
          "dust": 200,
          "cum_dust": 1660
        },
        {
          "card": 76,
          "dust": 250,
          "cum_dust": 2350
        },
        {
          "card": 101,
          "dust": 300,
          "cum_dust": 3150
        },
        {
          "card": 136,
          "dust": 400,
          "cum_dust": 4250
        },
        {
          "card": 181,
          "dust": 450,
          "cum_dust": 5600
        },
        {
          "card": 236,
          "dust": 550,
          "cum_dust": 7250
        },
        {
          "card": 296,
          "dust": 700,
          "cum_dust": 9150
        },
        {
          "card": 386,
          "dust": 1000,
          "cum_dust": 11950
        },
        {
          "card": 501,
          "dust": 1350,
          "cum_dust": 15600
        },
        {
          "card": 626,
          "dust": 1400,
          "cum_dust": 19500
        },
        {
          "card": 759,
          "dust": 1425,
          "cum_dust": 23585
        },
        {
          "card": 896,
          "dust": 1450,
          "cum_dust": 27775
        },
        {
          "card": 1036,
          "dust": 1475,
          "cum_dust": 32050
        },
        {
          "card": 1186,
          "dust": 1650,
          "cum_dust": 36700
        },
        {
          "card": 1341,
          "dust": 1700,
          "cum_dust": 41500
        },
        {
          "card": 1511,
          "dust": 1800,
          "cum_dust": 46700
        },
        {
          "card": 1686,
          "dust": 1850,
          "cum_dust": 52050
        },
        {
          "card": 1862,
          "dust": 1900,
          "cum_dust": 57470
        },
        {
          "card": 2040,
          "dust": 1950,
          "cum_dust": 62980
        },
        {
          "card": 2220,
          "dust": 2000,
          "cum_dust": 68580
        },
        {
          "card": 2402,
          "dust": 2050,
          "cum_dust": 74270
        },
        {
          "card": 2586,
          "dust": 2150,
          "cum_dust": 80100
        },
        {
          "card": 2806,
          "dust": 2445,
          "cum_dust": 86945
        },
        {
          "card": 3028,
          "dust": 2465,
          "cum_dust": 93850
        },
        {
          "card": 3252,
          "dust": 2490,
          "cum_dust": 100820
        },
        {
          "card": 3478,
          "dust": 2510,
          "cum_dust": 107850
        },
        {
          "card": 3706,
          "dust": 2530,
          "cum_dust": 114940
        },
        {
          "card": 3936,
          "dust": 2555,
          "cum_dust": 122095
        },
        {
          "card": 4168,
          "dust": 2580,
          "cum_dust": 129315
        },
        {
          "card": 4402,
          "dust": 2600,
          "cum_dust": 136595
        },
        {
          "card": 4638,
          "dust": 2625,
          "cum_dust": 143940
        },
        {
          "card": 4878,
          "dust": 2665,
          "cum_dust": 151405
        },
        {
          "card": 5138,
          "dust": 2885,
          "cum_dust": 159490
        },
        {
          "card": 5402,
          "dust": 2935,
          "cum_dust": 167705
        },
        {
          "card": 5668,
          "dust": 2955,
          "cum_dust": 175980
        },
        {
          "card": 5936,
          "dust": 2980,
          "cum_dust": 184320
        },
        {
          "card": 6286,
          "dust": 3500,
          "cum_dust": 194820
        },
        {
          "card": 6646,
          "dust": 3600,
          "cum_dust": 205620
        },
        {
          "card": 7011,
          "dust": 3650,
          "cum_dust": 216570
        },
        {
          "card": 7381,
          "dust": 3700,
          "cum_dust": 227670
        },
        {
          "card": 7761,
          "dust": 3800,
          "cum_dust": 239070
        },
        {
          "card": 8146,
          "dust": 3850,
          "cum_dust": 250620
        },
        {
          "card": 8536,
          "dust": 3900,
          "cum_dust": 262320
        },
        {
          "card": 8936,
          "dust": 4000,
          "cum_dust": 274320
        }
      ]
    }
  },
  props: {
    item: {
    }
  },
  computed: {
    chance() {
      return String(Math.round(this.item.Chance *100)) + "%"
    },
    duration() {
      return String(Math.round(this.item.Duration)) + "s"
    }
  },
  created() {
    var card_info = []
    for (let index = 0; index <this.data.length; index++) {
       var a = "A" + String(index+1)
       var b = "B" + String(index+1)
       card_info.push({lvl: index+1, Eff1: this.item[a], Eff2: this.item[b], card: this.data[index].card, dust: this.data[index].dust, cum_dust: this.data[index].cum_dust})
    }
    this.card_info = card_info
  },
}
</script>

<style>
.moreinfo{
  margin-bottom: 5px;
  margin-top: 5px;
}

</style>