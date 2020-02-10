export default {
  header: "Итератор данных",
  headerText:
    "Компонент `v-data-iterator` используется для отображения данных и делится большинством своих функций с компонентом` v-data-table`. Особенности включают сортировку, поиск, разбивку на страницы и выбор.",
  components: ["v-data-iterator"],
  examples: [
    {
      simple: {
        header: "Несложный",
        desc:
          "`v-data-iterator` позволяет вам точно настроить отображение данных. В этом примере мы используем список сетки с картами. Мы можем использовать подсказку `content-tag` (вместе с `content-class` и` content-props`), чтобы указать, как должен выглядеть элемент оболочки вокруг элементов."
      }
    }
  ],
  props: {
    contentClass:
      "Применяет пользовательский класс к элементу обертки вокруг элементов",
    contentProps:
      "Применяет пользовательские свойства к оберточному элементу вокруг элементов",
    contentTag:
      "Укажите, какой тег следует использовать для элемента оболочки вокруг элементов",
    nextIcon: "Mixins.Input.props.appendIcon",
    prevIcon: "Mixins.Input.props.prependIcon"
  },
  events: {
    "update:pagination": " `pagination.sync` событие обновления"
  }
};
