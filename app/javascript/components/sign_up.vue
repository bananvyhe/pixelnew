<template>
        <v-dialog
        transition="dialog-top-transition"
        max-width="600">
        <template v-slot:activator="{ props }">
          <v-btn
            density="compact"
            size="x-small"
            v-bind="props"
            variant="text"
          >Регистрация</v-btn>
        </template>
      
<!--         <template v-slot:default="dialog"> -->
          
          <v-card class="sign" title="Создать аккаунт" subtitle="">
            <!-- <v-card-title>создать аккаунт</v-card-title> -->

  <v-form class="form-signup pt-9 pb-5" >
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div class="form-group"> 
      <!-- <label for="email">Зарегистрироваться</label> -->
      <v-text-field v-model="email" :rules="emailRules"   id="email" label="email@example.com" ></v-text-field>
    </div>
    <div class="form-group">
      <!-- <label for="password">Придумайте пароль</label> -->
      <v-text-field v-model="password" type="password" id="password" label="Придумайте пароль"></v-text-field>
    </div>
    <div class="form-group">
      <!-- <label for="password">Повторите пароль</label> -->
      <v-text-field v-model="password_confirmation" :rules="confirmRules" type="password" id="password_confirmation" label="Повторите пароль"></v-text-field>
    </div>
    
    <div>

    </div>
  </v-form>
  <v-card-actions class="pa-6 pt-0">
      <v-spacer></v-spacer>
<v-btn size="large" class="btn btn-primary " variant="tonal" @click="signup">Отправить</v-btn>
    </v-card-actions>
            </v-card>
        <!-- </template> -->
      </v-dialog>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()  
  
  import { useLogStore } from '../store.js'
  const store = useLogStore()
  import { useNotification } from "@kyvg/vue3-notification";
  const { notify}  = useNotification()
  import { ref, reactive, computed, inject } from 'vue';
  const plain: any = inject('plain')
  const secured: any = inject('secured')
  // import { mapState } from 'pinia'
  // import { mapActions } from 'pinia' 
  // import { useLogStore } from 'store.js'
// export default {
  // name: 'Signup',
  // data () {
  //   return {
  //     confirmRules: [
  //       v => !!v || 'нужно ввести пароль',
  //       v => v.length >= 5 || 'Пароль должен содержать более 6 символов',
  //                   // v => (v || '').indexOf(' ') < 0 ||  'Пробелов не должно быть'
  //       v => v == this.password || "Пароли не совпадают"
  //     ],  
  //     emailRules: [
  //       v => !!v || 'E-mail необходим для регистрации',
  //       v => /.+@.+\..+/.test(v) || 'E-mail введен некорректно',
  //     ],      
  //     email: '',
  //     password: '',
  //     password_confirmation: '',
  //     error: ''
  //   }
  // },
  const ex7 = ref()
 
  const email = ref()
  const password = ref()
  const password_confirmation = ref()
  const error = ref()

  const emailRules = reactive([
        v => !!v || 'E-mail необходим для регистрации',
        v => /.+@.+\..+/.test(v) || 'E-mail введен некорректно',
      ])
  const confirmRules = reactive([
        v => !!v || 'нужно ввести пароль',
        v => v.length >= 5 || 'Пароль должен содержать более 6 символов',
                    // v => (v || '').indexOf(' ') < 0 ||  'Пробелов не должно быть'
        v => v ==  password.value || "Пароли не совпадают"
      ])
 
  // created () {
  //   this.checkSignedIn()
  // },
  // updated () {
  //   this.checkSignedIn()
  // },


  // computed: {  
  //   ...mapState(useLogStore, {
  //     loastat: "thisloa",
  //   }),
 
  // },   

  function signup(){
    console.log("signing up...")
      plain
        .post('/signup', { email: email.value, password: password.value, password_confirmation: password_confirmation.value})
        // .then(response => signupSuccessful(response))
        // .catch(error => signupFailed(error))  
          .then((response: { data: any }) => {
            // console.log(response)
            // store.unsetLoa
            signupSuccessful(response)
          })
          .catch(error => {
           signupFailed(error)
        });
  }

  function signupSuccessful (response) {
    notify({ title: "Успешная регистрация", type: 'success'});
    store.unsetLoa()
    secured
    .get('/me')
      .then(meResponse => {
        console.log(meResponse.data)
        store.setCurrentUser(meResponse.data, response.data.csrf)
        // this.error = ''
        // this.$router.replace('/')
        router.push({ name: "lobby" });
      })
      .catch(error => console.log(error))
    // this.$router.replace('/')
  }

  function signupFailed (error) {
    notify({ title: "Ошибка при регистрации", type: 'error', text: error.response.data.message});
    console.log(error)
    console.log("filed")
    store.unsetCurrentUser 
    // this.error = (error.response && error.response.data && error.response.data.error) || error.data.errors
    // delete localStorage.csrf
    // delete localStorage.signedIn
  }  

  function  checkSignedIn () {
    // if (localStorage.signedIn) {

      // this.$router.replace('/')
    // }
  }  

  // methods: {
  //   // ...mapActions(useLogStore, ["unsetLoa"]), 
   
  //   // ...mapActions(useLogStore, ["setCurrentUser"]),     
     

</script>

<style lang="css">
.form-signup {
  width: 70%;
  max-width: 500px;
  padding: 10% 15px;
  margin: 0 auto;
}
</style>