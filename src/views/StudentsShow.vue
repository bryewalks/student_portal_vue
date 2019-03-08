<template>
  <div class="students-show">
    <div>
      <h1>{{ student.first_name + ' ' + student.last_name }}</h1>
      <img v-bind:src=" student.photo " :alt="student.student_id">
      <p>Id: {{ student.id }}</p>
      <p>Email: {{ student.email }}</p>
      <p>Phone Number: {{ student.phone_number }}</p>
      <p>Bio: {{ student.short_bio }}</p>
      <p>Capstone: {{ student.capstone.name }}</p>
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
                <div class="container">
                  <div class="row">
                    <div v-for="experience in student.experiences" class="col">
                      <h3>{{ experience.company_name }}</h3>
                      <h4>{{ experience.job_title }}</h4>
                      <h4>{{ experience.details }}</h4>
                      <h4>{{ experience.start_date }}</h4>
                      <h4>{{ experience.end_date }}</h4>
                      <router-link :to=" '/experiences/' + experience.id + '/edit' " class="btn btn-warning">Edit</router-link>
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
                <div class="container">
                  <div class="row">
                    <div v-for="education in student.education" class="col">
                      <h3>{{ education.university_name }}</h3>
                      <h4>{{ education.degree }}</h4>
                      <h4>{{ education.details }}</h4>
                      <h4>{{ education.start_date }}</h4>
                      <h4>{{ education.end_date }}</h4>
                      <router-link :to=" '/educations/' + education.id + '/edit' " class="btn btn-warning">Edit</router-link>

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
                <div class="container">
                  <div class="row">
                    <div v-for="skill in student.skills" class="col">
                      <h3>{{ skill.skill }}</h3>
                      <router-link :to=" '/skills/' + skill.id + '/edit' " class="btn btn-warning">Edit</router-link>

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
                      <h3>{{ student.capstone.name }}</h3>
                      <!-- <router-link :to=" '/skills/' + skill.id + '/edit' " class="btn btn-warning">Edit</router-link> -->

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
  // var axios = require('axios')

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
                education: [
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
      this.student = {
                        id: "1",
                        first_name: "Herman",
                        last_name: "Munster",
                        email: "bossmunster@gmail.com",
                        phone_number: "8476577890",
                        short_bio: "I am monster",
                        linkedin_url: "https://www.linkedinurl.com",
                        twitter_handle: "dhh",
                        personal_blog: "https://reddit.com",
                        online_resume_url: "https://www.onlineresumeurl.com",
                        github_url: "https://www.githuburl.com",
                        photo: "https://i.ebayimg.com/images/g/wd8AAOxy4kpQ~uGQ/s-l300.jpg",
                        experiences: [
                                       {
                                         id: "1",
                                         student_id: "#",
                                         start_date: "01/02/03",
                                         end_date: "01/03/03",
                                         job_title: "driver",
                                         company_name: "FedEx",
                                         details: "Real good at driving"
                                       },
                                       {
                                         id: "2",
                                         student_id: "#",
                                         start_date: "01/02/03",
                                         end_date: "01/03/03",
                                         job_title: "Pizza Guy",
                                         company_name: "Big Johns Papa Pizzeria",
                                         details: "Real fast at driving"
                                       },
                                       {
                                         id: "3",
                                         student_id: "#",
                                         start_date: "01/02/03",
                                         end_date: "01/03/03",
                                         job_title: "Ambulance Driver",
                                         company_name: "Atec",
                                         details: "Real 'ok' at driving"
                                       }
                        ],
                        education:[
                                    {
                                      id: "1",
                                      student_id: "#",
                                      start_date: "12/31/02",
                                      end_date: "01/01/03",
                                      degree: "Bachelors degree in driving",
                                      university_name: "UoD",
                                      details: "Learned to Drive"
                                    },
                                    {
                                      id: "2",
                                      student_id: "#",
                                      start_date: "12/31/02",
                                      end_date: "01/01/03",
                                      degree: "Bachelors degree in kicking ass",
                                      university_name: "Northern Illinois University",
                                      details: "Learned to Drive"
                                    }
                                    ],
                        skills: [
                                    {
                                      id: "1",
                                      student_id: "#",
                                      skill: "Can use a steering wheel, a gas pedal, sometimes a brake"
                                    },
                                    {
                                      id: "2",
                                      student_id: "#",
                                      skill: "Chewing bubble gum"
                                    }
                        ],
                        capstone: {
                                      id: "1",
                                      student_id: "#",
                                      name: "MunsterHunter",
                                      description: "Use to hunt Munsters",
                                      url: "www.url.com"
                                    }
                      }
    },
    methods: {}
  };
  //   created: function() {
  //     axios.get("/api/students/" + this.$route.params.id)
  //       .then(response => {
  //         console.log(response.data);
  //         this.student = response.data;
  //       });
  //   },
</script>