<template>

  <div class="card" style="width: 18rem;">
  <img id="slika" src="https://picsum.photos/400" class="card-img-top" alt="slika">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</template>

<script>
export default {
  name: 'stavka',
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#slika {
  max-width: 100%;
  height: auto;
}

</style>
