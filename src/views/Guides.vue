

<template>
  <div class="welcome"><h4>About US </h4></div>
  <br />

  <div class="">
    <div>
      <Back />
    </div>
    <br />
    <br />

    <div class="jumbotron">
    <img class="d-block mx-auto" src="https://media2.giphy.com/media/iHD88spVFkL7mZakwa/giphy.gif?cid=ecf05e47g9ti8ycvnv50d7xu5eezwggw85zrtcefqmut2xtl&rid=giphy.gif&ct=g"/><br>
    <!-- <h1 class="text-center">In The Works ...</h1> -->
    </div>
  </div>    
</template>

<script>
import Back from '../components/BackButton.vue'
export default {
components:{
    Back
}
}
</script>

<style scoped>
img{
    width: 80%;
}
p{
    color: black;
}
</style>