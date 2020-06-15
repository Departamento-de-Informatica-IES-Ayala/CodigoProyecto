<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <h1 class="text-white">{{msg}}</h1>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4" v-for="producto in productos" v-bind:key="producto.i">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img alt="Circle image" class="img-fluid  shadow m-auto" data-src="img/theme/team-2-800x800.jpg" 
                                    :src="producto.imagen" lazy="loaded" style="height:150px;width:150px;" >
                                    <br><br><h6 class="text-primary text-uppercase">{{producto.descrip}}</h6>
                                    <p class="description mt-3">Talla: {{producto.talla}}</p>
                                    <p>Precio: {{producto.precio}}</p><button type="submit" class="btn btn-primary" v-on:click="añadir(producto)">
                                        Añadir al carrito
                                    </button>
                                </card>
                                <br><br>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    </div>
    
</template>
<script>
import {db} from '../db.js'
import firebase from "firebase"
export default {
  name: "productos",
  components: {},
  props: ['msg'],
    data () {
      return {
        productos:[],
        carrito:{producto:"",
        usuario:"",
        imagen:"",
        talla:"",
        descrip:"",
        precio:""},
        usuario:firebase.auth().currentUser,
        }
    },
    methods:{
        añadir:function(producto){
            if(this.usuario){
                this.carrito.producto=producto.id;
                this.carrito.precio=producto.precio;
                this.carrito.talla=producto.talla;
                this.carrito.descrip=producto.descrip;
                this.carrito.imagen=producto.imagen;
                this.carrito.usuario=this.usuario.email;
                db.collection("carrito").add(this.carrito);
            }else{
                this.$router.replace('/login');
            }
        }, 
    },
    firestore() {
        return{
            productos:db.collection(this.msg)
        }
    },
};
</script>
<style>
</style>
