<template>
  <div
    class="comment"
    style="width: 100%; height: 211px; margin-top: 50px; grid-area: comment"
  >
    <div style="height: 20px">답변</div>
    <div id="detailComment">
      <div id="commentUsername">username</div>
      <hr class="line" />
      <div class="content" style="grid-area: commentContent">
        contents contents contents contents contents contents contents contents
        contents
      </div>
      <div class="createAt">createAt(2020-02-22)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#detailComment {
  top: 396px;
  left: 390px;
  /* width: 1140px; */
  height: 201px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e1e4e7;
  border-radius: 5px;
  opacity: 1;

  padding: 20px 30px;
  text-align: left;
  display: grid;
  grid-template-areas:
    "commentUsername"
    "line"
    "commentContent"
    "commentCreatedAt";
}

.commentUsername {
  top: 648px;
  left: 420px;
  width: 130px;
  height: 24px;
  text-align: left;
  font: normal normal normal 16px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #7e848a;
  opacity: 1;
  grid-area: commentUsername;
}
.content {
  top: 699px;
  left: 420px;
  width: 1079px;
  height: 74px;
  color: var(--unnamed-color-495057);
  text-align: left;
  font: normal normal normal 16px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #495057;
  opacity: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 2.4em;
}

.line {
  height: 2px;
  grid-area: line;
}
.createAt {
  top: 221px;
  left: 761px;
  width: 148px;
  height: 19px;
  color: var(--unnamed-color-495057);
  text-align: left;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #495057;
  opacity: 1;
  grid-area: commentCreatedAt;
}
</style>
