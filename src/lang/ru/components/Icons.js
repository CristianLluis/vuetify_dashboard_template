export default {
  header: "Иконка",
  headerText:
    "Компонент `v-icon` предоставляет большой набор иконок для предоставления контекста различным аспектам вашего приложения. Иконки Vuetify используют библиотеку шрифтов Material Icons Google. Список всех доступных иконок можно найти на официальной странице [Material Icons](https://material.io/icons/).",
  components: ["v-icon"],
  examples: [
    {
      standard: {
        header: "Стандарт",
        desc:
          "Иконки бывают двух тем (светлые и темные) и четырех разных размеров (стандартный, средний, большой и очень-большой)."
      },
      fontAwesome: {
        header: "Font Awesome",
        desc:
          "[Font Awesome](http://fontawesome.io/icons/) также поддерживается. Просто используйте имя знака `fa-` с префиксом. Обратите внимание, что вам все равно нужно добавить значки шрифта Awesome в ваш проект."
      },
      mdi: {
        header: "Material Design Icons",
        desc:
          "[Material Design Icons](https://materialdesignicons.com/) также поддерживается. Просто используйте имя знака `mdi-` с префиксом. Обратите внимание, что вам все равно необходимо включить иконки MDI в свой проект."
      },
      color: {
        header: "Цвет",
        desc:
          "Используя цветные помощники, вы можете изменить цвет значка из стандартных темных и светлых тем."
      },
      buttons: {
        header: "Кнопки",
        desc:
          "Иконки можно использовать внутри кнопок, чтобы добавить акцент на действие."
      }
    }
  ],
  props: {
    disabled: "Mixins.Input.props.disabled",
    large: "Делает иконку большой **(36px)**",
    left: "Расположение иконки с слева, если используется внутри кнопки",
    medium: "Делает иконку средней **(28px)**",
    right: "Расположение иконки с права, если используется внутри кнопки",
    small: "Делает иконку маленькую **(16px)**",
    xLarge: "Делает иконку очень-большой **(40px)**"
  }
};
