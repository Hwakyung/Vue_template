<template>
  <div class="header">
    <div class="headerText">‘[제출일] 최화경’을 작성해주세요:)</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 70px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #00000012;
  opacity: 1;
  text-align: left;
  grid-area: header;
}

.headerText {
  top: 23px;
  left: 390px;
  width: 217px;

  color: var(--unnamed-color-212529);

  font: normal normal normal 16px/25px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #212529;
  opacity: 1;
  margin-left: 110px;
  height: 70px;
  line-height: 70px;
}
</style>
