<template>
    <div>
        <img :src=background id="bg-img">
        <!--Forgot Password Component -->
        <div class="container-forgot" v-show="forgotPassword">
            <p id="fp-header">Forgot Password</p>
            <p id="fp-text">Please enter the registered mobile number</p>
            <p id="fp-mobile">Mobile</p>
            <form @submit.prevent="handleSubmit">
                <input type="text" id="input-mob" v-model="mobile">
                <!-- <router-link to="/login/otp-generation"> -->
                    <button id="fp-submit">Submit</button>
                <!-- </router-link> -->
            </form>
        </div>

        <!--OTP Component -->
        <div class="container-otp" v-show="showOtp">
           <form @submit.prevent="verifyOtp()">
           <p id="header-otp">OTP</p>
           <p id="text-otp">We have sent you a 4 digit verification code in the given mobile number.</p>
            <input type="text" id="input-otp" maxlength="6" v-model="otpvalue">
            <button id="submit-otp" value="submit">Submit</button>
           </form>
       </div>

        <!-- Reset Password Component -->
        <div class="container-reset" v-show="resetPassword">
            <form @submit.prevent="resetpassword()">
                <p id="rp-header">Reset Password</p>
                <p id="rp-pass">Password</p>
                    <input type="password" id="rp-password" v-model="pass">
                <p id="rp-conf">Confirm Password</p>
                    <input type="password" id="rp-confirm" v-model="confirmPass">
                <button id="rp-submit" value="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import background from "../../assets/background.png"
import axios from 'axios'
export default {
    data () {
        return {
            forgotPassword:true,
            showOtp:false,
            resetPassword:false,
            background:background,
            mobile:'',
            otp:'',
            otpvalue:'',
            pass:'',
            confirmPass:''
        }
    },
    methods: {
        ShowOtp(){
            this.forgotPassword=false;
            this.resetPassword=false;
            this.generateOtp()
            this.showOtp=true;    
        },
        showReset(){
            this.forgotPassword=false;
            this.showOtp=false;    
            this.resetPassword=true;
        },
        handleSubmit(){
            var data = JSON.stringify({"mobile":this.mobile});
            let self=this;
            //let stat = ' '
            var config = {
                method: 'post',
                url: 'http://localhost:5000/api/users/otp',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };
            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    if(response.data.success==true){
                        console.log('ok')
                        self.ShowOtp()
                    }  
                      
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Mobile number does not exist")
                });
        },
        generateOtp(){
            this.$axios.get( "http://2factor.in/API/V1/d3a43626-0c6b-11eb-9fa5-0200cd936042/SMS/"+this.mobile+"/AUTOGEN", {
                        headers: {
                        'Content-Type': "application/x-www-form-urlencoded"
                }
            }).then(response => {
               this.otp=response.data.Details;  
               console.log(this.otp)
            }).catch(error => {
                console.log(error);
            })
        },
        verifyOtp(){
            let uri="https://2factor.in/API/V1/d3a43626-0c6b-11eb-9fa5-0200cd936042/SMS/VERIFY/"+this.otp+"/"+this.otpvalue
            console.log(uri)
            this.$axios.get(uri).then(response => {
                console.log(response.data.Details);
                if(response.data.Details == "OTP Matched"){
                    this.showReset();
                }
                else{
                    alert('otp not matched')
                }
            })
        },
        resetpassword(){
            if(this.pass==this.confirmPass){
                let self=this;
                var data = JSON.stringify({"mobile":this.mobile,"password":this.pass});
                var config = {
                    method: 'put',
                    url: 'http://localhost:5000/api/users/reset-password',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    data : data
                };

                axios(config)
                    .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                self.$router.push({name : 'login'})

            }
            else{
                alert('password not matched')
            }
        }
    }   
}
</script>
<style  scoped>
    *:focus {
        outline: 0 !important;
    }
    .container-forgot{
        position: absolute;
        top: 120px;
        left: 140px;
        width: 500px;
        height: 620px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 9px #00000029;
        border-radius: 42px;
    }
    #fp-header{
        position: absolute;
        top: 50px;
        left: 115px;
        width: 265px;
        height: 45px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 32px/48px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal normal 32px/48px Poppins;
        letter-spacing: 0px;
        color: #000000;
        background-color: transparent;
        opacity: 1;
    }
    #fp-text{
        position:absolute;
        top: 150px;
        left: 75px;
        width: 365px;
        height: 64px;
        text-align: left;
        font: normal normal 300 18px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;
    }
    #fp-submit{
        position: absolute;
        top: 450px;
        left: 100px;
        width: 300px;
        height: 50px;
        background: var(--unnamed-color-ff5e41) 0% 0% no-repeat padding-box;
        background: #FF5E41 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        font: normal normal normal 20px/30px Poppins;
        color: #FFFFFF;
        border:none;
    }
    #fp-mobile{
        position:absolute;
        top: 230px;
        left: 75px;
        width: 65px;
        height: 28px;
        text-align: left;
        font: normal normal 300 18px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;
    }
    #input-mob{
        position: absolute;  
        top: 280px;
        left: 75px;
        width: 350px;
        height: 45px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
        background-color: transparent;
    }
    #send{
            position: absolute;
            top: 330px;
            left: 200px;
            width: 200px;
            height: 28px;
            text-align: left;
            font: normal normal 300 18px Poppins;
            letter-spacing: 0px;
            color: #000000;
            opacity: 0.5;
    }
    #bg-img{
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
    .container-otp{
         position: absolute;
        top: 120px;
        left: 140px;
        width: 500px;
        height: 620px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 9px #00000029;
        border-radius: 42px;
    }
    #text-otp{
        position:absolute;
        top: 140px;
        left: 75px;
        width: 365px;
        height: 64px;
        text-align: center;
        font: normal normal 300 18px Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
    }
    #submit-otp{
        position: absolute;
        top: 450px;
        left: 100px;
        width: 300px;
        height: 50px;
        background: var(--unnamed-color-ff5e41) 0% 0% no-repeat padding-box;
        background: #FF5E41 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        font: normal normal normal 20px/30px Poppins;
        color: #FFFFFF;
        border:none;
    }
    #header-otp{
        position: absolute;
        top: 50px;
        left: 215px;
        width: 265px;
        height: 45px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 32px/48px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal normal 32px/48px Poppins;
        letter-spacing: 0px;
        color: #000000;
        background-color: transparent;
        opacity: 1;
    }
    #input-otp{
        position: absolute;  
        top: 250px;
        left: 150px;
        width: 200px;
        height: 45px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 2px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
        background-color: transparent;
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 20px;
        text-indent:20px;
        color: #000000;
        opacity: 0.5; 
    }
    .container-reset{
        position: absolute;
        top: 120px;
        left: 140px;
        width: 500px;
        height: 620px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 9px #00000029;
        border-radius: 42px;
    }
    #rp-pass{
        position: absolute;
        top: 130px;
        left: 100px;
        width: 95px;
        height: 28px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;
    }
    #rp-password{
        position: absolute;
        top: 160px;
        left: 100px;
        width: 300px;
        height: 45px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #rp-conf{
        position: absolute;
        top: 230px;
        left: 100px;
        width: 180px;
        height: 28px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;        
    }
    #rp-confirm{
        position: absolute;
        top: 260px;
        left: 100px;
        width: 300px;
        height: 45px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #rp-header{
            position: absolute;
            top: 50px;
            left: 125px;
            width: 265px;
            height: 45px;
            font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 32px/48px var(--unnamed-font-family-poppins);
            letter-spacing: var(--unnamed-character-spacing-0);
            text-align: left;
            font: normal normal normal 32px/48px Poppins;
            letter-spacing: 0px;
            color: #000000;
            background-color: transparent;
            opacity: 1;
    }
    #rp-submit{
        position: absolute;
        top: 450px;
        left: 100px;
        width: 300px;
        height: 50px;
        background: var(--unnamed-color-ff5e41) 0% 0% no-repeat padding-box;
        background: #FF5E41 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        font: normal normal normal 20px/30px Poppins;
        color: #FFFFFF;
        border:none;
    }
</style>
