<template>
  <div> 
    <div class ="container">
      <p id="title">Day Care</p>
      <hr id="hr">
      <div class="card">
        <form  @submit.prevent="handleSubmit" v-if="!services[0]">
          <!-- Timings -->
          <p id="time" @click= "showTime">Opens At</p>
          <div class="time" v-if="time">
            <p id="weekdays"> Weekdays </p> <input type="time" id="weekdaytime" placeholder="Enter time" v-model="data.daycare.opentime.weekdays">
            <p id="weekends"> Weekends </p> <input type="time" id="weekendtime" placeholder="Enter time" v-model="data.daycare.opentime.weekends">          
          </div>
          <!-- Description -->
          <input type="text" id="description" placeholder="Description" v-model="data.daycare.description" > 
          <!-- Image -->
          <input type="text" id="photo" placeholder="Upload Photos" disabled>
            <input type="file" id="photofile">
          <!-- Price -->
          <p id="price" @click="showPrice">Price </p>
          <div class ="price" v-if="price">
            <p id="dogs"><label>Dogs</label></p><p id="dr-day">&#x20B9;</p><input type="text" id="day-dogs-pr" placeholder="Price on Weekdays" v-model="data.daycare.price.dogs.weekdays"><p id="dr-end">&#x20B9;</p> <input type="text" id="end-dogs-pr" placeholder="Price on Weekends" v-model="data.daycare.price.dogs.weekends">
            <p id="cats"><label>Cats</label></p><p id="cr-day">&#x20B9;</p><input type="text" id="day-cats-pr" placeholder="Price on Weekdays" v-model="data.daycare.price.cats.weekdays"><p id="cr-end">&#x20B9;</p> <input type="text" id="end-cats-pr" placeholder="Price on Weekends" v-model="data.daycare.price.cats.weekends">
          </div>
          <!-- Food Details -->
          <p id="food" @click="showFoodDetails">Food Details </p>
          <div class="food-details" v-if="foodDetails">
            <!--Dogs -->
            <div class="dog">
              <p id="dog">Dog:</p>
              <p id="d-bf"><label>Breakfast</label></p>
              <p id="d-bf-price">Price: &#x20B9;</p><input type="text" id="d-bf-pr" v-model="data.daycare.foodDetails.dogs.breakfast.price">
              <p id="d-ln"><label>Lunch</label></p>
              <p id="d-ln-price">Price: &#x20B9;</p><input type="text" id="d-ln-pr" v-model="data.daycare.foodDetails.dogs.lunch.price">
              <p id="d-di"><label>Dinner</label></p>
              <p id="d-di-price">Price: &#x20B9;</p><input type="text" id="d-di-pr" v-model="data.daycare.foodDetails.dogs.dinner.price">
            </div>
            <!-- Cats -->
            <div class="cat">
              <p id="cat">Cat:</p>
              <p id="c-bf"><label>Breakfast</label></p>
              <p id="c-bf-price">Price: &#x20B9;</p><input type="text" id="c-bf-pr" v-model="data.daycare.foodDetails.cats.breakfast.price">
              <p id="c-ln"><label>Lunch</label></p>
              <p id="c-ln-price">Price: &#x20B9;</p><input type="text" id="c-ln-pr" v-model="data.daycare.foodDetails.cats.lunch.price">
              <p id="c-di"><label>Dinner</label></p>
              <p id="c-di-price">Price: &#x20B9;</p><input type="text" id="c-di-pr" v-model="data.daycare.foodDetails.cats.dinner.price">
            </div>
          </div>
          <!-- Other Specifications -->
          <input type="text" id="other" placeholder="Other Specifications" v-model="data.daycare.additionalServices">

          <button type="submit" id="reg-ser">Submit</button>
        </form>

        <div >
          <table border="0" id="tab" v-if="dayCare.description">
            <tr> 
               <th style="width:10em" >Open Time: </th>
               <td>Open on weekdays from {{dayCare.opentime.weekdays}} and on weekends from {{dayCare.opentime.weekends}}</td>
            </tr>
            <tr>
               <th>Description:</th>
               <td> {{dayCare.description}} </td>
            </tr>
              <tr>
               <th> Price: </th>
               <td> 
                 <tr> 
                    <th style="width: 13em;"> Dogs: </th>
                    <th> Cats: </th>
                 </tr>
                 <tr>
                  <td style="width: 13em;">Weekdays: &#x20B9; {{dayCare.price.dogs.weekdays}} </td>
                  <td>Weekdays: &#x20B9; {{dayCare.price.cats.weekdays}} </td>
                 </tr>
                 <tr>
                  <td style="width: 13em;">Weekends: &#x20B9; {{dayCare.price.dogs.weekends}} </td>
                  <td>Weekends: &#x20B9; {{dayCare.price.cats.weekends}} </td>
                 </tr>
               </td>
            <tr>
               <th>Food Details:</th>
               <td>
                 <tr>
                    <th style="width: 13em;">Dogs:</th>
                    <th>Cats:</th>
                 </tr>
                 <tr>
                <td style="width: 13em;"> Breakfast Price :  &#x20B9; {{dayCare.foodDetails.dogs.breakfast.price}} </td>
                <td> Breakfast Price :  &#x20B9; {{dayCare.foodDetails.cats.breakfast.price}} </td>
                 </tr>
                 <tr>
                  <td style="width: 13em;"> Lunch Price :  &#x20B9; {{dayCare.foodDetails.dogs.lunch.price}} </td>
                  <td> Lunch Price :  &#x20B9; {{dayCare.foodDetails.cats.lunch.price}} </td>
                 </tr>
                 <tr>
                  <td style="width: 13em;"> Dinner Price :  &#x20B9; {{dayCare.foodDetails.dogs.dinner.price}} </td>
                  <td> Dinner Price :  &#x20B9; {{dayCare.foodDetails.cats.dinner.price}} </td>
                 </tr>
                </td>
              </tr> 
            <tr>
               <th>Other Specifications:</th>
               <td>{{dayCare.additionalServices}}</td>
            </tr>
          </table>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from 'axios'
export default {
  data () {
    return{
      foodDetails : false,
      price : false,
      time : false,
      data : {
        daycare : {
          opentime : {
            weekdays : '',
            weekends : ''
          },
          description : '',
          price : {
            dogs : {
              weekdays : '',
              weekends : ''
            },
            cats : {
              weekdays : '',
              weekends : ''
             },
          },
          foodDetails : {
            dogs : {
              breakfast : {
                price : '',
              },
              lunch : {
                price : '',
              },
              dinner : {
                price : '',
              }
            },
            cats : {
              breakfast : {
                price : '',
              },
              lunch : {
                price : '',
              },
              dinner : {
                price : '',
              }
            }
          },
          additionalServices : '',
        }
      }
    }
  },
  computed :{
    ...mapGetters(["services"]),
    dayCare () {
      if (!this.services[0]) {
        return {
          opentime : {
            weekdays : '',
            weekends : ''
          },
          description : '',
          price : {
            dogs : {
              weekdays : '',
              weekends : ''
            },
            cats : {
              weekdays : '',
              weekends : ''
             },
          },
          foodDetails : {
            dogs : {
              breakfast : {
                price : '',
              },
              lunch : {
                price : '',
              },
              dinner : {
                price : '',
              }
            },
            cats : {
              breakfast : {
                price : '',
              },
              lunch : {
                price : '',
              },
              dinner : {
                price : '',
              }
            }
          },
          additionalServices : '',
        }  
       }
      return this.services[0].daycare
    },
  },
  methods : {
    showFoodDetails() {
      this.foodDetails = !this.foodDetails
      this.price = false
      this.time = false
    },
    showPrice() {
      this.price = !this.price
      this.foodDetails=false
      this.time = false
    },
    showTime() {
      this.time = !this.time
      this.price = false
      this.foodDetails=false
    },
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
  left:10px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#dr-day{
  position: absolute;
  top:5px;
  left:80px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#dr-end{
  position: absolute;
  top:5px;
  left:255px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#day-dogs-pr{
  position: absolute;
  top:2px;
  left:100px;
  width: 150px;
  text-align: left;
  font: normal normal 300 15px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align: center;
  opacity: 1;
  height: 25px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  border-top:none;
  border-left: none;
  border-right: none;
}
#end-dogs-pr{
  position: absolute;
  top:2px;
  left:280px;
  text-align: left;
  font: normal normal 300 15px Poppins;
  text-align: center;
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
  left:10px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#cr-day{
  position: absolute;
  top:50px;
  left:80px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#cr-end{
  position: absolute;
  top:50px;
  left:255px;
  text-align: left;
  font: normal normal 300 18px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-indent: 10px;
}
#day-cats-pr{
  position: absolute;
  top:47px;
  left:100px;
  width: 150px;
  text-align: left;
  font: normal normal 300 15px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align: center;
  opacity: 1;
  height: 25px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  border-top:none;
  border-left: none;
  border-right: none;
}
#end-cats-pr{
  position: absolute;
  top:47px;
  left:280px;
  text-align: left;
  font: normal normal 300 15px Poppins;
  text-align: center;
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
