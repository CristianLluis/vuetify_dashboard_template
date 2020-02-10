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
      component: "vuebar",
      page: {
        title: "VueBar Chart",
        headline: "Introduction",
        description: `Vue-bar chart is elegant spark bars for vuejs. <a href="https://github.com/DeviaVir/vue-bar" target="_blank">Visit Git Repository</a>.`
      },
      breadcrumbs: [
        {
          text: "Chats",
          disabled: false
        },
        {
          text: "VueBar",
          disabled: true
        }
      ]
    };
  }
};
</script>
