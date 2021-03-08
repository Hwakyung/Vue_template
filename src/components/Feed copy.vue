<template>
  <div class="feed">
    <div class="header">
      <div class="headerText">‘[제출일] 최화경’을 작성해주세요:)</div>
    </div>
    <div class="section">
      <div style="width: 450px; vertical-align: top; margin-top: 50px">
        <button id="loginBtn">로그인</button>
      </div>
      <div
        style="
          width: 100%;
          margin-right: -450px;
          vertical-align: top;
          margin-top: 50px;
        "
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            height: 30px;
            width: 865px;
          "
        >
          <div>
            <span id="asecnding">오름차순</span>

            <span id="desecnding">내림차순</span>
          </div>
          <div>
            <button id="filterBtn">필터</button>
          </div>
        </div>

        <div id="posting">
          <span id="categoryName">category_name</span>
          <span class="id">id</span>
          <span class="userId">Id</span>
          <span class="createAt">createAt</span>
          <div class="title">TitleTitleTitleTitleTitleTitleTitleTitle</div>
          <div class="content">
            contents contents contents contents contents contents contents
            contents contents
          </div>
        </div>

        <div id="ad">
          <span class="adTitle">sponsored</span>
          <div id="adImage"></div>
          <div class="title">TitleTitleTitleTitleTitleTitleTitleTitle</div>
          <div class="content">
            contents contents contents contents contents contents contents
            contents contents
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feed",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.feed {
  width: 1920px;
  height: 100%;
}
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

#loginBtn {
  top: 120px;
  left: 390px;
  width: 235px;
  height: 60px;
  background: var(--unnamed-color-00c854) 0% 0% no-repeat padding-box;
  background: #00c854 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
}

#ascending {
  top: 122px;
  left: 676px;
  width: 48px;
  height: 19px;
  color: var(--unnamed-color-495057);
  text-align: left;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #495057;
  opacity: 1;
}
#descending {
  top: 122px;
  left: 745px;
  width: 48px;
  height: 19px;
  text-align: left;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #adb5bd;
  opacity: 1;
}

#filterBtn {
  top: 120px;
  left: 1482px;
  width: 48px;
  height: 24px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e1e4e7;
  border-radius: 3px;
  opacity: 1;
}
.section {
  display: flex;
  width: 100%;
}
#posting {
  top: 155px;
  left: 665px;
  width: 865px;
  height: 179px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e1e4e7;
  border-radius: 5px;
  opacity: 1;
}

#ad {
  left: 665px;
  width: 865px;
  height: 255px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e1e4e7;
  border-radius: 5px;
  opacity: 1;
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
  width: 799px;
  height: 27px;
  text-align: left;
  font: normal normal bold 18px/28px SpoqaHanSans;
  letter-spacing: 0px;
  color: #282c30;
  opacity: 1;
}
.content {
  top: 290px;
  left: 695px;
  width: 802px;
  height: 24px;
  color: var(--unnamed-color-495057);
  text-align: left;
  font: normal normal normal 16px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #495057;
  opacity: 1;
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
}
#adImage {
  top: 420px;
  left: 696px;
  width: 310px;
  height: 179px;
  border: 1px solid #e1e4e7;
  opacity: 1;
}
</style>
