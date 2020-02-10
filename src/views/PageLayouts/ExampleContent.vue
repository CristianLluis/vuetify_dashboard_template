<template>
  <v-layout row wrap>
    <v-flex xs12 sm8 md12>
      <section-header v-if="contentHeadline" v-text="contentHeadline"></section-header>
      <div class="subheading justify" v-html="description"></div>
      <div class="my-2"></div>
    </v-flex>
    <!-- Card -->
    <v-flex xs12 md6 offset-md0>
      <h2 class="headline">Nature is gift of god.</h2>
      <p class="body-2">Demo example</p>
      <v-card>
        <v-img :src="`https://unsplash.it/300/600?image=${Math.floor(Math.random() * 100) + 1}`" height="300px">
        </v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <!-- Heading -->
    <v-flex xs12 sm8 md12 class="mt-3">
      <p>Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law.</p>
      <blockquote>
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <p>Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so - if you want to sing this way, think of what you'd like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free. La la la la la, la la la la la la la, la la la la la la la, la la la la la la la la la la la la la, so - Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name.</p>
      <p>Ten years ago a crack commando unit was sent to prison by a military court for a crime they didn't commit. These men promptly escaped from a maximum security stockade to the Los Angeles underground. Today, still wanted by the government, they survive as soldiers of fortune. If you have a problem and no one else can help, and if you can find them, maybe you can hire the A-team.</p>
      <p>Ulysses, Ulysses - Soaring through all the galaxies. In search of Earth, flying in to the night. Ulysses, Ulysses - Fighting evil and tyranny, with all his power, and with all of his might. Ulysses - no-one else can do the things you do. Ulysses - like a bolt of thunder from the blue. Ulysses - always fighting all the evil forces bringing peace and justice to all.</p>
      <p>This is my boss, Jonathan Hart, a self-made millionaire, he's quite a guy. This is Mrs H., she's gorgeous, she's one lady who knows how to take care of herself. By the way, my name is Max. I take care of both of them, which ain't easy, 'cause when they met it was MURDER!</p>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      title: "Full Page",
      contentHeadline: "Page Layouts",
      description: `Full page.`
    };
  }
};
</script>
