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
            <markdown :source="labels.miniWidget.header"></markdown>
          </h2>
          <markdown :source="labels.miniWidget.description"></markdown>
        </v-flex>
        <v-flex
          xs12
          sm4
          md3
          v-for="(widget, index) in cardMiniWidgets"
          :key="`cardMiniWidgets${index}`"
        >
          <vuse-card-mini-widget
            :gradient="widget.gradient"
            :height="widget.height"
            :headline="widget.headline"
            :subheader="widget.subheader"
            :icon="widget.icon"
            :icon-color="widget.iconcolor"
            :size="widget.size"
            :background="widget.background"
            :class-name="widget.className"
            :dark="widget.dark"
            :right-icon="widget.rightIcon"
            :avatar="widget.avatar"
            :tile="widget.tile"
            @click="onClick(widget)"
          ></vuse-card-mini-widget>
        </v-flex>
        <v-flex
          xs12
          sm6
          v-for="(widget, index) in cardMiniWidgetsAvatar"
          :key="`cardMiniWidgetsAvatar${index}`"
        >
          <vuse-card-mini-widget
            :gradient="widget.gradient"
            :height="widget.height"
            :headline="widget.headline"
            :subheader="widget.subheader"
            :icon="widget.icon"
            :icon-color="widget.iconcolor"
            :size="widget.size"
            :background="widget.background"
            :class-name="widget.className"
            :dark="widget.dark"
            :right-icon="widget.rightIcon"
            :avatar="widget.avatar"
            :tile="widget.tile"
          ></vuse-card-mini-widget>
        </v-flex>
      </v-layout>

      <!-- vuse-action-card-widget -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.actinoWidget.header"></markdown>
          </h2>
          <markdown :source="labels.actinoWidget.description"></markdown>
        </v-flex>
        <v-flex
          xs12
          md6
          v-for="(widget, index) in actionCardWidgets"
          :key="`actionCardWidgets${index}`"
        >
          <vuse-action-card-widget
            :card-media="widget.cardMedia"
            :media-height="widget.mediaHeight"
            :media-headline="widget.mediaHeadline"
            :card-title="widget.cardTitle"
            :actions="widget.actions"
            @share="shareClick"
            :data="widget"
          ></vuse-action-card-widget>
        </v-flex>
      </v-layout>

      <!-- vuse-user-profile-widget -->
      <v-layout row wrap>
        <v-flex xs12 pb-0>
          <h2 class="headline">
            <markdown :source="labels.userProfileWidget.header"></markdown>
          </h2>
          <markdown :source="labels.userProfileWidget.description"></markdown>
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
import { users } from "@/data/dummyData";
import { rgba as gradient } from "@/data/gradients";

export default {
  data() {
    return {
      section: "vuse",
      component: "cardwidgets",
      page: {
        title: "Card Widgets",
        headline: "Introduction",
        description: `Card Widgets use the <code>v-card</code> as its base component to display quick information of the action or behaviour happing in your application.`
      },
      breadcrumbs: [
        {
          text: "Widgets",
          disabled: false
        },
        {
          text: "Card",
          disabled: true
        }
      ],
      labels: {
        miniWidget: {
          header: `<span class="accent--text">#</span> <span class="title"> Mini Widget</span>`,
          description: `Use <code>vuse-card-mini-widget</code> vuse's custom component to have mini widget. With this, it's easy to modify all property of this widget.`
        },
        actinoWidget: {
          header: `<span class="accent--text">#</span> <span class="title"> Action Widget</span>`,
          description: `Use <code>vuse-action-card-widget</code> vuse's custom component which has <code>v-img</code> alogin with flexible actions <code>v-card-actions</code>. Here, you can declare action items and event dynamically.`
        },
        userProfileWidget: {
          header: `<span class="accent--text">#</span> <span class="title"> User Profile Widget</span>`,
          description: `Use <code>vuse-user-profile-widget</code> is quick-show user profile card widget.`
        }
      },
      cardMiniWidgets: [
        {
          headline: "80",
          subheader: `<strong>MAILS</strong>`,
          icon: "mail",
          iconcolor: "primary",
          size: "50px"
        },
        {
          headline: "200",
          subheader: `<strong>PEDNING TICKETS</strong>`,
          icon: "fas fa-ticket-alt",
          iconcolor: "success",
          size: "50px"
        },
        {
          headline: "101",
          subheader: `<strong>NEW ORDER</strong>`,
          icon: "shopping_cart",
          iconcolor: "warning",
          size: "50px"
        },
        {
          headline: "42",
          subheader: `<strong>COMMENTS</strong>`,
          icon: "comment",
          iconcolor: "blue",
          size: "50px"
        },

        {
          headline: "80",
          subheader: `<strong>NEW VISITS</strong>`,
          icon: "people",
          size: "50px",
          rightIcon: true,
          background: "primary",
          dark: true
        },
        {
          headline: "200",
          subheader: `<strong>PEDNING TICKETS</strong>`,
          icon: "fas fa-ticket-alt",
          size: "50px",
          rightIcon: true,
          background: "act",
          dark: true
        },
        {
          headline: "101",
          subheader: `<strong>NEW ORDER</strong>`,
          icon: "shopping_cart",
          size: "50px",
          rightIcon: true,
          background: "warning",
          dark: true
        },
        {
          headline: "42",
          subheader: `<strong>COMMENTS</strong>`,
          icon: "comment",
          size: "50px",
          rightIcon: true,
          background: "blue",
          dark: true
        },

        {
          headline: "80",
          subheader: `<strong>NEW VISITS</strong>`,
          icon: "people",
          size: "50px",
          gradient: gradient[1].gradient,
          dark: true
        },
        {
          headline: "200",
          subheader: `<strong>PEDNING TICKETS</strong>`,
          icon: "fas fa-ticket-alt",
          size: "50px",
          gradient: gradient[11].gradient,
          dark: true
        },
        {
          headline: "101",
          subheader: `<strong>NEW ORDER</strong>`,
          icon: "shopping_cart",
          size: "50px",
          gradient: gradient[8].gradient,
          dark: true
        },
        {
          headline: "42",
          subheader: `<strong>COMMENTS</strong>`,
          icon: "comment",
          size: "50px",
          gradient: gradient[10].gradient,
          dark: true
        }
      ],
      cardMiniWidgetsAvatar: [
        {
          headline: `<span class="accent--text bold">2</span>`,
          subheader: `<strong>PULL REQUEST</strong>`,
          avatar: users[1].avatar,
          tile: true,
          size: "75px"
        },
        {
          headline: `${users[5].name}`,
          subheader: `<strong>Pending Request</strong>`,
          avatar: users[5].avatar,
          background: "blue-grey darken-2",
          rightIcon: true,
          size: "75px",
          dark: true
        }
      ],
      actionCardWidgets: [
        {
          cardMedia: "/static/widget-images/brown-shoe.jpeg",
          mediaHeight: "350px",
          mediaHeadline: `<span>Walter Steiger</span>`,
          cardTitle: {
            headline: `Walter Steiger`,
            detail: `Mollit excepteur amet nostrud ut occaecat irure dolore ut enim sunt.`
          },
          actions: [
            {
              btn: true,
              text: "$550",
              event: "favorite",
              position: "left",
              small: true,
              color: "blue",
              dark: true,
              round: true
            },
            { icon: "add_shopping_cart", position: "right" },
            {
              icon: "favorite",
              event: "favorite",
              position: "left",
              iconColor: "secondary"
            },
            { icon: "share", event: "share", position: "right" }
          ]
        },
        {
          cardMedia: "/static/widget-images/speaker.jpeg",
          mediaHeight: "350px",
          mediaHeadline: `<span>JBL Clip</span>`,
          cardTitle: {
            headline: `JBL Clip`,
            detail: `Nostrud id proident irure excepteur voluptate voluptate irure quis voluptate dolore.`
          },
          actions: [
            {
              btn: true,
              text: "$100",
              event: "favorite",
              position: "left",
              small: true,
              color: "blue",
              dark: true,
              round: true
            },
            { icon: "add_shopping_cart", position: "right" },
            {
              icon: "favorite",
              event: "favorite",
              position: "left",
              iconColor: "secondary"
            },
            { icon: "share", event: "share", position: "right" }
          ]
        },

        {
          cardMedia:
            "/static/widget-images/smartphone-vintage-technology-music.jpg",
          mediaHeight: "350px",
          mediaHeadline: `<span class="black--text">Headphone</span>`,
          cardTitle: {
            headline: `Headphone`,
            detail: `Minim voluptate elit incididunt mollit sed pariatur elit aute.`
          },
          actions: [
            {
              btn: true,
              text: "$550",
              event: "favorite",
              position: "right",
              small: true,
              color: "primary",
              dark: true
            },
            { icon: "favorite", event: "favorite", position: "left" },
            { icon: "add_shopping_cart", position: "left" },
            { icon: "share", event: "share", position: "left" }
          ]
        },
        {
          cardMedia: "/static/widget-images/coffee-mug.jpeg",
          mediaHeight: "350px",
          mediaHeadline: `<span>Coffee Mug</span>`,
          cardTitle: {
            headline: `Coffee Mug`,
            detail: `Magna officia quis duis sed ut culpa ad fugiat irure.`
          },
          actions: [
            {
              btn: true,
              text: "$100",
              event: "favorite",
              position: "right",
              small: true,
              color: "primary",
              dark: true,
              outline: true
            },
            {
              icon: "favorite",
              event: "favorite",
              position: "left",
              color: "secondary"
            },
            { icon: "add_shopping_cart", position: "left", color: "warning" },
            { icon: "share", event: "share", position: "left", color: "info" }
          ]
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
  },
  methods: {
    onClick() {},
    favoriteClick() {
      // console.log('favoriteClick', data)
    },
    bookmarkClick() {
      // console.log('bookmarkClick', data)
    },
    shareClick() {
      // console.log('shareClick', data)
    }
  },
  computed: {
    components() {
      return this.$t("Vuse.Cardwidgets.components");
    },
    data() {
      return {
        folder: "",
        components: this.components,
        examples: this.exam,
        namespace: {
          component: "Cardwidgets",
          section: "Vuse"
        }
      };
    }
  }
};
</script>
