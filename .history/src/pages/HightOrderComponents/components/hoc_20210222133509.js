export default function Wrapper(baseComp) {
  return {
    data() {
      return {}
    },
    mounted() {},
    render(h) {
      let scopedSlots = {};
      let $slots = this.$slots;
      Object.keys($slots).map((key) => (scopedSlots[key] = () => $slots[key]))
      return h(baseComp, {
        // 属性、事件的传递
        on: this.$listeners,
        attrs: this.$attrs,
        props: this.$props,
        scopedSlots
      })
    }
  }
}