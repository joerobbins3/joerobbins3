async function run(){
    const locations = await fetchBuslocations();
    setTimeout(run, 15000);
}
async function fetchBuslocations(){
    const url = '';
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}
run();

    mapboxgl.accessToken = 'pk.eyJ1IjoianJvYmJpbnMxIiwiYSI6ImNrdGxvaGNlNDEwcnkyb3F6c3VtZm04MjkifQ.f8r7STgRk4lfeSKISikkbg';
    let map = new mapboxgl.Map({
        container: 'map', // div id
        style: 'mapbox://styles/mapbox/streets-v11', // style
        center: [-71.101,42.358], // location [lng, lat]
        zoom: 10 // zoom
    });

    function createMapMarker() {
        mapboxgl.accessToken =
          'pk.eyJ1IjoianJvYmJpbnMxIiwiYSI6ImNrdGxvaGNlNDEwcnkyb3F6c3VtZm04MjkifQ.f8r7STgRk4lfeSKISikkbg';
      
        let map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-71.091542, 42.358862],
          zoom: 12,
        });
      
        let marker = new mapboxgl.Marker().setLngLat([-71.091542, 42.358862]).addTo(map);
      }
      
      window.onload = () => {
        createMapMarker();
      };
      
// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';
  
  // TODO: create the map object using mapboxgl.map() function
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  // TODO: add a marker to the map
  let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
  
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
 