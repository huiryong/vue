<template>
  <div class="signup">
    <!-- <div>
      メール: {{ email }}<br />
      パスワード: {{ password }}<br />
    </div> -->
    <div v-if="!isMe">
      <div class="signup__title">Welcome back!</div>
      <div class="signup__titleSub">
        Enter your Credentials to access your account
      </div>
      <ul class="signup__form">
        <li>
          <div class="signup__form__row">
            <div class="signup__form__row__title">
              <div class="signup__form__row__title__text">Email address</div>
            </div>
            <div class="signup__form__row__input">
              <input type="text" class="inputTag" v-model="email" />
            </div>
          </div>
        </li>
        <li>
          <div class="signup__form__row">
            <div class="signup__form__row__title">
              <div class="signup__form__row__title__text">Password</div>
              <div class="signup__form__row__title__forget">
                <a href="">forgot password</a>
              </div>
            </div>
            <div class="signup__form__row__input">
              <input type="password" class="inputTag" v-model="password" />
            </div>
          </div>
          <div class="isError" v-if="isError">
            emailかパスワードなんか間違っています。。。
          </div>
        </li>
        <li>
          <div class="signup__form__row">
            <div class="signup__form__row__check">
              <div class="signup__form__row__check__input">
                <input type="checkbox" class="" />
              </div>
              <div class="signup__form__row__check__text">
                Remember for 30 days
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="signup__form__row__button">
            <button class="btn btn__large btn__submit" @click="onLoginSubmit">
              Login
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div v-else>
      <span class="aaaa">{{ isMe.name}} {{ isMe.phone}}</span
      >login success!!!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isError: false,
    };
  },
  computed: {
    isMe() {
      return this.$store.state.me;
    },
  },
  methods: {
    onLoginSubmit() {
      const info222 = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("login", info222).catch((error) => {
        this.isError = true;
      });
    },
  },
};
</script>
</script>

<style scoped>
.aaaa {
  color: red;
}
.isError {
  margin-top: 6px;
  color: red;
  font-size: 12px;
}
</style>