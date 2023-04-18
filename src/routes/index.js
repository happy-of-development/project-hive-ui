import Vue from 'vue'
import VueRouter from "vue-router";
// import login from "../views/Login.vue"
import dashboard from "../views/DashBoard.vue"
import management from "../views/Management.vue"
import mm from "../views/MM.vue"
import profile from "../views/Profile.vue"
import ProjectDashBoard from "../views/ProjectDashBoard.vue"
import TeamDashBoard from "../views/TeamDashBoard.vue"
import MemberDashBoard from "../views/MemberDashBoard.vue"

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: "/",
    //   redirect: "/login",
    //   component: login,
    // },
    {
      path: "/dashboard",
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: "/management",
      name: 'management',
      component: management,
    },
    {
      path: "/mm",
      name: 'mm',
      component: mm,
    },
    {
      path: "/profile",
      name: 'profile',
      component: profile,
    },
    {
      path: "/dashboard/project",
      name: 'ProjectDashBoard',
      component: ProjectDashBoard,
    },
    {
      path: "/dashboard/team",
      name: 'TeamDashBoard',
      component: TeamDashBoard,
    },
    {
      path: "/dashboard/user",
      name: 'MemberDashBoard',
      component: MemberDashBoard,
    }
  ]
});