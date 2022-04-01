<template>
  <div id="app">
    <nav>
      <Header />
    </nav>
    <div class="container">
      <div class="row">
        <div class="col"
        v-for="personagem in personagens"
        :key="personagem.id">
          <Card :personagem="personagem"/>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

</style>
<script>
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";
import Card_DC from "@/components/Card-DC.vue";

export default {
  name: "App",
  components: {
    Card,
    Header,
    Card_DC,
  },
  data() {
    return {
      personagens: [
        {
          id: 1,
          name: 'Viuva Negra',
          about: 'A mais forte ...',
          photo: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/11/scarlett-johansson-black-widow-4k-new-0s-1600x1200-1.jpg'
        },
        {
          id: 2,
          name: 'Homem de Ferro',
          about: 'Jarvis, faça algo! ',
          photo: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/02/homem-de-ferro-tony-divulgacao.jpg'
        },
        {
          id: 3,
          name: 'Hulk',
          about: 'biiirllll',
          photo: 'https://ogimg.infoglobo.com.br/in/25320231-3fa-ec0/FT1086A/33973739_Marvels-AvengersAge-Of-UltronHulk-Bruce-Banner-Mark-RuffaloPhFilm-FrameMarvel.jpg'
        },

      ]
    }
  }
};
</script>
