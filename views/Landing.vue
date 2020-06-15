<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Los mejores artículos
                                    <span>de moda actual</span>
                                </h1>
                                <p class="lead  text-white">Diseños actuales  
                                </p><br>
                                <p class="lead  text-white">Nuestros productos más populares: </p>
                                <div class="btn-wrapper">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img alt="Circle image" class="img-fluid  shadow m-auto" data-src="img/theme/team-2-800x800.jpg" 
                                    :src="camisetas[0].imagen" lazy="loaded" style="height:150px;width:150px;" >
                                    <br><br><h6 class="text-primary text-uppercase">{{camisetas[0].descrip}}</h6>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        <router-link to="/productos/camisetas" class="media d-flex align-items-center text-white">
                                            Ver
                                        </router-link>
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img alt="Circle image" class="img-fluid  shadow m-auto" data-src="img/theme/team-2-800x800.jpg" 
                                    :src="pantalones[0].imagen" lazy="loaded" style="height:150px;width:150px;" >
                                    <br><br><h6 class="text-primary text-uppercase">{{pantalones[0].descrip}}</h6>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        <router-link to="/productos/pantalones" class="media d-flex align-items-center text-white">
                                            Ver
                                        </router-link>
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img alt="Circle image" class="img-fluid  shadow m-auto" data-src="img/theme/team-2-800x800.jpg" 
                                    :src="gorras[0].imagen" lazy="loaded" style="height:150px;width:150px;" >
                                    <br><br><h6 class="text-primary text-uppercase">{{gorras[0].descrip}}</h6>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        <router-link to="/productos/gorras" class="media d-flex align-items-center text-white">
                                            Ver
                                        </router-link>
                                    </base-button>
                                </card>
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
  name: "home",
  components: {},
  data () {
      return {
        pantalones:[],
        camisetas:[],
        gorras:[],
        }
    },
    firestore() {
        return{
            pantalones:db.collection("pantalones"),
            camisetas:db.collection("camisetas"),
            gorras:db.collection("gorras"),
        }
    }
};
</script>
