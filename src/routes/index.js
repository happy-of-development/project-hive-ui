import Vue from 'vue'
import VueRouter from "vue-router";
import login from "../views/Login.vue"
import profile from "../views/Profile.vue"
import ProjectDashBoard from "../views/ProjectDashBoard.vue"
import TeamDashBoard from "../views/TeamDashBoard.vue"
import MemberDashBoard from "../views/MemberDashBoard.vue"
import ProjectManagement from "../views/ProjectManagement.vue"
import TeamManagement from "../views/TeamManagement.vue"
import MemberManagement from "../views/MemberManagement.vue"
import MemberMm from "../views/MemberMm.vue"
import PmMm from "../views/PmMm.vue"

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/login",
      redirect: "/login",
      component: login,
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
    },
    {
      path: "/management/project",
      name: 'ProjectDashBoard',
      component: ProjectManagement,
    },
    {
      path: "/management/team",
      name: 'TeamDashBoard',
      component: TeamManagement,
    },
    {
      path: "/management/user",
      name: 'MemberDashBoard',
      component: MemberManagement,
    },
    {
      path: "/mm/user",
      name: 'MemberMm',
      component: MemberMm,
    },
    {
      path: "/mm/pm",
      name: 'PmMm',
      component: PmMm,
    }
  ]
});