import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import StudentPortal from './views/StudentPortal.vue'
import StudentsEdit from './views/StudentsEdit.vue'
import ExperiencesEdit from './views/ExperiencesEdit.vue'
<<<<<<< HEAD
import EducationsEdit from './views/ExperiencesEdit.vue'
=======
import SkillsEdit from './views/SkillsEdit.vue'
>>>>>>> 109844928e6051deed5809b8e45f08b2320d35ee

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/studentportal', name: 'student-portal', component: StudentPortal },
    { path: '/students/:id/edit', name: 'students-edit', component: StudentsEdit },
<<<<<<< HEAD
    { path: '/experiences/:id/edit', name: 'experiences-edit', component: ExperiencesEdit },
    { path: '/educations/:id/edit', name: 'educations-edit', component: EducationsEdit },

=======
    { path: '/skills/:id/edit', name: 'skills-edit', component: SkillsEdit },
    { path: '/experiences/:id/edit', name: 'experiences-edit', component: ExperiencesEdit }
>>>>>>> 109844928e6051deed5809b8e45f08b2320d35ee
  ]
})
