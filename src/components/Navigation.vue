<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand><router-link to="/" id="ps">Pet-Store</router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
       <b-collapse id="nav-collapse" is-nav>
          <b-navbar-brand><router-link to="/"><img :src=logo id="img"  title="mycompanylogo"></router-link></b-navbar-brand>
          <b-nav-item ><router-link to="/Clinics" id="cl">Clinics</router-link></b-nav-item>
          <b-nav-item><router-link to="/Training" id="tr">Training</router-link></b-nav-item>
          <b-nav-item><router-link to="/Buy-Sell" id="bs">Buy/Sell</router-link></b-nav-item>
          <b-nav-item><router-link to="/Grooming" id="gr"> Grooming</router-link></b-nav-item>
          <b-nav-item><router-link to="/DayCare" id="dc">Day Care</router-link></b-nav-item>
          <b-nav-item><router-link to="/DogWalker" id="dw">Dog Walker</router-link></b-nav-item>
          <b-nav-item v-if="!isLoggedIn"><router-link to="/login" id="si">Sign In</router-link></b-nav-item>
          <b-nav-item v-if="isLoggedIn"><router-link  to="/profile" id="pr">My Account</router-link></b-nav-item>
          <b-nav-item v-if="isLoggedIn"><a href="" v-on:click.prevent="logoutUser" id="log">Sign out</a></b-nav-item>
       </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Vuex from 'vuex'
import logo from '../assets/logo.png'
import { mapGetters, mapActions } from "vuex";
export default {
  data: function () {
    return {
      logo: logo
    }
  },
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
    .navbar{
      list-style-type: none;
      height:75px;
      z-index: 999;
      position: fixed;
      transition:background 1.5s ease;
      transform: translateY(0);
      overflow: inherit;
      opacity: 1;
    }
    .navbar.navbar-dark.bg-dark.fixed-top{
      background-color:rgb(255,103,82)!important;
    }
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
    #img{
      position: absolute;
      top: 5px;
      left: 120px;
      width: 60px;
      height: 60px;
      background: transparent 0% 0% no-repeat padding-box;
      opacity: 1;
    }
    #ps{
        position:absolute;
        top: 15px;
        left: 280px;
        width: 102px;
        height: 33px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #cl{
        position:absolute;
        top: 15px;
        left: 442px;
        width: 71px;
        height: 33px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #tr{
      position:absolute;
      top: 15px;
      left: 573px;
      width: 91px;
      height: 33px;
      text-align: left;
      font: normal normal normal 20px OpenSans;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #bs{
        position:absolute;
        top: 15px;
        left: 724px;
        width: 90px;
        height: 33px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #gr{
        position:absolute;
        left: 874px;
        width: 113px;
        height: 33px;
        top:15px;
        width: 129px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #dc{
        position:absolute;
        left: 1047px;
        width: 101px;
        height: 33px;
        top:15px;
        width: 129px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #dw{
        position:absolute;
        left: 1208px;
        width: 129px;
        height: 33px;
        top:15px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #si{
        position:absolute;
        top:15px;
        left: 1397px;
        width: 169px;
        height: 33px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #pr{
        position:absolute;
        top:15px;
        left: 1397px;
        width: 169px;
        height: 33px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #log{
        position:absolute;
        top:15px;
        left: 1600px;
        width: 129px;
        height: 33px;
        width: 129px;
        text-align: left;
        font: normal normal normal 20px OpenSans;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
</style>
