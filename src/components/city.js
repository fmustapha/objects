class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `${this.name} has a Latitude of ${this.latitude}
        a Longitude of ${this.longitude} and contains about ${this.population} people`;
    }

    movedIn(occupants) {
        return this.population + occupants;
    }

    movedOut(migrants) {
           return this.population - migrants; 
    }

    howBig() {
        const  size = this.population
        let name;
        if(size <=100 ) {
            return name +='Hamlet';
        } else if (size <= 1000) {
            return name = 'Village';
        } else if (size <= 20000) {
            return name = 'Town';
        } else if (size <= 100000) {
            return name = 'Large Town';
        } else if (size > 100000) {
            return name = 'City';
        } else {
            return 'Your city has no size';
        }
    }
}

export default City;