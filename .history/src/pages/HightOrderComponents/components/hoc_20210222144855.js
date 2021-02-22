export default function Wrapper(baseComp) {
  return {
    data() {
      return {}
    },
    mounted() {},
    methods: {
      oo() {
        alert('9090')
      },
      fn1() {
        alert('额外的点击事件')
      },
      'ewai-click'() {
        alert('额外的点击事件2')
      }
    },
    render(h) {
      // 插槽的传递
      let scopedSlots = {};
      let $slots = this.$slots;
      Object.keys($slots).map((key) => (scopedSlots[key] = () => $slots[key]))

      return h(baseComp, {
        // 属性、事件的传递
        on: {
          'handle-click': this.oo,
          'ewai-click': this.fn1
        },
        // on: this.$listeners,
        attrs: this.$attrs,
        props: this.$props,
        // 插槽的传递
        scopedSlots
      })
    }
  }
}