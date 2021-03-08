<template>
  <div class="item" style="display: flex; height: 30px">
    <div style="text-align: left; width: 150px">
      <span id="asecnding">오름차순</span>

      <span id="desecnding">내림차순</span>
    </div>
    <div style="text-align: right; width: 30px">
      <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
        <!-- <Content /> -->
      </ModalView>
      <button id="filterBtn" @click="isModalViewed = true">필터</button>
    </div>
  </div>
</template>

<script>
// import Content from "./modal/Content";
import ModalView from "./modal/ModalView";
export default {
  name: "ArticleHeader",
  components: {
    // Content,
    ModalView,
  },
  data() {
    return {
      isModalViewed: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#ascending {
  top: 122px;
  left: 676px;

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

  height: 19px;
  text-align: left;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #adb5bd;
  opacity: 1;
}

#filterBtn {
  top: 120px;

  height: 24px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e1e4e7;
  border-radius: 3px;
  opacity: 1;
  text-align: center;
}
</style>
