<template>
  <div>
    <section-definition :title="title" :breadcrumbs="breadcrumbs"></section-definition>
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
          <v-card>
            <v-toolbar flat dense>
              <v-btn icon>
                <v-icon color="grey darken-1">mdi-pound-box</v-icon>
              </v-btn>
              <span class="title">Class Name picker</span>
            </v-toolbar>
            <v-card-text class="subheading justify">
              <!-- Explanation  -->
              <span v-if="colorClassSelected">
                <span><strong> Background Color Class name</strong> : {{ colorClassSelected }}</span><br/>
                <span>
                  <strong> Text Color Class name</strong> : <span :class="colorClassSelected + '--text'">{{ colorClassSelected + '--text' }}</span>
                </span>
              </span>

              <span v-else>
                <span class="body-2 secondary--text">Choose color from picker: we show you the class name</span>
              </span>
              <p class="body-1">
                You can also use the same class to apply text color by appending <code>--text</code> to class name. Example: if you class name is <code>md-purple-a100</code> then you can use <code>md-purple-a100--text</code> to apply the color to text.
              </p>
            </v-card-text>

            <v-card-text>
              <vuse-color-picker
                icon="fas fa-fill-drip"
                result="classname"
                @success="colorSelectionSuccessHandler"
              ></vuse-color-picker>
              <!-- Mark up -->
              <markup lang="html">&lt;vuse-color-picker
    icon=&quot;color_lens&quot;
    result=&quot;classname&quot;
    @success=&quot;colorSelectionSuccessHandler&quot;
  &gt;&lt;/vuse-color-picker&gt;</markup>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card>
            <v-toolbar flat dense>
              <v-btn icon>
                <v-icon color="grey darken-1">mdi-pound-box</v-icon>
              </v-btn>
              <span class="title">Hex code picker</span>
              <v-spacer></v-spacer>
              <v-btn flat v-text="hexSelected"></v-btn>
            </v-toolbar>
            <v-card-text class="subheading justify">
              <span>Here, you could choose the color, which provide result on Hex code.</span>
              <span class="body-2">{{hexSelected}}</span>
            </v-card-text>
            <v-card-text>
              <vuse-color-picker
                icon="fas fa-fill-drip"
                result="hex"
                @success="hexCodeSuccessHandler"
              ></vuse-color-picker>
              <!-- Mark up -->
              <markup lang="html">&lt;vuse-color-picker
    icon=&quot;color_lens&quot;
    result=&quot;hex&quot;
    @success=&quot;hexCodeSuccessHandler&quot;
  &gt;&lt;/vuse-color-picker&gt;</markup>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import VuseColorPicker from "@/components/Elements/VuseColorPicker/ColorPicker";
export default {
  components: {
    VuseColorPicker
  },
  data() {
    return {
      title: "Material Color Picker",
      contentHeadline: "Material Color Picker",
      description: `Vuse Material Color Picker is handful component allows you to add a color picker that allows to choose one of the many Material spec. colors.`,
      breadcrumbs: [
        {
          text: "Components",
          disabled: false
        },
        {
          text: "Material Color Picker",
          disabled: true
        }
      ],
      doc: {
        props: {
          "vuse-color-picker": {
            params: [
              [
                "result",
                "String",
                "null",
                `Default will provide you the object of <code>classname & hex</code>. <code>{ classname: "md-pink-a700", hex: "#c51162"}</code>. <p> You could get result either classname or hex as well by setting <code>result</code> for classname and hex code respectively.</p>`
              ],
              ["icon", "String", "null", "Set you icon for selection button."]
            ]
          }
        },
        events: {
          "vuse-color-picker": {
            params: [
              [
                "success",
                `with this you can handle <code>vuse-color-picker</code> component's result and use in your component`
              ]
            ]
          }
        }
      },
      colorClassSelected: null,
      hexSelected: null
    };
  },
  methods: {
    colorSelectionSuccessHandler(data) {
      this.colorClassSelected = data;
    },
    hexCodeSuccessHandler(data) {
      this.hexSelected = data;
    }
  }
};
</script>
