<template>
  <div class="footer">
    <footer>
    <div class="abt">
      <p id="about"> About </p>
      <p id="location">Location </p>
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
      <p id="services">Services</p>
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
</template>

<script>
import fb from '../assets/home/facebook.png'
import tw from '../assets/home/twitter.png'
import insta from '../assets/home/instagram.png'
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      fb:fb,
      tw:tw,
      insta:insta
    }),
    mounted : {
        
    }
}
</script>

<style scoped>
    .footer{
      list-style-type: none;
      height:330px;
      z-index: 999;
      bottom:0%;
      left:0%;
      width: 100%;
      position: absolute;
      transition:background 1.5s ease;
      transform: translateY(0);
      overflow: inherit;
      background-color:rgb(255,103,82)!important;
    }
     a:link{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:visited{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:active{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:hover{
       color:#FFFFFF;
       text-decoration: none;
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
    #location{
      position: absolute;
      top: 90px;
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
        left: 393px;
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
        left: 366px;
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

    a:link{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:visited{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:active{
       color:#FFFFFF;
       text-decoration: none;
    }
    a:hover{
       color:#FFFFFF;
       text-decoration: none;
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
    #location{
      position: absolute;
      top: 90px;
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
      left: 143px;
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
        left: 393px;
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
        left: 366px;
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
