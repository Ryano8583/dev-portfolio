import { createRouter, createWebHistory } from "vue-router";
const ResumeView = () => import("../views/ResumeView.vue");
const PortfolioView = () => import("../views/PortfolioView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "resume",
      component: ResumeView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      if (savedPosition) {
        resolve(savedPosition);
        return;
      }
      resolve({ top: 0 });
    });
  },
});

export default router;
