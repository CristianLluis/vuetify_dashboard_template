<template lang="pug">
  section#api
    section-header(id="api", v-text="'API'").primary--text.mb-3
    v-card(:dark="colorScheme.dark")
      v-tabs(
        v-model="tab"
        slider-color="primary"
      )
        template(v-for="(tab, i) in computedTabs")
          v-tab(
            :key="i"
            :href="`#${tab}`"
          ) {{ tab.replace(/([A-Z])/g, ' $1') }}
      v-card-title
        v-select(
          label="Component"
          hide-details
          single-line
          v-bind:items="components"
          v-model="current"
          :menu-props="{auto:'auto'}"
          :disabled="components.length < 2"
        )
        v-spacer
        v-spacer.hidden-sm-and-down
        v-text-field(
          append-icon="search"
          label="Search..."
          single-line
          hide-details
          v-model="search"
        )
      v-tabs-items(touchless v-model="tab")
        v-tab-item(
          v-for="(tabItem, i) in computedTabs"
          :value="tabItem"
          :key="i"
        )
          v-card(flat v-if="hasTab(tabItem)")
            parameters(
              :headers="headers[tabItem]"
              :items="currentApi[tabItem]"
              :namespace="namespace"
              :search="search"
              :target="current"
              :type="tabItem"
              :key="`${tabItem}${namespace}${current}`"
            )
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/data/api/api";
import { camel } from "@/utils/helpers";

export default {
  data() {
    return {
      api,
      current: null,
      id: "",
      headers: {
        props: [
          { value: "name", align: "left", size: 3 },
          { value: "default", align: "left", size: 6 },
          { value: "type", align: "right", size: 3 }
        ],
        slots: [{ value: "name", align: "left" }],
        scopedSlots: [
          { value: "name", align: "left", size: 3 },
          { value: "props", align: "right", size: 9 }
        ],
        events: [
          { value: "name", align: "left" },
          { value: "value", align: "right" }
        ],
        functions: [
          { value: "name", align: "left" },
          { value: "signature", align: "right" }
        ],
        functional: [
          { value: "name", align: "left" },
          { value: "description", align: "left" }
        ],
        options: [
          { value: "name", align: "left", size: 3 },
          { value: "default", align: "left", size: 3 },
          { value: "type", align: "right" }
        ]
      },
      search: null,
      tab: null,
      tabs: [
        "props",
        "slots",
        "scopedSlots",
        "params",
        "events",
        "functions",
        "functional",
        "options"
      ]
    };
  },

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    ...mapGetters({
      colorScheme: "colorScheme"
    }),
    components() {
      let components = (this.data.components || []).slice();

      if (this.data.component) {
        components.unshift(this.data.component);
      }

      return components;
    },
    currentColor() {
      return this.$store.state.currentColor;
    },
    computedTabs() {
      return this.tabs.filter(tab => (this.currentApi[tab] || []).length > 0);
    },
    currentApi() {
      return (
        this.api[this.current] || {
          props: [],
          slots: [],
          scopedSlots: [],
          params: [],
          events: [],
          funtions: [],
          functional: [],
          options: []
        }
      );
    },
    namespace() {
      const component = camel(this.data.namespace.component);
      const section = camel(this.data.namespace.section);
      return `${section}.${component}`;
    }
  },
  created() {
    if (this.components.length) {
      this.current = this.components[0];
      // console.log(this.current)
    }
  },
  mounted() {},
  methods: {
    hasTab(tab) {
      return (this.currentApi[tab] || []).length > 0;
    },
    camelCaseToDash(str) {
      return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
  },
  watch: {
    currentApi() {
      if (
        this.currentApi.hasOwnProperty(this.tab) &&
        this.currentApi[this.tab].length > 0
      )
        return;

      for (let tab of ["props", "slots"]) {
        if (this.currentApi[tab].length > 0) {
          this.tab = tab;
          break;
        }
      }
    }
  }
};
</script>

<style lang="stylus">
.view {
  max-width: 1024px;
}
</style>
