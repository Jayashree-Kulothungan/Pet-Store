<template>
  <div>
    <div class= "container" > 
      <div>
        <p id="title">My Account</p>
        <hr id="hr"> 
        <div class="card" >
          <form  @submit.prevent="handleSubmit" v-if="!services[0]">
            <input type="text" id="name" placeholder="Name" v-model="organization.organization.name">
            <input type="text" id="organization" placeholder="Name of Organization" v-model="organization.organization.organizationName">
            <input type="email" id="email" placeholder="Email" v-model="organization.organization.email">
            <input type="text" id="phone" placeholder="Phone" v-model="organization.organization.phone">
            <input type="text" id="no" placeholder="House No, Apt Name" v-model="organization.organization.address.no">
            <input type="text" id="street" placeholder="Street Name" v-model="organization.organization.address.street">
            <input type="text" id="locality" placeholder="Locality" v-model="organization.organization.address.locality">
            <input type="text" id="city" placeholder="City" v-model="organization.organization.address.city">
            <input type="text" id="state" placeholder="State" v-model="organization.organization.address.state" >
            <input type="text" id="zipcode" placeholder="zipcode" v-model="organization.organization.address.zipcode">
            <div>
              <p id="service">Services:</p>
                <p id="dc"><input type="checkbox" name="services" value="Day Care"><label>Day Care</label></p>
                <p id="gr"><input type="checkbox" name="services" value="Grooming"><label>Grooming </label></p>
                <p id="dw"><input type="checkbox" name="services" value="Dog Walker"><label>Dog Walker</label></p>
                <p id="tr"><input type="checkbox" name="services" value="Trainer"><label>Trainer</label></p>
                <p id="cl"><input type="checkbox" name="services" value="Clincs"><label>Clinics</label></p>
                <p id="br"><input type="checkbox" name="services" value="Breeding"><label>Breeding</label></p>
            </div>
            <button id="regser" type="submit" value="submit">Register Service</button>
          </form>
          <div >
           <table border="0" id="tab" v-if="services[0]">
             <tr><td >Name </td><td >: {{organization1.name}}</td></tr>
             <tr><td>Name of Organisation </td><td>: {{organization1.organizationName}}</td></tr>
             <tr><td>Email </td><td>: {{organization1.email}}</td></tr>
             <tr><td>Mobile </td><td>: {{organization1.phone}}</td></tr>
             <tr><td>Location </td><td>: {{organization1.address.no}} {{organization1.address.street}} {{organization1.address.locality}} {{organization1.address.state}}</td></tr>
             <tr><td>Zipcode </td><td>: {{organization1.address.zipcode}}</td></tr>
           </table>
          </div>
        </div>  
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from 'axios'
  export default {
    data() {
      return {
        myaccount: true,
        regService :'',
        name : '',
        userdata:'',
        organization : {
          zipcode:'',
          User:'',
          organization : {
            address : {
              no : '',
              street : '',
              locality :'',
              city:'',
              state : ''
            },
            name: '',
            organizationName:'',
            email:'',
            location:'',
          }
        },
        display:[]
      }
    },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["services"]),
    organization1 () {
      if (!this.services[0]) {
        return {
          name: '',
          organizationName : '',
          email : '',
          phone :'',
          address :{
            no :'',
            street:'',
            locality : '',
            state :'',
            zipcode :''
          }
        }  
       }
      return this.services[0].organization
    },
  },
  methods: {
    ...mapActions(["getProfile"]),
    ...mapActions(["registerServices"]),
    ...mapActions(["fetchServices"]),
    handleSubmit() {
      console.log(this.user._id)
      this.organization.user = this.user._id
      this.registerServices(this.organization)
      location.reload();
    },
  },
    async created() {
      await this.getProfile();
    },         
    async mounted(){
     this.fetchServices(this.user._id)
     
    }
  };
</script>
 
<style scoped> 
*:focus {
    outline: 0 !important;
}
.container {
  position: absolute;
  top:0px;
  left:320px;
  width: 2000px;
  height: 740px;
  border-style: solid;
  border-color:#D3D3D3; 
  border-width: 2px; 
}
#title{
  position: absolute;
  top:30px;
  left:50px;
  text-align: left;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #2E67CE;
  opacity: 1;
}
#hr{
  position: relative;
  top:70px;
  border-width: 3px;
}
.card{
  border: none;
  position: relative;
  top:90px;
  width:400px;
  left:10px;
  text-align: left;
  font: normal normal 300 18px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#name{
  position: absolute;
  top:0px;
  left:5px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#organization{
  position: absolute;
  top:0px;
  left:580px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#email{
  position: absolute;
  top:100px;
  left:5px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#phone{
  position: absolute;
  top:100px;
  left:580px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#no{
  position: absolute;
  top:200px;
  left:5px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#street{
  position: absolute;
  top:200px;
  left:580px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#locality{
  position: absolute;
  top:300px;
  left:5px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#city{
  position: absolute;
  top:300px;
  left:580px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#state{
  position: absolute;
  top:400px;
  left:5px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#zipcode{
  position: absolute;
  top:400px;
  left:580px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#services{
  position: absolute;
  top:510px;
  left:0px;
  width: 500px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#service{
  position: absolute;
  top:500px;
  left:0px;
  width: 500px;
  height: 50px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 30px;
}
#dc{
  position: absolute;
  top:500px;
  left:150px;
  width: 500px;
  height: 50px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 5px;
}
#gr{
  position: absolute;
  top:500px;
  left:300px;
  width:300px;
  height: 50px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 5px;
}
#dw{
  position: absolute;
  top:500px;
  left:450px;
  width: 500px;
  height: 50px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 5px;
}
#tr{
  position: absolute;
  top:500px;
  left:630px;
  width: 500px;
  height: 50px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 5px;
}
#cl{
  position: absolute;
  top:500px;
  left:770px;
  width: 500px;
  height: 50px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 5px;
}
#br{
  position: absolute;
  top:500px;
  left:900px;
  width: 500px;
  height: 50px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-indent: 5px;
}
#regser{
  position: absolute;
  top: 560px;
  left: 650px;
  width: 300px;
  height: 50px;
  background: var(--unnamed-color-ff5e41) 0% 0% no-repeat padding-box;
  background: #FF5E41 0% 0% no-repeat padding-box;
  border-radius: 32px;
  opacity: 1;
  border:none;
  text-align: center;
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #FFFFFF;
}
#name_1{
  position: absolute;
  top:0px;
  left:5px;
  width: 500px;
  height: 50px;
}
#tab{
  position: absolute;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width : 1000px;
}
td{
  width: 1500px;
}
</style>
