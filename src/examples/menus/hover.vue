<template>
  <div class="text-xs-center">
    <v-menu open-on-hover top offset-y>
      <v-btn slot="activator" color="primary" dark>Dropdown</v-btn>

      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index" @click="()=>{}">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  })
};
</script>
