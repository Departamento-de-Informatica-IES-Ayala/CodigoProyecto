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
                                <small>Cargar producto</small>
                            </div>
                            <form role="form">
                                <select v-model="producto" class="browser-default custom-select">
                                    <option disabled value="">Selecciona una categoria</option>
                                    <option>camisetas</option>
                                    <option>pantalones</option>
                                    <option>gorras</option>
                                </select><br><br>
                                <select v-model="prod.talla" class="browser-default custom-select">
                                    <option disabled value="">Selecciona una talla</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                </select><br><br>
                                <base-input alternative
                                            type="text"
                                            placeholder="precio"
                                            addon-left-icon="ni ni-credit-card"
                                            v-model="prod.precio">
                                </base-input>
                                <base-input alternative
                                            type="text"
                                            placeholder="descrip"
                                            addon-left-icon="ni ni-briefcase-24"
                                            v-model="prod.descrip">
                                </base-input>
                                <base-input alternative
                                            type="text"
                                            placeholder="enlace de imagen"
                                            addon-left-icon="ni ni-camera-compact"
                                            v-model="prod.imagen">
                                </base-input>
                                <div class="text-center">
                                    <button class="btn bg-primary" v-on:click="cargar">Subir Producto</button><br>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div><br><br>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4" v-for="candidato in candidatos" v-bind:key="candidato.i">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <h6 class="text-primary text-uppercase">{{candidato.nombre}}</h6>
                                    <p class="description mt-3">Teléfono: {{candidato.telefono}}</p>
                                    <p class="description mt-3">Teléfono: {{candidato.email}}</p>
                                    <p>Currículum: {{candidato.curriculum}}</p><button type="submit" class="btn btn-primary" v-on:click="eliminar(candidato)">
                                        Eliminar candidato
                                    </button>
                                </card>
                                <br><br>
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
        if(this.usuario.email=="adriaaancontreraas257@gmail.com"){
        }else{
            alert("Necesitas credenciales de administrador");
            this.$router.replace('/profile');
        }
    },
    data () {
      return {
        usuario:firebase.auth().currentUser,
        producto:"",
        prod:{
        descrip:"",
        precio:"",
        imagen:"",
        talla:"",},
        candidatos:[]
      }
    },
    firestore() {
        return{
            candidatos:db.collection("candidatos"),
        }
    },
    methods: {
        cargar(){
            if(this.prod.precio=="" || this.producto=="" || this.prod.talla=="" || this.prod.descrip=="" || this.prod.imagen==""){
                alert("Rellene todos los campos")
            }else{
                db.collection(this.producto).add(this.prod);
                this.prod.precio=="";
                this.prod.descrip=="";
                this.prod.imagen=="";
            }
        },
        eliminar:function(candidato){
            var candidato = db.collection('candidatos').where('email','==',candidato.email);
            candidato.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                doc.ref.delete();
                });
            });
        }, 
      }
};
</script>
<style>
</style>
