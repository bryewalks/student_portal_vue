<template>
  <div class="students-portal">
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {};
  },
  created: function() {
    var student_id = localStorage.getItem("student_id");
    this.$router.push("/students/" + student_id);
  },
  methods: {}
};
</script>