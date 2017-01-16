const Q = require("q");

var inProgress = false;

const loadingDeferred = Q.defer();
const loading         = loadingDeferred.promise;
const loaded          = () => loadingDeferred.resolve();
// Google API callback uses this to let us know when ready.
const callbackFuncName   = "mapsLoaded";
window[callbackFuncName] = () => loaded();

/*
load({
    key: 'api-key',
    version: '1.2',
    libraries: ['one', 'two', 'three'],
    premium:
});
*/

export const load = (args) => {
  if (!inProgress) {
    inProgress = true; // Only load once.

    let {key, client, version, libraries} = args;

    const googleMapScript = document.createElement('SCRIPT');

    // If premium client-key provided, use it instead of api-key.
    // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
    let options = {};
    if (client) {
        options.client = args.client;
    } else if (key) {
        options.key = args.key;
    }


    // libraries, should be an array.
    if (Array.prototype.isPrototypeOf(options.libraries)) {
      options.libraries = options.libraries.join(',');
    }

    options.callback = callbackFuncName;

    let baseUrl = 'https://maps.googleapis.com/';
    let url = baseUrl + 'maps/api/js?' +
      Object.keys(options)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(options[key]))
        .join('&');

    if (version) {
      url = url + '&v=' + version;
    }

    googleMapScript.setAttribute('src', url);
    googleMapScript.setAttribute('async', '');
    googleMapScript.setAttribute('defer', '');
    document.body.appendChild(googleMapScript);

    return loading;
  } else {
    // If already in progress, just return the promise.
    return loading;
  }
}

