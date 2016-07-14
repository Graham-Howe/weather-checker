/**
 * Gets the device location and sends them off for use in setCoords
 */
function initLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCoords);
    } else {
        alert("Geolocation is not supported by this browser - Time for an upgrade!");
    }
}

/**
 * Defines coordinates for the weather call in getweather.js and map location in map.js
 * @param {Geoposition-object} position  
 */
function setCoords(position) {

    var lat = position.coords.latitude,
    	lng = position.coords.longitude;
    loadMap(lat, lng);
    getCurrentWeather(lat, lng);
}