<template>
    <nav class="navbar navbar-expand-lg navbar-light ">
	<router-link to="/" id="ps" class="navbar-brand"> Pet Store</router-link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">

	 <li class="nav-item">
        <router-link to="/Clinics" id="cl">Clinics</router-link>
      </li>

      <li class="nav-item">
         <router-link to="/Buy-Sell" id="bs">Buy/Sell</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/Grooming" id="gr"> Grooming</router-link>
      </li>

      <li class="nav-item">
        <router-link to="/DayCare" id="dc">Day Care</router-link>
      </li>
	
	<li class="nav-item">
        <router-link to="/DogWalker" id="dw">Dog Walker</router-link>
      </li>

	<li class="nav-item" v-if="!isLoggedIn">
        <router-link to="/login" id="si">Sign In</router-link>
    </li>

    <li  class="nav-item" v-if="isLoggedIn">
        <router-link  to="/profile" id="si">Profile</router-link>
    </li>
    <li  class="nav-item" v-if="isLoggedIn">
        <a href="" v-on:click.prevent="logoutUser" id="lo">Logout</a>
    </li>
    </ul>
  </div>
</nav>
</template>


<script>
import Vuex from 'vuex'
import { mapGetters, mapActions } from "vuex";
export default {
   computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
}
</script>

<style scoped>
     a:link{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:visited{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:active{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:hover{
       color:#FFFFFF;
       text-decoration: none;
    }
    #ps{
        position:absolute;
        left:20%;
        top:10%;
        width: 129px;
        text-align: left;
        font: normal normal normal 24px/33px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #cl{
        position:absolute;
        left:30%;
        top:45%;
        width: 129px;
        text-align: left;
        font: normal normal normal 24px/33px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #bs{
        position:absolute;
        left:40%;
        top:45%;
        width: 129px;
        text-align: left;
        font: normal normal normal 24px/33px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #gr{
        position:absolute;
        left:50%;
        top:45%;
        width: 129px;
        text-align: left;
        font: normal normal normal 24px/33px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #dc{
        position:absolute;
        left:60%;
        top:45%;
        width: 129px;
        text-align: left;
        font: normal normal normal 24px/33px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #dw{
        position:absolute;
        left:70%;
        top:45%;
        width: 129px;
        text-align: left;
        font: normal normal normal 24px/33px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #si{
        position:absolute;
        left:80%;
        top:45%;
        width: 129px;
        text-align: left;
        font: normal normal normal 24px/33px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #lo{
      position:absolute;
        left:90%;
        top:40%;
        width: 129px;
        text-align: left;
        font: normal normal normal 24px/33px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
</style>