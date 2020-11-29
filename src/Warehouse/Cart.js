import axios from 'axios';
let dayCare = window.localStorage.getItem('dayCare');

const state = {
    dayCare:  dayCare ? JSON.parse(dayCare) :[],
     
};
 
const getters = { 
    dayCareItems (state){
        return state.dayCare
    },
    totalPrice: state => {
        let total = 0;
        state.dayCare.filter((item) => {
            total += (item.total);
        });

        return total;
    },
    totalItems : (state, getters) => {
        return getters.dayCareItems.length
    }
};

const actions = {
    async dayCareCart({commit}, dayCare){
       
        try{
            commit('pushDaycareToCart', dayCare)
            let res = await axios.post('http://localhost:5000/api/cart/store', dayCare);
            if (res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
            
        }catch(err){
            commit('register_error', err)
        }
        
    },
};

const mutations = {
    pushDaycareToCart(state, dayCare){      
        state.dayCare.push(dayCare)
        this.commit('saveCart')
       
    },
    saveCart(state) {
        window.localStorage.setItem('dayCare', JSON.stringify(state.dayCare));
        console.log(state.dayCare)
    },

    removeFromCart(state, item){

        let index = state.dayCare.indexOf(item);
        state.dayCare.splice(index,1);

      this.commit('saveCart');

    },
};



export default {
    state,
    actions,
    mutations,
    getters
};
