<template>
    <div>
        <div class="wrapper">
            <div class="body"> 
                <div class="container">
                    <p id="title">Items in Your cart</p>
                    <div class="cart">  
                        <div class="test" v-for="(data,$index) in dayCareItems" :key="$index">               
                            <b-card no-body  >
                                <b-icon id="X" @click="$store.commit('removeFromCart',dayCareItems[$index])" icon ="x-circle" scale="1"></b-icon>
                                <p id="heading">Day Care Services</p>
                                <p id="dc-details"> {{dayCareItems[$index].name}}, {{dayCareItems[$index].address}}, {{dayCareItems[$index].zipcode}}</p>
                                <p id="dateAndTime"> {{dayCareItems[$index].date}} , {{dayCareItems[$index].time}} <p>
                                <table  id="tab" v-if="dayCareItems[$index].DogWeekday!=''">
                                    <tr><td>Pets - Dog ( Weekday )</td><td style="text-align:right">{{dayCareItems[$index].DogWeekday}} </td></tr>
                                    <tr><td>Price</td><td style="text-align:right">&#x20B9; {{parseFloat(dayCareItems[$index].DogweekdayPrice).toFixed(2)}}</td></tr>
                                </table>
                                <hr id="hr" v-if="dayCareItems[$index].DogWeekday!=''">
                                <table  id="tab" v-if="dayCareItems[$index].DogWeekend!=''">
                                    <tr><td>Pets - Dog ( Weekend )</td><td style="text-align:right">{{dayCareItems[$index].DogWeekend}} </td></tr>
                                    <tr><td>Price</td><td style="text-align:right">&#x20B9; {{ parseFloat(dayCareItems[$index].DogweekendPrice).toFixed(2)}}</td></tr>
                                </table>
                                <hr id="hr" v-if="dayCareItems[$index].DogWeekend!=''">
                                <table  id="tab" v-if="dayCareItems[$index].CatWeekday!=''">
                                    <tr><td>Pets - Cat ( Weekday )</td><td style="text-align:right">{{dayCareItems[$index].CatWeekday}}</td></tr>
                                    <tr><td>Price</td><td style="text-align:right">&#x20B9; {{parseFloat(dayCareItems[$index].CatweekdayPrice ).toFixed(2)}}</td></tr>
                                </table>
                                <hr id="hr" v-if="dayCareItems[$index].CatWeekday!=''">
                                <table  id="tab" v-if="dayCareItems[$index].CatWeekend!=''">
                                    <tr><td>Pets - Cat ( Weekend ) </td><td style="text-align:right">{{dayCareItems[$index].CatWeekend}}</td></tr>
                                    <tr><td>Price</td><td style="text-align:right">&#x20B9; {{parseFloat(dayCareItems[$index].CatweekendPrice ).toFixed(2)}}</td></tr>
                                </table>
                                <hr id="hr" v-if="dayCareItems[$index].CatWeekend!=''">
                                <table  id="tab"> <tr><td>Total</td><td style="text-align:right">&#x20B9; {{parseFloat(dayCareItems[$index].total ).toFixed(2)}}</td></tr></table>
                                <br> <br>
                            </b-card>
                        </div>
                    </div>
                </div>
                <div class="subTotal">
                    <p id="sub-title">Sub Total</p>
                    <table  id="sub-total"><tr><td>Total : </td><td style="text-align:right">&#x20B9; {{parseFloat(totalPrice).toFixed(2)}}</td></tr></table>
                    <button id="send">Send Request</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
computed : {
    ...mapGetters(['dayCareItems']),
    ...mapGetters(['totalPrice'])
}

}
</script>

<style scoped>
    .body{
        position: absolute;
        top:70px;
        left:0;
        overflow:visible;
        min-height: 250%;
        min-width: 100%;
        background: #F3F6FB 0% 0% no-repeat padding-box;
        opacity: 1;
    }
    .container{
        position:absolute;
        top:70px;
        left:100px;
        max-width: 900px;
        overflow:visible;
        min-height: 90%;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        opacity: 1;
        z-index: 1;
    }
    #title{
        position: absolute;
        top: 50px;
        left: 100px;
        width: 264px;
        height: 43px;
        text-align: left;
        font-family:  Poppins;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #333333;
        opacity: 1;
    }
    .cart{
        position: absolute;
        top: 80px;
        left: 100px;
        width: 700px;
        height: 100%;
        
    }
    .card{
        background-color: #F9F9F9 !important;
        height:fit-content;
    }  
    .test{
        padding-top:40px;
        padding-bottom:10px;
    }
    #heading {
        position: relative;
        top:0px;
        left:25px;
        text-align: left;
        font-family:  Poppins;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    #dc-details{
        position: relative;
        top:5px;
        left:25px;
        text-align: left;
        font-family:  Poppins;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    #dateAndTime{
        position: relative;
        top:1px;
        left:25px;
        text-align: left;
        font-family:  Poppins;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
    #tab{
        position: relative;
        top:7px;
        left:25px;
        width:650px; 
        font-family:  Poppins;
        font-size: 18px;
        letter-spacing: 0px;
        color: #747474;
        opacity: 1;   
    }
    #hr{
        position: relative;
        top:1px;
    }
    #X{
        position: relative;
        float:right;
        top:7px;
        left:670px;
        right: 10px;
        cursor: pointer;
    }
    .subTotal{
        position: absolute;
        top:70px;
        left: 1100px;
        width: 500px;
        height: 336px;
        background: #F7F7F7 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        opacity: 1;
    }
    #sub-title{
        position: absolute;
        top: 50px;
        left: 50px;
        width: 264px;
        height: 43px;
        text-align: left;
        font-family:  Poppins;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #333333;
        opacity: 1;
    }
    #sub-total{
        position: absolute;
        top: 130px;
        left: 50px;
        width: 403px;
        height: 43px;
        font-family:  Poppins;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #747474;
        opacity: 1;
    }
    #send{
        position: absolute;
        top:230px;
        left:50px;
        width: 403px;
        height: 55px;
        background: #228210 0% 0% no-repeat padding-box;
        border-radius: 3px;
        text-align: center;
        font-family:  Poppins;
        font-size: 22px;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
    }
</style>
