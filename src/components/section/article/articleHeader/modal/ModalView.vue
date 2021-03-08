<template>
  <div class="modal">
    <div class="overlay"></div>

    <div class="modal-card">
      <button
        @click="$emit('close-modal')"
        style="
          height: 12px;
          border: none;
          background-color: white;
          text-align: right;
        "
      >
        X
      </button>
      <div style="text-align: left; height: 40px">
        <span style="font-size: 40px">필터</span>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          height: 40%;
          margin: 11px 130px 15px 30px;
        "
      >
        <label> <input type="checkbox" />category name</label>
        <label> <input type="checkbox" />category name</label>
        <label> <input type="checkbox" />category name</label>
      </div>
      <div style="text-align: right">
        <button @click="$emit('close-modal')" id="saveBtn">저장하기</button>
      </div>
    </div>
  </div>
</template> <script>
export default {};
</script> <style>
/* Modal */
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: fixed;
  max-width: 30%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  max-height: 268px;
  width: 337px;
  z-index: 10;
  opacity: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

label {
  display: flex;
  align-items: center;
  width: 100%;
}
input {
  width: 10px;
}
#saveBtn {
  top: 328px;
  left: 49px;
  /* width: 277px; */
  height: 40px;
  background: var(--unnamed-color-00c854) 0% 0% no-repeat padding-box;
  background: #00c854 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
}
</style>

