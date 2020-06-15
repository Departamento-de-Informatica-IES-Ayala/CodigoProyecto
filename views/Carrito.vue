<template>
    <div class="carrito-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <h1 class="text-white">Mi carrito</h1>
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
                    <div class="col-lg-12" v-for="carrit in carrito" v-bind:key="carrit.i">
                        <card class="border-0" hover shadow body-classes="py-5">
                                    <div class="row">
                                    <div class="col-4">
                                    <img alt="Circle image" class="img-fluid  shadow m-auto" data-src="img/theme/team-2-800x800.jpg" 
                                    :src="carrit.imagen" lazy="loaded" style="height:150px;width:150px;" >
                                    </div>
                                    <div class="col-4">
                                    <br><br><h6 class="text-primary text-uppercase">{{carrit.descrip}}</h6>
                                    <p class="description mt-3">Talla: {{carrit.talla}}</p>
                                    <p>Precio: {{carrit.precio}}</p>
                                    </div>
                                    <div class="col-4"><br><br><br>
                                    <button type="submit" class="btn btn-primary" v-on:click="eliminar(carrit)">
                                        Eliminar del carrito
                                    </button>
                                    </div>
                                    </div>
                                </card>
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
    name: "carrito",
    components: {},
    data () {
        return {
            usuario:firebase.auth().currentUser,
            carrito:[],
        }
    }, 
    methods:{
        eliminar:function(carrit){
            var producto = db.collection('carrito').where('producto','==',carrit.producto);
            producto.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                doc.ref.delete();
                });
            });
        }, 
    },
    firestore() {
        return{
            carrito:db.collection("carrito").where("usuario", "==", this.usuario.email)
        }
    }
};
</script>
<style>
</style>
