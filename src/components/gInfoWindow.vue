<template>
    <div v-show="ready">
        <slot></slot>
    </div>
</template>

<script>
import {loadMaps} from '../mapsConfig.js';
import Q from 'q';

export default {
  name: 'gInfoWindow',
  props: {
    position: Object,
    clickFunc: Function,
  },
  data: function() {
      return {
        marker: "",
        infoWindow: "",
        ready: false,
      };
  },
  mounted: function() {
    let vm        = this;
    let parentMap = vm.$parent;

    Q.all([loadMaps, parentMap.mapPromise]).then(function() {
        vm.infoWindow = new google.maps.InfoWindow({
            content: vm.$el,
        });

        vm.marker = new google.maps.Marker({
          position: vm.position,
          map: parentMap.mapObject,
        });

        vm.marker.addListener('click', function() {
            vm.infoWindow.open(parentMap, vm.marker);
        });

        //Display infoWindow contents.
        vm.ready = true;
    });
  },
}
</script>

<style scoped>


</style>
