import community from './community';

const myCommunity = new community();

describe('The Community class', () => {
    it('should create the respective properties of a city', () => {
        const city = 'Calgary'
        expect(myCommunity.whichSphere()).toExist();
        expect(myCommunity.whichSphere(city)).toEqual('Southern Hermisphere');
    });

    it ('should return the city in the most northern hemisphere',()=> {
        expect(myCommunity.getMostNorthern).toEqual();
    });

    it ('should return the city in the most southern hemisphere',()=> {
        expect(myCommunity.getMostSouthern).toEqual();
    });

    it ('should return the population of all cities', ()=> {
        expect(myCommunity.getPopulation).toEqual();
    });
});