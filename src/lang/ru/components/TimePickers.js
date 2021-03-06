export default {
  header: "Time picker",
  headerText:
    "`v-time-picker` является автономным компонентом, который может использоваться во многих существующих компонентах Vuetify. Он предлагает пользователю визуальное представление для выбора времени.",
  components: ["v-time-picker"],
  examples: [
    {
      timeLight: {
        header: "Time pickers",
        desc: "У Time pickers по умолчанию включена светлая тема."
      },
      timeColorable: {
        header: "Time pickers - Colors",
        desc:
          "Цветовая схема Time picker может быть установлена с помощью prop `color` и `header-color`. Если `header-color` prop не указан, заголовок будет использовать значение `color`."
      },
      timeDialogAndMenu: {
        header: "Time pickers - В диалоговом окне и меню",
        desc:
          "Благодаря гибкости pickers вы можете действительно набирать опыт именно так, как вы этого хотите."
      },
      time24hFormat: {
        header: "Time pickers - 24h format",
        desc: "Time picker можно переключить на 24-часовой формат."
      },
      timeAllowedTimes: {
        header: "Time pickers - доступное время для выбора",
        desc:
          "Вы можете указать доступное время, используя массивы, объекты и функции."
      },
      timeWidth: {
        header: "Time pickers - Установка ширины picker",
        desc:
          "Вы можете указать допустимую ширину picker или сделать ее на всю ширину."
      }
    }
  ],
  props: {
    "v-time-picker": {
      format: "Доступны следующие опции: `ampm` и `24hr`",
      allowedHours: "Ограничения, часы которых могут быть выбраны",
      allowedMinutes: "Ограничивает, какие минуты можно выбрать",
      scrollable: "Позволяет изменять час/минуту с помощью мыши",
      min: "Минимальное допустимое время",
      max: "Максимально допустимое время"
    }
  }
};
