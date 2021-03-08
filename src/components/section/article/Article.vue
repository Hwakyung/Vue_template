<template>
  <div
    class="article"
    style="
      width: 80%;

      vertical-align: top;
      margin-top: 50px;
      grid-area: article;
    "
  >
    <ArticleHeader />
    <div style="height: auto" v-for="(p, index) in posts" v-bind:key="p.id">
      <div id="posting">
        <div
          style="
            height: 19px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          "
        >
          <span id="categoryName">{{ p.category_id }}</span>
          <span class="id">{{ p.id }}</span>
        </div>
        <hr style="height: 0" />
        <div
          style="
            margin: 5px;
            height: 19px;
            display: flex;
            justify-content: space-between;
          "
        >
          <div class="userId">{{ p.user_id }}</div>
          <div
            class="vBorder"
            style="
              border-left: 1px solid black;
              margin: 0px 5px;
              height: 13px;
              width: 1px;
            "
          />
          <div class="createAt">{{ p.created_at }}</div>
        </div>
        <div class="title">{{ p.title }}</div>
        <div class="content">
          {{ p.contents }}
        </div>
      </div>
      <div v-if="index % 4 === 0" style="height: auto">
        <div id="ad" v-for="a in ads.data" v-bind:key="a.id">
          <div class="adTitle">sponsored</div>

          <img id="adImage" />
          <div class="title">{{ a.title }}</div>
          <div class="content" style="grid-area: content">
            {{ a.contents }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleHeader from "./articleHeader/ArticleHeader";
import axios from "axios";
export default {
  name: "Article",
  props: {
    msg: String,
  },
  data() {
    return {
      posts: null,
      ads: null,
    };
  },
  components: {
    ArticleHeader,
  },
  methods: {
    getList() {
      const BASE_URL = "https://problem.comento.kr";
      axios
        .get(`${BASE_URL}/api/list`, {
          params: {
            page: 1,
            ord: "asc",
            category: [1, 2],
            limit: 10,
          },
          headers: { "Content-Type": "application/json" },
        })

        .then((result) => {
          this.posts = result.data.data;
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    },
    getAd() {
      const BASE_URL = "https://problem.comento.kr";
      axios
        .get(`${BASE_URL}/api/ads`, {
          params: {
            page: 1,
            limit: 2,
          },
          headers: { "Content-Type": "application/json" },
        })

        .then((result) => {
          this.ads = result.data;
          console.log(result.data);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    },
  },
  created() {
    this.getList();
    this.getAd();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  width: 100%;
  height: 179px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e1e4e7;
  border-radius: 5px;
  opacity: 1;
  padding: 20px 30px;
  margin-bottom: 20px;
}

#ad {
  left: 665px;
  width: 100%;
  height: 255px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e1e4e7;
  border-radius: 5px;
  opacity: 1;
  padding: 20px 30px;
  text-align: left;
  display: grid;
  grid-gap: 10px;
  margin-bottom: 20px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "adtitle adtitle"
    "image  title"
    "image  content";
}
#categoryName {
  top: 175px;
  left: 1488px;
  /* width: 12px; */
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
  /* width: 12px; */
  height: 19px;
  text-align: right;
  font: normal normal normal 13px/25px SpoqaHanSans;
  letter-spacing: 0px;
  color: #adb5bd;
  opacity: 1;
}
.userId {
  top: 221px;
  /* left: 695px; */
  /* width: 45px; */
  width: 10px;
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
  width: 300px;
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
  width: 100%;
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
  width: 100%;
  height: 100%;
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
.adTitle {
  top: 384px;
  left: 695px;
  width: 100%;
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
  /* width: 310px; */
  height: 179px;
  border: 1px solid #e1e4e7;
  opacity: 1;
  grid-area: image;

  margin: 0;
}

@media screen and (max-width: 768px) {
  #ad {
    display: grid;
    grid-template-columns: 100%;

    grid-template-areas: "adtitle" "image" "title" "content";
  }
  .createAt,
  .vBorder {
    display: none;
  }
}
</style>
