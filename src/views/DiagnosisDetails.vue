<template>
  <div class="welcome"><h4>diagnosis Details </h4></div>
  <br />

  <div class="">
    <div>
      <Back />
    </div>
    <br />
    <br />

    <div class="jumbotron">

    <div><img class="mx-auto d-block" src="../assets/Repairs.jpg"></div><br><br>

    <div class="container bg-light py-5" >
    <div class="row text-center">
     <div class="col-7"><h4>Gadget Name : </h4></div> <div class="col-5"><span> {{selecteddiagnosis.GadgetName}}</span></div><br/><br/>
     <div class="col-7"><h4>Gadget Type : </h4></div> <div class="col-5"><span> {{selecteddiagnosis.GadgetType}}</span></div><br/><br/>
     <div class="col-7"><h4>Gadget Brand : </h4></div> <div class="col-5"><span> {{selecteddiagnosis.GadgetBrand}}</span></div><br/><br/>
     <div class="col-7"><h4>Gadget Model : </h4></div> <div class="col-5"><span> {{selecteddiagnosis.GadgetModel}}</span></div><br/><br/>
    <div class="col-7"><h4>diagnosis ID : </h4></div> <div class="col-5"><span> {{selecteddiagnosis.DiagnosisID}}</span></div><br/><br/>
     <div class="col-7"><h4>diagnosis Status : </h4></div> <div class="col-5"><span> {{selecteddiagnosis.DiagnosisStatus}}</span></div><br/><br/>
     <div class="col-7"><h4>Date Ordered : </h4></div> <div class="col-5"><span> {{selecteddiagnosis.Date}}</span></div><br/><br/>
     <div class="col-7"><h4>Time Ordered : </h4></div> <div class="col-5"><span v-if="selecteddiagnosis.Time < '12 : 00'"> {{selecteddiagnosis.Time}} AM</span> <span v-else> {{selecteddiagnosis.Time}} PM</span></div><br/><br/>
     <button @click="Delete()" class="col btn btn-danger mx-5 my-5"> Delete </button>
    
     </div>
    </div>
    </div>
  </div>
</template>

<script>
import Back from '../components/BackButton.vue'
export default {
    props:['id', 'diagnoses'],
    components:{
        Back
    }, 
    computed:{
        selecteddiagnosis(){
        const diagnosis = this.diagnoses.find(diagnosis => diagnosis.DiagnosisID == this.id)
        return diagnosis
        }
        },
        methods:{
          Delete(){
            fetch("http://localhost:3000/collection/diagnosis/"+this.id, {method: "DELETE"})
            alert("Your Selected Order Has Been Deleted")
            window.location = "/";
    
      
          }
        }
    }



</script>

<style scoped>
img{
width: 20rem;
border-radius: 20px;
}

.container{
  border-radius: 20px;
}

h4{display: block;}
</style>