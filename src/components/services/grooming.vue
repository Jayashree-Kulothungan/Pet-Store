<template>
    <div>
        <div class="container">
            <p id="title">Grooming</p>
            <hr id="hr">
            <div class="card">
                <form @submit.prevent="handleSubmit" >
                  <!-- Timings -->
                  <p id="time" @click= "showTime">Opens At</p>
                  <div class="time" v-if="time">
                    <p id="weekdays"> Weekdays </p> <input type="time" id="weekdaytime" placeholder="Enter time" >
                    <p id="weekends"> Weekends </p> <input type="time" id="weekendtime" placeholder="Enter time" >          
                  </div>
                  <!-- Description -->
                  <input type="text" id="description" placeholder="Description"  > 
                  <!-- Image -->
                  <input type="text" id="photo" placeholder="Upload Photos" disabled>
                    <input type="file" id="photofile">
                  <!-- Other Specifications -->
                    <input type="text" id="other" placeholder="Other Specifications" >
                  <!--Services -->
                  <p id="service" @click="showServices">Services </p>
                  <div class="services" v-if="service">
                    <p id="haircut"><input type = "checkbox" value="haircut"><label>Haircut</label></p>
                      <p id="haircut-price">Price:</p><input type="text" id="haircut-pr">
                    <p id="bodywash"><input type = "checkbox" value="body wash"><label>Body Wash</label></p>
                      <p id="bodywash-price">Price:</p><input type="text" id="bodywash-pr">
                    <p id="shampoo"><input type = "checkbox" value="shampoo"><label>Shampoo</label></p>
                      <p id="shampoo-price">Price:</p><input type="text" id="shampoo-pr">
                    <p id="blowdry"><input type = "checkbox"><label>Blow Dry</label></p>
                      <p id="blowdry-price">Price: </p><input type="text" id="blowdry-pr">
                    <p id="nailtrim"><input type = "checkbox"><label>Nail Trim</label></p>
                      <p id="nailtrim-price">Price: </p><input type="text" id="nailtrim-pr">
                    <p id="sanitary"><input type = "checkbox"><label>Sanitary</label></p>
                      <p id="sanitary-price">Price: </p><input type="text" id="sanitary-pr"> 
                  </div>
                  <button type="submit" id="reg-ser">Submit</button>
                </form>
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data () {
    return{
      service : false,
      time: false,
      data : {
        grooming : {
          opentime : {
            weekdays : '',
            weekends : ''
          },
          description : '',
          groomingService : {
            Dogs : [{
                service : '',
                price : '',
            }],
            Cats : [{
                service : '',
                price : '',
            }],
          },
          additionalServices : '',
        }
      }
    }
  },
  methods : {
    showServices() {
      this.service = !this.service
      this.time = false
    },
    showTime() {
      this.time = !this.time
      this.service = false
    },
    ...mapActions(["updateServices"]),
    handleSubmit(){
      console.log(JSON.parse(JSON.stringify(this.data)))
      //this.updateServices(JSON.parse(JSON.stringify(this.data)))
    }
  },
  computed : {
    ...mapGetters(["services"]),
    grooming () {
      if (!this.services[0]){
        return {
          opentime : {
            weekdays : '',
            weekends : ''
        },
        description : '',
        groomingService : {
            Dogs : [{
                service : '',
                price : '',
            }],
            Cats : [{
                service : '',
                price : '',
            }],
        },
        additionalServices : '',
        }
      }
      return this.services[0].grooming
    }
  }
}
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
  height: 680px;
  border-style: solid;
  border-color:#D3D3D3; 
  border-width: 2px; 
}
#title{
  position: absolute;
  top:50px;
  left:50px;
  text-align: left;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #2E67CE;
  opacity: 1;
}
#hr{
  position: relative;
  top:90px;
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
#time{
  position: absolute;
  top:10px;
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
.time{
  position: absolute;
  top:60px;
  left:5px;
  width: 500px;
  height:100px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  z-index:100;
}
#weekdays{
  position: absolute;
  top:5px;
  left:10px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#weekends{
  position: absolute;
  top:50px;
  left:10px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#weekdaytime{
  position: absolute;
  top:5px;
  left:200px;
  width: 250px;
  height: 35px;
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
#weekendtime{
  position: absolute;
  top:50px;
  left:200px;
  width: 250px;
  height: 35px;
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
#description{
  position: absolute;
  top:10px;
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
#photo{
  position: absolute;
  top:110px;
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
#photofile{
  position: absolute;
  top:115px;
  left:250px;
  
}
#service{
  position: absolute;
  top:210px;
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
#other{
  position: absolute;
  top:110px;
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
.services{
  position: absolute;
  top:260px;
  left:5px;
  width: 500px;
  height: 280px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
}
#haircut{
  position: absolute;
  top:5px;
  left:50px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#haircut-price{
  position: absolute;
  top:5px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#haircut-pr{
  position: absolute;
  top:2px;
  left:280px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width: 150px;
  height: 25px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  border-top:none;
  border-left: none;
  border-right: none;
}
#bodywash{
  position: absolute;
  top:50px;
  left:50px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#bodywash-price{
  position: absolute;
  top:50px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#bodywash-pr{
  position: absolute;
  top:47px;
  left:280px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width: 150px;
  height: 25px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  border-top:none;
  border-left: none;
  border-right: none;
}
#shampoo{
  position: absolute;
  top:100px;
  left:50px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#shampoo-price{
  position: absolute;
  top:100px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#shampoo-pr{
  position: absolute;
  top:97px;
  left:280px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width: 150px;
  height: 25px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  border-top:none;
  border-left: none;
  border-right: none;
}
#blowdry{
  position: absolute;
  top:150px;
  left:50px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#blowdry-price{
  position: absolute;
  top:150px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#blowdry-pr{
  position: absolute;
  top:150px;
  left:280px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width: 150px;
  height: 25px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  border-top:none;
  border-left: none;
  border-right: none;
}
#nailtrim{
  position: absolute;
  top:200px;
  left:50px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#nailtrim-price{
  position: absolute;
  top:200px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#nailtrim-pr{
  position: absolute;
  top:200px;
  left:280px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width: 150px;
  height: 25px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  border-top:none;
  border-left: none;
  border-right: none;
}
#sanitary{
  position: absolute;
  top:250px;
  left:50px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#sanitary-price{
  position: absolute;
  top:250px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#sanitary-pr{
  position: absolute;
  top:250px;
  left:280px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width: 150px;
  height: 25px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  border-top:none;
  border-left: none;
  border-right: none;
}
#reg-ser{
  position: absolute;
  top: 450px;
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
#tab {
  position: absolute;
  top: 10px;
  font: normal normal 300 15px Poppins;
  padding: 10px;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  width : 1000px;
}
</style>
