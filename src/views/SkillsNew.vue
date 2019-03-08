<template>
  <div class="skills-new">
   
    <ul>
      <li v-for="error in errors"> {{ error }} </li>
    </ul>

    <div class='container'>
      <h1>Add New Skill:</h1>

      <form v-on:submit.prevent="submit()">

        <div class="form-group">
          <label>Skill: </label>
          <input class='form-control' type='text' v-model="skills.skill" placeholder="ex: walking and chewing gum at the same time">
        </div>

        <input type="submit" value="Add New Skill" class="btn btn-primary">
      </form>

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
  created: function() {},
  methods: {
    submit: function() {
      var params = {
                    skill: this.skills.skill
                    };
                    
      axios.post("/api/skills/", params)
        .then(response => {
          this.$router.push("/students/" + response.data.student_id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>