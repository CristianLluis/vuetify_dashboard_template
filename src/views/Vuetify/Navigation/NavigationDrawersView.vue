<template>
  <div>
    <section-definition :title="page.title" :breadcrumbs="breadcrumbs"></section-definition>
    <v-container fluid grid-list-xl page>
      <v-layout row wrap>
        <v-flex xs12 sm8 md12>
          <section-header v-text="page.headline"></section-header>
          <div class="subheading justify" v-html="page.description"></div>
          <div class="my-5"></div>
        </v-flex>
      </v-layout>

      <section-header>Examples</section-header>
      <v-layout row wrap>
        <v-flex xs12>
          <section id="usage">
            <template v-for="example in examples">
              <example
                :header="`${example.header}`"
                :new-in="example.new"
                :file="`${data.folder}/${example.file}`"
                :inverted="example.inverted"
                :has-inverted="!example.uninverted"
                :id="`example-${camelCaseToDash(example.file)}`"
                :key="example.file"
                :desc="example.desc"
              ></example>
            </template>
          </section>
          <api-table :data="data"></api-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import VuetifyExampleMixin from "@/mixins/VuetifyExampleMixin";

export default {
  mixins: [VuetifyExampleMixin],
  data() {
    return {
      section: "components",
      component: "navigation-drawers",
      page: {
        title: "Navigation drawer",
        headline: "Introduction",
        description: `The <code>v-navigation-drawer</code> component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without <strong>vue-router</strong> right out the box.`
      },
      breadcrumbs: [
        {
          text: "Components",
          disabled: false
        },
        {
          text: "Vuetify Components",
          disabled: false
        },
        {
          text: "Navigation drawer",
          disabled: true
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
  @import '~vuetify/src/stylus/settings/_elevations.styl'

  #navigation-drawer-view
    .component-example .card__text
      overflow: hidden

    .navigation-drawer
      elevation(4)
      position: relative
      z-index: 0

    .overlay
      z-index: 0

    #example-8
      .icon
        color: #fff !important
</style>
