<template>
  <div class="experiences-edit">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h1>Edit Experience:</h1>

      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Start Date: </label>
          <input class='form-control' type='text' v-model="experience.start_date">
        </div>

        <div class="form-group">
          <label>End Date: </label>
          <input class='form-control' type='text' v-model="experience.end_date">
        </div>

        <div class="form-group">
          <label>Job Title: </label>
          <input class='form-control' type='text' v-model="experience.job_title">
        </div>

        <div class="form-group">
          <label>Company Name: </label>
          <input class='form-control' type='text' v-model="experience.company_name">
        </div>
        
        <div class="form-group">
          <label>Details: </label>
          <input class='form-control' type='text' v-model="experience.details">
        </div>

        <input type="submit" value="Update Experience" class="btn btn-primary">
      </form>

      <router-link :to=" '/students/' + experience.student_id" class="btn btn-warning">Back</router-link>
     
    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      experience: { 
                student_id: "",
                start_date: "",
                end_date: "",
                job_title: "",
                company_name: "",
                details: ""
                },
      errors []
    };
  },
  created: function() {
    axios.get("/api/experiences/" + this.$route.params.id).then(response => {
      this.experiences = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    start_date: this.experience.start_date,
                    end_date: this.experience.end_date,
                    job_title: this.experience.job_title,
                    company_name: this.experience.company_name,
                    details: this.experience.details
                    };
                    
      axios.patch("/api/experiences/" + this.experience.id, params)
        .then(response => {
          this.$router.push("/students/" + this.experience.student_id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>