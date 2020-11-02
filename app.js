// Init Storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation);

// Init UI
const ui = new UI(weather);

// Get wether on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

//

function getWeather() {
  weather.getWeather()
  .then(result => {
    ui.paint(result);
  })
  .catch(err => console.log(err));
}

// Change location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  //Change Location
  weather.changeLocation(city);

  //Set location at localStorage
  storage.setLocationData(city);

  //Get and display weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
});

