<template>
  <div class="Education-edit">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <h2> {{ student }} </h2>

    <div class='container'>
      <h1>Edit Education Information</h1>

      <form v-on:submit.prevent="submit()">
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
          <input class='form-control' type='text' v-model="student.education.university_name">
        </div>
        
        <div class="form-group">
          <label>Details: </label>
          <input class='form-control' type='text' v-model="student.education.details">
        </div>
        
      </form>
  </div>      
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: { 
                student_id: "",
                start_date: "",
                end_date: "",
                degree: "",
                university_name: "",
                details: ""
                }
    };
  },
  created: function() {
    axios.get("/api/educations/" + this.$route.params.id).then(response => {
      this.student = response.data;
    });

      this.student = {
                       
                        educations:[
                                    {
                                      student_id: "#",
                                      start_date: "12/31/02",
                                      end_date: "01/01/03",
                                      degree: "Bachelors degree in driving",
                                      university_name: "UoD",
                                      details: "Learned to Drive"
                                    }
                                   ]
                      };
  },
    methods: {
      submit: function() {
        var params = {
                      start_date: this.student.education.start_date,
                      start_date: this.student.education.end_date,
                      start_date: this.student.education.degree,
                      start_date: this.student.education.university_name,
                      start_date: this.student.education.details
                     };

        axios.patch("/api/educations/" + this.recipe.id, params)
          .then(response => {
            this.$router.push("/educations/" + this.education.id);
          }).catch(error => {
            this.errors = error.response.data.errors;
          });
      }
    }
  }
</script>