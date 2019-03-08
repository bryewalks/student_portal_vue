<template>
  <div class="educations-edit">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h1>Edit Education Information</h1>

      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Start Date: </label>
          <input class='form-control' type='text' v-model="education.start_date">
        </div>

        <div class="form-group">
          <label>End Date: </label>
          <input class='form-control' type='text' v-model="education.end_date">
        </div>

        <div class="form-group">
          <label>Degree: </label>
          <input class='form-control' type='text' v-model="education.degree">
        </div>
        
        <div class="form-group">
          <label>University Name: </label>
          <input class='form-control' type='text' v-model="education.university_name">
        </div>
        
        <div class="form-group">
          <label>Details: </label>
          <input class='form-control' type='text' v-model="education.details">
        </div>
          <input type="submit" value="Update Education" class="btn btn-primary">

      </form>

      <router-link :to=" '/students/' + education.student_id" class="btn btn-warning">Back</router-link>
    </div>
  </div>      
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      education: { 
                student_id: "",
                start_date: "",
                end_date: "",
                degree: "",
                university_name: "",
                details: ""
                },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/educations/" + this.$route.params.id).then(response => {
      this.experiences = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    start_date: this.education.start_date,
                    end_date: this.education.end_date,
                    job_title: this.education.job_title,
                    company_name: this.education.company_name,
                    details: this.education.details
                    };
                    
      axios.patch("/api/educations/" + this.education.id, params)
        .then(response => {
          this.$router.push("/students/" + this.education.student_id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>