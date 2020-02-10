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
          <section>
            <section-header v-text="$t('Motion.Scrolling.firstHeader')" id="first"></section-header>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
            <section-header v-text="$t('Motion.Scrolling.secondHeader')" id="second"></section-header>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
            <section-header v-text="$t('Motion.Scrolling.thirdHeader')" id="third"></section-header>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
            <section-text value="Motion.Scrolling.loremIpsum"></section-text>
          </section>
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
      section: "motion",
      component: "scrolling",
      page: {
        title: "Scrolling",
        headline: "Introduction",
        description: this.$t("Motion.Scrolling.headerText")
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
          text: "Scrolling",
          disabled: true
        }
      ]
    };
  }
};
</script>
