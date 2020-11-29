<template>
<div>
  <div class="profile">
  <v-card>
    <v-tabs vertical>
      <v-tab id="my-acc" selected @click="showAccount" >  My Account  </v-tab>
      <p id="services"  @click="showServices">Services<b-icon icon="chevron-down" id="arrow" scale="1"></b-icon></p>
        <v-tab id="day-care" v-if="showStabs" @click="showDaycare">  Day Care  </v-tab>
        <v-tab id="grooming" v-if="showStabs" @click="showGrooming">  Grooming  </v-tab>
        <v-tab id="dog-walker" v-show="showStabs" @click="showDogwalker"> Dog Walker </v-tab>
        <v-tab id="trainer" v-show="showStabs" @click="showTrainer"> Trainer </v-tab>
        <v-tab id="clinics" v-show="showStabs" @click="showClinics">  Clinics  </v-tab>
        <v-tab id="breeding" v-show="showStabs" @click="showBreeding">  Breeding </v-tab> 
        <v-tab id="sell" v-show="showStabs">Sell</v-tab> 
    </v-tabs>
  </v-card>
    <my-account v-if="myaccount"></my-account> 
    <day-care v-if="daycare"></day-care>
    <grooming v-if="grooming"></grooming>
    <dog-walker v-if="dogwalker"></dog-walker>
    <trainer v-if="trainer"></trainer>
    <clinics v-if="clinics"></clinics>
    <breeding v-if="breeding"></breeding>

    
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
import { mapActions, mapGetters } from "vuex";
export default {
   data() {
    return {
      myaccount: true,
      showStabs: false,
      daycare:false,
      grooming:false,
      dogwalker:false,
      trainer:false,
      clinics:false,
      breeding:false,
      regService :'',
      name : '',
      
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
    },
    showDaycare(){
      this.myaccount=false;
      this.daycare=true;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=false;
      this.breeding=false;
    },
    showGrooming(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=true;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=false;
      this.breeding=false;
    },
    showDogwalker(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=true;
      this.trainer=false;
      this.clinics=false;
      this.breeding=false;
    },
    showTrainer(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=true;
      this.clinics=false;
      this.breeding=false;
    },
    showClinics(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=true;
      this.breeding=false;
    },
    showBreeding(){
      this.myaccount=false;
      this.daycare=false;
      this.grooming=false;
      this.dogwalker=false;
      this.trainer=false;
      this.clinics=false;
      this.breeding=true;
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
    Breeding
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
  }
  #services{
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
  }
  #arrow{
    position: absolute;
    left:90%;
    
  }
  #day-care{
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
  }
  #grooming{
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
  }
  #dog-walker{
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
  }
  #trainer{
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
  }
  #clinics{
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
  }
  #breeding{
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
  }
  #sell{
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
  }
</style>
