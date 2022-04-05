import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomeTest.vue";
import About from "./views/AboutView.vue";
import Resume from "./views/ResumeView.vue";
import Contact from "./views/ContactView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
]
});
