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

    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      skills: { 
                skill: "",
                student_id: ""
                }
    };
  },
  created: function() {
    // axios.get("/api/experiences/" + this.$route.params.id).then(response => {
    //   this.experiences = response.data;
    // });
      this.skills = {
                    skill: "Can use a steering wheel, a gas pedal, sometimes a brake",
                    student_id: "1"
                    };
  },
  methods: {
    submit: function() {
      var params = {
                    details: this.skills.skill
                    };
      axios.patch("/api/skills/" + this.skill.id, params)
        .then(response => {
          this.$router.push("/students/" + this.skill.student_id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>