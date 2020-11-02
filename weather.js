class Weather {
  constructor(city) {
    this.apiKey = '9ebcfa7d024e4d15998100519200211';
    this.city = city;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`)

    const responseData = await response.json();

    return responseData;
  }

  // Change Location
  changeLocation (city) {
    this.city = city;
  }

}