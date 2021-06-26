<template>
  <div class="welcome"><h4>All Repairs</h4></div>
  <br />
  <div class="">
    <div>
      <Back />
    </div>
    <br />
    <br />
    <div v-if="repairs.length == 0"   class="text-center">
      <img class="robot" src="https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif">
      <h4 class="pt-3 text-dark"><b>Whoops,</b> Theres Nothing Here For Now, <a href="/#sec2">Add A repair</a> To Continue</h4>
      </div>


    <div v-else v-for="repair in repairs" :key="repair.RepairID" class="my-4 card shadow-sm border-left border-primary">
    <div class="card-body">
    <h4>{{repair.GadgetName}}</h4>
    <span>{{repair.Date}}</span>
    <router-link style="width:10rem" class="btn btn-info d-block ml-auto" :to="{name: 'repair-details', params: {id: repair.RepairID}}">More Details </router-link>
    </div>
    </div>
    
  </div>
</template>

<script>
import Back from '../components/BackButton.vue'
export default {
    props:['repairs'],
    components:{
        Back
    }

}
</script>

<style scoped>
.card{
    border-radius: 5px;
    
    }

    .card:hover{
        transform: scale(1);
    }
    h4{
        display: block;
    }

    h4 a{
      color: blueviolet;
    }

    img{
      width: 30rem;
    }

    

    span{
        color: cadetblue;
    }
</style>