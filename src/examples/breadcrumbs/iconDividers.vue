<template>
  <div>
    <v-breadcrumbs :items="items">
      <v-icon slot="divider">forward</v-icon>
    </v-breadcrumbs>

    <v-breadcrumbs :items="items">
      <v-icon slot="divider">chevron_right</v-icon>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Dashboard",
          disabled: false
        },
        {
          text: "Link 1",
          disabled: false
        },
        {
          text: "Link 2",
          disabled: true
        }
      ]
    };
  }
};
</script>
