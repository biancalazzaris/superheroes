<template>
  <div>
    <div v-if="true">
      <h3>Profile</h3>
      <pre>{{ bio }}</pre>
    </div>
    <div v-show="false">Não tenho dado para ser exibido!</div>

    <div v-if="isStatus">
        <!-- {{name}} {{lastName}} -->
        {{ showFullName }} <br>
        {{ setName }} <br>
        {{ setFruit }} <br>

        <ul v-for="fruit in setFruit" :key="fruit.id">
            <li>{{fruit}}</li>
        </ul>

    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      name: "Maria",
      lastName: "Pereira",
      isStatus: true,
      bio: {
        name: "Wanda",
        bio: "Notably powerful.",
        photo: "",
        power: "Trovão",
        enemies: "",
        fraquezas: "",
        status: false,
      },
    };
  },
  computed: {
      showFullName() {
          return this.name + ` ` + this.lastName
      },
      setName() {
          this.name = 'Juzé';
        return this.name;
      },
      setFruit() {
          const fruits = ['abacate', 'limão'];
          return fruits;
      },
  }
};
</script>