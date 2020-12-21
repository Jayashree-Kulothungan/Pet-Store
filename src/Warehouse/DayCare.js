import axios from 'axios';
import router from '../router';

const state = {
    items : {},
    daycare : {},
    status:''
};

const getters = {
   items : state => {return state.items },
   daycaredata : state => {return state.daycare},
   sortLocality(state){
    state.items.filter(daycare => daycare.organization.address.locality)
}
};

const actions = {
    async fetchProducts({commit}) {
        commit('fetch_request')
        let res = await axios.get('http://localhost:5000/api/services/display')
        commit('setProducts', res.data)
        return res;  
    },
    async fetchDaycare({commit}, dayCareID ) {
        let url = "http://localhost:5000/api/services/display/"+dayCareID
        commit('fetch_request')
        let res = await axios.get(url)
        commit('SetDaycare', res.data)
    },
    fetchLocality({commit}, locality) {
        commit('sortLocality', locality)
    }
    
};

const mutations = {
    setProducts (state, items) {
        // update products
        state.items = items
    },
    SetDaycare(state , daycare){
        state.daycare = daycare
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
