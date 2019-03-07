<template>
  <div class="students-edit">
   
<!--     <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul> -->

    <h2> {{ student }} </h2>

    <div class='container'>
      <h1>Edit Student Information</h1>

      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>First Name: </label>
          <input class='form-control' type='text' v-model="student.first_name">
        </div>

        <div class="form-group">
          <label>Last Name: </label>
          <input class='form-control' type='text' v-model="student.last_name">
        </div>

        <div class="form-group">
          <label>Email: </label>
          <input class='form-control' type='text' v-model="student.email">
        </div>

        <div class="form-group">
          <label>Phone Number: </label>
          <input class='form-control' type='text' v-model="student.phone_number">
        </div>
        
        <div class="form-group">
          <label>Short Bio: </label>
          <input class='form-control' type='text' v-model="student.short_bio">
        </div>
        
        <div class="form-group">
          <label>LinkedIn Url: </label>
          <input class='form-control' type='text' v-model="student.linkedin_url">
        </div>
        
        <div class="form-group">
          <label>Twitter Handle: </label>
          <input class='form-control' type='text' v-model="student.twitter_handle">
        </div>
        
        <div class="form-group">
          <label>Personal Blog: </label>
          <input class='form-control' type='text' v-model="student.personal_blog">
        </div>
        
        <div class="form-group">
          <label>Online Resume Url: </label>
          <input class='form-control' type='text' v-model="student.online_resume_url">
        </div>
        
        <div class="form-group">
          <label>Github Url: </label>
          <input class='form-control' type='text' v-model="student.github_url">
        </div>
        
        <div class="form-group">
          <label>Photo: </label>
          <input class='form-control' type='text' v-model="student.photo">
        </div>
      </form>

        <div v-for="experience in student.experiences"> Experiences:
          <div class="form-group">
            <label>Start Date: </label>
            <input class='form-control' type='text' v-model="student.experience.start_date">
          </div>
          
          <div class="form-group">
            <label>End Date: </label>
            <input class='form-control' type='text' v-model="student.experience.end_date">
          </div>
          
          <div class="form-group">
            <label>Job Title: </label>
            <input class='form-control' type='text' v-model="student.experience.job_title">
          </div>
          
          <div class="form-group">
            <label>Company Name: </label>
            <input class='form-control' type='text' v-model="student.experience.company_name">
          </div>
          
          <div class="form-group">
            <label>Details: </label>
            <input class='form-control' type='text' v-model="student.experience.details">
          </div>
        </div>
        

        <div v-for="education in student.educations"> Education:
          <div class="form-group">
            <label>Start Date: </label>
            <input class='form-control' type='text' v-model="student.education.start_date">
          </div>
          
          <div class="form-group">
            <label>End Date: </label>
            <input class='form-control' type='text' v-model="student.education.end_date">
          </div>
          
          <div class="form-group">
            <label>Degree: </label>
            <input class='form-control' type='text' v-model="student.education.degree">
          </div>
          
          <div class="form-group">
            <label>University Name: </label>
            <input class='form-control' type='text' v-model="student.education.university_name"">
          </div>
          
          <div class="form-group">
            <label>Details: </label>
            <input class='form-control' type='text' v-model="student.education.details">
          </div>
        </div>
        
        <div v-for="skill in student.skills"> Skills:
          <div class="form-group">
            <label>Skill: </label>
            <input class='form-control' type='text' v-model="student.skills.start_date">
          </div>
        </div>

      </form>
    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: { 
                student_id: "",
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
                experiences: {
                             student_id: "",
                             start_date: "",
                             end_date: "",
                             job_title: "",
                             company_name: "",
                             details: ""
                             },
                educations: {
                            student_id: "",
                            start_date: "",
                            end_date: "",
                            degree: "",
                            university_name: "",
                            details: ""
                            },
                skills: {
                        student_id: "",
                        skill: ""
                        }
                }
    };
  },
  created: function() {
    // axios.get("/api/students/" + this.$route.params.id).then(response => {
    //   this.student = response.data;
    // });

      this.student = {
                        student_id: "#",
                        first_name: "Herman",
                        last_name: "Munster",
                        email: "bossmunster@gmail.com",
                        phone_number: "8476577890",
                        short_bio: "I am monster",
                        linkedin_url: "www.linkedinurl.com",
                        twitter_handle: "bossmunster",
                        personal_blog: "its personal",
                        online_resume_url: "www.onlineresumeurl.com",
                        github_url: "www.githuburl.com",
                        photo: "https://i.ebayimg.com/images/g/wd8AAOxy4kpQ~uGQ/s-l300.jpg",
                        experiences: [
                                       {
                                        student_id: "#",
                                        start_date: "01/02/03",
                                        end_date: "01/03/03",
                                        job_title: "driver",
                                        company_name: "FedEx",
                                        details: "Real good at driving"
                                       }
                        ],
                        educations:[
                                    {
                                      student_id: "#",
                                      start_date: "12/31/02",
                                      end_date: "01/01/03",
                                      degree: "Bachelors degree in driving",
                                      university_name: "UoD",
                                      details: "Learned to Drive"
                                    }
                        ],
                        skills: [
                                    {
                                      student_id: "#",
                                      skill: "Can use a steering wheel, a gas pedal, sometimes a brake"
                                    }
                        ],
                        capstone:[
                                    {
                                      student_id: "#",
                                      name: "MunsterHunter",
                                      description: "Use to hunt Munsters",
                                      url: "www.url.com"
                                    }]
                      };
  },
  methods: {
    createPhoto: function() {
      var params = {
        name: this.newPhotoName,
        width: this.newPhotoWidth,
        height: this.newPhotoHeight
      };
      axios.post("/api/photos", params).then(response => {
        this.photos.push(response.data);
        this.newPhotoName = "";
        this.newPhotoWidth = "";
        this.newPhotoHeight = "";
      });
    },
    showPhoto: function(photo) {
      if (this.currentPhoto === photo) {
        this.currentPhoto = {};
      } else {
        this.currentPhoto = photo;
      }
    },
    updatePhoto: function(photo) {
      var params = {
        name: photo.name,
        width: photo.width,
        height: photo.height
      };
      axios
        .patch("/api/photos/" + photo.id, params)
        .then(response => {
          this.currentPhoto = {};
        });
    }
  }
};
</script>