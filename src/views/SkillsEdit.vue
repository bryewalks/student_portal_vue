<template>
  <div class="skills-edit">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h1>Edit Skill:</h1>

      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Skill: </label>
          <input class='form-control' type='text' v-model="skills.skill">
        </div>

        <input type="submit" value="Update Skill" class="btn btn-primary">
      </form>

      <router-link :to=" '/students/' + skills.student_id" class="btn btn-warning">Back</router-link>

    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      skills: { 
                skill: ""
                },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/skills/" + this.$route.params.id).then(response => {
      this.skills = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    skill: this.skills.skill
                    };
      axios.patch("/api/skills/" + this.skills.id, params)
        .then(response => {
          this.$router.push("/students/" + response.data.student_id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>