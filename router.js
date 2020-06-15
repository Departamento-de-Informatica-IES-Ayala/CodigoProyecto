import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import productos from "./views/productos.vue";
import Profile from "./views/Profile.vue";
import info from "./views/info.vue";
import carrito from "./views/Carrito.vue";
import admin from "./views/admin.vue";
import firebase from "firebase"
import { firestorePlugin } from 'vuefire'

Vue.use(Router);
Vue.use(firestorePlugin);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: '/productos/:msg',
      name: "productos",
      components: {
        header: AppHeader,
        default: productos,
        footer: AppFooter
      },
      props:{header:true,
      default:true,
      footer:false}
    },
    {
      path: "/profile",
      name: "profile",
      meta:{
        requiresAuth:true
      },
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/sobrenosotros",
      name: "info",
      components: {
        header: AppHeader,
        default: info,
        footer: AppFooter
      }
    },
    {
      path: "/carrito",
      name: "carrito",
      meta:{
        requiresAuth:true
      },
      components: {
        header: AppHeader,
        default: carrito,
        footer: AppFooter
      }
    },
    {
      path: "/admin",
      name: "admin",
      meta:{
        requiresAuth:true
      },
      components: {
        header: AppHeader,
        default: admin,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('/login')
  else next()
})
export default router