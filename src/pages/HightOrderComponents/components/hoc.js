export default function Wrapper(baseComp) {
  return {
    data() {
      return {
        aa: 'jfewfhwe'
      }
    },
    mounted() {},
    methods: {
      oo() {
        alert('9090')
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
        },
        // 和下面的一样
        // on: this.$listeners,
        attrs: this.$attrs,
        props: this.$props,
        // 插槽的传递
        scopedSlots
      })
    }
  }
}