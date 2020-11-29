<template>
  <div>
      <app-navigation></app-navigation>
      <div class="container" style="min-height:100%;">
        
        <router-view></router-view>
      </div>
  </div>   
</template>

<script>
import {mapGetters} from 'vuex'
import AppNavigation from './components/Navigation'
import AppFooter from './components/AppFooter'
export default { 
  name:"app",
  components:{
    AppNavigation,    
  },
  computed: {
    
  }
}
</script>
