<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-container fluid grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 sm8 md12>
              <section-header v-if="contentHeadline" v-text="contentHeadline"></section-header>
              <section-text :value="`${namespace}.visibilityText`" class="subheading justify"></section-text>
              <div class="my-2"></div>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <section>
                <section-text :value="`${namespace}.breakpointText`"></section-text>
                <ul class="browser-list pb-2">
                  <li
                    v-for="item in breakpoints"
                    :key="item"
                  >
                    <markdown :source="item"></markdown>
                  </li>
                </ul>
              </section>
              <v-card class="mb-5 transparent" flat>
                <grid-viewport></grid-viewport>
              </v-card>
              <section>
                <section-text :value="`${namespace}.conditionText`"></section-text>
                <ul class="browser-list pb-2">
                  <li
                    v-for="item in conditions"
                    :key="item"
                  >
                    <markdown :source="item"></markdown>
                  </li>
                </ul>
              </section>
              <section id="display">
                <section-head :value="`${namespace}.displayHeader`"></section-head>
                <section-text :value="`${namespace}.displayText`"></section-text>
                <ul class="browser-list pb-2">
                  <li
                    v-for="item in displays"
                    :key="item"
                  >
                    <markdown :source="item"></markdown>
                  </li>
                </ul>
              </section>
              <section id="examples">
                <section-head value="Generic.Pages.examples"></section-head>
                <example file="display/hiddenElements"></example>
              </section>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import GridViewport from "@/components/Stock/GridViewport";
export default {
  data() {
    return {
      contentHeadline: "Visibility",
      description: this.$t("Layout.Display.visibilityText"),
      namespace: "Layout.Display"
    };
  },
  components: {
    GridViewport
  },
  computed: {
    breakpoints() {
      return this.$t("Layout.Display.breakpoints");
    },
    conditions() {
      return this.$t("Layout.Display.conditions");
    },
    displays() {
      return this.$t("Layout.Display.displays");
    }
  }
};
</script>
