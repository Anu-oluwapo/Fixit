<!-- eslint-disable vue/no-unused-components -->
<template>
<div class="wrapper">
<Sidebar :userr="this.userr" />
<div id="content">

<Topbar/>
<!-- <div class="form-check form-switch pt-2">
<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault"
    >Dark Mode</label>
</div> -->
  <router-view :diagnoses="this.diagnosis" :repairs="this.repairs" :brands="this.brands" :repairTypes="this.repairTypes" :userr="this.userr" />
  </div>
  </div>
  
  <Footer/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
//import Body from './components/Body.vue'
import Footer from './components/Footer.vue'
import firebase from 'firebase'
import jQuery from'jquery'
global.jQuery = jQuery
//import firebase from 'firebase'
// import auth from './main.js'

export default {
 
  name: 'App',
  data(){
    return{

      userr:{},
      repairTypes:[],
    brands:[],
    repairs:[],
    diagnosis:[],
    }
 
  },
  components: {
    Sidebar,
    Topbar,
    //Body,
    Footer
  },

  methods:{
    
  },

  mounted() {
    const user = firebase.auth().currentUser;
      // console.log(user.uid)
    var fetchUser = "https://fixit-ng.herokuapp.com/collection/users/" + user.uid;
    var fetchBrands = "https://fixit-ng.herokuapp.com/collection/brands/";
    var fetchRepairTypes = "https://fixit-ng.herokuapp.com/collection/basicrepairs/";
    var fetchRepairs = "https://fixit-ng.herokuapp.com/collection/repairs/"+user.uid;
    var fetchDiagnosis = "https://fixit-ng.herokuapp.com/collection/diagnosis/" + user.uid;
    // console.log("requesting data from server ...");
    fetch(fetchUser)
    .then(res => res.json())
    // save the returned JSON object to userr
    .then(data => {this.userr = data
    // console.log(this.userr.firstname);
    })

    fetch(fetchRepairTypes)
    .then(res => res.json())
    // save the returned JSON object to userr
    .then(data => {this.repairTypes = data
    // console.log(this.repairTypes);
    })

    fetch(fetchBrands)
    .then(res => res.json())
    // save the returned JSON object to userr
    .then(data => {this.brands = data
    // console.log(this.brands);
    })

    fetch(fetchRepairs)
    .then(res => res.json())
    // save the returned JSON object to userr
    .then(datas => {this.repairs = datas
    // console.log(this.repairs);
    })

    fetch(fetchDiagnosis)
    .then(res => res.json())
    // save the returned JSON object to userr
    .then(datas => {this.diagnosis = datas
    // console.log(this.diagnosis);
    })

  },
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}




</style>
