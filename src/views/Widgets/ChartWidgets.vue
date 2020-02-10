<template>
  <div>
    <section-definition :title="page.title" :breadcrumbs="breadcrumbs"></section-definition>
    <v-container fluid grid-list-xl page>
      <v-layout row wrap>
        <v-flex xs12 sm8 md12>
          <section-header v-text="page.headline"></section-header>
          <div class="subheading justify" v-html="page.description"></div>
        </v-flex>
      </v-layout>
      <!-- vuse-card-mini-widget -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.boxWidget.header"></markdown>
          </h2>
          <markdown :source="labels.boxWidget.description"></markdown>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <box-chart
            type="line-chart"
            card-color="indigo"
            title="Trending"
            sub-title="10%"
            icon="trending_up"
            :data="lineChartData.trendingDataSet.data"
            :option="lineChartData.trendingDataSet.option"
            :height="200"
          ></box-chart>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <box-chart
            type="line-chart"
            card-color="secondary"
            title="Page Views"
            sub-title="10%"
            icon="trending_up"
            icon-color="white"
            :data="lineChartData.pagereviewDataSet.data"
            :option="lineChartData.pagereviewDataSet.option"
            :height="200"
          ></box-chart>
          <!--
            :gradientSet="[{stop: 0, color: 'rgb(255, 248, 0)'}, {stop: 0.5, color: 'rgba(255, 19, 97, 0.7)'}, {stop: 1, color: 'rgba(68, 16, 122, 0.7)'}, 'rgba(255, 19, 97, 0.7)']"
            :gradient="true"
            :linearStroke="[0, 0, 0, 450]"
            -->
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <box-chart
            type="line-chart"
            card-color="purple"
            title="Sales"
            sub-title="10%"
            icon="trending_up"
            icon-color="white"
            :data="lineChartData.salesDataSet.data"
            :option="lineChartData.salesDataSet.option"
            :height="200"
          ></box-chart>
        </v-flex>
      </v-layout>

      <!-- vuse-card-mini-widget -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.miniWidget.header"></markdown>
          </h2>
          <markdown :source="labels.miniWidget.description"></markdown>
        </v-flex>
        <v-flex lg3 sm12 xs12>
          <mini-chart
            type="bar-chart"
            title="Visits"
            sub-title="to target"
            icon="trending_down"
            icon-color="error"
            subtitle-large="840"
            pre-subtitle="-8%"
            :data="barChartData.dashboardVisits.data"
            :option="barChartData.dashboardVisits.option"
          ></mini-chart>
        </v-flex>
        <v-flex lg3 sm12 xs12>
          <mini-chart
            type="line-chart"
            title="Impressions"
            sub-title="to target"
            icon="trending_up"
            icon-color="success"
            subtitle-large="78k"
            pre-subtitle="18%"
            :data="lineChartData.dashboardImpressions.data"
            :option="lineChartData.dashboardImpressions.option"
          ></mini-chart>
        </v-flex>
        <v-flex lg3 sm12 xs12>
          <mini-chart
            type="bar-chart"
            title="Conversation"
            sub-title="to target"
            icon="trending_up"
            icon-color="success"
            subtitle-large="488"
            pre-subtitle="12%"
            :data="barChartData.dashboardConversation.data"
            :option="barChartData.dashboardConversation.option"
          ></mini-chart>
        </v-flex>
        <v-flex lg3 sm12 xs12>
          <mini-chart
            type="line-chart"
            title="Sales"
            sub-title="to target"
            icon="trending_up"
            icon-color="success"
            subtitle-large="45K"
            pre-subtitle="28%"
            :data="lineChartData.dashboardDownloads.data"
            :option="lineChartData.dashboardDownloads.option"
          ></mini-chart>
        </v-flex>
      </v-layout>
      <!-- API -->
      <v-layout row wrap>
        <v-flex xs12>
          <api-table :data="data"></api-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import BoxChart from "@/components/Widgets/Chart/BoxChart";
import MiniChart from "@/components/Widgets/Chart/MiniChart";
import {
  lineChartJs as lineChartData,
  barChartJs as barChartData
} from "@/data/ChartWidget";

export default {
  components: {
    BoxChart,
    MiniChart
  },
  data() {
    return {
      page: {
        title: "Chart Widgets",
        headline: "Introduction",
        description: `Chart Widgets use the different chart that we have used in our Vuse Admin with the combination of other elements like <code>card</code>, <code>list</code> and so on.`
      },
      breadcrumbs: [
        {
          text: "Widgets",
          disabled: false
        },
        {
          text: "Chart Widgets",
          disabled: true
        }
      ],
      labels: {
        boxWidget: {
          header: `<span class="accent--text">#</span>  <span class="title"> Box Widget</span>`,
          description: `Use <code>box-chart</code> vuse's custom component to have mini widget chart. We have utlize ChartJS to build this component.`
        },
        miniWidget: {
          header: `<span class="accent--text">#</span>  <span class="title"> Mini Widget</span>`,
          description: `Use <code>mini-chart</code> vuse's custom component to have mini widget chart. We have utlize ChartJS to build this component.`
        }
      },
      lineChartData,
      barChartData
    };
  },
  computed: {
    components() {
      return this.$t("Vuse.Chartwidgets.components");
    },
    data() {
      return {
        folder: "",
        components: this.components,
        examples: this.exam,
        namespace: {
          component: "Chartwidgets",
          section: "Vuse"
        }
      };
    }
  }
};
</script>
