<template>
  <div>
    <div class="card" style="width: 18rem">
      <img
        :src="superhero.photo"
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">
          {{superhero.name}}
          </h5>
        <p class="card-text">
          {{superhero.about}}
        </p>
        <a href="#" class="btn btn-primary">
          Preview
          </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardDC',
  props: {
    superhero: {
      type: Object,
      require: true,
    },
  },
};
</script>

