<template>
  <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in laboralData"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="text-h6">
          {{item.title}}
        </v-card-title>
        <v-card-text class="white text--primary">
          <h3>{{item.subtitle}}</h3>
          <br>
          <p>{{item.description}}</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
            href="https://vinken.cl/vinken/#nosotros"
          >
            Ir a la pagina
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    data: () => ({
      laboralData: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: "2021 - Actualidad Vinken Solar S.p.A.",
          subtitle: "Desarrollador Full Stack",
          description: "Diseñar y desarrollar un sistema de monitoreo para parques solares, graficar series de tiempo e indicadores claves de rendimiento, refactorizar componentes e implementar metodologias agiles dentro del equipo de investigación y desarrollo.",
          link:'https://vinken.cl/vinken/#nosotros'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          title: "2021 Matchbook.cl",
          subtitle: "Desarrollador backend",
          description: "Diseñar y desarrollar la API de Matchbook.cl.",
          link:'https://vinken.cl/vinken/#nosotros'
        },
        {
          title: "2021 Vinken Solar S.p.A.",
          subtitle: "Desarrollador Full Stack",
          description: "Diseñar y desarrollar un sistema de monitoreo para parques solares, graficar series de tiempo e indicadores claves de rendimiento, refactorizar componentes e implementar metodologias agiles dentro del equipo de investigación y desarrollo.",
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          link:'https://vinken.cl/vinken/#nosotros'
        },
        {
          title: "2021 Vinken Solar S.p.A.",
          subtitle: "Desarrollador Full Stack",
          description: "Diseñar y desarrollar un sistema de monitoreo para parques solares, graficar series de tiempo e indicadores claves de rendimiento, refactorizar componentes e implementar metodologias agiles dentro del equipo de investigación y desarrollo.",
          color: 'indigo',
          icon: 'mdi-buffer',
          link:'https://vinken.cl/vinken/#nosotros'
        },
      ],
    }),
  }
</script>
<style lang="">
    
</style>