<template lang="">
    <div>

        <!-- <v-navigation-drawer v-model="drawer" absolute temporary app width="150" height="340">
            <v-list class="pt-4">
                <v-list-tile active-class="green--text" to="/">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Home
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span>Resume</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span>Contact</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span>Portfolio</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer> -->
    <v-toolbar flat dense color="transparent" scroll-off-screen>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">Miguel</span>
        <span class="green--text">Rovlich</span>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up">
        <v-icon v-if="goDark==true">fas fa-sun</v-icon>
        <v-icon v-else>fas fa-moon</v-icon>
      </v-btn> -->
      <v-spacer>
      </v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/resume">Resume</v-btn>
        <v-btn flat to="/portfolio">Portfolio</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </div>
</template>
<script>
export default {
  name: 'NavBar',
  components: {
  },
  data() {
    return {
      drawer: true,
      goDark: false,
    };
  },
};
</script>
<style scoped>
/* mover navbar a la derecha*/
</style>
