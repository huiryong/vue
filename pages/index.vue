<template>
  <div>
    <button class="btn btn__submit btn__large">Send OTP</button>
    <ul>
      <li v-for="bbb in aaa">
        {{ bbb.domain }} ////// {{ bbb.user }} /// {{ bbb.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      aaa: "",
    };
  },
  mounted() {
    axios.get("http://localhost:4000/test").then((res) => {
      const result = res.data;
      this.aaa = result;
      console.log(this.aaa);
    });
  },
};
</script>

<style lang="scss" scoped>
.aa {
  .bb {
    background: red;
  }
}
</style>
