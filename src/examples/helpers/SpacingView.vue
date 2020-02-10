<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-container fluid grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 sm8 md12>
              <section-header v-if="contentHeadline" v-text="contentHeadline"></section-header>
              <div class="subheading justify" v-html="description"></div>
              <div class="my-2"></div>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <p>
                Apply
                <strong>margin</strong> or
                <strong>padding</strong> to an element ranging from
                <em>0 to 5</em>. Each size increment was designed to align with common Material Design spacing. These classes can be applied using the following format
                <code>{property}{direction}-{size}</code>.
              </p>
            </v-flex>
            <v-flex xs12>
              <section>
                <section-head :value="`${namespace}.propertyText`"></section-head>
                <ul class="mb-5 ml-3">
                  <li v-for="item in properties" :key="item">
                    <markdown :source="item"></markdown>
                  </li>
                </ul>
                <section-head :value="`${namespace}.sizeText`"></section-head>
                <ul class="mb-5 ml-3">
                  <li v-for="item in directions" :key="item">
                    <markdown :source="item"></markdown>
                  </li>
                </ul>
                <section-head :value="`${namespace}.directionText`"></section-head>
                <ul class="mb-5 ml-3">
                  <li v-for="item in sizes" :key="item">
                    <markdown :source="item"></markdown>
                  </li>
                </ul>
              </section>
              <section>
                <section-head value="Generic.Pages.examples"></section-head>
                <markup lang="stylus">
                  $spacer := 16px
                  .mt-5
                  margin-top: ($spacer * 3) !important
                  .py-2
                  padding-left: ($spacer * .5) !important
                  padding-right: ($spacer * .5) !important
                  .pa-1
                  padding: ($spacer * .25) !important
                  .mx-3
                  margin-right: $spacer !important
                  margin-left: $spacer !important
                </markup>
              </section>
              <section id="horizontal-centering">
                <section-head :value="`${namespace}.horizontalHeader`"></section-head>
                <example
                  file="spacing/horizontal"
                  :desc="$t(`${namespace}.horizontalText`)"
                  header="Example"
                ></example>
              </section>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      contentHeadline: "Spacing",
      description: `Update your layout without creating new classes. Spacing helpers are useful for modifying the padding and margin of an element.`,
      namespace: "Layout.Spacing"
    };
  },
  computed: {
    directions() {
      return this.$t("Layout.Spacing.directions");
    },
    properties() {
      return this.$t("Layout.Spacing.properties");
    },
    sizes() {
      return this.$t("Layout.Spacing.sizes");
    }
  }
};
</script>
