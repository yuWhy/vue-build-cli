export default function Wrapper(baseComp) {
  return {
    data() {
      return {}
    },
    mounted() {},
    render(h) {
      return h(baseComp, {
        on: this.$listeners,
        attrs: this.$attrs,
        props: this.$props
      })
    }
  }
}