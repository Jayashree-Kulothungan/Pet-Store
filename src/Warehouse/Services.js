import axios from 'axios';

const state = {
    services : {},
    status: '',
    error: null,
    serviceId:''
};

const getters = {
    services : state => { return state.services },
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
    async fetchServices({commit, getters}){
        let url= 'http://localhost:5000/api/services/display/'+getters.serviceId
        let response = await axios.get(url)
        let data=response.data
        console.log(data)
        commit('setProducts', data)
    }
};

const mutations = {
    setProducts(state, items) {
        // update products
        state.services=items
    },
    set_serviceId(state,serviceId){
        state.serviceId = serviceId
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
