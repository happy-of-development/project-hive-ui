import { createRouter, createWebHistory } from 'vue-router'
import DashBoardMemberView from '@/views/DashBoardMemberView.vue'
import DashBoardProjectView from '@/views/DashBoardProjectView.vue'
import DashBoardTeamView from '@/views/DashBoardTeamView.vue'
import LoginView from '@/views/LoginView.vue'
import ManagementMemberView from '@/views/ManagementMemberView.vue'
import ManagementProjectView from '@/views/ManagementProjectView.vue'
import ManagementTeamView from '@/views/ManagementTeamView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProjectMmView from '@/views/ProjectManMonthView.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      redirect: '/login',
      component: LoginView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/dashboard/project',
      name: 'ProjectDashBoard',
      component: DashBoardProjectView,
    },
    {
      path: '/dashboard/team',
      name: 'DashBoardTeam',
      component: DashBoardTeamView,
    },
    {
      path: '/dashboard/user',
      name: 'DashBoardMember',
      component: DashBoardMemberView,
    },
    {
      path: '/management/project',
      name: 'ManagementProject',
      component: ManagementProjectView,
    },
    {
      path: '/management/team',
      name: 'ManagementTeam',
      component: ManagementTeamView,
    },
    {
      path: '/management/user',
      name: 'ManagementMember',
      component: ManagementMemberView,
    },
    {
      path: '/project/mm',
      name: 'ProjectManMonth',
      component: ProjectMmView,
    }
  ]
})

export default router
