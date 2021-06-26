<template>
  <div class="welcome"><h4>All Diagnosis</h4></div>
  <br />
  <div class="">
    <div>
      <Back />
    </div>
    <br />
    <br />

    <div v-if="diagnoses.length == 0"   class=" text-center">
      <img class="robot" src="https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif">
      <h4 class="pt-3 text-dark"><b>Whoops,</b> Theres Nothing Here For Now, <a href="/#sec2">Add A Diagnosis</a> To Continue</h4>
      </div>

    <div v-else v-for="diagnosis in diagnoses" :key="diagnosis.DiagnosisID" class="my-4 card shadow-sm border-left border-primary">
    <div class="card-body">
    <h4>{{diagnosis.GadgetName}}</h4>
    <span>{{diagnosis.Date}}</span>

<router-link style="width:10rem" class="btn ml-auto d-block btn-info" :to="{name: 'diagnosis-details', params: {id: diagnosis.DiagnosisID}}">More Details </router-link>
    
    </div>
    </div>
    
  </div>
</template>

<script>
import Back from '../components/BackButton.vue'
export default {
    props:['repairs', 'diagnoses'],
    components:{
        Back
    }

}
</script>

<style scoped>
.card{
    border-radius: 5px;
    
    }

    img{
      width: 30rem;
    }

    .card:hover{
        transform: scale(1);
    }
    h4{
        display: block;
    }

    span{
        color: cadetblue;
    }
</style>