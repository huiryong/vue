import axios from "axios";

export const state = () => ({
  count: 0,
  news_List: "",
});

export const mutations = {
  aaaaa(state) {
    state.count = state.count + 1;
  },
  bbbbb(state) {
    state.count = state.count - 1;
  },
  ppp(state) {
    state.count = state.count + 1;
  },
  news_List(state, payload) {
    state.news_List = payload;
  },
  ADD_NEWS(state, bbb) {
    state.newlist.push(bbb);
  },
  LOGIN(steta, payload) {
    state.me = payload;
  },
};

export const actions = {
  hhhh({ commit }) {
    setTimeout(function () {
      commit("ppp");
    }, 2000);
  },
  getNewsList({ commit }) {
    axios.get("https://api.hnpwa.com/v0/news/1.json").then((res) => {
      const result = res.data;
      commit("news_List", result);
    });
  },
  login({ commit }, { yyy }) {
    // axios.get("http://localhost:4000/login").then((res) => {
    //     const result = res.data;
    //     commit("LOGIN", result)
    // })

    const registeredMe = {
      email: "test@gmail.com",
      password: "1234",
    };

    if (
      registeredMe.email === yyy.email &&
      registeredMe.password === yyy.password
    ) {
      setTimeout(() => {
        const info = {
          name: "タパ絢斗",
          katakana: "タパケント",
          phone: "080-6685-1111",
          address: "東京都文京区",
        };
        commit("LOGIN", info);
      }, 1000);
      return Promise.resolve("success_desu");
    } else {
      return Promise.reject(new Error("sucess_jyanai"));
    }
  },
};
