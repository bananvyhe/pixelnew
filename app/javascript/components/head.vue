<template>  
	<v-app-bar dense fixed flat hide-on-scroll rounded color="transparent" class="appbar">
 <signup></signup>
      <div class="px-2">
      	<signin ></signin>
      </div>
	</v-app-bar>

	<div class="headone"></div>
		<div class="headblock">123</div>
	<div  class="headtwo"></div>
</template>
<script setup lang="ts">
import Signup from './sign_up.vue';
import Signin from './sign_in.vue';
</script>
<style>
	.headblock{
		background-image: url('./images/head2.jpg');
		height: 215px;
		background-repeat: repeat-x;

	}
	.headone{
		background-image: url('./images/head1.jpg');
	  z-index: 1;
	  position: absolute;
	  height: 215px;
	  width: 201px;

	}
	.headtwo{
	  z-index: 3;
	  position: absolute;
	  right: 0;
	  margin-left: auto;
	  height: 215px;
	  width: 915px;
	  background-image: url('./images/head3.jpg');
	  background-position: right;
	}
</style>