<template>
  <div class="container">
    <h1>New Photo</h1>
    <div>
      Name: <input type="text" v-model="newPhotoName">
      Width: <input type="text" v-model="newPhotoWidth">
      Height: <input type="text" v-model="newPhotoHeight">
      <button v-on:click="createPhoto()">Create Photo</button>
    </div>
    <h1>All Photos</h1>
    <div v-for="photo in photos">
      <h2>{{ photo.name }}</h2>
      <img v-bind:src="photo.url">
      <button v-on:click="showPhoto(photo)">Show more</button>
      <div v-if="currentPhoto === photo">
        <p>Width: {{ photo.width }}</p>
        <p>Height: {{ photo.height }}</p>
        <div>
          Name: <input type="text" v-model="photo.name">
          Width: <input type="text" v-model="photo.width">
          Height: <input type="text" v-model="photo.height">
          <button v-on:click="updatePhoto(photo)">Update Photo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      photos: [],
      currentPhoto: {},
      newPhotoName: "",
      newPhotoWidth: "",
      newPhotoHeight: ""
    };
  },
  created: function() {
    axios.get("/api/photos").then(response => {
      this.photos = response.data;
    });
  },
  methods: {
    createPhoto: function() {
      var params = {
        name: this.newPhotoName,
        width: this.newPhotoWidth,
        height: this.newPhotoHeight
      };
      axios.post("/api/photos", params).then(response => {
        this.photos.push(response.data);
        this.newPhotoName = "";
        this.newPhotoWidth = "";
        this.newPhotoHeight = "";
      });
    },
    showPhoto: function(photo) {
      if (this.currentPhoto === photo) {
        this.currentPhoto = {};
      } else {
        this.currentPhoto = photo;
      }
    },
    updatePhoto: function(photo) {
      var params = {
        name: photo.name,
        width: photo.width,
        height: photo.height
      };
      axios
        .patch("/api/photos/" + photo.id, params)
        .then(response => {
          this.currentPhoto = {};
        });
    }
  }
};
</script>