<template>
  <div>
    <div>state:{{ $store.state.count }}</div>
    <button @click="aaaaa">+</button>
    <button @click="bbbbb">-</button>
    <button @click="ppp">++</button>
  </div>
  <!-- 1.stateを更新するとき(非同期通信の場合)
deipatch => action => commit => mutation=>state 
2.stateを更新するとき（非同期通信がない場合） 
commit => mutation =>state -->
</template>

<script>
export default {
  methods: {
    aaaaa() {
      this.$store.commit("aaaaa");
    },
    bbbbb() {
      this.$store.commit("bbbbb");
    },
    ppp() {
      this.$store.dispatch("hhhh");
    },
  },
};
</script>
