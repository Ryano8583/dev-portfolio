import { createRouter, createWebHistory } from "vue-router";
const ResumeView = () => import("../views/ResumeView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "resume",
      component: ResumeView,
    },
  ],
});

export default router;
