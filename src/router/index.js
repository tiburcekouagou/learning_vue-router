import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import Aboutview from "../views/AboutView.vue"
import JobsView from "../views/jobs/JobsView.vue"
import JobDetails from "../views/jobs/JobDetails.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: Aboutview },
  { path: "/jobs", name: "Jobs", component: JobsView },
  { path: "/jobs/:id", name: "JobDetails", component: JobDetails, props: true },
  // redirects
  { path: "/all-jobs", redirect: "/jobs" },
  // Not Found Pages
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router