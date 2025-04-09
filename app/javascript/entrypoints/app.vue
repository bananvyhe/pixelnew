<template>
      <v-container class = " py-0  ">
    <v-app >
      <headpart ></headpart>
      <!-- -->

      <v-app-bar color="transparent" flat>
 
<v-container class=" d-flex" >
        <div class=" d-flex py-2 mx-2"> 
          <signup  ></signup>
          <signin  ></signin>
        </div>
         <v-spacer></v-spacer>
        <!-- <div class="auth"> -->
          <menuf class=" d-flex" ></menuf>
        <!-- </div> -->
 </v-container>
      </v-app-bar>
      
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>    
      </v-container>
</template>

<script setup lang="ts">
import { mapState } from 'pinia'
import Headpart from '../components/head.vue'
// import NotFound from './packs/components/404.vue';
import { ref, onMounted} from "vue";
import { useLogStore } from '../store.js'
import Menuf from '../components/menu.vue'
import Signup from '../components/sign_up.vue';
import Signin from '../components/sign_in.vue';
 
onMounted(() => {
  console.log("app.vue mounted")
}) 
// onUpdated(() => {
//   console.log("app.vue updated")
// });

 
</script>

<style >
  .log{

/*    top: 0.5em;*/
    z-index: 99;
    position: absolute;
/*    right: 0;*/
/*    width: -100px;*/
  }
  .auth{
position: absolute;
z-index: 111;
  }
.appbar{
  position: relative;
  /*z-index: 5;*/
}
</style>