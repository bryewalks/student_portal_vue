import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import StudentsShow from './views/StudentsShow.vue'
import StudentsEdit from './views/StudentsEdit.vue'
import ExperiencesEdit from './views/ExperiencesEdit.vue'
import SkillsEdit from './views/SkillsEdit.vue'
import EducationsEdit from './views/EducationsEdit.vue'
import ExperiencesNew from './views/ExperiencesNew.vue'
import EducationsNew from './views/EducationsNew.vue'
import StudentsPortal from './views/StudentsPortal.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/students/:id', name: 'students-show', component: StudentsShow },
    { path: '/students/:id/edit', name: 'students-edit', component: StudentsEdit },
    { path: '/studentsportal', name: 'students-portal', component: StudentsPortal },

    { path: '/skills/:id/edit', name: 'skills-edit', component: SkillsEdit },
    { path: '/experiences/new', name: 'experiences-new', component: ExperiencesNew },
    { path: '/experiences/:id/edit', name: 'experiences-edit', component: ExperiencesEdit },
    { path: '/educations/new', name: 'educations-new', component: EducationsNew },
    { path: '/educations/:id/edit', name: 'educations-edit', component: EducationsEdit }
  ]
})
