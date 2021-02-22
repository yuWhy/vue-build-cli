export default {
  data () {
    return {
      msg: 'hell mixin',
      title: 'mixin-title'
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