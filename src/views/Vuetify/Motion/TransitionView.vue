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
                class="mb-5"
              ></example>
            </template>
          </section>
          <section id="create-your-own">
            <section-head v-text="$t('Motion.Transitions.createYourOwnHeader')"></section-head>
            <section-text value="Motion.Transitions.createYourOwnText1"></section-text>
            <markup lang="javascript">import { createSimpleTransition } from 'vuetify/es5/util/helpers'
&nbsp;
const myTransition = createSimpleTransition('my-transition')
&nbsp;
Vue.component('my-transition', myTransition)
            </markup>
            <section-text value="Motion.Transitions.createYourOwnText2"></section-text>
            <markup lang="stylus">.fade-transition
  &-leave-active
    position: absolute
  &nbsp;
  &-enter-active, &-leave, &-leave-to
    transition: $primary-transition
  &nbsp;
  &-enter, &-leave-to
    opacity: 0
            </markup>
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
      component: "transitions",
      page: {
        title: "Transitions",
        headline: "Introduction",
        description: this.$t("Motion.Transitions.headerText")
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
          text: "Aspect Ratio",
          disabled: true
        }
      ]
    };
  }
};
</script>
