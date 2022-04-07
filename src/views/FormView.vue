<template>
  <div id="form">
    <div class="container col-7">
      <div class="col text-center my-5">
        <h1>Crie um novo personagem</h1>
      </div>
      <div class="row">
        <div class="col">
          <label for="" class="form-label">Nome do personagem</label>
          <input class="form-control" type="text" placeholder="Homem Aranha" />
        </div>
        <div class="col">
          <label for="" class="form-label">Insira a imagem do personagem</label>
          <input class="form-control" type="file" id="formFile" />
        </div>
      </div>

      <div class="my-3">
        <label for="" class="form-label">Descritivo sobre o personagem:</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div class="d-flex justify-content-between">
        <div class="mb-3">
          <button type="button" class="btn btn-secondary">Voltar</button>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-success">Salvar</button>
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
export default {
  name: "Form",
};
</script>
