<template>
  <div class="educations-new">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h1>Add New Education</h1>

      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Start Date: </label>
          <input class='form-control' type='text' v-model="education.start_date" placeholder="ex: 01/02/03">
        </div>

        <div class="form-group">
          <label>End Date: </label>
          <input class='form-control' type='text' v-model="education.end_date" placeholder="ex: 01/02/07">
        </div>

        <div class="form-group">
          <label>Degree: </label>
          <input class='form-control' type='text' v-model="education.degree" placeholder="ex: CS">
        </div>
        
        <div class="form-group">
          <label>University Name: </label>
          <input class='form-control' type='text' v-model="education.university_name" placeholder="ex: MIT">
        </div>
        
        <div class="form-group">
          <label>Details: </label>
          <input class='form-control' type='text' v-model="education.details" placeholder="ex: Engineered lots of engineering">
        </div>
          <input type="submit" value="Add new Education" class="btn btn-primary">

      </form>
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
  created: function() {},
  methods: {
    submit: function() {
      var params = {
                    start_date: this.education.start_date,
                    end_date: this.education.end_date,
                    job_title: this.education.job_title,
                    company_name: this.education.company_name,
                    details: this.education.details
                    };
                    
      axios.post("/api/educations/", params)
        .then(response => {
          this.$router.push("/students/" + response.data.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>