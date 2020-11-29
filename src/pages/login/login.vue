<template>
    <div>
        <img :src=background id="bg-img">
        <div class="container" >
            <form @submit.prevent="loginUser" v-if="!showOtp">
                <p id="log">Sign In</p>
                <label for ="mobile" id="mob">Mobile</label>
                <input type="text" id="mobile" v-model="mobile" name="mobile">

                <label for ="password" id="pass" >Password</label>
                <input type="password" id="password" v-model="password"  name="password" >
  
                <p id="otp" @click="OtpGeneration">Login with OTP instead of Password</p>
                <router-link to="/login/forgot-password">
                    <p id="forgot">Forgot Password?</p>
                </router-link>

                <button value="submit" id="login">Login</button>
                <router-link to="/register">
                <p id="reg">New User? Click here to register</p>
                </router-link>
            </form> 
            <div class="otp" v-if="showOtp">
                <form @submit.prevent="submitOtp">
                    <p id="header">OTP</p>
                    <p id="text-otp">We have sent you a 4 digit verification code in the given mobile number.</p>
                    <input type="text" id="input-otp" maxlength="6" v-model="otpvalue">
                    <button id="submit-otp" value="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>  
</template>

<script>
import background from "../../assets/background.png"
import { mapActions } from "vuex";
export default {
    components : {
    },
    data() { 
        return {
            mobile : "",
            password : "",
            background : background,
            showOtp : false,
            otp: '',
            otpvalue : ''
        }
    },
    methods: {
        OtpGeneration(){
            if(this.mobile!=''){ 
                this.showOtp=true;
                console.log(this.showOtp)
            }else{
                alert("Enter mobile number")
            }
           
           this.$axios.get( "http://2factor.in/API/V1/d3a43626-0c6b-11eb-9fa5-0200cd936042/SMS/"+this.mobile+"/AUTOGEN", {
                        headers: {
                        'Content-Type': "application/x-www-form-urlencoded"
                }
            }).then(response => {
               this.otp=response.data.Details;  
               console.log(this.otp)
            })
        },
        ...mapActions(["login"]),
        ...mapActions(["loginOtp"]),
        loginUser() {
            let user = {
                mobile: this.mobile,
                password: this.password
            };
            this.login(user)
                .then(res => {
                    if (res.data.success) { //res.data.success
                        this.$router.push("/profile");
                    }
                })
                .catch(err => {
                    console.log(err);
                }); 
        },
        submitOtp() {
            let uri="https://2factor.in/API/V1/d3a43626-0c6b-11eb-9fa5-0200cd936042/SMS/VERIFY/"+this.otp+"/"+this.otpvalue
             this.$axios.get(uri).then(response =>{
                console.log(response.data.Details);
                if(response.data.Details == "OTP Matched"){
                    //alert("password matched")
                    this.loginOtp(this.mobile)
                    .then(response => {
                        //res.data.success
                            this.$router.push("/profile");
                        
                    })
                    .catch(err => {
                        console.log(err);
                    });                        
                }
                else{
                    alert("otp not matched")
                }
            })
        }
        
    }
}
</script>

<style scoped>
    #f{
        position: absolute;
        top:400px
    }
    .container{
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
    #log{
        position: absolute;
        top: 20px;
        left: 200px;
        width: 129px;
        height: 45px;
        text-align: left;
        font: normal normal normal 32px/48px Poppins;
        letter-spacing: 0px;
        color: #000000;
        background: transparent;
        opacity: 1;
    }
     #mob{
        position: absolute;
        top: 100px;
        left: 100px;
        width: 60px;
        height: 10px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;
        background-color: transparent;
     } 
    #mobile{
        position: absolute;
        top: 150px;
        left: 100px;
        width: 300px;
        height: 45px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #pass{
        position: absolute;
        top: 230px;
        left: 100px;
        width: 60px;
        height: 10px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;
        background-color: transparent;
    }
    #password{
        position: absolute;
        top:280px;
        left: 100px;
        width: 300px;
        height: 45px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
        background-color: transparent;
    }
    #otp{
        position: absolute;
        top:330px;
        left: 100px;
        width: 262px;
        height: 21px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/23px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal normal 15px/23px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;
        background-color: transparent;
        
    }
    #otpcheck{
        position: absolute;
        top:350px;
        left: 100px;
        width: 30px;
        height: 21px;
        background: #DCDCDC 0% 0% no-repeat padding-box;
        opacity: 1;
    }
    #forgot{
        position: absolute;
        top:360px;
        left:100px;
        width: 262px;
        height: 21px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 15px/23px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal normal 15px/23px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;
        background-color: transparent;
    }
    #login{
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
    #reg{
        position: absolute;
        top: 520px;
        left: 110px;
        width: 313px;
        height: 28px;
        text-align: left;
        font: normal normal normal 18px Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
        background-color: transparent;
    }
    *:focus {
    outline: 0 !important;
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
</style>
