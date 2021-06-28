<template>
<div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div style="margin-top: 20%;" class="card o-hidden border-0 shadow-lg ">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <!-- <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> -->
                            <div class="col-lg-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form id="login" @submit.prevent="loginRequest" class="user">
                                        <div class="form-group">
                                            <input type="email" v-model="email" class="form-control form-control-user" id="email"
                                                aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                                required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" v-model="password" class="form-control form-control-user" id="password"
                                                placeholder="Password" required>
                                        </div>
                                        <div class="form-group">
                                            <div class="text-center">
                                                <a class="small" href="#">Forgot Password?</a>
                                            </div>
                                        </div>

                                        <button v-if=" ! xhrRequest" type="submit" style="width: 30%; border-radius: 5px;"
                                            class="btn btn-primary btn-user mx-auto btn-block">
                                            Login
                                        </button>

                                        <button style="width: 30%;" class="btn btn-primary btn-user mx-auto btn-block" v-if=" xhrRequest" type="submit">
                                   <span class="spinner-border spinner-border-sm text-light"></span> Wait...
                                </button>

                                        <!-- <hr>
                                        <button style="width: 50%; border-radius: 5px;" class="btn btn-google mx-auto btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </button>
                                        <button style="width: 50%; border-radius: 5px;" class="btn btn-facebook btn-user mx-auto btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </button> -->
                                    </form>
                                    <hr>

                                    <div class="text-center">
                                       <router-link to="/signup"> <a class="small" href="">Dont have an account ?</a></router-link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return{
            xhrRequest:false,
            email:'',
            password:''
        }
    },
    methods :{
        loginRequest(){
            const auth = firebase.auth();

            auth.signInWithEmailAndPassword(this.email, this.password).then(cred => {
        console.log(cred.user);
        //const Modal = document.querySelector('#regModal');
        // M.Modal.getInstance(modal).show();
        // $('#loginModal').modal('show');
        //  if($('#loginModal').modal('show')){
       auth.onAuthStateChanged(function(user) {
        if (user) {
         window.location = '/';
        }
      });
    
    }).catch(err =>{
      window.alert(err.message);
    } )
        }
    }
}
</script>

<style scoped>
.card:hover{
        transform: scale(1.01);
    }

    .router-link-active{
        background-color: none;
    }
</style>
