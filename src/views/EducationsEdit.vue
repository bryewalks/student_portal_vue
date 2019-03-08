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
          <input class='form-control' type='date' v-model="educations.start_date">
        </div>

        <div class="form-group">
          <label>End Date: </label>
          <input class='form-control' type='date' v-model="educations.end_date">
        </div>

        <div class="form-group">
          <label>Degree: </label>
          <input class='form-control' type='text' v-model="educations.degree">
        </div>
        
        <div class="form-group">
          <label>University Name: </label>
          <input class='form-control' type='text' v-model="educations.university_name">
        </div>
        
        <div class="form-group">
          <label>Details: </label>
          <input class='form-control' type='text' v-model="educations.details">
        </div>
          <input type="submit" value="Update Education" class="btn btn-primary">

      </form>

      <router-link :to=" '/students/' + educations.student_id" class="btn btn-warning">Back</router-link>
    </div>
  </div>      
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      educations: { 
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
      this.educations = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    start_date: this.educations.start_date,
                    end_date: this.educations.end_date,
                    degree: this.educations.degree,
                    university_name: this.educations.university_name,
                    details: this.educations.details
                    };
                    
      axios.patch("/api/educations/" + this.educations.id, params)
        .then(response => {
          this.$router.push("/students/" + this.educations.student_id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>