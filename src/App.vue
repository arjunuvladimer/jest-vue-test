<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <Form />
  </div>
</template>

<script>

import Form from './components/Form.vue'
export default {
  name: 'App',
  data(){
    return{
      msg: "Hello"
    }
  },
  components:{
    Form
  }
}
</script>

<style>

</style>
