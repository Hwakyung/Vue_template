<template>
  <div class="aside" style="vertical-align: top; margin-top: 50px; grid-area;">
    <button id="loginBtn" type="button">로그인</button>
  </div>
</template>

<script>
export default {
  name: "Aside",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#loginBtn {
  /* top: 120px;
  left: 390px;*/
  text-align: center;
  width: 235px;
  height: 60px;
  background: var(--unnamed-color-00c854) 0% 0% no-repeat padding-box;
  background: #00c854 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
}

@media screen and (max-width: 768px) {
  .aside {
    display: none;
  }
}
</style>
