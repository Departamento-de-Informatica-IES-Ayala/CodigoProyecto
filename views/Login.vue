<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Logueate con tus credenciales</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            type="text"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="cont">
                                </base-input><br>
                                <div class="text-center">
                                    <button class="btn bg-primary"  v-on:click="aut">Login</button><br>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">                       
                        <div class="col-6 text-left">
                            <a href="/#/register" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {db} from '../db.js'
import firebase from "firebase"
export default {
    name: 'login',
    props: [],
    mounted () {

    },
    data () {
      return {
        email:"",
        cont:""        
      }
    },
    methods: {
      aut() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.cont).then(()=>{
          this.$router.replace('/profile');
        })
        .catch((error)=> {
            // Handle Errors here.
            this.email="";
            this.cont="";
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Usuario o contraseña incorrecta");
            
      });

      },
      }
};
</script>
<style>
</style>
