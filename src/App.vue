<template>
  <div>
      <app-navigation></app-navigation>
       <br>
      <br>
      <div class="container">
        <errors v-if="error" :msg="error"/>
        <router-view/>
      </div>
  </div>   
</template>

<script>
import {mapGetters} from 'vuex'
import AppNavigation from './components/Navigation'
import Errors from './components/Errors'

export default { 
  name:"app",
  components:{
    AppNavigation,
    Errors
    
  },
  computed: {
    ...mapGetters(["error"])
  }
}
</script>

<style scoped>
*{
  background-color:#FF6752 ;
}
</style>
