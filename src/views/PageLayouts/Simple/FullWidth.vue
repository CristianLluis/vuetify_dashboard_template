<template>
  <v-content>
    <div v-vuse-scrollbar>
      <section-def :title="title" :breadcrumbs="breadcrumbs"></section-def>
      <v-container fluid grid-list-xl>
        <example-content></example-content>
      </v-container>
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
      breadcrumbs: [
        {
          text: "Page Layouts",
          disabled: false
        },
        {
          text: "Full Width",
          disabled: true
        }
      ]
    };
  }
};
</script>
