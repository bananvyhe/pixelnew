<template> 
  <!-- <v-app-bar density="compact"  flat  > -->
            
    <!--  -->
    <!-- <v-container class = "px-2  d-flex justify-end  "> -->

      
      <div class="d-flex d-sm-flex " > 
        <div class="d-flex menuline">
          <!-- <v-card outlined class="d-flex menu mr-2 d-xs-none d-sm-flex"> -->
            <div v-for="(item, index) in parts"> 
              <v-btn

                class="text-end"
                @click="handler(item.name, item.classname)"
                density="compact"
                color="background">
                {{item.name}}
              </v-btn> 
            </div>
          <!-- </v-card> -->
        </div>
      </div>
    <!-- </v-container> -->
  <!-- </v-app-bar> -->
</template>
<script setup lang="ts">
import { ref, computed, inject, onMounted } from 'vue';

const drawer = ref(false)
const parts = ref([
  {name: 'Обо мне', classname:'#about_block'},{name: 'Образование', classname: '.know_block'},{name: 'Как проходит консультация?', classname: '.konsultBlock'},{name:'Отзывы', classname: '.rev_block'},{name:'Стоимость', classname: '.price_block'},{name:'Контакты', classname: '.contact_block'}
]);
 
</script>
<style>
  .menuline{
    background-color: #1aa465;
  }
 .list6b {
   
  position: relative;

    list-style: none;
}
.list6b li{

    display: inline-block;
    margin:2px;
    padding:0px;
    background-color: rgba(255, 255, 255, 0.8);
}
.list6b li:before {
    
    padding-right:5px;
    font-weight: bold;
    color: #65ba7a;
    content: "\2714";
    transition-duration: 0.5s;
}
.list6b li:hover:before {
    color: #337AB7;
    content: "\2714";
}  
.list6b li{
  padding-left: 8px;
}  
ul.list6b{
  padding-left: 0px !important;
}
</style>