<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '800px', maxWidth: '600px', minHeight: '800px', maxHeight: '800px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br>

    <vue-typer class="headline" :repeat="0" text="Miguel Rovlich" />
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="100"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    />
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="520">
        <v-card-title primary-title>
          <div>
            <h2 class="headline mb-0">
              <span>Sobre </span>
              <span class="green--text">Mi</span>
            </h2>
            <!-- espacio -->
            <br>
            <div>
              <h3>Hola! Encantado de conocerte.</h3>
              <p>
                Desarrollador Full Stack
                <span
                  class="green--text font-weight-bold"
                >VUE.JS</span>
              </p>
              <p>
                Me considero una persona muy creativa, con una gran
                capacidad de trabajo en equipo, con una gran capacidad de
                comunicación y una gran capacidad de adaptación a los
                cambios.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outlined
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outlined
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
  components: {
    "vue-typer": VueTyper,
    VueCompareImage
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/miguelRovlich", icon: "fab fa-github" },
        {
          href: "https://www.linkedin.com/in/miguelrovlich",
          icon: "fab fa-linkedin-in"
        },
        {
          href: "https://www.facebook.com/ezalortop",
          icon: "fab fa-facebook-f"
        },
        { href: "https://www.instagram.com/zivot_i_moc", icon: "fab fa-instagram" }
      ],
      text1: ["Front-End Developer", "Web Developer","Back-End Developer","Full-Stack Developer"],
      leftImage: require("../assets/blanco-negro.jpg"),
      rightImage: require("../assets/color.jpg"),
      leftImage2: require("../assets/blanco-negro.jpg"),
      rightImage2: require("../assets/color.jpg"),
      sliderLine: 1,
      hSize: 20,
      sliderPosition: 2.5
    };
  }
};
</script>
<!--<style>-->
<!--.vue-typer {-->
  <!--font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;-->
<!--}-->
<!--.vue-typer .custom.char.typed {-->
  <!--color: green;-->
<!--}-->
<!--.vue-typer .custom.char.selected {-->
  <!--color: #e91e63;-->
<!--}-->

<!--.vue-typer .custom.caret.typing {-->
  <!--background-color: green;-->
<!--}-->
<!--.vue-typer .custom.caret.selecting {-->
  <!--display: inline-block;-->
  <!--background-color: #e91e63;-->
<!--}-->
<!--</style>-->
<style lang="scss">
.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  .custom.char.typed {
    color: green;
  }
  .custom.char.selected {
    color: #e91e63;
  }
  .custom.caret.typing {
    background-color: green;
  }
  .custom.caret.selecting {
    display: inline-block;
    background-color: #e91e63;
  }
}
</style>

