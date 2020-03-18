import Vue from 'vue'
import Router from 'vue-router'
import WelcomeScreen from '@/components/WelcomeScreen'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomeScreen',
      component: WelcomeScreen
    },

    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true
    }
  ]
})
