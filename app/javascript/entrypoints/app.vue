<template>
      <v-container>
    <v-app >
      <headpart ></headpart>
      <!-- <v-spacer></v-spacer> -->
      <div class="auth">

        <menuf></menuf>
      </div>

      
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

 
 
onMounted(() => {
  console.log("app.vue mounted")
}) 
// onUpdated(() => {
//   console.log("app.vue updated")
// });

 
</script>

<style >
 
  .auth{
position: absolute;
z-index: 111;
  }
.appbar{
  position: relative;
  /*z-index: 5;*/
}
</style>