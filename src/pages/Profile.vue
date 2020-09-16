<template>
 <div>
    <div class= "container">
      <!--Account details -->
      <div >
        <p id="title">My Account</p>
        <hr id="hr">
        <div class="card">
          <table>
            <tr><th>Name  :</th><td>{{ user._id }}</td></tr>
            <tr><th>Email  :</th><td>{{ user.email}}</td></tr>
            <tr><th>Mobile  :</th><td>{{ user.mobile}}</td></tr>
            <tr><th>Address  :</th><td>{{ user.address}}</td></tr>
          </table>
        </div>
        <button id="regser" >Register Service</button>
      </div>
    </div>
 </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
   data() {
    return {
      myaccount: true,
      regService :'',
      name : '',
      
    }
  },
  beforeCreate: function() {
        document.body.className = 'Profile';
    },
  computed: mapGetters(["user"]), 
  methods: {
    ...mapActions(["getProfile"]),
  },
  created() {
    this.getProfile();
    //this.name = this.user._id
  },
};
</script>

<style scoped>
#services{
  position: absolute;
  top:190px;
  left:500px;
  width: 300px;
  height: 45px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#ser{
  position: absolute;
  top:150px;
  left:500px;
  text-align: left;
  font: normal normal 300 20px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1; 
}
#zip{
  position: absolute;
  top:260px;
  left:30px;
  text-align: left;
  font: normal normal 300 20px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1; 
}
#zipcode {
  position: absolute;
  top:300px;
  left:30px;
  width: 300px;
  height: 45px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: center;
  font: normal normal 300 20px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#norg{
  position: absolute;
  top:150px;
  left:30px;
  text-align: left;
  font: normal normal 300 20px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#name {
  position: absolute;
  top:190px;
  left:30px;
  width: 300px;
  height: 45px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DCDCDC;
  border-radius: 3px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 20px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.tab{
  position: absolute;
  top: 130px;
  left: 5px;
  width: 250px;
  height: 550px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  border-right: #DCDCDC solid 10px;
  
}
#myacc{
  position: absolute;
  top: 50px;
  left: 0px;
  width: 235px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  border-top: #707070 2px;
  border-bottom: #707070 2px;
  border-left: none;
  border-right:none;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align:left;
  text-indent: 30px;
}
#select{
  position: absolute;
  top: 100px;
  left: 0px;
  width: 235px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  border-top: #707070 2px;
  border-bottom: #707070 2px;
  border-left: none;
  border-right:none;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align:left;
  text-indent: 30px;
}
#dc{
  position: absolute;
  top: 150px;
  left: 0px;
  width: 235px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  border-top: #707070 2px;
  border-bottom: #707070 2px;
  border-left: none;
  border-right:none;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align:left;
  text-indent: 30px;
}
#gr{
  position: absolute;
  top: 200px;
  left: 0px;
  width: 235px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  border-top: #707070 2px;
  border-bottom: #707070 2px;
  border-left: none;
  border-right:none;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align:left;
  text-indent: 30px;
}
#dw{
  position: absolute;
  top: 250px;
  left: 0px;
 width: 235px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  border-top: #707070 2px;
  border-bottom: #707070 2px;
  border-left: none;
  border-right:none;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align:left;
  text-indent: 30px;
}
#tr{
  position: absolute;
  top: 300px;
  left: 0px;
  width: 235px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  border-top: #707070 2px;
  border-bottom: #707070 2px;
  border-left: none;
  border-right:none;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align:left;
  text-indent: 30px;
}
#cl{
  position: absolute;
  top: 350px;
  left: 0px;
  width: 235px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  border-top: #707070 2px;
  border-bottom: #707070 2px;
  border-left: none;
  border-right:none;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  text-align:left;
  text-indent: 30px;
}
#regser{
  position: absolute;
  top: 450px;
  left: 450px;
  width: 200px;
  height: 40px;
  border: none;
  background: var(--unnamed-color-ff5e41) 0% 0% no-repeat padding-box;
  background: #FF5E41 0% 0% no-repeat padding-box;
  border-radius: 32px;
  opacity: 1;
}
.container {
  position: absolute;
  top:130px;
  left:320px;
  width: 950px;
  height: 550px;
  border-style: solid;
  border-color:#D3D3D3; 
  border-width: 2px; 
}
#title{
  position: absolute;
  top:50px;
  left:50px;
  text-align: left;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #2E67CE;
  opacity: 1;
}
#hr{
  position: relative;
  top:90px;
  border-width: 3px;
}
.card{
  border: none;
  position: relative;
  top:90px;
  width:400px;
  left:50px;
  text-align: left;
  font: normal normal 300 18px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
th{
  border:none;
  width:80px
}
tr{
  height:50px;
}
.list-group-item{
  border: none
}
*:focus {
    outline: 0 !important;
}

</style>