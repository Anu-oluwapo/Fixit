<template>
<header>
        <nav class="navbar nav navbar-expand-lg navbar-light fixed-top bg-light">

            <div class="container">


                <router-link to="/"><a class="navbar-brand mx-auto" href="#">Logo</a></router-link>

                <button class="navbar-toggler" @mouseleave="navbarToggle()" @click="navbarToggle()" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" @mouseleave="navbarToggle()" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <!-- <li id="regButton" class="nav-item  bg-dark">
                            <a style="color: rgb(209, 209, 209);" class="navlink" href="login.html">
                                <i class="far f-user"> <span class="navlink" style="color: rgb(209, 209, 209);">Login |
                                        Register</span></i>
                            </a>

                        </li> -->

                        <!-- <li id="dashButton" class="nav-item  bg-dark">
                            <a style="color: rgb(209, 209, 209);" class="navlink"
                                href="https://designtutorials.netlify.app/">
                                <i class="far f-user"> <span class="navlink"
                                        style="color: rgb(209, 209, 209);">Dashboard</span></i>
                            </a>

                        </li> -->

                        <router-link to="/login" >
                        <li  class="nav-item  bg-dark p-3 mt-5">
                            <a id="dashButton" style="color: rgb(209, 209, 209);" class="navlink">
                                 <span class="navlink"
                                        style="color: rgb(209, 209, 209);">Dashboard</span>
                            </a>

                        </li>
                        </router-link>

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