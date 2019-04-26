class Community {
  constructor(cities = []) {
    this.cities = cities;
  }

  addCity(city) {
    return this.cities.push(city);
  }

  whichSphere(city) {
    if (city.latitude < 0) {
      return "Southern Hermisphere";
    } else if (city.latitude > 0) {
      return "Northern Hermisphere";
    } else {
      return "Equator";
    }
  }

  getMostNorthern() {
    if (this.cities.length > 0) {
      let latitudes = [];
      this.cities.forEach(city => {
        latitudes.push(city.latitude);
      });
      const result = this.cities
        .filter(city => city.latitude === Math.max(...latitudes))
        .map(result => result.name);
      return result[0];
    }
    return null;
  }

  getMostSouthern() {
    if (this.cities.length > 0) {
      let latitudes = [];
      this.cities.forEach(city => {latitudes.push(city.latitude)});
      const result = this.cities
        .filter(city => city.latitude === Math.min(...latitudes))
        .map(result => result.name);
      return result[0];
    }
    return null;
  }

  getPopulation() {
    return this.cities.length > 0 ?
    this.cities.reduce((accum, currentValue) => accum + currentValue.population, 0) :
    0
  }

}

export default Community;
