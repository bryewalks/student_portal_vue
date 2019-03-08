<template>
  <div class="experiences-new">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h1>Add New Experience:</h1>

      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Start Date: </label>
          <input class='form-control' type='text' v-model="experience.start_date" placeholder="ex: 01/02/03">
        </div>

        <div class="form-group">
          <label>End Date: </label>
          <input class='form-control' type='text' v-model="experience.end_date" placeholder="ex: 01/02/04">
        </div>

        <div class="form-group">
          <label>Job Title: </label>
          <input class='form-control' type='text' v-model="experience.job_title" placeholder="ex: driver">
        </div>

        <div class="form-group">
          <label>Company Name: </label>
          <input class='form-control' type='text' v-model="experience.company_name" placeholder="ex: FedEx">
        </div>
        
        <div class="form-group">
          <label>Details: </label>
          <input class='form-control' type='text' v-model="experience.details" placeholder="ex: Real good at driving">
        </div>

        <input type="submit" value="Add New Experience" class="btn btn-primary">
      </form>

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
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
                    start_date: this.experience.start_date,
                    end_date: this.experience.end_date,
                    job_title: this.experience.job_title,
                    company_name: this.experience.company_name,
                    details: this.experience.details
                    };
                    
      axios.post("/api/experiences/", params)
        .then(response => {
          this.$router.push("/students/" + response.data.student_id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>