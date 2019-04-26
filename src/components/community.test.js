import community from './community';

const myCommunity = new community();

const cities = [
    {
        name: "Sydney",
        latitude: -33.8688,
        longitude: 151.2093,
        population: 4452000
    },
    {
        name: "Salta",
        latitude: -24.7821, 
        longitude: -65.4232,
        population: 1333000
    },
    {
        name: "Calgary",
        latitude: 51.0486,
        longitude: -114.0708,
        population: 1239000
    },
    {
        name: "Abuja",
        latitude: 9.0765,
        longitude: 7.3986,
        population: 4452000
    },
    {
        name: "Wellington",
        latitude: -41.2865,
        longitude: 174.7762,
        population: 4452000
    },
    {
        name: "California",
        latitude: 36.7783,
        longitude: -119.4179,
        population: 5000000
    }
];


describe('The Community class', () => {
    it('should create a cities array', () => {
        expect(myCommunity.cities).toEqual([]);
    });

    it('should add new cities', () => {
        myCommunity.addCity(cities[0]);
        myCommunity.addCity(cities[1]);
        myCommunity.addCity(cities[2]);
        myCommunity.addCity(cities[3]);
        myCommunity.addCity(cities[4]);
        myCommunity.addCity(cities[5]);
        expect(myCommunity.cities).toEqual(cities);
    });

    it('should return the Hemisphere a city is located in', () => {
        expect(myCommunity.whichSphere).toBeDefined();
        expect(myCommunity.whichSphere(cities[3])).toEqual('Northern Hermisphere');
        expect(myCommunity.whichSphere(cities[0])).toEqual('Southern Hermisphere');
        expect(myCommunity.whichSphere(cities[2])).toEqual('Northern Hermisphere');
    });

    it ('should return the city in the most northern hemisphere',()=> {
        const cityList = ['Calgary', 'Abuja', 'Carlifornia'];
        // const cityList2 = ['Wellington', 'Sydney','Salta'];
        expect(myCommunity.getMostNorthern(cityList)).toEqual('Calgary');
        // expect(myCommunity.getMostNorthern(cityList2)).toEqual('Salta');
    });

    it ('should return the city in the most southern hemisphere',()=> {
        const cityList = ['Wellington', 'Sydney','Salta'];
        // const cityList2 = ['Calgary', 'Abuja', 'Carlifornia'];
        expect(myCommunity.getMostSouthern(cityList)).toEqual('Wellington');
        // expect(myCommunity.getMostSouthern(cityList2)).toEqual('Abuja');
    });

    it ('should return the population of all cities', ()=> {
        expect(myCommunity.getPopulation()).toEqual(20928000);
    });
});