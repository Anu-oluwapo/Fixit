<template>
    <div style="margin-top: 11%;" class="container">

    <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

        <div   class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <!-- <div class="col-lg-5 d-none d-lg-block bg-register-image"></div> -->
                    <div class="col-lg-12">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form id="signUp" @submit.prevent="signupRequest" class="user">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" v-model="firstname" class="form-control form-control-user" id="first_name"
                                            placeholder="First Name" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" v-model="lastname" class="form-control form-control-user" id="last_name"
                                            placeholder="Last Name" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="email" v-model="email" class="form-control form-control-user" id="email"
                                            placeholder="Email Address" required>
                                    </div>

                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="tel" v-model="phone" class="form-control form-control-user" id="phone"
                                            placeholder="Phone Number" required>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" v-model="password" class="form-control form-control-user" id="password"
                                            placeholder="Password" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" v-model="cPassword" class="form-control form-control-user" id="cpassword"
                                            placeholder="Confirm Password" required>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-user btn-block" v-if="! xhrRequest" type="submit">
                                    Register Account
                                </button>
                                <button class="btn btn-primary btn-user btn-block" v-if=" xhrRequest" type="submit">
                                   <span class="spinner-border spinner-border-sm text-light"></span> Wait...
                                </button>
                                <hr>
                                <button class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </button>
                                <button class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </button>
                            </form>
                            <hr>

                            <div class="text-center">
                                       <router-link to="/login"> <a class="small" href="">Already have an account ? Login!</a></router-link>
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
            xhrRequest: false,
            firstname: '',
            lastname: '',
            email:'',
            phone:'',
            password:'',
            cPassword:''
        }
    },
    methods:{
        signupRequest(){
//console.log(this.firstname,this.lastname,this.email,this.phone, this.password,this.cPassword)
if(this.password.length < 6){
    window.alert('Passwords must be at least 6 characters long');
}else if(this.cPassword !== this.password){
    window.alert("Passwords do not match");
} else{


            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(err => {
        window.alert(err.message);
    }).then(cred =>{
        console.log(cred.user);

        console.log('Creating New User On The Server');
                    fetch('https://fixit-ng.herokuapp.com/collection/users', {
                        method: "POST",
                        body: JSON.stringify(
                            {
                                id: cred.user.uid,
                                firstname: this.firstname,
                                lastname : this.lastname,
                                email : this.email,
                                phone : this.phone
                            }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    }).then(() =>{
window.alert('Account Created Successfully');
    
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
             window.location = '/';
            }
          });
        
    })
})
}
        }
    }

}
</script>

<style scoped>
.card:hover{
        transform: scale(1);
    }
</style>