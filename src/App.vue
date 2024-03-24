<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="MyClick">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {ipcRenderer} from 'electron'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    MyClick() {
      console.log('图片按钮点击')
      ipcRenderer.invoke('hello');
    }
  },
  mounted() {
    ipcRenderer.on('hello-click', () => {
      console.log("接收到了点击通知栏")
    })
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
