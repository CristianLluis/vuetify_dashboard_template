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
          <section id="api">
            <v-data-table
              :headers="headers"
              :items="items"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.type }}</td>
                <td v-html="props.item.default"></td>
                <td v-html="props.item.description"></td>
                <td v-html="props.item.example"></td>
              </template>
            </v-data-table>
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
      component: "vuetrend",
      page: {
        title: "Trend Chart",
        headline: "Introduction",
        description: `VueTrend chart is elegant spark lines for vuejs. <a href="https://github.com/QingWei-Li/vue-trend" target="_blank">Visit Git Repository</a>.`
      },
      breadcrumbs: [
        {
          text: "Chats",
          disabled: false
        },
        {
          text: "Trend",
          disabled: true
        }
      ],
      headers: [
        { text: "Name", value: "name" },
        { text: "Type", value: "type" },
        { text: "Default", value: "default" },
        { text: "Description", value: "description" },
        { text: "Example", value: "example" }
      ],
      items: [
        {
          name: "data",
          type: "Number|Object",
          default: `<code>undefined</code>`,
          description:
            "The data accepted by Vue Trend is incredibly simple: An array of y-axis values to graph.",
          example: `<code>[120, 149, 193.4, 200, 92]</code> or
        <code>[{ value: 4 }, { value: 6 }, { value: 8 }]</code>`
        },
        {
          name: "gradient",
          type: "String",
          default: `<code>['#000']</code>`,
          description:
            "Colour can be specified as any SVG-supported format (named, rgb, hex, etc).",
          example: `<code>['#0FF', '#F0F', '#FF0']</code>`
        },

        {
          name: "width",
          type: "Number",
          default: `auto`,
          description: "Set an explicit width for your SVG.",
          example: `-`
        },
        {
          name: "height",
          type: "Number",
          default: `auto`,
          description: "Set an explicit height for your SVG.",
          example: `-`
        },
        {
          name: "padding",
          type: "Number",
          default: `<code>8</code>`,
          description: `If you set a very large <code>strokeWidth</code> on your line, you may notice that it gets "cropped" towards the edges.`,
          example: `-`
        },
        {
          name: "smooth",
          type: "Boolean",
          default: `<code>false</code>`,
          description: `Smooth allows the peaks to be 'rounded' out so that the line has no jagged edges.`,
          example: `-`
        },
        {
          name: "radius",
          type: "Number",
          default: `<code>10</code>`,
          description: `When using
        <strong>smoothing</strong>, you may wish to control the amount of curve around each point. This prop has no effect if
        <code>smooth</code> isn't set to
        <code>true</code>.`,
          example: `-`
        },
        {
          name: "autoDraw",
          type: "Boolean",
          default: `<code>false</code>`,
          description: `Allow the line to draw itself on mount. Set to
        <code>true</code> to enable, and customize using
        <code>autoDrawDuration</code> and
        <code>autoDrawEasing</code>.`,
          example: `-`
        },
        {
          name: "autoDrawDuration",
          type: "Number",
          default: `<code>2000</code>`,
          description: `The amount of time, in milliseconds, that the autoDraw animation should span. This prop has no effect if
        <code>autoDraw</code> isn't set to
        <code>true</code>.`,
          example: `-`
        },
        {
          name: "autoDrawEasing",
          type: "String",
          default: `<code>ease</code>`,
          description: `The easing function to use for the autoDraw animation. Accepts any transition timing function within
        <a href="http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp" rel="nofollow">the CSS spec</a> (eg.
        <code>linear</code>,

        <code>ease</code>,
        <code>ease-in</code>,
        <code>cubic-bezier</code>...).`,
          example: `-`
        },
        {
          name: "max",
          type: "Number",
          default: `<code>-Infinity</code>`,
          description: `Specify max value`,
          example: `-`
        },
        {
          name: "min",
          type: "Number",
          default: `<code>Infinity</code>`,
          description: `Specify min value, This is useful if you have multiple lines. See
        <a href="https://github.com/QingWei-Li/vue-trend/issues/8">#8</a>`,
          example: `-`
        }
      ]
    };
  }
};
</script>
