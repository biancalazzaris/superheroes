<template>
  <div id="form">
    <nav>
      <Header />
    </nav>
    <router-view />
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
import Header from "@/components/Header.vue";

export default {
  name: "Form",
  components: {
    Header,
  },
};
</script>
