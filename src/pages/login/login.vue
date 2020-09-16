<template>
    <div class="container">
        <form @submit.prevent="loginUser">
            <p id="log">Sign In</p>
            <label for ="mobile" id="mob">Mobile</label>
            <input type="text" id="mobile" v-model="mobile" name="mobile">

            <label for ="password" id="pass" >Password</label>
            <input type="text" id="password" v-model="password"  name="password" >
<!--
            <input type="checkbox" id="otpcheck" >
            <p id="otp">Login with OTP instead of Password</p>
-->
            <router-link to="/SignIn/forgot-password">
                <p id="forgot">Forgot Password</p>
            </router-link>

            <button value="submit" id="login">Login</button>
            <router-link to="/register">
            <p id="reg">New User? Click here to register</p>
            </router-link>
        </form>       
    </div>  
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() { 
        return {
            mobile : "",
            password : ""
        }
    },
    methods: {
        ...mapActions(["login"]),
        loginUser() {
            let user = {
                mobile: this.mobile,
                password: this.password
            };
            this.login(user)
                .then(res => {
                    if (res.data) { //res.data.success
                        this.$router.push("/profile");
                    }
                })
                .catch(err => {
                    console.log(err);
                }); 
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
        top: 85px;
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
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 32px/48px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
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
        top:350px;
        left: 130px;
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
        top:380px;
        left:130px;
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
        top: 500px;
        left: 120px;
        width: 313px;
        height: 28px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-ff5e41);
        text-align: left;
        font: normal normal normal 20px/30px Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
        background-color: transparent;
    }
    *:focus {
    outline: 0 !important;
    }
</style>
