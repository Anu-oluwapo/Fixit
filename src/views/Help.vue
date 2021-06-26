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
    <img class="d-block mx-auto" src="../assets/repair2.svg"/>
    <h1 class="text-center"><b>About Fixit</b></h1>
    <p><b>Fixit</b> Is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet purus a erat lacinia, quis aliquet augue sollicitudin. Sed tincidunt dolor urna, aliquam aliquet sem condimentum eu. Praesent placerat justo eu vulputate varius. Aenean iaculis euismod venenatis. Quisque viverra, quam nec gravida venenatis, sapien lacus bibendum augue, eu cursus tortor nisl aliquam mauris. Nulla ex velit, rhoncus ac accumsan sit amet, cursus ac elit. Curabitur volutpat vel est a egestas. Quisque non justo nec turpis interdum suscipit vel non ligula. Morbi ornare dolor nec nunc dictum faucibus. Donec mollis iaculis mi ut luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin varius tellus ac lacinia. Proin malesuada leo lectus. Nunc in dolor est. Maecenas tincidunt urna nec turpis commodo imperdiet. Vestibulum fermentum dictum dictum.</p>
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
    width: 10rem;
}
p{
    color: black;
}
</style>