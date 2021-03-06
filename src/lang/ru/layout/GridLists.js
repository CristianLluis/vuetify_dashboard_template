export default {
  header: "Grid list",
  headerText:
    "Grid lists являются дополнением для компонента `v-container`, который добавляет контроль gutter между элементами.",
  components: ["v-container", "v-layout", "v-flex", "v-spacer"],
  examples: [
    {
      default: {
        header: "Grid lists",
        desc:
          "Grid lists увеличить компонент `v-container`, чтобы обеспечить большую гибкость с gutters. Он поставляется в 5 вариантах: от xs до xl и может быть динамически изменен."
      },
      subheader: {
        header: "Grid lists",
        desc:
          "Grid lists будет работать без проблем с вашей текущей реализацией сетки и позволит вам создавать удивительные пользовательские интерфейсы."
      }
    }
  ],
  props: {
    tag: "Mixins.Routable.props.tag"
  }
};
