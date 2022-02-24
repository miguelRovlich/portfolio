<template>
  <v-app>

    <v-content>
      <v-container align-center>
        <NavBar :goDark="goDark" @changeTheme="updateTheme($event)"/>
        <transition
        name="fade"
        mode="out-in"
        enter-active-class="bounce-enter-active"
        leave-active-class="bounce-leave-active"
      >
        <router-view></router-view>
      </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {

  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return { goDark: false };
  },
  methods: {
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme;
    },
  },
};
</script>
<style scoped lang="scss">
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

</style>
