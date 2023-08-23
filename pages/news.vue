<template>
  <div>
    <div>
      <NuxtLink to="/news2">news2!!!</NuxtLink>
    </div>
    <button @click="getNews">News</button>
    <div v-if="!qqqq">何もないです。</div>
    <ul v-else>
      <li v-for="q in qqqq" :key="q - id">{{ q.user }}</li>
    </ul>
    <div v-if="loadining">Loding....</div>
    <button @click="isPush">button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadining: false,
    };
  },
  computed: {
    qqqq() {
      return this.$store.state.news_List;
    },
  },
  methods: {
    getNews() {
      this.loadining = true;
      this.$store.dispatch("getNewsList");
      this.loadining = false;
    },
    isPush() {
      const aaa = {
        comments_count: 43343,
        domain: "fdsfsd",
        id: 343453453453,
        points: 100,
        time: 1689711749,
        time_ago: "5 hours ago",
        title: "Val, a high-level systems programming language",
        type: "link",
        url: "https://www.val-lang.dev/",
        user: "kim",
      };
      this.$store.commit("ADD_NEWS", aaa);
    },
  },
};
</script>
