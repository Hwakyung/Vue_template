<template>
  <div
    class="article"
    style="width: 100%; height: 211px; margin-top: 50px; grid-area: article"
  >
    <div id="detailContent">
      <div class="title">TitleTitleTitleTitleTitleTitleTitleTitle</div>
      <div class="content" style="grid-area: content">
        contents contents contents contents contents contents contents contents
        contents
      </div>
      <div class="adTitle">sponsored</div>
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
#detailContent {
  top: 120px;
  left: 390px;
  /* width: 1140px; */
  height: 211px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-00c854);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #00c854;
  border-radius: 5px;
  opacity: 1;
  margin: auto;
  padding: 20px 30px;

  display: grid;
  grid-template-areas:
    "title"
    "content"
    "adtitle";
}
#categoryName {
  top: 175px;
  left: 1488px;
  width: 12px;
  height: 19px;
  text-align: right;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #adb5bd;
  opacity: 1;
}
.id {
  top: 175px;
  left: 1488px;
  width: 12px;
  height: 19px;
  text-align: right;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #adb5bd;
  opacity: 1;
}
.userID {
  top: 221px;
  left: 695px;
  width: 45px;
  height: 19px;
  color: var(--unnamed-color-00c854);
  text-align: left;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #00c854;
  opacity: 1;
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
}
.title {
  top: 257px;
  left: 695px;
  /* width: 799px; */
  height: 27px;
  text-align: left;
  font: normal normal bold 18px/28px SpoqaHanSans;
  letter-spacing: 0px;
  color: #282c30;
  opacity: 1;
  grid-area: title;

  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  width: 100%;
  overflow: hidden;
}
.content {
  top: 290px;
  left: 695px;
  /* width: 802px; */
  height: 24px;
  color: var(--unnamed-color-495057);
  text-align: left;
  font: normal normal normal 16px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #495057;
  opacity: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 2.4em;
}
.adTitle {
  top: 384px;
  left: 695px;
  width: 64px;
  height: 19px;
  text-align: left;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #adb5bd;
  opacity: 1;
  grid-area: adtitle;
}
#adImage {
  /* top: 420px;
  left: 696px; */
  width: 310px;
  height: 179px;
  border: 1px solid #e1e4e7;
  opacity: 1;
  grid-area: image;

  margin: 0;
}
</style>
