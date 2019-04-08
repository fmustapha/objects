import City from './city';

const myCity = new City("Calgary", 38.8951,-77.0364, 400000);

describe('City class', () => {

    it('should create the respective properties of a city', () => {
        expect(myCity.name).toBeDefined();
        expect(myCity.latitude).toBeDefined();
        expect(myCity.longitude).toBeDefined();
        expect(myCity.population).toBeDefined();
    });

    it('should be able to display all four attributes in a single string', () => {
        const cityProps = `${myCity.name} has a Latitude of ${myCity.latitude}
        a Longitude of ${myCity.longitude} and contains about ${myCity.population} people`;
        expect(myCity.show()).toEqual(cityProps);
    });

    it('should be able to add to the population property', () => {
        const newOccupants = 190;
        expect(myCity.movedIn(newOccupants)).toEqual(myCity.population + newOccupants);
    });

    it('should be able to subtract from the population property', () => {
        const relocated = 300;
        expect(myCity.movedOut(relocated)).toEqual(myCity.population - relocated);
    });

    it('should be able to say how big the city is', () => {
        const description = 'City';
        expect(myCity.howBig()).toEqual(description);
        // expect(myCity.howBig(population =150000)).toEqual('City');
        // expect(myCity.howBig(population = 5000)).toEqual("Town");
        // expect(myCity.howBig(population = 50)).toEqual("Hamlet");
        // expect(myCity.howBig(population = 500)).toEqual("village");
    });

});