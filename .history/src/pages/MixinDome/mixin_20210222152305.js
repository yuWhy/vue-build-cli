export default {
  data () {
    return {
      msg: 'hell mixin'
    }
  },
  created: function() {
    console.log('zai mixin.js')
  },
  methods: {
    displayMessage: function() {
      console.log('zai mixin.js zhong de methods')
    }
  }
}