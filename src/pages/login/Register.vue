<template>
    <div class="container">
        <form @submit.prevent="registerUser">
            <p id="reg">Resigteration</p>  

            <label for="Name" id="name">Name</label>
            <input type="text" v-model="name" id="namebox" name="Name" class="form-control" :class="{ 'is-invalid': submitted && $v.name.$error }" />
             <div id="error-name" v-if="submitted && $v.name.$error" class="invalid-feedback">
                <span v-if="!$v.name.required">Name is required</span>
                <span v-if="!$v.name.alpha">Name is invalid</span>
            </div>

            <label for="email" id="email">Email</label>
            <input type="email" v-model="email" id="emailbox" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.email.$error }" />
            <div id="error-email" v-if="submitted && $v.email.$error" class="invalid-feedback">
                <span v-if="!$v.email.required">Email is required</span>
                <span v-if="!$v.email.email">Email is invalid</span>
            </div>

             <label for="mobile" id="mobile">Mobile</label>
            <input type="text" v-model="mobile" id="mobilebox" name="mobile" class="form-control" :class="{ 'is-invalid': submitted && $v.mobile.$error }" />
            <div id="error-mobile" v-if="submitted && $v.mobile.$error" class="invalid-feedback">
                <span v-if="!$v.mobile.required">Mobile number is required</span>
                <span v-if="!$v.mobile.numeric">Mobile number is invalid</span>
                <span v-if="!$v.mobile.minLength || !$v.mobile.maxLength">Mobile number must be 10 digits</span>
            </div>

            <label for="password" id="password">Password</label>
            <input type="password" v-model="password" id="passbox" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.password.$error }" />
            <div id="error-password" v-if="submitted && $v.password.$error" class="invalid-feedback">
                <span v-if="!$v.password.required">Password is required</span>
                <span v-if="!$v.password.minLength">Password must be at least 6 characters</span>
            </div>

             <label for="confirmPassword" id="cpassword">Confirm Password</label>
            <input type="password" id="cpassbox" v-model="confirmPassword"  name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.confirmPassword.$error }" />
            <div  id="error-confirm" v-if="submitted && $v.confirmPassword.$error" class="invalid-feedback">
                <span v-if="!$v.confirmPassword.required">Confirm Password is required</span>
                <span v-else-if="!$v.confirmPassword.sameAsPassword">Passwords must match</span>
            </div>

            <label for="address" id="address">Address</label>
            <textarea v-model="address" id="addressbox" name="Address" class="form-control" :class="{ 'is-invalid': submitted && $v.address.$error }" ></textarea>
            <div id="error-address" v-if="submitted && !$v.address.required" class="invalid-feedback">Address is required</div>
            
            <button id="register">Register</button>
        </form>
        <router-link to="/SignIn">
            <p id="existing">Existing User? Click Here</p>
        </router-link>
    </div>
</template>

<script>
import { required, email, minLength, sameAs, maxLength, numeric, alpha } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            name:'',
            email:'',
            mobile:'',
            password:'',
            confirmPassword:'',
            address:'',
            submitted: false,
        }
    },
    validations: {
            
        name: { required, alpha },
        email: { required, email },
        mobile: { required, numeric, minLength: minLength(10), maxLength: maxLength(10) },
        password: { required, minLength: minLength(6) },
        confirmPassword:{ required, sameAsPassword: sameAs('password') },
        address: { required }
                
            
    },
    methods : {
        ...mapActions(["register"]),
        registerUser() {
            this.submitted=true;
            let user = {
                name: this.name,
                email: this.email,
                mobile: this.mobile,
                password: this.password,
                confirmPassword: this.confirmPassword,
                address: this.address
            };
             this.register(user).then(res => {
                 if(res.data.success) {
                     console.log(user)
                     this.$router.push('/login');
                 }
             });
        }
    }
}
</script>

<style scoped>
    .container{
        position: absolute;
        top: 85px;
        left: 160px;
        width: 600px;
        height: 800px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 3px 3px 9px #00000029;
        border-radius: 42px;
    }
    #register{
        position: absolute;
        top: 680px;
        left: 150px;
        width: 300px;
        height: 50px;
        background: var(--unnamed-color-ff5e41) 0% 0% no-repeat padding-box;
        background: #FF5E41 0% 0% no-repeat padding-box;
        border-radius: 32px;
        opacity: 1;
        font: normal normal normal 20px/30px Poppins;
        color: #FFFFFF;
        border: none;
    }
    #reg{
        position: absolute;
        top: 20px;
        left: 250px;
        width: 129px;
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
    #name{
        position: absolute;
        top: 80px;
        left: 130px;
        width: 129px;
        height: 45px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;  
    }
    #namebox{
        position: absolute;
        top: 120px;
        left: 130px;
        width: 320px;
        height: 30px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: transparent 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #error-name{
        position: absolute;
        top: 150px;
        left: 150px;
    }
    #email{
        position: absolute;
        top: 170px;
        left: 130px;
        width: 129px;
        height: 45px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;  
    }
    #emailbox{
        position: absolute;
        top: 210px;
        left: 130px;
        width: 320px;
        height: 30px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: transparent 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #error-email{
        position: absolute;
        top: 240px;
        left: 150px;
    }
    #mobile{
        position: absolute;
        top: 260px;
        left: 130px;
        width: 129px;
        height: 45px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;  
    }
    #mobilebox{
        position: absolute;
        top: 300px;
        left: 130px;
        width: 320px;
        height: 30px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: transparent 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #error-mobile{
        position: absolute;
        top: 330px;
        left: 150px;
    }
    #password{
        position: absolute;
        top: 350px;
        left: 130px;
        width: 129px;
        height: 45px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;  
    }
    #passbox{
        position: absolute;
        top: 390px;
        left: 130px;
        width: 320px;
        height: 30px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: transparent 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #error-password{
        position: absolute;
        top: 420px;
        left: 150px;
    }
    #cpassword{
        position: absolute;
        top: 440px;
        left: 130px;
        
        height: 45px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;  
    }
    #cpassbox{
        position: absolute;
        top: 480px;
        left: 130px;
        width: 320px;
        height: 30px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: transparent 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #error-confirm{
        position: absolute;
        top: 510px;
        left: 150px;
    }
    #address{
        position: absolute;
        top: 530px;
        left: 130px;   
        height: 45px;
        font: var(--unnamed-font-style-normal) normal 300 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        text-align: left;
        font: normal normal 300 20px/30px Poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.5;  
    }
    #addressbox{
        position: absolute;
        top: 570px;
        left: 130px;
        width: 320px;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: transparent 0% 0% no-repeat padding-box;
        border: 1px solid #DCDCDC;
        border-radius: 3px;
        opacity: 1;
    }
    #error-address{
        position: absolute;
        top: 630px;
        left: 150px;
    }
    #existing{
        position: absolute;
        top: 730px;
        left: 200px;
        width: 320px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 20px/30px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-ff5e41);
        text-align: left;
        font: normal normal normal 20px/30px Poppins;
        letter-spacing: 0px;
        color: #FF5E41;
        opacity: 1;
    }
    *:focus {
    outline: 0 !important; 
    }
</style>

