<template>
    <div>
        <!--g-marker :position="position"></g-marker -->
        <!--g-info-window :position="position" :clickFunc="doClick">
            <h1>Hello there</h1>
            <p>How are you clicking on my marker?!</p>
            <button @click='doClick'>Click me</button>
        </g-info-window-->
        <slot></slot>
    </div>
</template>

<script>
import Q from 'q';
import gMarker from './gMarker.vue';
import gInfoWindow from './gInfoWindow.vue';
import {loadMaps} from '../mapsConfig.js';

export default {
  name: 'gMap',
  components: {
    gMarker,
    gInfoWindow,
  },
  methods: {
    doClick: function() {
       alert("Hello.");
    },
  },
  data: function() {
    return {
        mapObject: "",
        mapDeferred: Q.defer(),
        position: {
            lat: -34.397,
            lng: 150.644,
        },
    }
  },
  computed: {
    mapPromise: function() {
        return this.mapDeferred.promise;
    },
  },
  mounted: function() {
    let vm = this;

    const mapElement = vm.$el;
    const mapOptions = {
        center: {
            lat: -34.397,
            lng: 150.644,
        },
        zoom: 5,
        disableDefaultUI: false,
    };

    loadMaps().then(function() {
        vm.mapObject = new google.maps.Map(mapElement, mapOptions);
        vm.mapDeferred.resolve();
    }).catch(function(error) { console.error(error) });
  },
}
</script>

<style scoped>


</style>
