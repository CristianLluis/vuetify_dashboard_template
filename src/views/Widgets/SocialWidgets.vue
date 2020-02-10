<template>
  <div>
    <section-definition :title="page.title" :breadcrumbs="breadcrumbs"></section-definition>
    <v-container fluid grid-list-xl page>
      <v-layout row wrap v-if="page.headline || page.description">
        <v-flex xs12 sm8 md12>
          <section-header v-text="page.headline" v-if="page.headline"></section-header>
          <div class="subheading justify" v-html="page.description" v-if="page.description"></div>
        </v-flex>
      </v-layout>
      
      <!-- Profile Widget Card -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.userProfileWidget.header"></markdown>
          </h2>
        </v-flex>
        <v-flex
          xs12
          sm6
          md3
          v-for="(widget, index) in userProfileWidgets"
          :key="`userProfileWidgets${index}`"
        >
          <vuse-user-profile-widget
            :avatar="widget.avatar"
            :name="widget.name"
            :size="widget.size"
            :gradient="widget.gradient"
            :height="widget.height"
            :background="widget.background"
            :dark="widget.dark"
            :icon="widget.icon"
            :icon-color="widget.iconColor"
            :avatar-color="widget.avatarColor"
          >
            <template slot="details" v-if="widget.details">
              <div v-html="widget.details"></div>
            </template>
            <template slot="actions" v-if="widget.actions">
              <v-spacer></v-spacer>
              <v-btn
                icon
                v-for="(action, i) in widget.actions"
                :key="`action--${i}`"
                :dark="action.dark"
                :color="action.color"
                tag="a"
                :href="action.link"
                target="_blank"
              >
                <v-icon>{{ action.icon }}</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </template>
          </vuse-user-profile-widget>
        </v-flex>
        <v-flex xs12 sm6 md3 v-for="(item,index) in usersData" :key=" 'mini' + index">
          <profile-social-card 
            :avatar="item.avatar.src"
            :name="item.name"
          >
            <template slot="details" v-if="item.jobTitle">
              <div v-html="item.jobTitle" class="mt-1"></div>
            </template>
            <template slot="actions">
              <v-spacer></v-spacer>
              <v-btn round class="gradient-4">Following</v-btn>
              <v-btn icon color="grey lighten-3">
                <v-icon color="blue" small class="text-blue-500-glow">chat</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </template>
          </profile-social-card>
        </v-flex>
      </v-layout>


      <!-- Mini Nave card -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.miniNameCard.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg3 sm12 v-for="(item,index) in usersData" :key=" 'mini' + index">
          <name-card
            mini
            v-bind="item"
          >
          </name-card>
        </v-flex>
      </v-layout>

      <!-- Basic Nave card -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.basicNameCard.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg3 sm12 v-for="(item,index) in usersData" :key=" 'basic' + index">
          <name-card v-bind="item">
          </name-card>
        </v-flex>
      </v-layout>

      <!-- Basic Name Card with top nav -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.basicNameCardWithTopnav.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg3 sm12 v-for="(item,index) in usersData" :key=" 'basic-top-nav' + index">
          <name-card
            top-nav
            v-bind="item"
          >
          </name-card>
        </v-flex>
      </v-layout>

      <!-- Bottom Nav Name Card -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.bottomNavNavCard.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg3 sm12 v-for="(item,index) in usersData" :key=" 'bottom-nav' + index">
          <name-card
            bottom-nav
            v-bind="item"
          >
          </name-card>
        </v-flex>
      </v-layout>

      <!-- Contact card -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.contactCard.header"></markdown>
          </h2>
        </v-flex>
        <v-flex lg4 sm12>
          <profile-card
            :name="authUser.name"
            :avatar="authUser.avatar"
            :mobiles="[{number: '(650) 555-2468', type: 'home'}, {number: '(323) 888-8642', type: 'Work'}]"
            :emails="[{name: 'mia@example.com', type: 'home'}, {name: 'jack@example.com', type: 'Work'}]"
            :address="{line1: '1400, Main Steet', line2: 'Los Angelas, LA 89987'}"
          ></profile-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { rgba as gradient } from "@/data/gradients";
import { users, authUser } from "@/data/dummyData";
import BackgroundImgs from "@/data/json/backgroundimgs";
import NameCard from "@/components/Widgets/card/NameCard";
import ProfileCard from "@/components/Widgets/card/ProfileCard";
import ProfileSocialCard from "@/components/Widgets/card/ProfileSocialCard";

export default {
  components: {
    NameCard,
    ProfileCard,
    ProfileSocialCard
  },
  data() {
    return {
      section: "vuse",
      component: "cardwidgets",
      page: {
        title: "Social Widgets"
      },
      labels: {
        miniNameCard: {
          header: `<span class="accent--text">#</span> <span class="title"> Mini Card</span>`
        },
        basicNameCard: {
          header: `<span class="accent--text">#</span> <span class="title"> Basic Card</span>`
        },
        basicNameCardWithTopnav: {
          header: `<span class="accent--text">#</span> <span class="title"> Basic Card with top nav</span>`
        },
        bottomNavNavCard: {
          header: `<span class="accent--text">#</span> <span class="title"> Bottom Nav Card</span>`
        },
        contactCard: {
          header: `<span class="accent--text">#</span> <span class="title"> Contact Card</span>`
        },
        userProfileWidget: {
          header: `<span class="accent--text">#</span> <span class="title"> User Profile Widget</span>`
        }
      },
      breadcrumbs: [
        {
          text: "Widgets",
          disabled: false
        },
        {
          text: "Social",
          disabled: true
        }
      ],
      authUser,
      usersData: [
        {
          jobTitle: "Web Developer",
          name: users[1].name,
          avatar: {
            src: users[1].avatar,
            size: "36"
          }
        },
        {
          jobTitle: "Web Designer",
          name: users[2].name,
          color: "indigo",
          dark: true,
          avatar: {
            src: users[2].avatar,
            size: "36"
          }
        },
        {
          jobTitle: "Web Developer",
          name: users[3].name,
          color: "amber",
          dark: false,
          avatar: {
            src: users[3].avatar,
            size: "36"
          }
        },
        {
          jobTitle: "Product Manager",
          name: users[4].name,
          dark: true,
          cardBgImage: BackgroundImgs[2],
          avatar: {
            src: users[4].avatar,
            size: "36"
          }
        }
      ],
      userProfileWidgets: [
        {
          avatar: users[1].avatar,
          name: users[1].name,
          size: "125px",
          details:
            "Lorem ipsum sint enim sunt dolore dolore consectetur pariatur officia in dolore anim in quis in.",
          actions: [
            {
              icon: "fab fa-github",
              link: "https://github.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "fab fa-twitter",
              link: "https://twitter.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "fab fa-facebook-f",
              link: "https://www.facebook.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "mail",
              link: "mailto:hexesist@gmail.com",
              color: "blue-grey darken-2",
              dark: true
            }
          ]
        },
        {
          avatar: users[2].avatar,
          name: users[2].name,
          size: "125px",
          background: "blue-grey lighten-2",
          details:
            "Lorem ipsum nulla aliquip enim anim do id laborum cupidatat in minim dolore ut veniam in consequat.",
          actions: [
            {
              icon: "fab fa-github",
              link: "https://github.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "fab fa-twitter",
              link: "https://twitter.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "fab fa-facebook-f",
              link: "https://www.facebook.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "mail",
              link: "mailto:hexesist@gmail.com",
              color: "blue-grey darken-2",
              dark: true
            }
          ]
        },
        {
          icon: "favorite",
          avatarColor: "pink",
          iconColor: "white",
          name: users[3].name,
          size: "125px",
          details:
            "Ut exercitation non est cupidatat amet aliquip laboris nulla nisi deserunt exercitation cillum id.",
          gradient: gradient[4].gradient,
          actions: [
            {
              icon: "fab fa-github",
              link: "https://github.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "fab fa-twitter",
              link: "https://twitter.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "fab fa-facebook-f",
              link: "https://www.facebook.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "mail",
              link: "mailto:hexesist@gmail.com",
              color: "blue-grey darken-2",
              dark: true
            }
          ]
        },
        {
          avatar: users[4].avatar,
          name: users[4].name,
          size: "125px",
          details:
            "Quis consequat tempor consectetur in nisi id laboris id ex tempor velit veniam ea id pariatur.",
          gradient: gradient[1].gradient,
          dark: true,
          actions: [
            {
              icon: "fab fa-github",
              link: "https://github.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "fab fa-twitter",
              link: "https://twitter.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "fab fa-facebook-f",
              link: "https://www.facebook.com/",
              color: "blue-grey darken-2",
              dark: true
            },
            {
              icon: "mail",
              link: "mailto:hexesist@gmail.com",
              color: "blue-grey darken-2",
              dark: true
            }
          ]
        }
      ]
    };
  }
};
</script>
