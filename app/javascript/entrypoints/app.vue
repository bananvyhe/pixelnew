<template>
  <div>
    <v-app >
      <headpart></headpart>  

      <v-main>
  
        <router-view></router-view>

      </v-main>
    </v-app>    
  </div>
</template>

<script setup lang="ts">
import { mapState } from 'pinia'
import Headpart from '../components/head.vue'
// import NotFound from './packs/components/404.vue';
import { ref, onMounted} from "vue";
import { useLogStore } from '../store.js'

 
 
onMounted(() => {
  console.log("app.vue mounted")
}) 
// onUpdated(() => {
//   console.log("app.vue updated")
// });

 
</script>

<style >

</style>