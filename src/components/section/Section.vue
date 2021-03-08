<template>
  <div class="section">
    <Article />
  </div>
</template>

<script>
import Article from "./article/Article.vue";
export default {
  name: "Section",
  props: {
    msg: String,
  },
  components: {
    Article,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.section {
  width: 35%;
}
</style>
