<template>
    <div>        
        <img :src=test class="banner">  
        <div class="services">
            <p id="head"><strong> Our Services</strong></p>
            <p id="sub">National Brand With a Local Feel. Experience the Fetch! Difference</p>
            <p id="location">Enter Your Location and Fetch Our Services</p>
            <form><input type="text" placeholder="Zip Code" id="zip"><button type="submit" id="submit"></button><b-icon icon="arrow-right" id="arrow" scale="3"></b-icon></form>
            <router-link to="/DogWalker">
                <div class="dogwalker">
                    <img :src=dwimg id="dwimg">
                    <p id="dwtext">Dog Walker</p>
                </div>
            </router-link>
            <router-link to="/DayCare">
                <div class="daycare">
                    <img :src=dcimg id="dcimg">
                    <p id="dctext">Day Care</p>
                </div>
            </router-link>
            <router-link to="/Grooming">
                <div class="grooming">
                    <img :src=grimg id="grimg">
                    <p id="grtext">Grooming</p>
                </div>
            </router-link>
            <div class="otservices">
                <img :src=otimg id="otimg">
                <p id="ottext">Other Services</p>
            </div>
        </div>
        <div class="footer">
            <footer>
                <div class="abt">
                <p id="about"> About </p>
                <p id="f-location">Location </p>
                <p id="partners">Partners</p>
                <p id="abtus">About Us</p>
                </div>
                <div class="resources">
                <p id="resource">Resources</p>
                <p id="reviews">Reviews</p>
                <p id="center">Pet Resource Center</p>
                <p  id="media"> Media Fact Sheet </p> 
                <p id="blog"> Blog</p>
                <p id="news">News</p>
                <p id="f-services">Services</p>
                <p id="terms">Terms of Use </p>
                <p id="privacy">Privacy Policy</p>
                </div>
                <div class="newsletter">
                <p id="newsletter">NewsLetter</p>
                <p id="contact">Contact Us</p>
                <form>
                    <input type="email" placeholder="Email Address" id="f-zip">
                    <button type="submit" id="f-submit"></button>
                    <b-icon icon="arrow-right" id="f-arrow" scale="2"></b-icon>
                </form>
                <img :src=fb id="fb">
                <img :src=tw id="tw">
                <img :src=insta id="insta">
                </div>
                </footer>
        </div>
    </div>
</template>


<script>
import fb from '../assets/home/facebook.png'
import tw from '../assets/home/twitter.png'
import insta from '../assets/home/instagram.png'
import test from '../assets/homepage.png'
import img1 from '../assets/home/ban-1.png'
import dwimg from '../assets/home/dogw.png'
import dcimg from '../assets/home/daycare.png'
import grimg from '../assets/home/grooming.png'
import otimg from '../assets/home/other.png'
import { Carousel3d, Slide } from 'vue-carousel-3d';
import AppFooter from '../components/AppFooter'
export default {
    
    components :{
        Carousel3d,
        Slide,
        AppFooter
    },
    data() {
      return {
          test:test,
        slide: 0,
        sliding: null,
        img1:img1,
        dwimg:dwimg,
        dcimg:dcimg,
        grimg:grimg,
        otimg:otimg,
        slides: 3,
        fb:fb,
        insta:insta,
        tw:tw
      }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        onAfterSlideChange(index) {
            console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
        },
        onBeforeSlideChange(index) {
            console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
        },
        onLastSlide(index) {
            console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
        }
    }
}
</script>

<style scoped>
    .banner-c{
        position:absolute;
        top:0%;
        left:0%;
        width:100%;
        height:100%;
    }
    .banner{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: transparent  0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px none;
        border-radius: 15px;
        opacity: 1;
    }
    #img1 {
        width:100%;
        height:100%;
    }
    #img2 {
        width:100%;
        height:100%;
    }
    #img3 {
        width:100%;
        height:100%;
    }
    .services{
        position:absolute;
        top: 900px;
        left: 140px;
        width: 1300px;
        height: 600px;
        background: #FFFCFC 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #head{
        position: absolute;
        top: 100px;
        left: 100px;
        width: 310px;
        height: 67px;
        text-align: left;
        font: normal normal bold 48px Poppins;
        letter-spacing: 0px;
        color: #FF6752;
        opacity: 1;
    }
    #sub{
        position: absolute;
        top: 200px;
        left: 115px;
        width: 500px;
        height: 67px;
        text-align: left;
        font: normal normal bold 24px Poppins;
        letter-spacing: 0px;
        color: #808080;
        opacity: 0.6;
    }
    #location{
        position: absolute;
        top: 300px;
        left: 115px;
        width: 600px;
        height: 67px;
        text-align: left;
        font: normal normal bold 24px Poppins;
        letter-spacing: 0px;
        color: #FF6752;
        opacity: 1;

    }
    #zip{
        position: absolute;
        top: 400px;
        left: 115px;
        width: 300px;
        height: 67px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 40px;
        opacity: 1;
        text-align: left;
        text-indent: 50px;
        font: normal normal normal 24px Poppins ;
        letter-spacing: 0px;
        color: #808080;
        border:none;
        opacity: 0.8;
    }
    #submit{
        position: absolute;
        top: 401px;
        left: 350px;
        width: 65px;
        height: 65px;
        background: var(--unnamed-color-ff6752) 0% 0% no-repeat padding-box;
        background: #FF6752 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #FD68454D;
        opacity:1;
        border-radius: 50%;
        border:none;
    }
    #arrow{
        position: absolute;
        top: 425px;
        left: 330px;
        width: 100px;
        color:#FFFFFF;
        opacity: 0.8;
    }
    .dogwalker{
        position: absolute;
        top: 100px;
        left: 730px;
        width: 200px;
        height: 200px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 20px;
        opacity: 1;
    }
    #dwtext{
        position: absolute;
        top: 150px;
        left: 5px;
        width: 200px;
        height: 200px;
        text-align: center;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 0.8;
    }
    #dwimg{
        position: relative;
        top: 20px;
        left: 50px;
        width: 100px;
        height: 100px;
        background: transparent 0% 0% no-repeat padding-box;
        z-index: 1;
        opacity: 0.8;
    }
    .daycare{
        position: absolute;
        top: 350px;
        left: 730px;
        width: 200px;
        height: 200px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 20px;
        opacity: 1;
    }
    #dctext{
        position: absolute;
        top: 150px;
        left: 0px;
        width: 200px;
        height: 200px;
        text-align: center;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 0.8;
    }
    #dcimg{
        position: absolute;
        top: 20px;
        left: 50px;
        width: 100px;
        height: 100px;
        background: transparent 0% 0% no-repeat padding-box;
         z-index: 1;
        opacity: 0.8;
    }
    .grooming{
        position: absolute;
        top: 100px;
        left: 1000px;
        width: 200px;
        height: 200px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 20px;
        opacity: 1;
    }
    #grtext{
        position: absolute;
        top: 150px;
        left: 5px;
        width: 200px;
        height: 200px;
        text-align: center;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 0.8;
    }
    #grimg{
        position: absolute;
        top: 20px;
        left: 30px;
        width: 150px;
        height: 150px;
        background: transparent 0% 0% no-repeat padding-box;
         z-index: 1;
        opacity: 0.8;
    }
    .otservices{
        position: absolute;
        top: 350px;
        left: 1000px;
        width: 200px;
        height: 200px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 20px;
        opacity: 1;
    }
    #ottext{
        position: absolute;
        top: 150px;
        left: 5px;
        width: 200px;
        height: 200px;
        text-align: center;
        font: normal normal normal 22px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 0.8;  
    }
    #otimg{
        position: absolute;
        top: 20px;
        left: 50px;
        width: 100px;
        height: 100px;
        background: transparent 0% 0% no-repeat padding-box;
        z-index: 1;
        opacity: 0.8;
    }
    .reviews{
        position: absolute;
        top: 1400px;
        left: 140px;
        width: 1300px;
        height: 600px;
        background: #FFFCFC 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    .carousel-3d{
        background: #FF6752;
    }
    .footer{
      list-style-type: none;
      height:330px;
      z-index: 999;
      bottom:0%;
      left:0%;
      width: 100%;
      top:1600px;
      position: absolute;
      transition:background 1.5s ease;
      transform: translateY(0);
      overflow: inherit;
      background-color:rgb(255,103,82)!important;
    }
    .abt{
      position: absolute;
      top: 30px;
      left: 163px;
      width: 100px;
      height: 192px;
      opacity: 1;
    }
    #about{
      position: absolute;
      top: 40px;
      left: 160px;
      width: 70px;
      height: 32px;
      text-align: left;
      font: normal normal bold 22px poppins;
      letter-spacing: 0px;
      color: #FFE530 !important;
      opacity: 1;
    }
    #f-location{
      position: absolute;
      top: 90px;
      left: 160px;
      width: 100px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #partners{
      position: absolute;
      top: 130px;
      left: 160px;
      width: 100px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #abtus{
      position: absolute;
      top: 170px;
      left: 160px;
      width: 150px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    .resources{
      position: absolute;
      top: 30px;
      left: 500px;
      width: 100px;
      height: 192px;
      opacity: 1;
    }
    #resource{
      position: absolute;
      top: 40px;
      left: 160px;
      width: 70px;
      height: 32px;
      text-align: left;
      font: normal normal bold 22px poppins;
      letter-spacing: 0px;
      color: #FFE530 !important;
      opacity: 1;
    }
    #reviews{
      position: absolute;
      top: 90px;
      left: 160px;
      width: 100px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #center{
      position: absolute;
      top: 130px;
      left: 160px;
      width: 300px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #media{
      position: absolute;
      top: 170px;
      left: 160px;
      width: 300px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #blog{
      position: absolute;
      top: 210px;
      left: 160px;
      width: 300px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #news{
      position: absolute;
      top: 210px;
      left: 443px;
      width: 300px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #f-services{
      position: absolute;
      top: 90px;
      left: 443px;
      width: 300px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #terms{
      position: absolute;
      top: 130px;
      left: 443px;
      width: 300px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #privacy{
      position: absolute;
      top: 170px;
      left: 443px;
      width: 300px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    .newsletter{
      position: absolute;
      top: 30px;
      left: 1100px;
      width: 100px;
      height: 192px;
      opacity: 1;
    }
    #newsletter{
      position: absolute;
      top: 40px;
      left: 160px;
      width: 70px;
      height: 32px;
      text-align: left;
      font: normal normal bold 22px poppins;
      letter-spacing: 0px;
      color: #FFE530 !important;
      opacity: 1;
    }
    #contact{
      position: absolute;
      top: 90px;
      left: 160px;
      width: 200px;
      height: 32px;
      text-align: left;
      font: normal normal normal 18px poppins;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;
    }
    #f-zip{
      position: absolute;
      top: 150px;
      left: 160px;
      width: 300px;
      height: 50px;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 40px;
      opacity: 1;
      text-align: left;
      text-indent: 50px;
      font: normal normal normal 15px Poppins ;
      letter-spacing: 0px;
      color: #808080;
      border:none;
      opacity: 1;   
      }
    #f-submit{
        position: absolute;
        top: 153px;
        left: 410px;
        width: 45px;
        height: 45px;
        background: #FF6752 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #FD68454D;
        opacity:1;
        border-radius: 50%;
        border:none;
    }
    #f-arrow{
        position: absolute;
        top: 166px;
        left: 385px;
        width: 100px;
        color:#FFFFFF;
        opacity: 0.8;
    }
    #fb{
      position: absolute;
      top: 220px;
      left: 163px;
      width: 45px;
      height: 45px;
      background: white  0% 0% no-repeat padding-box;
      opacity: 1;
      border-radius: 50%;
    }
    #tw{
      position: absolute;
      top: 220px;
      left: 263px;
      width: 45px;
      height: 45px;
      background: white  0% 0% no-repeat padding-box;
      opacity: 1;
      border-radius: 50%;
    }
    #insta{
      position: absolute;
      top: 220px;
      left: 363px;
      width: 45px;
      height: 45px;
      background: white  0% 0% no-repeat padding-box;
      opacity: 1;
      border-radius: 50%;
    }
</style>

