<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <bars
          :data="chartData"
          :gradient="gradient"
          :padding="10"
          >
        </bars>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Vue from "vue";
import Bars from "vuebars";
Vue.use(Bars);

export default {
  data() {
    return {
      chartData: [1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0],
      gradient: ["#fff800", "#ff1361", "#44107a", "#231557"]
    };
  }
};
</script>
