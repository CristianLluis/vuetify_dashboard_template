<template>
  <div>
    <section-definition :title="page.title" :breadcrumbs="breadcrumbs"></section-definition>
    <v-container fluid grid-list-xl id="`vuetify-${camelCaseToDash(title)}-view`" page>
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
          <blockquote class="my-5">
            The three-line prop uses <code>-webkit-line-clamp</code> which is not supported on all browsers. If not supported, the line will just continue to wrap.
          </blockquote>
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
      component: "menus",
      page: {
        title: "Menus",
        headline: "Introduction",
        description: `The <code>v-menu</code> component shows a menu at the position of the element used to activate it.`
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
          text: "Menus",
          disabled: true
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
  #vuetify-menus-view .component-example
    position: relative
    z-index: 1

    .card
      margin: 1rem auto

      .toolbar
        height: auto
        min-height: 55px
</style>
