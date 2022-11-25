// Google Map
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.831353, lng: -87.628682 },
    zoom: 14,
  });
  var marker = new google.maps.Marker({
    position: { lat: 41.831353, lng: -87.628682 },
    map: map,
  });
  var addCircle = new google.maps.Circle({
    center: { lat: 41.831353, lng: -87.628682 },
	radius:100,
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.5,
	map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: "<p>This is the place where I live!</p>"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;


// Font Animation
var string = "Welcome to Gyuhwan Choi's Website!";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();
