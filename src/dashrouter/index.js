import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Body.vue'
import Signup from '../views/Signup'
import Login from '../views/Login.vue'
import p404 from '../views/404.vue'

import Repair from '../views/RepairForm.vue'
import Diagnose from '../views/DiagnoseForm.vue'
import Guides from '../views/Guides.vue'

import Repairs from '../views/Repairs.vue'
import Diagnosis from '../views/Diagnosis.vue'
import Blog from '../views/Blog.vue'
import Profile from '../views/Profile.vue'
import Help from '../views/Help.vue'
import Details from '../views/RepairDetails.vue'
import DiagnosisDetails from '../views/DiagnosisDetails.vue'
import Success from '../views/Success.vue'



const routes = [
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/repair',
    name: 'Repair',
    component: Repair
  },

  {
    path: '/diagnose',
    name: 'Diagnose',
    component: Diagnose
  },

  {
    path: '/repair-details/:id',
    name: 'repair-details',
    component: Details,
    props: true
  },

  {
    path: '/diagnosis-details/:id',
    name: 'diagnosis-details',
    component: DiagnosisDetails,
    props: true
  },

  {
    path: '/self-repair-guides',
    name: 'Guides',
    component: Guides
  },

  {
    path: '/repairs',
    name: 'Repairs',
    component: Repairs
  },

  {
    path: '/diagnosis',
    name: 'Diagnosis',
    component: Diagnosis
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/help',
    name: 'Help',
    component: Help
  },

  {
    path: '/:catchAll(.*)',
    name: '404',
    component: p404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
