import Content from '../components/content.vue'
import Signin from '../components/sign_in.vue'
import Signup from '../components/sign_up.vue'

const routes = [
  { 
    path: '/', 
    component: Content 
  },
  {
    path: '/Signup',
    component: Signup
  },
  {
    path: '/Signin',
    component: Signin
  },
]

export default routes