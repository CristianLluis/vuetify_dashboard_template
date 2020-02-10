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
          <v-layout row>
            <v-flex xs12>
              <section>
                <v-card class="mb-5">
                  <grid-viewport></grid-viewport>
                </v-card>
                <v-layout row wrap>
                  <v-flex xs12>
                    <section id="usage">
                      <example
                        header="Example"
                        file="alignment/example"
                      ></example>
                    </section>
                  </v-flex>
                </v-layout>
                <markup lang="html">&lt;p class="text-xs-left"&gt;...&lt;/p&gt;
&lt;p class="text-xs-center"&gt;...&lt;/p&gt;
&lt;p class="text-xs-right"&gt;...&lt;/p&gt;
&nbsp;
&nbsp;
&lt;p class="text-xs-left"&gt;...&lt;/p&gt;
&lt;p class="text-sm-left"&gt;...&lt;/p&gt;
&lt;p class="text-md-left"&gt;...&lt;/p&gt;
&lt;p class="text-lg-left"&gt;...&lt;/p&gt;
&lt;p class="text-xl-right"&gt;...&lt;/p&gt;</markup>
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
      contentHeadline: "Alignment",
      description: `Layouts can change when screen resolutions change. The alignment classes help you position your text based on viewport size.`
    };
  },
  components: {
    GridViewport
  }
};
</script>
