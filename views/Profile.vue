<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/avatar.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    
                                    </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    
                                </div>
                            </div>
                        </div><br><br>
                        <div class="text-center mt-5">
                            <h3>{{usuario[0].nombre}}
                                <span class="font-weight-light"></span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{usuario[0].localidad}}</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{usuario[0].email}}</div>
                            <div><i class="ni education_hat mr-2"></i>{{usuario[0].direccion}}</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <button type="submit" class="btn btn-primary"><router-link to="/carrito" class="media d-flex align-items-center text-white">
                                            Carrito
                                        </router-link></button>
                                    <button type="submit" class="btn btn-primary" v-on:click="signOut">salir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import {db} from '../db.js'
import firebase from "firebase"
export default {
    data () {
      return {
        usuario:[],
        usuarior:firebase.auth().currentUser,
      }
    },
    methods: {
        signOut:function(){
            firebase.auth().signOut().then(()=> {
                this.$router.replace('/login');
            }).catch(function(error) {
            alert(error)
            });
        }
    },
    firestore() {
        return{
            usuario:db.collection("usuarios").where("email", "==", this.usuarior.email),
        }
    }
};
</script>
<style>
</style>
