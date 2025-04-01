<template>  
	<v-app-bar dense fixed flat hide-on-scroll rounded color="transparent" class="appbar">
 <signup></signup>
      <div class="px-2">
      	<signin ></signin>
      </div>
	</v-app-bar>
</template>
<script setup lang="ts">
import Signup from './sign_up.vue';
import Signin from './sign_in.vue';
</script>