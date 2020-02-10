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
      component: "expansion-panels",
      page: {
        title: "Expansion Panel",
        headline: "Introduction",
        description: `The <code>v-expansion-panel</code> component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time, however, with the <code>expandable</code> property, the expansion-panel can remain open until explicity closed.`
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
          text: "Expansion Panel",
          disabled: true
        }
      ]
    };
  }
};
</script>
