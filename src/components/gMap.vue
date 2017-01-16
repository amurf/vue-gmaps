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
        /*
		var infowindow = new google.maps.InfoWindow({
          content: "<h1>I'm a thing</h1><button v-on:click='alertMe'>Click me!</button>",
        });
		var marker = new google.maps.Marker({
          position: { lat: -34.397, lng: 150.644 },
          map: vm.mapObject,
          title: 'Hello World!',
        });
		marker.addListener('click', function() {
          infowindow.open(vm.mapObject, marker);
        });
        */
    }).catch(function(error) { console.error(error) });
  },
}
</script>

<style scoped>


</style>
