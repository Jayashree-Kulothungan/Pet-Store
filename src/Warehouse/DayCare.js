import axios from 'axios';

const state = {
    services : [],
    status: '',
    error: null,
    serviceId:''
};

const getters = {
    services : state => { return JSON.parse(JSON.stringify(state.services))},
    serviceId : state => { return state.serviceId}
};

const actions = {
    async registerServices({commit}, serviceData) {
        try{
            commit('register_request');
            let res = await axios.post('http://localhost:5000/api/services/register', serviceData)
            if(res.data.success !== undefined) {
                commit('register_success');
                commit('set_serviceId', res.data._id)
            }
            return res;
        }catch(err) {
            commit('register_error' , err)
        }
    },
    async fetchServices({commit}, userid){
        var axios = require('axios');
        var data = JSON.stringify({"user":userid});
        var config = {
            method: 'post',
            url: 'http://localhost:5000/api/services/displayUser',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
        .then(function (response) {
            commit('setProducts',JSON.parse(JSON.stringify(response.data)))
           // console.log(JSON.parse(JSON.stringify(response.data[0]._id)))
            commit('set_serviceId', JSON.parse(JSON.stringify(response.data[0]._id)))
        })
        .catch(function (error) {
            console.log(error);
            commit('setProducts',[])
        });

    }, 
    async updateServices({commit , getters}, updateData){
        let id = getters.serviceId;
        let url = 'http://localhost:5000/api/services/' + id + '/update'
        var config = {
            method: 'put',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : updateData
          };
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    }
};

const mutations = {
    setProducts(state, items) {
        // update products
        state.services=items
       // console.log(JSON.parse(JSON.stringify(state.services)))
    },
    set_serviceId(state,serviceId){
        state.serviceId = serviceId
        //console.log(state.serviceId)
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },
    fetch_request(state) {
        state.status = 'loading'
    },
    
};

export default {
    state,
    actions,
    mutations,
    getters
};
