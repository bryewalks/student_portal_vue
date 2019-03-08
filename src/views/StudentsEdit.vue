<template>
  <div class="students-edit">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

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

        <input type="submit" value="Update Student Information" class="btn btn-primary">
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
                photo: ""
                },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    first_name: this.student.first_name,
                    last_name: this.student.last_name,
                    email: this.student.email,
                    phone_number: this.student.phone_number,
                    short_bio: this.student.short_bio,
                    linkedin_url: this.student.linkedin_url,
                    twitter_handle: this.student.twitter_handle,
                    personal_blog: this.student.personal_blog,
                    online_resume_url: this.student.online_resume_url,
                    github_url: this.student.github_url,
                    photo: this.student.photo
                    };
      axios.patch("/api/students/" + this.student.id, params)
        .then(response => {
          this.$router.push("/students/" + this.student.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>