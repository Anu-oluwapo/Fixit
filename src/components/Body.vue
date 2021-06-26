<template>

    

    
    <div class="welcome"> <h4> Welcome, {{userr.firstname}} </h4></div>
    <br />

    <div class="sec1">
      <div>
        <button v-if="show" @click="Show()" class="btn btn-info">Ongoing Repairs</button>
        <button v-else @click="Show()" class="btn btn-info">Ongoing Diagnosis</button>
      </div>

      <br />
      <br />
<div v-if="show">
      <div v-if="repairs.length == 0"   class="jumbotron text-center">
      <img class="robot" src="https://media.tenor.com/images/848c342a56e7854dec45b9349c21dfe5/tenor.gif">
      <p class="pt-3 text-dark"><b>Hi {{userr.firstname}},</b> Theres Nothing Here for now but when you have ongoing Repairs, They'll appear here. <br>In the interim, you can select whatever you'd like to do from the activity section <b><a href="#sec2">down below</a></b></p>
      </div>

      <div v-else class="row">

      <div v-for="repair in repairs" :key="repair.RepairID" class="card repairCard col-md-4 py-3 px-3 mx-2 my-2 border border-light" style="">
        <div class="card-body row">
        <div class="col">
        <img src="../assets/repairs.svg">
        </div>

        <div class="col-xl-8 col-md-10">
          <div class="card-text mt-3">
            <h3>{{repair.GadgetName }}</h3>
            <span>{{repair.RepairID }}</span><br>
            <!--span class="date">{{new Date().toLocaleString()}}</span><br-->
            <span class="date">{{repair.Date}}</span><br>
            <!-- <span class="date">{{repair.Time}}</span> -->
          </div>
        </div>
        <router-link class="btn ml-auto btn-more" :to="{name: 'repair-details', params: {id: repair.RepairID}}">More Details </router-link>

        
        </div>
      </div>
      </div>

      </div>

      <div v-else>
      <div v-if="diagnoses.length == 0"   class="jumbotron text-center">
      <img class="robot" src="https://media.tenor.com/images/848c342a56e7854dec45b9349c21dfe5/tenor.gif">
      <p class="pt-3 text-dark"><b>Hi {{userr.firstname}},</b> Theres Nothing Here for now but when you have ongoing Diagnoses, They'll appear here. <br>In the interim, you can select whatever you'd like to do from the activity section <b><a href="#sec2">down below</a></b></p>
      </div>

      <div v-else class="row">

      <div v-for="diagnosis in diagnoses" :key="diagnosis.DiagnosisID" class="card repairCard col-md-4 py-3 px-3 mx-2 my-2 border border-light" style="">
        <div class="card-body row">
        <div class="col">
        <img src="../assets/repairs.svg">
        </div>

        <div class="col-xl-8 col-md-10">
          <div class="card-text mt-3">
            <h3>{{diagnosis.GadgetName }}</h3>
            <span>{{diagnosis.DiagnosisID }}</span><br>
            <!--span class="date">{{new Date().toLocaleString()}}</span><br-->
            <span class="date">{{diagnosis.Date}}</span><br>
            <!-- <span class="date">{{repair.Time}}</span> -->
          </div>
        </div>
        <router-link class="btn ml-auto btn-more" :to="{name: 'diagnosis-details', params: {id: diagnosis.DiagnosisID}}">More Details </router-link>

        
        </div>
      </div>



      

      </div>
      </div>

      
      
<!--  -->

    </div>

    <div id="sec2" class="sec2">
      <h1><b>Activity</b></h1>

      <br />
      <br />
<div class="row">

<div class="col-md-4  py-3 px-3">
<router-link to="diagnose">
      <div class="card opCard1 ">
      <div class="overlay ">
        <div class="card-body row">
        
        <div class="card-text pl-3">
            <h3>Request <br>Diagnosis</h3>
            <hr/>
            <span></span><br>
            
          </div>
        
        </div>
      </div>
</div>
</router-link>
      </div>
      

      <div class="col-md-4  py-3 px-3">
      <router-link to="repair">
      <div class="card opCard2 ">
      <div class="overlay ">
        <div class="card-body row">
        
        <div class="card-text pl-3">
            <h3>Request <br>A Repair</h3>
            <hr/>
            <span></span><br>
            
          </div>
        
        </div>
      </div>
</div>
      </router-link>
      </div>

      <div class="col-md-4  py-3 px-3">
      <router-link to="self-repair-guides">
      <div class="card opCard3 ">
      <div class="overlay ">
        <div class="card-body row">
        
        <div class="card-text pl-4">
            <h3>Self Repair <br>Guidelines</h3>
            <hr/>
            <span></span><br>
            
          </div>
        
        </div>
      </div>
</div>
      </router-link>
      </div>


      
</div>
    </div>
  
</template>

<style scoped>
#content{
background-color: black;
color: white;
}

h4{
display: block;
}

.robot{
width: 15rem;
}

.sec2 {
  margin-top: 5%;
}

.card-text{
margin-top: 150px;
}

hr{
border-width: 5px;
border-color: white;
width: 60%;
float: left;
}

.overlay{
background-color: rgba(0, 0, 0, 0.603);
backdrop-filter: blur(2px);
height: 18rem;
border-radius: 20px;
}

.date{
color: rgb(146, 146, 146);
}

.repairCard img{
width: 7rem;
}
.opCard1{
background-image: url(../assets/diagnose.jpg);

  background-size: 100%;
height: 18rem;
  color: white;
}

.opCard2{
background-image: url(../assets/repair.jpg);

  background-size: 100%;
height: 18rem;
  color: white;
}

.opCard3{
background-image: url(../assets/guides.jpg);

  background-size: 100%;
height: 18rem;
  color: white;
}

.repairCard{
background: rgb(140,140,140);
background: linear-gradient(63deg, rgba(140,140,140,1) 0%,  rgba(32,32,32,1) 68%);
color: white;
}

.btn-more{
background-color: white;
height: 40px;
}
</style>

<script>
import $ from "jquery";
//import firebase from 'firebase/app'
//import Dashboard from '../Dashboard.vue'


export default  {
props:['userr', 'repairs', 'diagnoses'],
  data() {
    
    return {
       
      show:true
    }
  },
  
  methods: {
    sidebarToggle() {
      $("#sidebar").toggleClass("active");
    },

    Show(){
this.show = !this.show
    }
  },
};
</script>


