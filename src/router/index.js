import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import store from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
    path: '/Clinics',
    name: 'Clinics',
    component: () => import('../pages/Clinics.vue')
  },
  {
    path: '/Training',
    name: 'Training',
    component: () => import('../pages/Training.vue')
  },
  {
    path: '/Buy-Sell',
    name: 'BuySell',
    component: () => import('../pages/BuySell.vue')
  },
  {
    path: '/Grooming',
    name: 'Grooming',
    component: () => import('../pages/Grooming.vue')
  },
  {
    path: '/DayCare',
    name: 'DayCare',
    component: () => import('../pages/DayCare/DayCare.vue')
  },
  {
    path:'/DayCare/Details/:id',
    name:'DaycareDetails',
    component: () => import('../pages/DayCare/Details.vue')
  },
  {
      path: '/DogWalker',
      name: 'DogWalker',
      component: () => import('../pages/DogWalker.vue')
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../pages/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login/login.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/login/Register.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login/forgot-password',
      name: 'forgot-password',
      component: () => import('../pages/login/ForgotPassword.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login/otp-generation',
      name: 'otp-generation',
      component: () => import('../pages/login/OTP.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login/reset-password',
      name: 'reset-password',
      component: () => import('../pages/login/ResetPassword.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path : '/cart',
      name: 'cart',
      component : () => import('../pages/Cart.vue'),
      meta: {
      requiresAuth: true
    }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Profile Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});


export default router;
