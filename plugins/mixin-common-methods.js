import Vue from 'vue'

Vue.mixin({
  methods: {
    order_fields: function (fields) {
      var order_fields = []
      if (fields.includes('rank')){order_fields.push('rank')}
      if (fields.includes('name')){order_fields.push('name')}
      if (fields.includes('code')){order_fields.push('code')}
      if (fields.includes('attack')){order_fields.push('attack')}
      if (fields.includes('damage')){order_fields.push('damage')}
      if (fields.includes('ave')){order_fields.push('ave')}
      if (fields.includes('details')){order_fields.push('details')}
      return order_fields
    }
  }
})