<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <g-map class='bestMap'>
    </g-map>
    <g-map class='bestMap'>
    </g-map>
    <g-map class='bestMap'>
    </g-map>
    <g-map class='bestMap'>
    </g-map>
    <g-map class='bestMap'>
    </g-map>
    <g-map class='bestMap'>
    </g-map>
    <g-map class='bestMap'>
   </g-map>
    <g-map class='bestMap'>
    </g-map>
  </div>
</template>

<script>
import Hello from './components/Hello'
import gMap from './components/gMap'
import gMarker from './components/gMarker'

export default {
  name: 'app',
  components: {
    Hello,
    gMap,
    gMarker
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
  margin-top: 60px;
}

.bestMap {
    height: 300px;
    width: 300px;
    display: inline-block;
}
</style>
