<template>
    <div id="app">
        <div class="wrapper">                             
            <div class="banner">
                <form>
                    <input type="text" placeholder="Zip Code" id="ban-zipcode">
                    <button type="submit" id="ban-submit"></button>
                    <b-icon icon="arrow-right" id="ban-arrow" scale="1.9"></b-icon>
                </form>
                <p id="ban-text">My Master is out for a while, Can anyone take care of me ?</p>
                <img :src=banner id="ban-img"  title="banner-image">
            </div>
            <div class="body">
                <div class="test-card" v-for="(data,$index) in daycaredata" :key="$index" id="ca">
                    <b-card no-body class="overflow-hidden" style="max-width: 1000px; height: 300px; left:5%;" >     
                        <b-row no-gutters class="row">
                            <b-col md="6">
                                <b-card-img :src=sample alt="Image" id="img"></b-card-img>
                            </b-col>
                            <b-col md="6">
                                <b-card-body :title=daycaredata[$index].organisation.name>
                                    <b-card-text >
                                        <p id="loc">{{daycaredata[$index].organisation.location}} </p>
                                        <p id="ph">{{daycaredata[$index].organisation.phone}}</p> 
                                        <!-- <p id="view" @click="showPop=!showPop">View More</p> -->
                                        <b-button  v-b-modal.modal-no-backdrop id="book">View More</b-button>
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>   
                    </b-card>
                </div>
                    <div class="sort">
                        <b-input-group>
                            <b-form-input type="text" id="sort-input" placeholder="Zip Code"></b-form-input>
                            <b-input-group-prepend>
                                <b-button type="submit" id="sort-btn">Sort</b-button>
                            </b-input-group-prepend>
                        </b-input-group>
                    </div>
            </div>

            <div class="pop-up" v-show="showPop">
                <b-modal id="modal-no-backdrop" hide-backdrop content-class="shadow" title="BootstrapVue">
                    <p class="my-4">Vertically centered modal!</p>
                </b-modal>
            </div>   
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import banner from '../assets/daycare/banner.png'
import sample from '../assets/daycare/sample.png'
export default {
    data: function () {
    return {
      banner: banner,
      sample:sample,
      showPop: false,
      daycaredata:['']
    }
  },
    methods: {
        getData: async function(){
            const response = await axios.get("http://localhost:5000/api/services/display");
            console.log(response.data)
            this.daycaredata=response.data;
            console.log(this.daycaredata)
        },
        check : function(){
            console.log("check: ")
            console.log(this.daycaredata[0])
        }
    },
    mounted: function() {
        this.getData();
    },
}
</script>

<style scoped>
    #app{
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
    .wrapper{
        flex: 1 0 auto;
        /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
        padding: 20px;
    }
    .footer {
        flex-shrink: 0;
        /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
        padding: 20px;
    }
    .banner{
        position: absolute;
        top: 9%;
        left: 0;
        width: 100%;
        height: 50%;
        background: var(--unnamed-color-ff5e41) 0% 0% no-repeat padding-box;
        background: #fff4f2 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 9px #00000029;
        border: 1px solid #DCDCDC;
        opacity: 1;
    }
    #ban-text{
        position: absolute;
        top: 210px;
        left: 270px;
        width: 455px;
        height: 130px;
        text-align: justify;
        font: normal normal normal;
        font-family: museo-sans, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        letter-spacing: 0px;
        color: #98A3B5;
        opacity: 1;
    }
    #ban-img{
        position: absolute;
        top: 45px;
        left: 1150px;
        width: 400px;
        height: 300px;
        background: transparent 0% 0% no-repeat padding-box;
        border-radius: 20px;
        opacity: 1;
    }
    #ban-zipcode{
        position: absolute;
        top: 90px;
        left: 270px;;
        width: 300px;
        height: 50px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 40px;
        opacity: 1;
        text-align: left;
        text-indent: 90px;
        font: normal normal normal 20px Poppins ;
        letter-spacing: 0px;
        color: #808080;
        border:none;
        opacity: 0.8;
    }
    #ban-submit{
        position: absolute;
        top: 93px;
        left: 520px;
        width: 45px;
        height: 45px;
        background: var(--unnamed-color-ff6752) 0% 0% no-repeat padding-box;
        background: #FF6752 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #FD68454D;
        opacity:1;
        border-radius: 50%;
        border:none;
    }
    #ban-arrow{
        position : absolute;
        top: 105px;
        left: 532px;
        color:#FFFFFF;
        opacity: 0.8;
    }
    .body{
        background-color: #F3F6FB;
        position: absolute;
        left:0%;
        top:59%;
        width: 100%;
        min-height: 100%;
    }
    .overflow-hidden{
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 9px #00000029;
        border: 1px solid #DCDCDC;
        border-radius: 20px;
        opacity: 1;
    }
    .sort{
        position: absolute;
        top:9%;
        left: 1200px;
        width: 250px;
        height: 35px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
    }
    #sort-input{
        width: 150px;
        height: 55px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
        text-align: center;
        font: normal normal normal 18px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
    #sort-btn{
        width: 90px;
        height: 55px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 9px #00000029;
        border-radius: 3px;
        border:none;
        opacity: 1;
        text-align: center;
        font: normal normal normal 18px Poppins;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
    #ca{
        padding-top:40px;
        padding-bottom:10px;
    }
    #img{
        width: 220px;
        height: 220px;  
        background: transparent  0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 1px;
        opacity: 1;
    }
    .col-md-6 {
    flex: 0 0 50%;
    max-width: 30%;
    left: 30px;
    top: 30px;
    }
    .card-title{
        margin-bottom: .75rem;
        text-align: left;
        font-family : Poppins;
        font-size: 24px;
        font-style:normal;
        font-weight:bold;
        letter-spacing: 0px;
        color: rgb(255,103,82);
        opacity: 0.8;
        width: 500px;
    }
    #book{
        top:50px;
        width: 200px;
        height: 49px;
        background: var(--unnamed-color-ff5e41) 0% 0% no-repeat padding-box;
        background: #FF5E41 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        border:none;
        font: normal normal normal 18px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;

    }
    #loc{
        text-indent:30px;
        text-align: left;
        font: normal normal normal 15px Poppins;
        letter-spacing: 0px;
        color: #808080;
        opacity: 1;
    }
    #view{
        text-indent:30px;
        text-align: left;
        font: normal normal normal 15px Poppins;
        letter-spacing: 0px;
        color: #808080;
        opacity: 1;
    }
    #ph{
        text-indent:30px;
        text-align: left;
        font: normal normal normal 15px Poppins;
        letter-spacing: 0px;
        color: #808080;
        opacity: 1;
    }
</style>
