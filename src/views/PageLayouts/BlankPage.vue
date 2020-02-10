<template>
  <v-content>
    <div v-vuse-scrollbar>
      <section-def :title="title" :breadcrumbs="breadcrumbs"></section-def>
      <v-container fluid grid-list-xl>

      </v-container>
    </div>
  </v-content>
</template>
<script>
export default {
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
