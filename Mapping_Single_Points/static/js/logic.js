// CHECK 

console.log("working");

// Create Map Object

let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });

let streets  = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

streets.addTo(map);
//  Add a marker to the map for Los Angeles, California.
let marker = L.circle([34.0522, -118.2437], { radius: 3000, color: "black", fillColor: "#ffffa1"}).addTo(map);