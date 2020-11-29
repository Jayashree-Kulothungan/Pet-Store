<template>
    <div>
        <img :src=background id="bg-img">
        <div class="container-otp" >
            <form @submit.prevent="submitOtp()">
            <p id="header">OTP</p>
            <p id="text-otp">We have sent you a 4 digit verification code in the given mobile number.</p>
            <input type="text" id="input-otp" maxlength="6" v-model="otpvalue">
            <button id="submit-otp" value="submit">Submit</button>
           </form>
       </div>
    </div>
</template>
<script>
import background from "../../assets/background.png"
export default {
    data () {
        return {
            background:background,
            otp:'',
            otpvalue:''
        }
    },
    methods: {
        SubmitOtp() {
            let uri="https://2factor.in/API/V1/d3a43626-0c6b-11eb-9fa5-0200cd936042/SMS/VERIFY/"+this.otp+"/"+this.otpvalue
            console.log(uri)
        },
        otpGeneration(){
            
            this.$axios.get( "http://2factor.in/API/V1/d3a43626-0c6b-11eb-9fa5-0200cd936042/SMS/"+this.mobile+"/AUTOGEN", {
                        headers: {
                        'Content-Type': "application/x-www-form-urlencoded"
                }
            }).then(response => {
               this.otp=response.data.Details;  
               console.log(this.otp)
            })
        }
    }
}
</script>
<style  scoped>
    *:focus {
        outline: 0 !important;
    }
   .container-otp{
        position: absolute;
        top: 150px;
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
    #header{
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
</style>
