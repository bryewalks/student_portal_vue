import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import StudentPortal from './views/StudentPortal.vue'
import StudentsEdit from './views/StudentsEdit.vue'
import ExperiencesEdit from './views/ExperiencesEdit.vue'
import EducationsEdit from './views/ExperiencesEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/studentportal', name: 'student-portal', component: StudentPortal },
    { path: '/students/:id/edit', name: 'students-edit', component: StudentsEdit },
    { path: '/experiences/:id/edit', name: 'experiences-edit', component: ExperiencesEdit },
    { path: '/educations/:id/edit', name: 'educations-edit', component: EducationsEdit },

  ]
})
