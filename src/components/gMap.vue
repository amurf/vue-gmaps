<template>
    <div>
        <g-marker :position="position"></g-marker>
    </div>
</template>

<script>
import Q from 'q';
import gMarker from './gMarker.vue';
import {loadMaps} from '../mapsConfig.js';

export default {
  name: 'gMap',
  components: {
    gMarker,
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
