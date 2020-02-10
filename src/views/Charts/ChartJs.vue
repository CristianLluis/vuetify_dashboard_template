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
        <v-flex xs12 sm8 md12>
          <p class="subheading justify">You need to import the component and then either use extends or mixins and add it. You can import the whole package or each module individual.</p>
          <div class="my-2"></div>
          <markup lang="js">import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'</markup>
          <p>You can also refer more details from the <a href="http://vue-chartjs.org/#/home">vue-chartjs documentation</a>.</p>
        </v-flex>
      </v-layout>
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
                :showgit="example.git"
                :showAltGit="example.gitalt"
                :showcodepan="example.codepan"
              ></example>
            </template>
          </section>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import VuseExampleMixin from "@/mixins/VuseExampleMixin";

export default {
  mixins: [VuseExampleMixin],
  data() {
    return {
      section: "vuse",
      component: "chartjs",
      page: {
        title: "Charts",
        headline: "Introduction",
        description: `<code>vue-chartjs</code> is a wrapper for <a href="https://github.com/chartjs/Chart.js" target="_blank">Chart.js</a> in vue. You can easily create reuseable chart components.`
      },
      breadcrumbs: [
        {
          text: "Components",
          disabled: false
        },
        {
          text: "ChartJs",
          disabled: true
        }
      ]
    };
  }
};
</script>
