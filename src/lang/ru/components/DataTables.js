export default {
  header: "Data table",
  headerText:
    "Компонент `v-data-table` используется для отображения данных в виде таблицы. Особенности включают сортировку, поиск, разбиение на страницы, встроенное редактирование, всплывающие подсказки и выбор строк.",
  components: ["v-data-table", "v-edit-dialog"],
  examples: [
    {
      standard: {
        header: "Стандарт",
        desc:
          "Стандартная таблица содержит данные без дополнительной функциональности. Вы можете отказаться от отображения пагинации таблицы, которая позволяет вам управлять разбиением информации на страницы с помощью подсказки `hide-actions`."
      },
      noData: {
        header: "Slot: no-data",
        desc:
          "Слот `no-data` может отображать пользовательский HTML, когда нет данных."
      },
      headers: {
        header: "Slot: элементы и заголовки",
        desc:
          "Слоты `items` и `headers` могут принимать либо коллекцию тегов <kbd> td/th </kbd>, либо если вы хотите управлять всей строкой, тегом <kbd> tr </kbd>."
      },
      headerCell: {
        header: "Slot: headerCell (заголовок ячейки)",
        desc:
          "Если вы хотите применить некоторую общую разметку или эффект для каждой из ячеек заголовка, вы можете использовать слот `headerCell`. В этом примере используется для применения всплывающей подсказки к каждому заголовку."
      },
      progress: {
        header: "Slot: progress",
        desc:
          "Существует также `progress`, когда вы хотите настроить отображение состояния  таблицы `loading`. По умолчанию это `indeterminate` `v-progress-linear`"
      },
      footer: {
        header: "Slot: footer",
        desc:
          "Существует также слот `footer`, когда вы хотите добавить дополнительную функциональность в таблицы, например, для фильтрации столбцов или поиска."
      },
      expand: {
        header: "Slot: expand",
        desc:
          "Компонент `v-data-table` также поддерживает расширяемые строки, используя слот `expand`. Вы можете использовать `expand` чтобы предотвратить закрытие развернутых строк при нажатии на другую строку."
      },
      pageText: {
        header: "Slot: page-text",
        desc:
          "Вы можете настроить текст страницы, отображая диапазон и общие элементы, используя слот `page-text`."
      },
      select: {
        header: "Выбираемые строки",
        desc:
          "Выбираемые строки позволяют выполнять действие над определенными и всеми строками."
      },
      search: {
        header: "Поиск в пользовательском слоте без результатов",
        desc:
          "В таблице данных содержится подсказка `search`, которая позволяет фильтровать ваши данные."
      },
      customIcons: {
        header: "Пользовательские значки",
        desc:
          "Значки предыдущие/следующие и значок сортировки можно настроить с помощью **prev-icon**, **next-icon** и **sort-icon** ."
      },
      paginate: {
        header: "Внешняя разбивка на страницы",
        desc:
          "Пагинация может управляться извне с помощью `pagination`. Помните, что вы должны применять модификатор `.sync`."
      },
      sort: {
        header: "Внешняя сортировка",
        desc:
          "Сортировка также может управляться извне с помощью `pagination`. Помните, что вы должны применять модификатор `.sync`. Вы также можете использовать prop (свойство), чтобы установить отсортированный по умолчанию столбец."
      },
      server: {
        header: "Разбиение на страницы и сортировка на стороне сервера",
        desc:
          "Если вы загружаете данные из бэкэнд и хотите разбивать страницы и сортировать результаты перед их отображением, вы можете использовать опцию «total-items». Определение этого свойства отключит встроенную сортировку и разбивку на страницы, и вместо этого вам придется использовать prop `pagination` для отслеживания изменений. Используйте `loading` для отображения индикатора выполнения при получении данных."
      },
      headerless: {
        header: "Таблицы без заголовка",
        desc: "Настройка `hide-headers` prop создает таблицу без заголовка."
      },
      editdialog: {
        header: "Встроенное редактирование",
        desc:
          "Компонент `v-edit-dialog` используется для встроенного редактирования в таблицах. Вы можете заблокировать закрытие диалогового окна при нажатии на него, добавив **persistent** prop."
      },
      crud: {
        header: "CRUD действия",
        desc:
          "Таблица с действиями CRUD с использованием компонента `v-dialog` для редактирования каждой строки"
      }
    }
  ],
  props: {
    "v-edit-dialog": {
      cancelText:
        "Устанавливает текст по умолчанию для кнопки отмены при использовании **large** prop",
      lazy: "Mixins.Bootable.props.lazy",
      large: "Прикрепляет кнопку отправки и отмены к диалоговому окну",
      saveText:
        "Устанавливает текст по умолчанию для кнопки сохранения при использовании  **large** prop",
      transition: "Mixins.Transitionable.props.transition"
    },
    "v-data-table": {
      headerText: "При использовании объекта текстовое значение для заголовка",
      headers:
        "Массив объектов, каждый из которых описывает столбец заголовка. См. Пример ниже для определения всех свойств.",
      hideHeaders: "Скрыть заголовки таблиц",
      sortIcon:
        "Используйте пользовательскую иконку сортировки, используя тот же синтаксис, что и `v-icon`",
      nextIcon: "Mixins.Input.props.appendIcon",
      prevIcon: "Mixins.Input.props.prependIcon"
    }
  },
  scopedSlots: {
    "v-data-table": {
      headerCell: "Слот для настройки ячеек заголовка",
      headers: "Слот для настройки всего заголовка"
    }
  }
};
