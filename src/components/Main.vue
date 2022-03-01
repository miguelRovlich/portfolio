<template>
  <!-- <VueCompareImage leftImage="https://i.imgur.com/bU50uS9.jpg" rightImage="https://i.imgur.com/z3ZoEEw.jpg" />; -->
  <h1>Main</h1>
    <!-- <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer> -->
</template>
<script>

/* eslint-disable linebreak-style */
export default {
  name: 'Main',
  components: {
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
