<template>
  <v-select
    :items="items"
    v-model="value"
    label="Select Item"
    multiple
  >
    <template
      slot="selection"
      slot-scope="{ item, index }"
    >
      <v-chip v-if="index === 0">
        <span>{{ item }}</span>
      </v-chip>
      <span
        v-if="index === 1"
        class="grey--text caption"
      >(+{{ value.length - 1 }} others)</span>
    </template>
  </v-select>
</template>
<script>
export default {
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"],
    value: ["foo", "bar", "fizz"]
  })
};
</script>
