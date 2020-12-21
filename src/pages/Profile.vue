<template>
    <div>
        <div class="profile">
            <div class="tabs"> 
                  <v-card>
                    <v-tabs vertical>
                        <v-tab id="myreq" @click="showRequests"> My Requests </v-tab>
                        <v-tab id="res" @click="showResponse"> Response </v-tab>
                        <v-tab id="my-acc"  @click="showAccount" >  My Account  </v-tab>
                        <p id="services"  @click="showServices">Services<b-icon icon="chevron-down" id="arrow" scale="1"></b-icon></p>
                        <v-tab id="day-care" v-if="showStabs" @click="showDaycare">  Day Care  </v-tab>
                        <v-tab id="grooming" v-if="showStabs" @click="showGrooming">  Grooming  </v-tab>
                        <v-tab id="dog-walker" v-show="showStabs" @click="showDogwalker"> Dog Walker </v-tab>
                        <v-tab id="trainer" v-show="showStabs" @click="showTrainer"> Trainer </v-tab>
                        <v-tab id="clinics" v-show="showStabs" @click="showClinics">  Clinics  </v-tab>
                        <v-tab id="breeding" v-show="showStabs" @click="showBreeding">  Breeding </v-tab>    
                    </v-tabs>                
                 </v-card>
            </div>
            <my-account v-if="myaccount"></my-account> 
            <day-care v-if="daycare"></day-care>
            <grooming v-if="grooming"></grooming>
            <dog-walker v-if="dogwalker"></dog-walker>
            <trainer v-if="trainer"></trainer>
            <clinics v-if="clinics"></clinics>
            <breeding v-if="breeding"></breeding>  
            <my-requests v-if="myRequests"></my-requests>   
            <response v-if="response"></response>       
        </div>
    </div>
</template>

<script>
import myAccount from '../components/services/account'
import dayCare from '../components/services/daycare'
import Grooming from '../components/services/grooming'
import dogWalker from '../components/services/dogwalker'
import Trainer from '../components/services/training'
import Clinics from '../components/services/clinics'
import Breeding from '../components/services/breeding'
import myRequests from '../components/services/myRequests'
import Response from '../components/services/response'
import { mapActions, mapGetters } from "vuex";
export default {
   data() {
    return {
      myaccount: false,
      showStabs: false,
      daycare:false,
      grooming:false,
      dogwalker:false,
      trainer:false,
      clinics:false,
      breeding:false,
      regService :'',
      name : '',
      myRequests:true,
      response:false
      
    }
  },
  computed: mapGetters(["user"]), 
  methods: {
    ...mapActions(["getProfile"]),
    showAccount(){
      this.myaccount=true;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=false;
      this.breeding=false;
      this.myRequests=false;
      this.response =false;
    },
    showServices(){
      this.showStabs=!this.showStabs;
      this.myaccount=true;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=false;
      this.breeding=false;
      this.myRequests=false;
      this.response =false;
    },
    showDaycare(){
      this.myaccount=false;
      this.daycare=true;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=false;
      this.breeding=false;
      this.myRequests=false;
      this.response =false;
    },
    showGrooming(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=true;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=false;
      this.breeding=false;
      this.myRequests=false;
      this.response =false;
    },
    showDogwalker(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=true;
      this.trainer=false;
      this.clinics=false;
      this.breeding=false;
      this.myRequests=false;
      this.response =false;
    },
    showTrainer(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=true;
      this.clinics=false;
      this.breeding=false;
      this.myRequests=false;
      this.response =false;
    },
    showClinics(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=true;
      this.breeding=false;
      this.myRequests=false;
      this.response =false;
    },
    showBreeding(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=false;
      this.breeding=true;
      this.myRequests=false;
      this.response =false;
    },
    showRequests(){
        this.myaccount=false;
        this.daycare=false;
        this.grooming=false;
        this.dogwalker=false;
        this.trainer=false;
        this.clinics=false;
        this.breeding=false;
        this.myRequests=true;
        this.response =false;
    },
    showResponse(){
        this.myaccount=false;
        this.daycare=false;
        this.grooming=false;
        this.dogwalker=false;
        this.trainer=false;
        this.clinics=false;
        this.breeding=false;
        this.myRequests=false;
        this.response =true;
    }
  },
  created() {
    this.getProfile();
  },
  components:{
    myAccount,
    dayCare,
    Grooming,
    dogWalker,
    Trainer,
    Clinics,
    Breeding,
    myRequests,
    Response
  },
  
};
</script>

<style scoped>
 *:focus {
      outline: 0 !important;
  }
  .profile{
    position: absolute;
    top:100px;
    left:0px;
  }
  #my-acc{
    position: absolute;
    top:140px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070;
    border:none;
    cursor: pointer;
  }
  #services{
    position: absolute;
    top:210px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070;
    border:none;
    cursor: pointer;
  }
  #arrow{
    position: absolute;
    left:50%;
    top:10%
    
  }
  #day-care{
    position: absolute;
    top:280px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070;
    border:none;
    cursor: pointer;
  }
  #grooming{
    position: absolute;
    top:350px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070;
    border:none;
    cursor: pointer;
  }
  #dog-walker{
    position: absolute;
    top:420px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070;
    border:none;
    cursor: pointer;
  }
  #trainer{
    position: absolute;
    top:490px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070;
    border:none;
    cursor: pointer;
  }
  #clinics{
    position: absolute;
    top:560px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070;
    border:none;
    cursor: pointer;
  }
  #breeding{
    position: absolute;
    top:630px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070;
    border:none;
    cursor: pointer;
  } 
  #myreq{
    position: absolute;
    top:0px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070!important;
    border:none;
    cursor: pointer;
  }
  #res{
    position: absolute;
    top:70px;
    left:0px;
    width: 300px;
    height: 70px;
    background: #EBEBEB 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    font: normal normal normal 20px Poppins;
    text-indent: 50px;
    letter-spacing: 0px;
    color: #707070!important;
    border:none; 
    cursor: pointer;
  }
</style>
