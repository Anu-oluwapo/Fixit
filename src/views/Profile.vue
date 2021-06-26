<template>
  <div class="welcome"><h4>Profile </h4></div>
  <br />

  <div class="">
    <div>
      <Back />
    </div>
    <br />
    <br />

    <div class="jumbotron">
    <img class="d-block mx-auto" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"/>
    <div class="container jumbotron bg-light mt-5">
    <h4>Name :</h4> <p> &nbsp; &nbsp; {{userr.firstname + userr.lastname}}</p><br><br>
    <h4>Email :</h4> <p> &nbsp; &nbsp; {{userr.email}}</p><br><br>
    <h4>Phone Number :</h4> <p> &nbsp; &nbsp; {{userr.phone}}</p><br><br>

    <button class="btn btn-info d-block ml-auto">Edit</button>
    </div>
    </div>
  </div>    
</template>

<script>
import Back from '../components/BackButton.vue'
export default {
components:{
    Back
},
props:['userr']
}
</script>

<style scoped>
img{
    width: 10rem;
}

p{
    display: inline;
}

h4{
    display: inline;
}
</style>