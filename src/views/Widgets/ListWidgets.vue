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
      <v-layout row wrap>
        <v-flex lg12 sm12 xs12>
          <tickets-list></tickets-list>
        </v-flex>
        <v-flex lg12 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <message-list></message-list>
        </v-flex>
        
        <v-flex lg6 sm12 xs12>
          <notification-list></notification-list>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <new-users-list></new-users-list>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>
      
        <v-flex lg12 sm12 xs12>
          <post-list-card :items="posts"></post-list-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getPost } from "@/data/widgets/post";
import MessageList from "@/components/Widgets/list/MessageList";
import NewUsersList from "@/components/Widgets/list/NewUsersList";
import TicketsList from "@/components/Widgets/list/TicketsList";
import NotificationList from "@/components/Widgets/list/NotificationList";
import PlainTable from "@/components/Widgets/list/PlainTable";
import PlainTableOrder from "@/components/Widgets/list/PlainTableOrder";
import PostListCard from "@/components/Widgets/card/PostListCard";
export default {
  components: {
    PostListCard,
    MessageList,
    TicketsList,
    NewUsersList,
    NotificationList,
    PlainTable,
    PlainTableOrder
  },
  data() {
    return {
      page: {
        title: "List Widgets",
        headline: "Introduction",
        description: `List Widgets use the <code>v-list</code> as its base component to display quick information of the action or behaviour happing in your application.`
      },
      breadcrumbs: [
        {
          text: "Widgets",
          disabled: false
        },
        {
          text: "List",
          disabled: true
        }
      ]
    };
  },
  computed: {
    posts() {
      return getPost();
    }
  }
};
</script>
