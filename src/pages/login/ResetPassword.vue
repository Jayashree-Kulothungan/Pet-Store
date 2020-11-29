<template>
    <div>
        <img :src=background id="bg-img">
        <div class="container">
             <form @submit.prevent="resetPassword()">
                <p id="header">Reset Password</p>
                <p id="pass">Password</p>
                    <input type="password" id="password" v-model="pass">
                <p id="conf">Confirm Password</p>
                    <input type="password" id="confirm" v-model="confirmPass">
                <button id="rp-submit" value="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import background from "../../assets/background.png"
export default {
    data () {
        return {
            background : background,
            pass:'',
            confirmPass:''
        }
    },
    methods: {
        resetPassword(){
            if(this.pass==this.confirmPass){
                console.log("matched")
            }
        }
    }
}
</script>
<style  scoped>
    #pass{
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
    #password{
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
    #conf{
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
    #confirm{
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
    *:focus {
        outline: 0 !important;
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
    #header{
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
