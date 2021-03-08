<template>
  <div id="detail" class="container2">
    <Header />
    <Detail />
    <Comment />
  </div>
</template>

<script>
import Header from "../components/header/Header";
import Detail from "../components/detail/Detail";
import Comment from "../components/comment/Comment.vue";

export default {
  name: "DetailPage",
  components: {
    Header,
    Detail,
    Comment,
  },
};
</script>

<style>
#detail {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}
.container2 {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70px 211px 211px;
  row-gap: 30px;
  grid-template-areas:
    "header"
    "article"
    "comment";
}
*,
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* position: relative; */
  height: 100%;
}

body {
  text-align: center;
  height: 100vh;
  margin: 0;
}

/* body { */
/* height: 100%; */
/* background-color: blue; */
/* width: 100%; */
/* margin: 0; */
/* :root { */
/* Colors: */

/* --unnamed-color-ffffff: #ffffff;
  --unnamed-color-00c854: #00c854;
  --unnamed-color-495057: #495057;
  --unnamed-color-212529: #212529;
  --unnamed-color-f4f5f7: #f4f5f7;
  --unnamed-color-dee2e6: #dee2e6;
  --unnamed-color-ff000033: #ff0000;
  --unnamed-color-fa5252: #fa5252;
  --unnamed-color-9ea5ab: #9ea5ab; */

/* top: 0px;
  left: 0px; */
/* width: 1920px;
  height: 827px; */
/* background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1; */
/* } */
</style>
