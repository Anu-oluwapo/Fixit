import { createApp } from 'vue'
import App from './App.vue'
import Dashboard from './Dashboard.vue'
import router from './router'
import dashrouter from './dashrouter'
import firebase from 'firebase/app'
// import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
import jQuery from'jquery'
global.jQuery = jQuery




//  import './assets/firebase.js'
//  import './assets/auth.js'
//  import './assets/index.js'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA24neWyt2z8_Ru-1XDfwjxOI6aiYLvWdU",
    authDomain: "fixit-62862.firebaseapp.com",
    projectId: "fixit-62862",
    storageBucket: "fixit-62862.appspot.com",
    messagingSenderId: "889684913096",
    appId: "1:889684913096:web:d3aa302eda81d07a5c2efd",
    measurementId: "G-WV13SHPG1H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().onAuthStateChanged(user =>{
    if(user){ 
      //console.log(user);
      createApp(Dashboard).use(dashrouter).mount('#app')
      
    } else{
      createApp(App).use(router).mount('#app')
      
    }
    
   
  })




