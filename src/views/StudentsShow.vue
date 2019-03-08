<template>
  <div class="students-show">
    <div>
      <h1>{{ student.first_name + ' ' + student.last_name }}</h1>
      <img v-bind:src=" student.photo " :alt="student.student_id">
      <p>Email: {{ student.email }}</p>
      <p>Phone Number: {{ student.phone_number }}</p>
      <p>Bio: {{ student.short_bio }}</p>
      <!-- <p>Capstone: {{ student.capstone.name }}</p> -->
      <p>Twitter:
        <a :href="'https://twitter.com/' + student.twitter_handle" target="_blank">{{ student.twitter_handle }}</a>
      </p>
      <p>GitHub:
        <a :href="student.github_url" target="_blank">{{ student.github_url }}</a>
      </p>
      <p>Personal Blog:
        <a :href="student.personal_blog" target="_blank">{{ student.personal_blog }}</a>
      </p>
      <p>Resume:
        <a :href="student.online_resume_url" target="_blank">{{ student.online_resume_url }}</a>
      </p>
      <p>Linkedin
        <a :href="student.linkedin_url" target="_blank">{{ student.linkedin_url }}</a>
      </p>
      <router-link :to=" '/students/' + student.id + '/edit' " class="btn btn-warning">Edit</router-link>
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Job Experience
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                <router-link :to=" '/experiences/new' " class="btn btn-success">New</router-link>
                <div class="container">
                  <div class="row">
                    <div v-for="experience in student.experiences" class="col">
                      <h3>{{ experience.company_name }}</h3>
                      <h4>{{ experience.job_title }}</h4>
                      <h4>{{ experience.details }}</h4>
                      <h4>Start Date: {{ experience.start_date }}</h4>
                      <h4>End Date: {{ experience.end_date }}</h4>
                      <router-link :to=" '/experiences/' + experience.id + '/edit' " class="btn btn-warning">Edit</router-link>
                      <button v-on:click="destroyExperience(experience)">Delete</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Education
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                <router-link :to=" '/educations/new' " class="btn btn-success">New</router-link>
                <div class="container">
                  <div class="row">
                    <div v-for="education in student.educations" class="col">
                      <h2>{{ education.university_name }}</h2>
                      <h4>{{ education.degree }}</h4>
                      <h4>{{ education.details }}</h4>
                      <h4>Start Date: {{ education.start_date }}</h4>
                      <h4>End Date: {{ education.end_date }}</h4>
                      <router-link :to=" '/educations/' + education.id + '/edit' " class="btn btn-warning">Edit</router-link>
                      <button v-on:click="destroyEducation(education)">Delete</button>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Skills
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                <router-link :to=" '/skills/new' " class="btn btn-success">New</router-link>
                <div class="container">
                  <div class="row">
                    <div v-for="skill in student.skills" class="col">
                      <h3>{{ skill.skill }}</h3>
                      <router-link :to=" '/skills/' + skill.id + '/edit' " class="btn btn-warning">Edit</router-link>
                      <button v-on:click="destroySkill(skill)">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Capstone
                </button>
              </h5>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <h2>{{ student.capstone.name }}</h2>
                      <h4>{{ student.capstone.description }}</h4>
                      <p>URL
                        <a :href="student.capstone.url" target="_blank">{{ student.capstone.url }}</a>
                      </p>
                      <router-link :to=" '/capstones/' + student.capstone.id + '/edit' " class="btn btn-warning">Edit</router-link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style>
  
</style>
<script>
  var axios = require('axios')

  export default {
    data: function() {
      return {
              student: {
                id: "",
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                short_bio: "",
                linkedin_url: "",
                twitter_handle: "",
                personal_blog: "",
                online_resume_url: "",
                github_url: "",
                photo: "",
                experiences: [
                              {
                              id: "",
                              student_id: "",
                              start_date: "",
                              end_date: "",
                              job_title: "",
                              company_name: "",
                              details: ""
                            }
                            ],
                educations: [
                            {
                              id: "",
                              student_id: "",
                              start_date: "",
                              end_date: "",
                              degree: "",
                              university_name: "",
                              details: ""  
                            }
                            ],
                skills: [
                          {
                          id: "",
                          student_id: "",
                          skill: ""                           
                          }
                        ],
                capstone: {
                          id: "",
                          name: "",
                          description: "",
                          url: ""
                          }
              }
              };
    },
    created: function() {
          axios.get("/api/students/" + this.$route.params.id)
            .then(response => {
              console.log(response.data);
              this.student = response.data;
            });
    },
    methods: {
      destroySkill: function(inputSkill) {
        axios.delete("/api/skills/" + inputSkill.id)
          .then(response => {
            console.log("Success" ,response.data);
            this.$router.push("/");
          });
      },
      destroyEducation: function(inputEducation) {
        axios.delete("/api/educations/" + inputEducation.id)
          .then(response => {
            console.log("Success" ,response.data);
            this.$router.push("/");
          });
      },
      destroyExperience: function(inputExperience) {
            console.log(inputExperience.id);
        axios.delete("/api/experiences/" + inputExperience.id)
          .then(response => {
            console.log("Success" ,response.data);
            this.$router.push("/");
          });
      }
    }
  };
</script>