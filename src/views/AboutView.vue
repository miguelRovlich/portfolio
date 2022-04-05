<template>
<v-container>
  <h1>About</h1>
  <v-row class="about">
    <v-col>
      <h3 class="text-left">Thecnical Skills</h3>
      <v-timeline dense>
      <v-timeline-item class="text-left">
        <h4>
          <strong>Universidad Tecnica Federico Santa Maria</strong>
        </h4>
        <p>Tecnico Universitario en Informatica</p>
      </v-timeline-item>
      <v-timeline-item class="text-left">
        <h4>
          <strong>UiPath Foundation Academy</strong>
        </h4>
        <!-- <p>Tecnico Universitario en Informatica</p> -->
       <p>RPA Foundation Course</p>
      </v-timeline-item>
      <v-timeline-item class="text-left">
        <h4>
          <strong>Globant</strong>
        </h4>
        <p>.NET Crash Course</p>
      </v-timeline-item>
    </v-timeline>
    </v-col>
    <v-col>
      <h3>Soft Skills</h3>
      <v-timeline dense>
      <v-timeline-item class="text-left">Trabajo en equipo</v-timeline-item>
      <v-timeline-item class="text-left">
        Gestion del tiempo
      </v-timeline-item>
      <v-timeline-item class="text-left">Comunicacion efectiva</v-timeline-item>
    </v-timeline>
    </v-col>
  </v-row>
  <v-row>
    <VueApexCharts type="bar" :options="chartOptions" :series="series" />
  </v-row>
  <v-btn
      :loading="loading5"
      :disabled="loading5"
      color="blue-grey"
      class="ma-2 white--text"
      fab
      @click="loader = 'loading5'"
      href="https://drive.google.com/uc?export=download&id=1anArYOWO51UoQnYSUNd5GjSoQOg8Ieq6"
    >
      <v-icon dark>
        mdi-cloud-download
      </v-icon>
    </v-btn>
</v-container>
</template>
<script>


import VueApexCharts from 'vue-apexcharts'


export default {
  components: {
    VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: 'Series 1',
          data: [30, 40, 45, 50, 49]
        }
      ],
      chartOptions: {
        labels: ['Python', 'Sql', 'Javascript', 'C#', 'CSS'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ]
      },
      }
    }
  }
</script>
