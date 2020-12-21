<template>
    <div>
        <div class="container">
            <div>
                <p id="title">Responses</p>
                <hr id="hr"> 
                <div class="card">
                    <table id="table">
                        <tr style="color:white; background: #999999; height: 40px ">
                            <th> Id </th> 
                            <th> Name of the Service </th>
                            <th> Customer Name </th>
                            <th >Number </th>
                            <th> Date </th>
                            <th> Status </th>
                            <th> Action </th>
                        </tr>
                        <tr v-for="(data ,$index) in reqData" :key="$index">
                            <td>{{$index + 1}}</td>
                            <td>{{reqData[$index].ServiceName}}</td>
                            <td>{{reqData[$index].CustomerName}}</td>
                            <td>{{reqData[$index].CustomerNumber}}</td>
                            <td>{{reqData[$index].Date}}</td>
                            <td>{{reqData[$index].Status}}</td>
                            <td> 
                                <b-icon icon="eye-fill" scale="0.8" variant="success" @click="displayDetails(reqData[$index])" style="cursor:pointer"></b-icon>
                                <b-icon icon="pencil" scale="0.8" variant="warning"  @click="enableEdit(reqData[$index])" style="cursor:pointer"></b-icon>
                                <b-icon icon="archive-fill" scale="0.8" variant="danger" @click="enableDelete(reqData[$index])" style="cursor:pointer"></b-icon>
                            </td>
                        </tr>
                    </table>

                    <!--Details -->
                    <b-modal ref="showDetails" title="Responses" 
                            hide-backdrop  
                            id="modal-center"
                            modal-ok="Save">    
                        <table id="modalTable">
                            <tr style="background: #FFFFFF!important;"><th>Name of the Service:</th><td>{{data.ServiceName}}</td></tr>
                            <tr style="background: #FFFFFF!important;"><th>Date:</th><td>{{data.Date}}</td></tr>
                            <tr style="background: #FFFFFF!important;"><th>Customer Name:</th><td>{{data.CustomerName}}</td></tr>
                            <tr style="background: #FFFFFF!important;"><th>Number</th><td>{{data.CustomerNumber}}</td></tr>
                            <tr style="background: #FFFFFF!important;"><th>Requests:</th> <td> {{data.Details}}</td></tr>
                            <tr style="background: #FFFFFF!important;"><th>Status:</th> <td> {{data.Status}}</td></tr>

                            
                        </table>
                    </b-modal>

                    <!---editDisplay--> 
                            <b-modal ref="editDetails" title="My Requests" 
                                    hide-backdrop  
                                    id="modal-center"
                                    @ok="handleOk" >    
                                <table id="modalTable">
                                    <tr style="background: #FFFFFF!important;"><th>Name of the Service:</th><td>{{data.ServiceName}}</td></tr>
                                    <tr style="background: #FFFFFF!important;"><th>Date:</th><td>{{data.Date}}</td></tr>
                                    <tr style="background: #FFFFFF!important;"><th>Customer Name:</th><td>{{data.CustomerName}}</td></tr>
                                    <tr style="background: #FFFFFF!important;"><th>Number</th><td>{{data.CustomerNumber}}</td></tr>
                                    <tr style="background: #FFFFFF!important;"><th>Requests:</th> <td> {{data.Details}}</td></tr>
                                    <tr style="background: #FFFFFF!important;"><th>Status:</th><td>
                                            <select v-model="Status">
                                                <option selected disabled>Recieved</option>
                                                <option>No Slots Available</option>
                                                <option>Accepted</option>                                                                                    
                                            </select>
                                        </td> 
                                    </tr>
                                </table>
                            </b-modal> 

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions , mapGetters} from 'vuex'
import axios from 'axios'
export default {
    data(){
        return {
            reqData : [],
            Status:'',
            data : {
                CustomerName : '',
                ServiceName : '',
                Details : '',
                Date : '',
                Status : '',
                Comments : '',
                ServiceId : '',
                CustomerId : '',
                ServiceProvider: '',
            }
        }
    },
    methods : {
        displayDetails( details ) {
            this.data._id=details._id
            this.data.CustomerName = details.CustomerName
            this.data.ServiceName = details.ServiceName
            this.data.CustomerNumber = details.CustomerNumber
            this.data.Details = details.Details
            this.data.Date = details.Date
            this.data.Status = details.Status
            if(!details.Comments){ details.Comments="-"}
            this.data.Comments = details.Comments
            this.data.ServiceId = details.ServiceId
            this.data.CustomerId = details.CustomerId
            this.data.ServiceProvider = details.ServiceProvider
            console.log(this.data)
            this.$refs['showDetails'].show()

        },
        enableEdit( details ){
            this.data._id=details._id
            this.data.CustomerName = details.CustomerName
            this.data.CustomerNumber = details.CustomerNumber
            this.data.Details = details.Details
            this.data.Date = details.Date
            this.data.Status = details.Status
            this.data.Comments = details.Comments
            this.data.ServiceId = details.ServiceId
            this.data.CustomerId = details.CustomerId
            this.data.ServiceProvider = details.ServiceProvider
            this.$refs['editDetails'].show()
        },
        handleOk(){
            console.log(this.Status)
            console.log(this.data._id)
            var data = JSON.stringify({"Status": this.Status});
            var url1="http://localhost:5000/api/request/update/" + this.data._id
            var config = {
                method: 'put',
                url: url1,
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
            this.comments=""
            location.reload()
            
        },
        enableDelete(details){
            this.data._id=details._id
            var url1="http://localhost:5000/api/request/delete/" + this.data._id
            if (confirm("Are you sure you want to delete the request?")) {
                var data = '';
                var config = {
                    method: 'delete',
                    url: url1,
                    headers: { },
                    data : data
                };

                axios(config)
                .then(function (response) {
                console.log(JSON.stringify(response.data));
                location.reload()
                })
                .catch(function (error) {
                console.log(error);
                });
            } else {
               null
            }
        },
        ...mapActions(["getProfile"]),
        async displayData(){
            var sc = this
            var data = JSON.stringify({"ServiceProvider":this.user._id});
            var config = {
            method: 'post',
            url: 'http://localhost:5000/api/request/displayResponse',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios(config)
            .then(function (response) {
                sc.reqData = JSON.parse(JSON.stringify(response.data));
                console.log(JSON.parse(JSON.stringify(sc.reqData)))
            })
            .catch(function (error) {
            console.log(error);
            });

        }
    },
    computed : {
        ...mapGetters(["user"]),
    },
    async created() {
      await this.getProfile();
    },  
    async mounted(){
      await  this.displayData()
    }
}
</script>

<style scoped>
*:focus {
    outline: 0 !important;
}
.container {
  position: absolute;
  top:0px;
  left:320px;
  width: 2000px;
  height: 680px;
  border-style: solid;
  border-color:#D3D3D3; 
  border-width: 2px; 
}
#title{
  position: absolute;
  top:30px;
  left:50px;
  text-align: left;
  font: normal normal normal 24px/35px Poppins;
  letter-spacing: 0px;
  color: #2E67CE;
  opacity: 1;
}
#hr{
  position: relative;
  top:70px;
  border-width: 3px;
}
.card{
  border: none;
  position: relative;
  top:90px;
  width:400px;
  left:10px;
  text-align: left;
  font: normal normal 300 18px/35px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#table{
    position: absolute;
    top:10px;
    left: 45px;
    width:1000px;
    text-align: center;
    font: normal normal 300 16px Poppins;
    letter-spacing: 0px;
    opacity: 1;
    border : 2px;
    border-color:  #EBEBEB;
    border-spacing: 3px;
}
tr:nth-child(even){
    background: #F7F7F7;
}
tr:nth-child(odd){
    background: #FFFFFF;
}
#modalTable{
    width:450px;
    background: #FFFFFF!important;
    font: normal normal 300 14px Poppins;
    color:#6A6A6A;
    letter-spacing: 0px;
    opacity: 1;
    border : 2px;
    border-color:  #EBEBEB;
    border-spacing: 3px;
    
}

</style>
