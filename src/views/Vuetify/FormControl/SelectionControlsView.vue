<template>
  <div>
    <section-definition :title="page.title" :breadcrumbs="breadcrumbs"></section-definition>
    <v-container fluid grid-list-xl id="selection-controls-view" page>
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
      component: "selection-controls",
      page: {
        title: "Selection control",
        headline: "Introduction",
        description: `Selection control components allow a user to select options. These components <strong>must</strong> be used with the <code>v-model</code> prop as they do not maintain their own state.`
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
          text: "Selection control",
          disabled: true
        }
      ]
    };
  }
};
</script>


<style lang="stylus">
 #selection-controls-view
  .component-example
    table
      tr
        border-bottom: none !important
        height: 75px

        &:hover
          background: transparent !important

      td, th
        text-align: center

      td
        .input-group
          justify-content: center
</style>
