<template>
    <div>
        <div class="container">
            <p id="title">Day Care</p>
            <hr id="hr">
            <div class="card">
                <form>
                  <input type="text" id="time" placeholder="Open Time">
                  <input type="text" id="description" placeholder="Description">
                  <input type="text" id="photo" placeholder="Upload Photos" disabled>
                  <input type="file" id="photofile">
                  <p id="price" @click="showPrice">Price</p>
                  <div class ="price" v-if="price">
                    <p id="dogs"><input type = "checkbox" value="dogs"><label>Dogs</label></p>
                      <p id="dogs-price">Price:</p><input type="text" id="dogs-pr">
                    <p id="cats"><input type = "checkbox" value="cats"><label>Cats</label></p>
                      <p id="cats-price">Price:</p><input type="text" id="cats-pr">
                  </div>

                  <p id="food" @click="showFoodDetails">Food Details </p>
                  <input type="text" id="other" placeholder="Other Specifications">

                  <div class="food-details" v-if="foodDetails">
                    <div class="dog">
                      <p id="dog">Dog:</p>
                      <p id="d-bf"><input type = "checkbox"><label>Breakfast</label></p>
                      <p id="d-bf-price">Price:</p><input type="text" id="d-bf-pr">
                      <p id="d-ln"><input type = "checkbox"><label>Lunch</label></p>
                      <p id="d-ln-price">Price:</p><input type="text" id="d-ln-pr">
                      <p id="d-di"><input type = "checkbox"><label>Dinner</label></p>
                      <p id="d-di-price">Price:</p><input type="text" id="d-di-pr">
                    </div>
                    <div class="cat">
                      <p id="cat">Cat:</p>
                      <p id="c-bf"><input type = "checkbox"><label>Breakfast</label></p>
                      <p id="c-bf-price">Price: </p><input type="text" id="c-bf-pr">
                      <p id="c-ln"><input type = "checkbox"><label>Lunch</label></p>
                      <p id="c-ln-price">Price: </p><input type="text" id="c-ln-pr">
                      <p id="c-di"><input type = "checkbox"><label>Dinner</label></p>
                      <p id="c-di-price">Price: </p><input type="text" id="c-di-pr">
                    </div>
                  </div>
                  <button type="submit" id="reg-ser">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return{
      foodDetails : false,
      price : false
    }
  },
  methods : {
    showFoodDetails() {
      this.foodDetails = !this.foodDetails
      this.price = false
    },
    showPrice() {
      this.price = !this.price
      this.foodDetails=false
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
#food{
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
.food-details{
  position: absolute;
  top:260px;
  left:5px;
  width: 500px;
  height: 250px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
}
.dog{
  position: absolute;
  top:0px;
  left:0px;
  width: 500px;
  height: 125px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
}
.cat{
  position: absolute;
  top:125px;
  left:0px;
  width: 500px;
  height: 125px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
}
#dog{
  position: absolute;
  top:5px;
  left:15px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#d-bf{
  position: absolute;
  top:5px;
  left:100px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#d-bf-price{
  position: absolute;
  top:5px;
  left:250px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#d-bf-pr{
  position: absolute;
  top:2px;
  left:330px;
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
#d-ln{
  position: absolute;
  top:50px;
  left:100px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#d-ln-price{
  position: absolute;
  top:50px;
  left:250px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#d-ln-pr{
  position: absolute;
  top:47px;
  left:330px;
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
#d-di{
  position: absolute;
  top:100px;
  left:100px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#d-di-price{
  position: absolute;
  top:100px;
  left:250px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#d-di-pr{
  position: absolute;
  top:97px;
  left:330px;
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
#cat{
  position: absolute;
  top:5px;
  left:15px;
  text-align: left;
  font: normal normal 300 20px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#c-bf{
  position: absolute;
  top:5px;
  left:100px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#c-bf-price{
  position: absolute;
  top:2px;
  left:250px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#c-bf-pr{
  position: absolute;
  top:5px;
  left:330px;
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
#c-ln{
  position: absolute;
  top:50px;
  left:100px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#c-ln-price{
  position: absolute;
  top:50px;
  left:250px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#c-ln-pr{
  position: absolute;
  top:47px;
  left:330px;
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
#c-di{
  position: absolute;
  top:100px;
  left:100px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#c-di-price{
  position: absolute;
  top:100px;
  left:250px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#c-di-pr{
  position: absolute;
  top:97px;
  left:330px;
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
#dogs{
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
#dogs-price{
  position: absolute;
  top:5px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#dogs-pr{
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
#cats{
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
#cats-price{
  position: absolute;
  top:50px;
  left:200px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#cats-pr{
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
