<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <g-map class='bestMap' v-for="n in 2">
        <div v-for="marker in markers">
            <g-info-window :position="marker.position" v-html="marker.content" v-if="marker.content">
            </g-info-window>
            <g-marker :position="marker.position" v-else>
            </g-marker>
        </div>
    </g-map>
  </div>
</template>

<script>
import Hello       from './components/Hello'
import gMap        from './components/gMap'
import gMarker     from './components/gMarker'
import gInfoWindow from './components/gInfoWindow'

export default {
  name: 'app',
  components: {
    Hello,
    gMap,
    gMarker,
    gInfoWindow,
  },
  data: function() {
      return {
          markers: [
            {
                position: { lat: -34.397, lng: 150.644 },
                content: "<h1>Hello</h1><button>Bootan</button>",
            },
            {
                position: { lat: -34.397, lng: 149.644 },
                content: "<h1>Hello Again</h1>",
            },
            {
                position: { lat: -34.397, lng: 148.634 },
            },
            {
                position: { lat: -34.397, lng: 147.624 },
            },
            {
                position: { lat: -34.397, lng: 146.000 },
                content: "<h1>And again</h1>",
            },
          ],
      };
  },
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
