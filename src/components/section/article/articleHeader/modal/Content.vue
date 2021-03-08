<template>
  <div class="content">
    <div @click="$emit('close-modal')" style="height: 12px">X</div>
    <h1>필터</h1>
    <div
      style="
        display: flex;
        flex-direction: column;
        height: 100px;
        margin: 11px 130px 38px 30px;
      "
    >
      <label> <input type="checkbox" />category name</label>
      <label> <input type="checkbox" />category name</label>
      <label> <input type="checkbox" />category name</label>
    </div>
    <div style="text-align: center">
      <button id="saveBtn">저장하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  display: flex;
  align-items: center;
}
#saveBtn {
  top: 328px;
  left: 49px;
  width: 277px;
  height: 40px;
  background: var(--unnamed-color-00c854) 0% 0% no-repeat padding-box;
  background: #00c854 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
}
</style>
