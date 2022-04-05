<template>
    <div>
    <v-navigation-drawer absolute temporary app width="150" height="340">
      <v-list class="pt-4">
        <v-list-tile active-class="green--text" to="/">
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/resume">
          <v-list-tile-content>
            <v-list-tile-title>RESUME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/about">
          <v-list-tile-content>
            <v-list-tile-title>ABOUT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="/contact">
          <v-list-tile-content>
            <v-list-tile-title>CONTACT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
        <v-toolbar flat dense color="transparent">
            <v-toolbar-title>
            <span class="font-weight-light">Miguel</span>
            <span class="green--text">Rovlich</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="/" active-class="green--text headline">Home</v-btn>
            <v-btn text to="/resume" active-class="green--text headline">Resume</v-btn>
            <v-btn text to="/about" active-class="green--text headline">About</v-btn>
            <v-btn text to="/contact" active-class="green--text headline">Contact</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>