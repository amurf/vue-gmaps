import {load} from './mapsLoader.js';

const key = "AIzaSyCz_QCFIhmy9_vBIzYpZUDH5niBFQWUzJQ";

export const loadMaps = function() {
    return load({
        key: key,
    });
}
