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
            <grid-viewport></grid-viewport>
          </section>
          <section id="breakpoint-object">
            <h3 class="title align-center mb-3">
              <router-link
                class="mr-2"
                to="{ hash: 'breakpoint-object' }"
                :style="{'text-decoration': 'none'}"
              >
                <v-icon color="accent">mdi-pound</v-icon>
              </router-link>
              <span v-text="$t('Layout.Breakpoints.breakpointHeader')"></span>
            </h3>
            <markdown :source="$t('Layout.Breakpoints.breakpointText1')"></markdown>
            <markup class="ma-0" lang="js">
              export default {
              mounted () {
              console.log(this.$vuetify.breakpoint)
              },
              computed: {
              imageHeight () {
              switch (this.$vuetify.breakpoint.name) {
              case 'xs': return '220px'
              case 'sm': return '400px'
              case 'md': return '500px'
              case 'lg': return '600px'
              case 'xl': return '800px'
              }
              }
              }
              }
            </markup>
            <markdown :source="$t('Layout.Breakpoints.breakpointText2')" class="mt-3"></markdown>
            <markup class="ma-0" lang="js">
              export default {
              data: () => ({
              isMobile: false
              }),
              mounted () {
              this.onResize()
              window.addEventListener('resize', this.onResize, { passive: true })
              },
              beforeDestroy () {
              if (typeof window !== 'undefined') {
              window.removeEventListener('resize', this.onResize, { passive: true })
              }
              },
              methods: {
              onResize () {
              this.isMobile = window.innerWidth &lt; 600
              }
              }
              }
            </markup>
            <markdown :source="$t('Layout.Breakpoints.breakpointText3')" class="mt-3"></markdown>
            <markup lang="html" class="ma-0">
              &lt;v-dialog :fullscreen="$vuetify.breakpoint.xsOnly"&gt;
              &nbsp;&nbsp;&nbsp;&nbsp;...
              &lt;/v-dialog&gt;
            </markup>
            <markdown :source="$t('Layout.Breakpoints.breakpointText1')" class="mt-3"></markdown>
            <markup lang="ts" class="ma-0">
              {
              xs: boolean
              xsOnly: boolean
              xsAndUp: boolean
              sm: boolean
              smOnly: boolean
              smAndDown: boolean
              smAndUp: boolean
              md: boolean
              mdOnly: boolean
              mdAndDown: boolean
              mdAndUp: boolean
              lg: boolean
              lgOnly: boolean
              lgAndDown: boolean
              lgAndUp: boolean
              xl: boolean
              xlOnly: boolean
              xlAndDown: boolean
              name: ('xs' | 'sm' | 'md' | 'lg' | 'xl')
              width: number
              height: number
              }
            </markup>
          </section>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import GridViewport from "@/components/Stock/GridViewport";
export default {
  components: {
    GridViewport
  },
  data() {
    return {
      page: {
        title: "Breakpoints",
        headline: "Introduction",
        description: this.$t("Layout.Breakpoints.headerText")
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
          text: "Breakpoints",
          disabled: true
        }
      ]
    };
  }
};
</script>
