<template>
    <div></div>
</template>

<script>
import {loadMaps} from '../mapsConfig.js';
import Q from 'q';

export default {
  name: 'gMarker',
  props: {
    position: Object,
  },
  data: function() {
      return {
        marker: "",
      };
  },
  mounted: function() {
    let vm        = this;
    let parentMap = vm.$parent;

    Q.all([loadMaps, parentMap.mapPromise]).then(function() {
        vm.marker = new google.maps.Marker({
          position: vm.position,
          map: parentMap.mapObject,
        });
    });
  },
}
</script>

<style scoped>


</style>
