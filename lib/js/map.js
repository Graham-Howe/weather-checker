/**
 * Loads map and sets default location and zoom level
 * @param {number} lat  
 * @param {number} lng 
 */
function loadMap(lat, lng) {
	
	var map = L.map('map').setView([lat, lng], 14);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.run-bike-hike',
	    accessToken: 'pk.eyJ1IjoiY3JhenlncmF5cyIsImEiOiJjaW00czRjankwMDFldmttM21zenB6N3V1In0.Pm5eEJs-2GFVbqXM1yzP9g'
	}).addTo(map);
	map.on('click', onMapClick);
}

/**
 * On click call getCurrentWeather from getweather.js
 * @param {object} 
 */
function onMapClick(e) {

    getCurrentWeather(e.latlng.lat, e.latlng.lng);
}