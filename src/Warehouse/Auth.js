import axios from 'axios';
import router from '../router';

const state = {
    //if token is found -> in local storage otherwise empty indicating no user logged in
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null,
    userId:''
};
 
const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error,
    userId: state =>{ return state.user._id}
};

const actions = { 
    // Login Action using password
    async login({commit}, user) {
        commit('auth_request');
        try {
            let res = await axios.post('http://localhost:5000/api/users/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
                // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },
    //login action using otp
    async loginOtp({commit}, mobile) {
        commit('auth_request');
        try {
            var data = JSON.stringify({"mobile":mobile});

            var config = {
            method: 'post',
            url: 'http://localhost:5000/api/users/login/otp',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios(config)
            .then(function (res) {
                if (res.data.success) {
                    const token = res.data.token;
                    const user = res.data.user;
                    // Store the token into the localstorage
                    localStorage.setItem('token', token);
                    // Set the axios defaults
                    axios.defaults.headers.common['Authorization'] = token;
                    commit('auth_success', token, user);
                }
                return res;
            })
            .catch(function (error) {
                console.log(error);
            });
         
        }catch (err) {
            commit('auth_error', err);
        }
    },
    // Register User
    async register({commit}, userData) {
        try{
            commit('register_request');
            let res = await axios.post('http://localhost:5000/api/users/register', userData);
            if (res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
        }catch(err){
            commit('register_error', err)
        }
           
        
    },
    // Get the user Profile
    async getProfile({commit}) {
        commit('profile_request');
        let res = await axios.get('http://localhost:5000/api/users/profile')
        commit('user_profile', res.data.user)
        commit('user_id', res.data.user._id)
        //console.log(res)
        return res;
    },
    // Logout the user
    async logout({commit}) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
        //state.error = null
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
        
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
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
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    },
    user_id(state, userId){
        state.userId = userId
    }
    
};

export default {
    state,
    actions,
    mutations,
    getters
};
