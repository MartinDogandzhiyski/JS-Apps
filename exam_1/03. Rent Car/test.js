const { expect } = require('chai');
const motorcycleRider = require('./rentCar');

describe('Tests', function(){
    it('returns correct when AM', () => {
        const cat = 'AM';
        const result = motorcycleRider.licenseRestriction('AM');

        expect(result).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
    })
});

