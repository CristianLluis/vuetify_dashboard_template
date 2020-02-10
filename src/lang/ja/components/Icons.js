export default {
  header: "Icon",
  headerText:
    '`v-icon`コンポーネントは、あなたのアプリケーションの様々な場面に応じて多くのアイコンを提供します。Vuetifyのアイコンは、GoogleのMaterial Iconsライブラリを使用します。 全ての利用可能なアイコンのリストは、公式の<a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a>ページをご覧ください。',
  components: ["v-icon"],
  examples: [
    {
      standard: {
        header: "Standard",
        desc:
          "アイコンは2つのテーマ(light、dark)と、4つの異なるサイズ(standard、medium、large、x-large)で表現されます。"
      },
      fontAwesome: {
        header: "Font Awesome",
        desc:
          "[Font Awesome](http://fontawesome.io/icons/) のアイコンの利用をサポートしています。アイコン名に`fa-`プレフィックスを付与するだけで使用できます。あなたのプロジェクトにFont Awesomeを導入しておく必要があるので注意して下さい。"
      },
      mdi: {
        header: "Material Design Icons",
        desc:
          "[Material Design Icons](https://materialdesignicons.com/)のアイコンの利用をサポートしています。アイコン名に`mdi-`プレフィックスを付与するだけで使用できます。あなたのプロジェクトにMaterial Design Iconsを導入しておく必要があるので注意して下さい。"
      },
      color: {
        header: "色",
        desc:
          "カラーヘルパーを使用すると、アイコンの色を標準のdark、lightテーマから変更できます。"
      },
      buttons: {
        header: "ボタン",
        desc:
          "アイコンをボタン内部で使用し、ボタンを強調させるための動きを付けることができます。"
      }
    }
  ],
  props: {
    disabled: "Mixins.Input.props.disabled",
    large: "アイコンのサイズを大 **(36px)** にします。",
    left: "ボタン内部でアイコンを使用する場合に、アイコンを左に配置します。",
    medium: "アイコンのサイズを中 **(28px)** にします。",
    right: "ボタン内部でアイコンを使用する場合に、アイコンを右に配置します。",
    small: "アイコンのサイズを小 **(16px)** にします。",
    xLarge: "アイコンのサイズを最大 **(40px)** にします。"
  }
};
