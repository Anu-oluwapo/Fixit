<template>
  <div class="container-fluid row mb-4">
      <div class="col-3 mt-2">
        <button
          type="button"
          @click="sidebarToggle()"
          id="sidebarCollapse"
          class="btn shadow"
          style="background-color: white;"
        >
          <i class="fas fa-align-left"></i>
        </button>
      </div>

      <div class="col-9 ">



        <input
          class="search form-control d-block shadow-sm"
          type=" text"
          placeholder=" &#xf002;  search "
        />
      </div>
    </div>
    <br />
</template>

<script>
import $ from "jquery";
//import firebase from 'firebase/app'
//import Dashboard from '../Dashboard.vue'


export default  {
  methods: {
    sidebarToggle() {
      $("#sidebar").toggleClass("active");
    },
  },
};
</script>

<style>

</style>