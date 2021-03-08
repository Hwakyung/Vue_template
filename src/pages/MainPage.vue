<template>
  <div id="app" class="container">
    <Header />
    <Aside />
    <Section />
  </div>
</template>

<script>
import Header from "../components/header/Header.vue";
import Aside from "../components/aside/Aside.vue";
import Section from "../components/section/Section.vue";

export default {
  name: "MainPage",
  components: {
    Header,
    Aside,
    Section,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;

  margin: 0;
}
.container {
  display: grid;
  grid-template-columns: 35% 200%;
  grid-template-rows: 70px 707px;
  row-gap: 30px;
  grid-template-areas:
    "header header"
    "aside  article";
}
@media screen and (max-width: 768px) {
  .container {
    display: grid;

    grid-template-areas: "header" "aside" "article";
    grid-template-rows: 70px 707px;
  }
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
