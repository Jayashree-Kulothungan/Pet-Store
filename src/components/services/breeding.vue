<template>
    <div>
        <div class="container">
            <p id="title">Breeding</p>
            <hr id="hr">
            <div class="card">
              <form><template>
    <div>
        <div class="container">
            <p id="title">Breeding</p>
            <hr id="hr">
            <div class="card">
              <form>
                <input type="text" id="breed" placeholder="Breed">
                <input type="text" id="age" placeholder="Age">
                <input type="text" id="photo" placeholder="Upload Photos" disabled>
                <input type="file" id="photofile">
                <input type="text" id="price" placeholder="Price">
                <input type="text" id="height" placeholder="Height">
                <input type="text" id="weight" placeholder="Weight">
                <input type="text" id="eye" placeholder="Eye Colour">

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
    return {
      data : {
        breed : '',
        age : '',
        height : '',
        weight : '',
        color : '',
        eyeColor : '',
        price : '',
        number : '',
        location : {
            building : '',
            street : '',
            locality:'',
            city : '',
            zipcode : ''
        },
      }
    }
  },
  computed : {
 ...mapGetters(["services"]),
    dayCare () {
      if (!this.services[0]) {
        return {
          breed : '',
          age : '',
          height : '',
          weight : '',
          color : '',
          eyeColor : '',
          price : '',
          number : '',
          location : {
              building : '',
              street : '',
              locality:'',
              city : '',
              zipcode : ''
          },
        }  
       }
      return this.services[0].breeding
    },
  },
  methods : {
    ...mapActions(["updateServices"]),
    handleSubmit(){
      //console.log(JSON.parse(JSON.stringify(this.data)))
      this.updateServices(JSON.parse(JSON.stringify(this.data)))
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
#breed{
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
#age{
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
#price{
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
#height{
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
#weight{
  position: absolute;
  top:210px;
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
#eye{
  position: absolute;
  top:310px;
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
</style>
                <input type="text" id="breed" placeholder="Breed">
                <input type="text" id="age" placeholder="Age">
                <input type="text" id="photo" placeholder="Upload Photos" disabled>
                <input type="file" id="photofile">
                <input type="text" id="price" placeholder="Price">
                <input type="text" id="height" placeholder="Height">
                <input type="text" id="weight" placeholder="Weight">
                <input type="text" id="eye" placeholder="Eye Colour">

                <button type="submit" id="reg-ser">Submit</button>
              </form>
            </div>
        </div>
    </div>
</template>

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
#breed{
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
#age{
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
#price{
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
#height{
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
#weight{
  position: absolute;
  top:210px;
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
#eye{
  position: absolute;
  top:310px;
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
</style>
