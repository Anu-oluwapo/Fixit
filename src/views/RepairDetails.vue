<template>
  <div class="welcome"><h4>Repair Details </h4></div>
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
     <div class="col-7"><h4>Gadget Name : </h4></div> <div class="col-5"><span> {{selectedrepair.GadgetName}}</span></div><br/><br/>
     <div class="col-7"><h4>Gadget Type : </h4></div> <div class="col-5"><span> {{selectedrepair.GadgetType}}</span></div><br/><br/>
     <div class="col-7"><h4>Gadget Brand : </h4></div> <div class="col-5"><span> {{selectedrepair.GadgetBrand}}</span></div><br/><br/>
     <div class="col-7"><h4>Gadget Model : </h4></div> <div class="col-5"><span> {{selectedrepair.GadgetModel}}</span></div><br/><br/>
     <div class="col-7"><h4>Repair Price : </h4></div> <div class="col-5"><span> ₦ {{selectedrepair.Price.toLocaleString()}}</span></div><br/><br/>
     <div class="col-7"><h4>Payment Status : </h4></div> <div class="col-5"><span class="text-success" v-if="selectedrepair.PaymentStatus == true"> Paid</span> <span class="text-danger" v-else> Pending</span> </div><br/><br/>
     <div class="col-7"><h4>Repair ID : </h4></div> <div class="col-5"><span> {{selectedrepair.RepairID}}</span></div><br/><br/>
     <div class="col-7"><h4>Repair Status : </h4></div> <div class="col-5"><span> {{selectedrepair.RepairStatus}}</span></div><br/><br/>
     <div class="col-7"><h4>Date Ordered : </h4></div> <div class="col-5"><span> {{selectedrepair.Date}}</span></div><br/><br/>
     <div class="col-7"><h4>Time Ordered : </h4></div> <div class="col-5"><span> {{selectedrepair.Time}}</span></div><br/><br/>
     <button @click="Delete()" class="col btn btn-danger mx-5 my-5"> Delete </button>
    
     </div>
    </div>
    </div>
  </div>
</template>

<script>
import Back from '../components/BackButton.vue'
export default {
    props:['repairs', 'id'],
    components:{
        Back
    }, 
    computed:{
        selectedrepair(){
        const repair = this.repairs.find(repair => repair.RepairID == this.id)
        return repair
        }
        },
        methods:{
          Delete(){
            fetch("https://fixit-ng.herokuapp.com/collection/repairs/"+this.id, {method: "DELETE"})
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