<template>
    <div>
        <div class="container">
            <p id="title">Trainer</p>
            <hr id="hr">
            <div class="card">
              <form>
                <input type="text" id="description" placeholder="Description">
                <p id="available" @click="showAvailableTime">Available Time</p>
                  <div class ="available" v-if="availableTime">
                    <p id="weekday"><input type = "checkbox" value="week"><label>Weekdays</label></p>
                      <p id="weekday-time">Time:</p><input type="text" id="weekday-ti">
                    <p id="weekend"><input type = "checkbox" value="week"><label>Week Days</label></p>
                      <p id="weekend-time">Time:</p><input type="text" id="weekend-ti">
                  </div>
                <input type="text" id="photo" placeholder="Upload Photos" disabled>
                  <input type="file" id="photofile">
                <p id="price" @click="showPrice">Price</p>
                  <div class ="price" v-if="price">
                    <p id="weekday"><input type = "checkbox" value="week"><label>Weekdays</label></p>
                      <p id="weekday-price">Price:</p><input type="text" id="weekday-pr">
                    <p id="weekend"><input type = "checkbox" value="week"><label>Week Days</label></p>
                      <p id="weekend-price">Price:</p><input type="text" id="weekend-pr">
                  </div>
                <input type="text" id="additional" placeholder="Additional Services">

                <button type="submit" id="reg-ser">Submit</button>
              </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data (){
    return {
      availableTime : false,
      price : false
    }
  },
  methods : {
    showAvailableTime() {
      this.availableTime = !this.availableTime
      this.price=false
    },
    showPrice() {
      this.price = !this.price
      this.availableTime=false
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
#description{
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
#available{
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
#additional{
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
.available{
  position: absolute;
  top:60px;
  left:580px;
  width: 500px;
  height:100px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  z-index:100;
}
#weekday{
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
#weekday-time {
  position: absolute;
  top:5px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#weekday-ti{
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
#weekend{
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
#weekend-time{
  position: absolute;
  top:50px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#weekend-ti{
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
.price{
  position: absolute;
  top:160px;
  left:580px;
  width: 500px;
  height:100px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  z-index:100;
}
#weekday{
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
#weekday-price{
  position: absolute;
  top:5px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#weekday-pr{
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
#weekend{
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
#weekend-price{
  position: absolute;
  top:50px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#weekend-pr{
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
