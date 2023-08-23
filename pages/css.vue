<template>
  <div>
    <button class="btn btn__submit btn__large" @click="onModalOpen">
      test
    </button>
    <div class="modal" v-if="isShow === true">
      <div class="modal__close" @click="onModalClose"><button>X</button></div>
      <div class="modal__content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onModalOpen() {
      this.isShow = true;
    },
    onModalClose() {
      this.isShow = false;
    },
  },
};
</script>
