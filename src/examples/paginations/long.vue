<template>
  <div class="text-xs-center">
    <v-container>
      <v-layout justify-center>
        <v-flex xs8>
          <v-card>
            <v-card-text>
              <v-pagination
                v-model="page"
                :length="15"
              ></v-pagination>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1
    };
  }
};
</script>
