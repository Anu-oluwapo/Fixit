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

    <a href="#edit"><button @click="edit()" class="btn btn-info d-block ml-auto">Edit</button></a>
    </div>
    </div>
  </div>  

  <div id="edit" v-if="editAccess==true" class="jumbotron">
  <form>
   <div class="form-group">
          <label><h5>Input Your Name :</h5></label>
          <input
            class="form-control"
            type="text"
            :value="userr.firstname + userr.lastname"
          /><br />
        </div>

        <div class="form-group">
          <label><h5>Phone Number :</h5></label>
          <input class="form-control" type="text" :value="userr.phone" /><br />
        </div>

        <div class="form-group">
          <label><h5>Email :</h5></label>
          <input class="form-control" type="text" :value="userr.email" /><br />
        </div>

        <button class="btn btn-info d-block ml-auto">Save</button>
  </form>
  </div>  
</template>

<script>
import Back from '../components/BackButton.vue'
export default {
  data(){
    return {
      editAccess:false
    }
  
  },
components:{
    Back
},
props:['userr'],
methods:{
  edit(){
return this.editAccess = !this.editAccess
  }
}
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