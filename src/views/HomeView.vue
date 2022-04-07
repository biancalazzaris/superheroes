<template>
  <div id="home">

    <div class="container">
      <div class="row">
        <div class="col" 
        v-for="personagem in personagens" 
        :key="personagem.id">
          <Card :personagem="personagem" />
        </div>
      </div>
      <div class="row">
        <div class="col" 
        v-for="superhero in superheroes" 
        :key="superhero.id">
          <CardDC :superhero="superhero" />
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
import CardDC from "@/components/CardDC.vue";

export default {
  name: "Home",
  components: {
    Card,
    Header,
    CardDC,
  },
  data() {
    return {
      personagens: [
        {
          id: 1,
          name: "Viuva Negra",
          about: "A mais forte ...",
          photo:
            "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/11/scarlett-johansson-black-widow-4k-new-0s-1600x1200-1.jpg",
        },
        {
          id: 2,
          name: "Homem de Ferro",
          about: "Jarvis, faça algo! ",
          photo:
            "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/02/homem-de-ferro-tony-divulgacao.jpg",
        },
        {
          id: 3,
          name: "Hulk",
          about: "biiirllll",
          photo:
            "https://ogimg.infoglobo.com.br/in/25320231-3fa-ec0/FT1086A/33973739_Marvels-AvengersAge-Of-UltronHulk-Bruce-Banner-Mark-RuffaloPhFilm-FrameMarvel.jpg",
        },
      ],
      superheroes: [
        {
          id: 4,
          name: "Harley Quinn",
          about: "Pudinnnn <3",
          photo:
            "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2018/11/harley_quinn-320x200.jpg",
        },
        {
          id: 5,
          name: "Supeman",
          about: "Superman ou Super-Homem é um super-herói de histórias em quadrinhos publicadas pela DC Comics.",
          photo:
            "https://epipoca.com.br/wp-content/uploads/2021/08/superman-0308.jpg",
        },
        {
          id: 6,
          name: "Batman",
          about: "Batman é considerado um dos mais fortes não-meta-humanos de toda face da terra",
          photo:
            "https://cdn.ome.lt/3RnHgJJk37p0Ple0Jbs2gjKz_es=/1200x630/smart/extras/conteudos/batman-futuro-da-franquia.jpg",
        },
      ],
    };
  },
};
</script>
