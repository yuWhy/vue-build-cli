export default function Wrapper(baseComp) {
  return {
    data() {
      return {}
    },
    mounted() {},
    render(h) {
      return h(baseComp, {})
    }
  }
}