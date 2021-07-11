<template>
  <div class="welcome"><h4>Blog</h4></div>
  <br />
  <div class="">
    <div>
      <Back />
    </div>
    <br />
    <br />

    <iframe src="https://fixithq.blogspot.com/"></iframe>
  </div>
</template>

<script>
import Back from '../components/BackButton.vue'
export default {
    components:{Back}

}
</script>


<style scoped>
iframe{
    width: 100%;
    height: 50rem;
    border: none;
}
</style>