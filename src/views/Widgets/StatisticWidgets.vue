<template>
  <div>
    <section-definition :title="page.title" :breadcrumbs="breadcrumbs"></section-definition>
    <v-container fluid grid-list-xl>
      <v-layout row wrap v-if="page.headline || page.description">
        <v-flex xs12 sm8 md12>
          <section-header v-text="page.headline" v-if="page.headline"></section-header>
          <div class="subheading justify" v-html="page.description" v-if="page.description"></div>
        </v-flex>
      </v-layout>
      <!-- minimal statistic start -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.minimalStatistic.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <minimal-statistic
            icon="work"
            title="278"
            sub-title="New Projects"
            color="indigo"
            apply-title-color
          >
          </minimal-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <minimal-statistic
            icon="favorite_border"
            title="450"
            sub-title="New Likes"
            color="pink"
            apply-title-color
          >
          </minimal-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <minimal-statistic
            icon="message"
            title="118"
            sub-title="Comments"
            color="light-blue"
            apply-title-color
          >
          </minimal-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <minimal-statistic
            icon="edit"
            title="481"
            sub-title="Posts"
            color="purple"
            apply-title-color
          >
          </minimal-statistic>
        </v-flex>
      </v-layout>

      <!-- mini statistic start -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.miniStatitic.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-facebook"
            title="99+"
            sub-title="Likes"
            color="indigo"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-google"
            title="200+"
            sub-title="Connections"
            color="red"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-twitter"
            title="500+"
            sub-title="Followers"
            color="light-blue"
          >
          </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic
            icon="fa fa-instagram"
            title="50+"
            sub-title="Shots"
            color="purple"
          >
          </mini-statistic>
        </v-flex>
      </v-layout>

      <!-- MinimalLinearStatistic statistic start -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.minimalLinearStatistic.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg4 sm12>
          <minimal-linear-statistic
            icon="sd_storage"
            title="70%"
            sub-title="Storage Used"
            color="indigo"
            apply-title-color
            :value="70"
          >
          </minimal-linear-statistic>
        </v-flex>
        <v-flex lg4 sm12>
          <minimal-linear-statistic
            icon="usb"
            title="8/10"
            sub-title="USB Connetion"
            color="pink"
            apply-title-color
            :value="80"
          >
          </minimal-linear-statistic>
        </v-flex>
        <v-flex lg4 sm12>
          <minimal-linear-statistic
            icon="monetization_on"
            title="1200"
            sub-title="Earnings"
            color="success"
            apply-title-color
            :value="90"
          >
          </minimal-linear-statistic>
        </v-flex>
      </v-layout>
      
      <!-- Linear Trending -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.linearTrending.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg4 sm12 v-for="(item,index) in trending" :key="'trending'+index">
          <linear-statistic
            :title="item.subheading"
            :sub-title="item.caption"
            :icon="item.icon.label"
            :color="item.icon.color"
            :value="item.linear.value"
          >
          </linear-statistic>
        </v-flex>
      </v-layout>

      <!-- Circle Trending-->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.circleTrending.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg4 sm12 v-for="(item,index) in trending2" :key="'c-trending'+index">
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          >
          </circle-statistic>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { trending, trending2 } from "@/data/StatisticWidgets.js";
import MiniStatistic from "@/components/Widgets/statistic/MiniStatistic";
import MinimalStatistic from "@/components/Widgets/statistic/MinimalStatistic";
import LinearStatistic from "@/components/Widgets/statistic/LinearStatistic";
import CircleStatistic from "@/components/Widgets/statistic/CircleStatistic";
import MinimalLinearStatistic from "@/components/Widgets/statistic/MinimalLinearStatistic";
export default {
  components: {
    CircleStatistic,
    MiniStatistic,
    MinimalStatistic,
    LinearStatistic,
    MinimalLinearStatistic
  },
  data() {
    return {
      section: "vuse",
      component: "cardwidgets",
      page: {
        title: "Statistic Widgets"
      },
      labels: {
        miniStatitic: {
          header: `<span class="accent--text">#</span> <span class="title"> Social</span>`
        },
        linearTrending: {
          header: `<span class="accent--text">#</span> <span class="title"> Linear Trending</span>`
        },
        circleTrending: {
          header: `<span class="accent--text">#</span> <span class="title"> Circle Trending</span>`
        },
        minimalStatistic: {
          header: `<span class="accent--text">#</span> <span class="title"> Minimal Statistic</span>`
        },
        minimalLinearStatistic: {
          header: `<span class="accent--text">#</span> <span class="title"> Minimal Linear Statistic</span>`
        }
      },
      breadcrumbs: [
        {
          text: "Widgets",
          disabled: false
        },
        {
          text: "Statistic",
          disabled: true
        }
      ],
      trending,
      trending2
    };
  }
};
</script>
