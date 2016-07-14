/**
 * Get the current weather for the requested location
 * @param {number} lat 
 * @param {number} lng
 */
function getCurrentWeather(lat, lng) {

	var key = '';
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lng + '&APPID=' + key, function(data) {
		reportCurrentConditions(data.name, data.weather[0].description);
	}, 'json');
};

/**
 * Set contents of report card to the closest area and the weather conditions nearby
 * @param {string} place 
 * @param {string} conditions
 */
 function reportCurrentConditions(place, conditions) {

	$('#area').html(place);
	$('#report').html(conditions);
}
