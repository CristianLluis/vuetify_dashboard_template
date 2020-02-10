<template>
  <v-content class="page-layout-content">
    <v-card flat>
      <section-def :title="title" :breadcrumbs="breadcrumbs"></section-def>
      <v-navigation-drawer
        absolute
        persistent
        light
        right
        floating
        v-model="drawerinternal"
        enable-resize-watcher
        class="cardlayout-nav-spacer"
      >
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list class="pt-0 inner-sidebar" v-vuse-scrollbar>
          <v-list-tile v-for="(item, index) in items" :key="index" @click="()=>{}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }} {{index}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <div class="page-cardlayout-container right-sb-layout">
        <v-content class="pt-0">
          <v-container grid-list-xl>
            <v-layout row>
              <v-flex xs12>
                <v-card class="card--flex-toolbar">
                  <v-toolbar card color="white">
                    <v-toolbar-side-icon
                      @click.stop="drawerinternal = !drawerinternal"
                      class="hidden-lg-and-up"
                    ></v-toolbar-side-icon>
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
                  <v-card-text :style="{ height: heightSet + 'px' }">
                    <div v-vuse-scrollbar>
                      <example-content></example-content>
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </div>
    </v-card>
  </v-content>
</template>
<script>
import ExampleContent from "../ExampleContent";
import ResizeMixin from "@/mixins/ResizeMixin";

export default {
  mixins: [ResizeMixin],
  components: {
    ExampleContent
  },
  data() {
    return {
      drawerinternal: true,
      title: "Page Layouts",
      breadcrumbs: [],
      items: [
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" },
        { title: "Item", icon: "keyboard_arrow_right" }
      ]
    };
  },
  computed: {
    heightSet() {
      return this.height - 275;
    }
  }
};
</script>
