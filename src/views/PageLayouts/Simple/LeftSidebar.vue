<template>
  <v-content class="overflow-hidden">
    <v-card height="100%" flat>
      <v-navigation-drawer
        absolute
        persistent
        light
        floating
        v-model="drawerinternal"
        enable-resize-watcher
        class="elevation-1 inner-sidebar"
        v-vuse-scrollbar
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
        <v-list class="pt-0">
          <v-divider></v-divider>
          <v-list-tile v-for="(item, index) in items" :key="item.title" @click="()=>{}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }} {{index}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content class="pt-0" :style="{ height: heightSet + 'px' }">
        <div v-vuse-scrollbar>
          <v-container fluid class="pa-0">
            <v-layout row>
              <v-flex xs12>
                <section-def :title="title" :breadcrumbs="breadcrumbs"></section-def>
                <v-toolbar color="indigo" dark>
                  <v-toolbar-side-icon
                    @click.stop="drawerinternal = !drawerinternal"
                    class="hidden-lg-and-up"
                  ></v-toolbar-side-icon>
                  <v-toolbar-title>Application</v-toolbar-title>
                </v-toolbar>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container fluid grid-list-xl>
            <example-content></example-content>
          </v-container>
        </div>
      </v-content>
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
      breadcrumbs: [
        {
          text: "Page Layouts",
          disabled: false
        },
        {
          text: "Full Width",
          disabled: true
        }
      ],
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
      return this.height - 116;
    }
  }
};
</script>
