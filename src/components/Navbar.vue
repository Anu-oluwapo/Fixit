<template>
<header>
        <nav class="navbar nav navbar-expand-lg navbar-light fixed-top bg-light">

            <div class="container">


                <router-link to="/"><a class="navbar-brand mx-auto" href="#">Logo</a></router-link>

                <button class="navbar-toggler" @click="navbarToggle()" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse"   id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        
                        
                        <li  class="nav-item  bg-dark p-3 mt-2">
                        <router-link to="/login" >
                            <span id="dashButton" style="color: rgb(209, 209, 209);" class="navlink">
                                 <span class="navlink"
                                        style="color: rgb(209, 209, 209);">Dashboard</span>
                            </span>
                        </router-link>
                        </li>
                        

                    </ul>

                </div>

            </div>



        </nav>
    </header>
</template>

<script>
import $ from "jquery";
//import firebase from 'firebase/app'
//import Dashboard from '../Dashboard.vue'


export default  {

  methods: {
    navbarToggle() {
      $("#navbarCollapse").toggleClass("collapse");
      $("#navbarCollapse").animate({
      height: 'toggle'
    });
    },
  },
};
</script>