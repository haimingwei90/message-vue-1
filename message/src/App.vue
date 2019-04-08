<template>
  <div id="app">
    <Topnav></Topnav>
    <router-view/>
  </div>
</template>

<script>
import Topnav from './components/Topnav';
export default {
  name: 'App',
  components:{Topnav}
}
</script>

<style >

</style>
