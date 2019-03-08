<template>
  <div class="capstones-edit">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h1>Edit Capstone:</h1>

      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Name: </label>
          <input class='form-control' type='text' v-model="capstone.name">
        </div>

        <div class="form-group">
          <label>Description: </label>
          <input class='form-control' type='text' v-model="capstone.description">
        </div>

        <div class="form-group">
          <label>Url: </label>
          <input class='form-control' type='text' v-model="capstone.url">
        </div>

        <input type="submit" value="Update Capstone" class="btn btn-primary">
      </form>

      <router-link :to=" '/students/' + capstone.student_id" class="btn btn-warning">Back</router-link>
     
    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      capstone: { 
                student_id: "",
                name: "",
                description: "",
                url: ""
                },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/capstones/" + this.$route.params.id).then(response => {
      this.capstone = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    start_date: this.capstone.start_date,
                    name: this.capstone.name,
                    description: this.capstone.description,
                    url: this.capstone.url,
                    };
                    
      axios.patch("/api/capstones/" + this.capstone.id, params)
        .then(response => {
          this.$router.push("/students/" + this.capstone.student_id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>