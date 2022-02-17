<template>
  <VueCompareImage leftImage="https://i.imgur.com/bU50uS9.jpg" rightImage="https://i.imgur.com/z3ZoEEw.jpg" />;
</template>
<script>
/* eslint-disable linebreak-style */
import VueCompareImage from 'vue-compare-image';

export default {
  name: 'Main',
  components: {
    VueCompareImage,
  },
  data() {
    return {
      leftImage: 'https://i.imgur.com/bU50uS9.jpg',
      rightImage: 'https://i.imgur.com/z3ZoEEw.jpg',
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5,
    };
  },
};
</script>
<style scoped>

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>
