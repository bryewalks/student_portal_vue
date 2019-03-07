import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import StudentPortal from './views/StudentPortal.vue'
import ResumesEdit from './views/ResumesEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/studentportal', name: 'student-portal', component: StudentPortal },
    { path: '/resumes/:id/edit', name: 'resumes-edit', component: ResumesEdit }
  ]
})
