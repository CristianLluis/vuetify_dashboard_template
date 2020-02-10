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
      <!-- Go to grid view -->
      <v-alert
        color="info"
        icon="info"
        value="true"
        class="mb-4"
      >
        If you are looking for <strong>Grid lists</strong>, please navigate
        <router-link class="white--text" to="/components/layout/grid-lists">here</router-link>.
      </v-alert>

      <!-- Material Design Viewport Breakpoints Table-->
      <v-card class="mb-5">
        <grid-viewport></grid-viewport>
      </v-card>
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
import GridViewport from "@/components/Stock/GridViewport";

export default {
  mixins: [VuetifyExampleMixin],
  components: {
    GridViewport
  },
  data() {
    return {
      section: "layout",
      component: "grid",
      page: {
        headline: "Introduction",
        title: "Grid",
        description: `Vuetify has a 12 point grid system. Built using <kbd>flex-box</kbd>, the grid is used to layout an application's content.  It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations. The props for grid components are actually classes that are derived from their defined properties. This allows you to easily specify these helper classes as props, while still providing the classes to be used anywhere.`
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
          text: "Grid",
          disabled: true
        }
      ]
    };
  }
};
</script>
