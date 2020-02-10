<template>
  <v-content>
    <div v-vuse-scrollbar>
      <v-card flat>
        <section-def :title="title" :breadcrumbs="breadcrumbs"></section-def>
        <v-container grid-list-xl class="page-cardlayout-container">
          <v-layout row>
            <v-flex xs12>
              <v-card class="card--flex-toolbar">
                <v-toolbar card color="white" prominent>
                  <v-toolbar-title class="body-2 grey--text">Title</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>apps</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text>
                  <example-content></example-content>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </v-content>
</template>
<script>
import ExampleContent from "../ExampleContent";
export default {
  components: {
    ExampleContent
  },
  data() {
    return {
      title: "Page Layouts",
      breadcrumbs: []
    };
  }
};
</script>
