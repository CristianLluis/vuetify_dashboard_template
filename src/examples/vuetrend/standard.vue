<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <trend
          :data="chartData"
          :gradient="gradient"
          auto-draw
          smooth>
        </trend>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Vue from "vue";
import Trend from "vuetrend";
Vue.use(Trend);
export default {
  data() {
    return {
      chartData: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradient: [
        "rgb(255, 248, 0)",
        "rgb(255, 19, 97)",
        "rgb(68, 16, 122)",
        "rgb(35, 21, 87)"
      ]
    };
  }
};
</script>
