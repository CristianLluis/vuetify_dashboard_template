<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-container fluid grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 sm8 md12>
              <section-header v-if="contentHeadline" v-text="contentHeadline"></section-header>
              <div class="subheading justify" v-html="description"></div>
              <div class="my-2"></div>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <section>
                <section-head :value="`${namespace}.blockquoteHeader`"></section-head>
                <blockquote blockquote class="blockquote mb-5">Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</blockquote>
                <section-head :value="`${namespace}.paragraphsHeader`"></section-head>
                <div class="mb-5">
                  <p>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</p>
                  <p>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</p>
                </div>
                <section-head :value="`${namespace}.codeHeader`"></section-head>
                <section-text :value="`${namespace}.codeText`"></section-text>
                <section-head :value="`${namespace}.variablesHeader`"></section-head>
                <section-text :value="`${namespace}.variablesText`"></section-text>
                <section-head :value="`${namespace}.userInputHeader`"></section-head>
                <section-text :value="`${namespace}.userInputText`"></section-text>
              </section>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      contentHeadline: "Content",
      description: `Vuse has custom styling for multiple standard elements.`,
      namespace: "Style.Content"
    };
  }
};
</script>
