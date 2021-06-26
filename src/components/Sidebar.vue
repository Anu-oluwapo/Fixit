<template>
 <nav id="sidebar">
            <div class="sidebar-header">
                <!-- <strong>BS</strong> -->
                <div class="profile pt-3">
                    <img class="nav-icon" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"><br><br>
                        <span>{{userr.email}}</span>
                </div>
            </div>

            <ul class="list-unstyled components" style="border-bottom: none;">
            <router-link to="/">
                <li class="" >
                    <a href="#">
                        <img class="nav-icon" src="../assets/dash2.svg">
                        <span>Dashboard</span>
                    </a>
                </li>
                </router-link>

                <router-link to="/repairs">
                <li class="">
                    <a href="#">
                        <img class="nav-icon" src="../assets/repair2.svg">
                        <span>Repairs</span>
                    </a>
                </li>
                </router-link>
                
                <router-link to="/diagnosis">
                <li class="">
                    <a href="#">
                        <img class="nav-icon" src="../assets/diagnose2.svg">
                        <span>Diagnosis</span>
                    </a>
                </li>
                </router-link>

                <router-link to="/blog">
                <li class="">
                    <a href="#">
                        <img class="nav-icon" src="../assets/blog2.svg">
                        <span>Blog&nbsp;</span>
                    </a>
                </li>
                </router-link>

                <router-link to="/profile">
                <li class="">
                    <a href="#">
                        <img class="nav-icon" src="../assets/profile2.svg">
                        <span>Profile</span>
                    </a>
                </li>
                </router-link>

                <router-link to="/help">
                <li class="">
                    <a href="#">
                        <img class="nav-icon" src="../assets/help2.svg">
                        <span>Help & About</span>
                    </a>
                </li>
                </router-link>
                <br><br>
                <li>
                    <button id="logout" @click="logout()" class="btn btn-danger text-light d-block mx-auto">
                        Logout
                    </button>
                </li>
            </ul>

        </nav>
</template>

<script>
import firebase from 'firebase'


export default{
    props:['userr'],

    data(){
        return{

        }
    },
    methods:{
        logout(){

            const auth = firebase.auth()
            

        auth.signOut().then(() => {
            window.location="/"
            //location.reload()
        })
        }
    }
}
</script>

<style scoped>
.profileDetails p{
color: white;
}

a{
    color: rgb(202, 202, 202);
}


</style>


