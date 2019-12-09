<template>
  <div id="app">
    <!-- <TodoList msg=""/> -->
    <Login/>
  </div>
</template>

<script>
import Login from './components/Login/login'


export default {
  name: 'app', 
  components: {
    Login
  }
}

</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
 