<template>
  <div>
    <ul>
      <li v-for="k in kkkkk" :key="k.id">{{ k.user }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    kkkkk() {
      return this.$store.state.newlist;
    },
  },
};
</script>
