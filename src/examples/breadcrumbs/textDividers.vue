<template>
  <div>
    <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>

    <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
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
  })
};
</script>
