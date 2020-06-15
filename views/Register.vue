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
                                <small>Registrate</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            type="text"
                                            placeholder="Nombre Completo"
                                            addon-left-icon="ni ni-hat-3"
                                            v-model="usuario.nombre">
                                </base-input>
                                <base-input alternative
                                            type="email"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Contraseña"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="cont">
                                </base-input>
                                <base-input alternative
                                            type="text"
                                            placeholder="Dirección"
                                            addon-left-icon="ni ni-building"
                                            v-model="usuario.direccion">
                                </base-input>
                                <base-input alternative
                                            type="text"
                                            placeholder="Localidad"
                                            addon-left-icon="ni ni-building"
                                            v-model="usuario.localidad">
                                </base-input>
                                <base-input alternative
                                            type="text"
                                            placeholder="Codigo Postal"
                                            addon-left-icon="ni ni-building"
                                            v-model="usuario.codpost">
                                </base-input>
                                <br>
                                <div class="text-center">
                                    <button type="submit" class="btn bg-primary" v-on:click="login">Crear cuenta</button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {db} from '../db.js'
import firebase from "firebase"
export default {
    name: 'register',
    props: [],
    mounted () {

    },
    data () {
      return {
        email:"",
        cont:"",
        usuario:{id:"",
        nombre:"",
        email:"",
        direccion:"",
        localidad:"",
        codpost:""}
      }
    },
    methods: {
      login() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.cont).then(()=>{
          this.$router.replace('/profile');
          alert("Usuario creado correctamente");
        })
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode,errorMessage);
      });
        this.add();
      },
      add:function(){
        this.usuario.email=this.email;
        this.usuario.id=this.usuario.nombre;
        db.collection("usuarios").add(this.usuario);
        this.email="";
        this.cont="";
        this.usuario.nombre="";
        this.usuario.direccion="";
        this.usuario.localidad="";
        this.usuario.codpost="";
        this.usuario.email="";
        this.usuario.cont="";
      },
    },
};
</script>
<style>
</style>
