import Vue from 'vue'

Vue.mixin({
  methods: {
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