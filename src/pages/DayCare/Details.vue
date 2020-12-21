<template>
    <div>
        <div class="body">
            <div class="container">
                <!--Day Care Details -->
                <h1 id="title">{{daycaredata.organization.organizationName}}</h1>
                <p id="description">{{daycaredata.daycare.description}}</p>
                <b-icon icon="geo-alt" scale="1" id="loc-icon"></b-icon>
                <p id="location">{{daycaredata.organization.address.no}}, {{daycaredata.organization.address.street}}, {{daycaredata.organization.address.locality}}, {{daycaredata.organization.address.city}}, {{daycaredata.organization.address.state}}, {{daycaredata.zipcode}} </p>
                <b-icon icon="telephone-fill" scale="1" id="ph-icon"> </b-icon>
                <p id="phone">{{daycaredata.organization.phone}}</p>
                <h1 id="opens">Opens At</h1>
                    <p id="op-days"> Weekdays : {{daycaredata.daycare.opentime.weekdays}} </p>
                    <p id="op-ends"> Weekends : {{daycaredata.daycare.opentime.weekends}} </p>

                <!--Food Details -->
                <h1 id="food"> Food Details </h1>
                    <h6 id="f-dogs"> Dogs -  </h6>
                        <p id="f-dogs-bf"> Breakfast : {{daycaredata.daycare.foodDetails.dogs.breakfast.food }} ( &#x20B9; {{daycaredata.daycare.foodDetails.dogs.breakfast.price}} )</p> 
                        <p id="f-dogs-ln"> Lunch : {{daycaredata.daycare.foodDetails.dogs.lunch.food }} ( &#x20B9; {{daycaredata.daycare.foodDetails.dogs.lunch.price}} )</p>
                        <p id="f-dogs-dr"> Dinner : {{daycaredata.daycare.foodDetails.dogs.dinner.food }} ( &#x20B9; {{daycaredata.daycare.foodDetails.dogs.dinner.price}})</p>
                    <h6 id="f-cats"> Cats -  </h6>
                        <p id="f-cats-bf"> Breakfast : {{daycaredata.daycare.foodDetails.cats.breakfast.food }} ( &#x20B9; {{daycaredata.daycare.foodDetails.cats.breakfast.price}} )</p> 
                        <p id="f-cats-ln"> Lunch : {{daycaredata.daycare.foodDetails.cats.lunch.food }} ( &#x20B9; {{daycaredata.daycare.foodDetails.cats.lunch.price}} )</p>
                        <p id="f-cats-dr"> Dinner : {{daycaredata.daycare.foodDetails.cats.dinner.food }} ( &#x20B9; {{daycaredata.daycare.foodDetails.cats.dinner.price}} )</p>
                <!--Additional Services -->
                <h1 id="additional"> Additional Services </h1>
                    <p id="add">  {{daycaredata.daycare.additionalServices}}</p>
                <!--Gallery -->
                <h1 id="gallery"> Gallery </h1>
                    <img class="image" id="img" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
                    <vue-gallery-slideshow :images="images" :index="index" @close="index = null" id="slide"></vue-gallery-slideshow>


                <!--Price enlisting -->
                <h1 id="price"> Price </h1> 
                    <h6 id="pr-dogs"> Dogs -  </h6>
                        <p id="pr-dogs-days"> Weekdays : &#x20B9; {{daycaredata.daycare.price.dogs.weekdays}} </p> 
                        <b-input-group id="addDog-days">
                            <b-input-group-prepend>
                                <b-btn  @click="dogsPrice.weekdays-- ; DisplayCart()" style="font-size:22px;height:40px"> - </b-btn>
                            </b-input-group-prepend>
                                <b-form-input type="number" min="0" placeholder="Add +" v-model="dogsPrice.weekdays"  v-on:input="DisplayCart" style="height:40px"></b-form-input>
                            <b-input-group-append>
                                <b-btn  @click="dogsPrice.weekdays++ ; DisplayCart()" style="height:40px" >+</b-btn>
                            </b-input-group-append>
                        </b-input-group>

                        <p id="pr-dogs-ends"> Weekends : &#x20B9; {{daycaredata.daycare.price.dogs.weekends}} </p>
                        <b-input-group id="addDog-ends">
                            <b-input-group-prepend>
                                <b-btn  @click="dogsPrice.weekends-- ; DisplayCart()" style="font-size:22px;height:40px"> - </b-btn>
                            </b-input-group-prepend>
                                <b-form-input type="number" min="0" placeholder="Add +" v-model="dogsPrice.weekends"  v-on:input="DisplayCart" style="height:40px"></b-form-input>
                            <b-input-group-append>
                                <b-btn  @click="dogsPrice.weekends++ ; DisplayCart()" style="height:40px" >+</b-btn>
                            </b-input-group-append>
                        </b-input-group>

                    <h6 id="pr-cats"> Cats -  </h6>
                        <p id="pr-cats-days"> Weekdays : &#x20B9; {{daycaredata.daycare.price.cats.weekdays}} </p> 
                        <b-input-group id="addCat-days">
                            <b-input-group-prepend>
                                <b-btn  @click="CatsPrice.weekdays-- ; DisplayCart()" style="font-size:22px;height:40px"> - </b-btn>
                            </b-input-group-prepend>
                                <b-form-input type="number" min="0" placeholder="Add +" v-model="CatsPrice.weekdays"  v-on:input="DisplayCart" style="height:40px"></b-form-input>
                            <b-input-group-append>
                                <b-btn  @click="CatsPrice.weekdays++ ; DisplayCart()" style="height:40px" >+</b-btn>
                            </b-input-group-append>
                        </b-input-group>

                        <p id="pr-cats-ends"> Weekends : &#x20B9; {{daycaredata.daycare.price.cats.weekends}} </p>
                        <b-input-group id="addCat-ends">
                            <b-input-group-prepend>
                                <b-btn  @click="CatsPrice.weekends-- ; DisplayCart()" style="font-size:22px;height:40px"> - </b-btn>
                            </b-input-group-prepend>
                                <b-form-input type="number" min="0" placeholder="Add +" v-model="CatsPrice.weekends"  v-on:input="DisplayCart" style="height:40px"></b-form-input>
                            <b-input-group-append>
                                <b-btn  @click="CatsPrice.weekends++ ; DisplayCart()" style="height:40px" >+</b-btn>
                            </b-input-group-append>
                        </b-input-group>
                
                <!--Inbuilt Cart -->
                <div class= "cart" v-show="showCart">
                    <h1 id="cart">Cart</h1>
                    <br> 
                    <hr id = "hr">
                    <table id="tab">
                        <tr id="row1" v-show="dogsPrice.weekdays>0">
                            <td style="width : 60px">{{ dogsPrice.weekdays }}</td>
                            <td style="width : 300px">Dog - Weekdays</td>
                            <td> &#x20B9; {{ dogsPrice.Weekdayamt }} </td>
                        </tr>
                        <tr id="row2" v-show="dogsPrice.weekends>0">
                            <td style="width : 60px">{{ dogsPrice.weekends }}</td>
                            <td style="width : 300px">Dog - Weekends</td>
                            <td>&#x20B9; {{ dogsPrice.Weekendamt }}</td>
                        </tr>
                        <tr id="row3" v-show="CatsPrice.weekdays>0">
                            <td style="width : 60px">{{ CatsPrice.weekdays }}</td>
                            <td style="width : 300px"> Cat - Weekdays </td>
                            <td>&#x20B9; {{ CatsPrice.Weekdayamt }} </td>
                        </tr>
                        <tr id="row4" v-show="CatsPrice.weekends>0">
                            <td style="width : 60px">{{ CatsPrice.weekends }} </td>
                            <td style="width : 300px">  Cat - Weekends </td>
                            <td>&#x20B9; {{ CatsPrice.Weekendamt }} </td>
                        </tr>
                        <tr id="row5" v-show="TotalAmt>0">
                            <td style="width : 50px">  </td>
                            <td style="width : 300px">  Total </td>
                            <td>&#x20B9; {{ TotalAmt }} </td>
                        </tr>
                        <button type="submit" id="sendReq" @click="addToCart">Add To Cart</button>
                    </table>
                </div>

                                <!-- Calender Modal -->

                <b-modal ref="dateAndTime" hide-backdrop hide-cancel @ok="handleOk" @cancel="clearForm" id="modal-tall"> 
                    <p id="modal-heading-1">Select Date </p>
                    <input id= "modal-date" type="date" v-model="date" required>
                    <p  id="modal-heading-2">Select Time </p>
                    <input  id ="modal-time" type="time" v-model="time" required>
                </b-modal>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
    data: function () {
        return {
            daycareID :this.$route.params.id,
            images: ['https://placekitten.com/801/800','https://placekitten.com/802/800','https://placekitten.com/803/800','https://placekitten.com/804/800','https://placekitten.com/805/800'],
            index: null,
            dogsPrice : {
                weekdays:'', //number of dogs on weekdays
                weekends:'', //number of dogs on weekdends
                Weekdayamt :'',
                Weekendamt :'',
            },
            CatsPrice : {
                weekdays:'', //number of cats on weekdays
                weekends:'', //number of cats on weekends
                Weekdayamt : '',
                Weekendamt : '',
            },
            TotalAmt:'',
            cartData : {},
            showCart : false,
            date : '',
            time : ''
        }
    },
    validations : {
        date : {required},
        time : {required}
    },
    methods: {
        ...mapActions(["getProfile"]),
        clearForm () {
            /* Reset our form values */
            this.date = ''
            this.time = ''
            this.$v.$reset()
        },
        handleOk (evt) {
            // Prevent modal from closing
            
            if(this.time != '' && this.date != ''){
               this.handleSubmit()
            }
            else{
                evt.preventDefault()
                if(this.time==''&&this.date!=''){alert ("enter time");} else if(this.time!=''&&this.date==''){alert("enter date"); } else if(this.date==''&&this.time=='') {alert("enter date and time")}
            }
        },
        handleSubmit () {
            
            this.$refs['dateAndTime'].hide()
        },
        calcDogWeekday : function(){
            let DogWeekday = 0  
            if(this.dogsPrice.weekdays > 0){
                let num = this.dogsPrice.weekdays 
                const price = this.daycaredata.daycare.price.dogs.weekdays;
                DogWeekday = num*price;
            }
            this.dogsPrice.Weekdayamt = DogWeekday 
            return DogWeekday;
        },
        calcDogWeekend : function(){
            let DogWeekend = 0 
            if(this.dogsPrice.weekends > 0){
                let num = this.dogsPrice.weekends
                const price = this.daycaredata.daycare.price.dogs.weekends;
                DogWeekend = num*price;
            }
            this.dogsPrice.Weekendamt =DogWeekend
            return DogWeekend;
        },
        calcCatWeekday : function(){
            let CatWeekday = 0             
            if(this.CatsPrice.weekdays > 0){
                let num = this.CatsPrice.weekdays 
                const price = this.daycaredata.daycare.price.cats.weekdays;
                CatWeekday = num*price;
            }
            this.CatsPrice.Weekdayamt = CatWeekday;
            return CatWeekday;
        },
        calcCatWeekend : function(){
            let CatWeekend = 0 
            if(this.CatsPrice.weekends > 0){
                let num = this.CatsPrice.weekends
                const price = this.daycaredata.daycare.price.cats.weekends;
                CatWeekend= num*price;
            }
            this.CatsPrice.Weekendamt = CatWeekend
            return CatWeekend;
        },
        DisplayCart : function(){
            if(this.date == '' && (this.dogsPrice.weekdays!=0 || this.dogsPrice.weekends!=0 || this.CatsPrice.weekdays!=0 || this.CatsPrice.weekends!=0)){
                this.$refs['dateAndTime'].show()
                } if(this.dogsPrice.weekdays<1 && this.dogsPrice.weekends<1 && this.CatsPrice.weekdays<1 && this.CatsPrice.weekends<1){
                    this.date='' ; 
                    this.time = ''
                    }         
            let DogWeekday = this.calcDogWeekday();
            let DogWeekend = this.calcDogWeekend();
            let CatWeekday = this.calcCatWeekday();
            let CatWeekend = this.calcCatWeekend();
            let total = DogWeekday+DogWeekend+CatWeekday+CatWeekend
            this.TotalAmt = total
            if(total>0){this.showCart = true}
            else{this.showCart = false}
            this.UpdateCart(DogWeekday,DogWeekend,CatWeekday,CatWeekend)


        },
        UpdateCart : function (DogWeekday,DogWeekend,CatWeekday,CatWeekend){
            this.cartData.ServiceId =this.daycaredata._id;
            this.cartData.name = this.daycaredata.organization.organizationName;
            this.cartData.address = this.daycaredata.organization.location;
            this.cartData.zipcode = this.daycaredata.zipcode;
            this.cartData.date = this.date;
            this.cartData.time = this.time;
            this.cartData.DogweekdayPrice =  DogWeekday            
            this.cartData.DogweekendPrice = DogWeekend
            this.cartData.CatweekdayPrice = CatWeekday            
            this.cartData.CatweekendPrice = CatWeekend
            this.cartData.total = this.TotalAmt
            if(this.dogsPrice.weekdays > 0){this.cartData.DogWeekday = this.dogsPrice.weekdays}else {this.cartData.DogWeekday = 0} //calculating number of dogs
            if(this.dogsPrice.weekends > 0){this.cartData.DogWeekend = this.dogsPrice.weekends}else {this.cartData.DogWeekend = 0}
            if(this.CatsPrice.weekdays > 0){this.cartData.CatWeekday = this.CatsPrice.weekdays}else {this.cartData.CatWeekday = 0}
            if(this.CatsPrice.weekends > 0){this.cartData.CatWeekend = this.CatsPrice.weekends}else {this.cartData.CatWeekend = 0}
            this.cartData.CustomerId = this.user._id
            this.cartData.CustomerName = this.user.name
            this.cartData.serviceProvider = this.daycaredata.ServiceProvider
        },
        addToCart(){
            this.dayCareCart(this.cartData)
            
        },
        ...mapActions(["fetchDaycare"]),
        ...mapActions(["dayCareCart"]),
    },
    mounted: function() {
        this.fetchDaycare(this.daycareID);   
    },
    components : {
        VueGallerySlideshow,
    },
    computed: {
        ...mapGetters(['daycaredata']),
        ...mapGetters(["user"]),
    }

}
</script>

<style  scoped>
    .body{
        position: absolute;
        top:70px;
        left:0;
        min-height: 250%;
        min-width: 100%;
        background: #F3F6FB 0% 0% no-repeat padding-box;
        opacity: 1;
    }
    .container{
        position:absolute;
        top:70px;
        left:100px;
        max-width: 1500px;
        min-height: 90%;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        opacity: 1;
        z-index: 1;
    }
    #title{ 
        position: absolute;
        text-align: left;
        font: normal normal normal 30px Poppins;
        letter-spacing: 0px;
        color: #FF6752;
        opacity: 1;
        top:50px;
        left:100px;
    }
    #description{
        position: absolute;
        width: 1200px;
        left:100px;
        top:130px;
        height: 68px;
        text-align: left;
        font-size: 22px;
        font-family:Poppins;
        color:#707070;
        letter-spacing: 0.6px;
        opacity: 1;
    }
    #location{
        position: absolute;
        left:130px;
        top:230px;
        text-align: left;
        font: normal normal normal 20px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
    #loc-icon{
        position: absolute;
        top:237px;
        left:105px;
        z-index: 1;
    }
    #phone{
        position: absolute;
        left:130px;
        top:280px;
        text-align: left;
        font: normal normal normal 20px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
    #ph-icon{
        position: absolute;
        top:287px;
        left:105px;
    }
    #opens{
        position: absolute;
        top:350px;
        left:100px;
        text-align: left;
        font-size: 30px;
        font-family:Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
    }
    #op-days{
        position: absolute;
        top:430px;
        left:100px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
    #op-ends{
        position: absolute;
        top:480px;
        left:100px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
    #price{
        position: absolute;
        top:550px;
        left:100px;
        text-align: left;
        font-size: 30px;
        font-family:Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
    }
    #pr-dogs{
        position: absolute;
        top:630px;
        left:100px;
        text-align: left;
        font-size: 24px;
        font-family:Poppins;
        letter-spacing: 0px;
         color: #707070;
        opacity: 1;
    }
    #pr-dogs-days{
        position: absolute;
        top:626px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #pr-dogs-ends{
        position: absolute;
        top:676px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
     #pr-cats{
        position: absolute;
        top:726px;
        left:100px;
        text-align: left;
        font-size: 24px;
        font-family:Poppins;
        letter-spacing: 0px;
         color: #707070;
        opacity: 1;
    }
    #pr-cats-days{
        position: absolute;
        top:726px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #pr-cats-ends{
        position: absolute;
        top:776px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #food{
        position: absolute;
        top:850px;
        left:100px;
        text-align: left;
        font-size: 30px;
        font-family:Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
    }
    #f-dogs{
       position: absolute;
        top:930px;
        left:100px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1 
    }
    #f-dogs-bf{
        position: absolute;
        top:930px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #f-dogs-ln{
        position: absolute;
        top:980px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #f-dogs-dr{
        position: absolute;
        top:1030px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #f-cats{
       position: absolute;
        top:1080px;
        left:100px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1 
    }
    #f-cats-bf{
        position: absolute;
        top:1080px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #f-cats-ln{
        position: absolute;
        top:1130px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #f-cats-dr{
        position: absolute;
        top:1180px;
        left:190px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #additional{
        position: absolute;
        top:1250px;
        left:100px;
        text-align: left;
        font-size: 30px;
        font-family:Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;  
    }
    #add{
         position: absolute;
        top:1320px;
        left:100px;
        text-align: left;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1
    }
    #gallery{
        position: absolute;
        top:1390px;
        left:100px;
        text-align: left;
        font-size: 30px;
        font-family:Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1; 
    }
    #img{
        position: relative;
        top:1460px;
        left:100px;
        height: 250px;
        width: 250px;
        background-size: cover;
        cursor: pointer;
        margin: 5px;
        border-radius: 3px;
        border: none;
        object-fit: contain;
    }
    #addDog-days{
        position: absolute;
        top:620px;
        left : 600px;
        width: 150px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addDog-ends{
        position: absolute;
        top:670px;
        left : 600px;
        width: 150px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addCat-days{
        position: absolute;
        top:720px;
        left : 600px;
        width: 150px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addCat-ends{
        position: absolute;
        top:770px;
        left : 600px;
        width: 150px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addDog-bf{
        position: absolute;
        top:930px;
        left : 600px;
        width: 80px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid  #707070;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addDog-ln{
        position: absolute;
        top:980px;
        left : 600px;
        width: 80px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid  #707070;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addDog-dr{
        position: absolute;
        top:1030px;
        left : 600px;
        width: 80px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid  #707070;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addCat-bf{
        position: absolute;
        top:1080px;
        left : 600px;
        width: 80px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid  #707070;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addCat-ln{
        position: absolute;
        top:1130px;
        left : 600px;
        width: 80px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid  #707070;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    #addCat-dr{
        position: absolute;
        top:1180px;
        left : 600px;
        width: 80px;
        height: 30px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid  #707070;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        color: #707070;
    }
    .cart{
        position: absolute;
        top: 300px;
        left: 780px;
        width: 650px;
        height: 550px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        opacity: 1;
    }
    #cart{
        position: relative;
        top:20px;
        left : 50px;
        width: 113px;
        height: 33px;
        text-align: left;
        font: normal normal normal 30px Poppins;
        letter-spacing: 0px;
        color: #333333;
        opacity: 1;
    }
    #hr{
        position: absolute ;
        left: 50px;
        right : 50px;
    }
    #tab{
       position: absolute;
       top:130px;
       width:550px;
       left:50px;
    }
    #row1{
        position: relative;
        top:30px;
        left:50px;
        width: 500px;
        text-align: left;
        font: normal normal normal 20px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    #row2{
        position: relative;
        top:30px;
        left:50px;
        width: 500px;
        text-align: left;
        font: normal normal normal 20px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    #row3{
        position: relative;
        top:30px;
        left:50px;
        width: 500px;
        text-align: left;
        font: normal normal normal 20px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    #row4{
        position: relative;
        top:30px;
        left:50px;
        width: 500px;
        text-align: left;
        font: normal normal normal 20px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    #row5{
        position: relative;
        top:30px;
        left:50px;
        width: 500px;
        text-align: left;
        font: normal normal normal 20px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    td {
        padding: 10px;
    }
    #sendReq{
        position: absolute;
        top:320px;
        left:0px;
        width: 550px;
        height: 65px;
        background: #228210 0% 0% no-repeat padding-box;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        font: normal normal medium 28px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #modal-heading-1{
        position : relative;
        left:10px;
        text-align: left;
        font-family : Poppins;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
    }
    #modal-heading-2{
        position : relative;
        top:20px;
        left:10px;
        text-align: left;
        font-family : Poppins;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
    }
    #modal-date{
        position: relative;
        left:10px;
        width: 450px;
        height: 50px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        text-align: center;
        border: 2px solid #707070;
        opacity: 0.5;
    }
    #modal-time{
        position: relative;
        left:10px;
        top:20px;
        width: 450px;
        height: 50px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        text-align: center;
        border: 2px solid #707070;
        opacity: 0.5;
    }
    .btn-secondary{
        background-color: #FF6752 !important;
        border:none;
    }
    *:focus{
        border: none;
    }
</style>

