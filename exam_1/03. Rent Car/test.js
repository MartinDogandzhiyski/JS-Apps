const { expect } = require('chai');
const findNewApartment = require('./rentCar');

describe('Tests', function(){
    it('throws error correct', () => {
        const city = 3;
        const result = findNewApartment.isGoodLocation(city, false);

        expect(result).to.throw("Invalid input!");
    })

    it('returns correct for another city', () => {
        const city = 3;
        const result = findNewApartment.isGoodLocation('Sofiaa', false);

        expect(result).to.equal("This location is not suitable for you.");
    })
});





describe('findNewApartment', function() {
    describe('isGoodLocation', function() {
      it('tk', function() {
        assert.equal(findNewApartment.isGoodLocation("Burgas", true), "This location is not suitable for you.");
      });
  
      it('shotrue', function() {
        assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!");
      });
  
      it('shfion is false', function() {
        assert.equal(findNewApartment.isGoodLocation("Plovdiv", false), "There is no public transport in area.");
      });
  
      it('should throw an error if the input is invalid', function() {
        assert.throw(() => findNewApartment.isGoodLocation(123, true), Error, "Invalid input!");
      });
    });
  
    describe('isLargeEnough', function() {
      it('should return a comma-separated sn the minimalSquareMeters', function() {
        assert.equal(findNewApartment.isLargeEnough([50, 60, 70, 80], 60), "60, 70, 80");
      });
  
      it('should return an empty string ifhan the minimalSquareMeters', function() {
        assert.equal(findNewApartment.isLargeEnough([40, 50, 55], 60), "");
      });
  
      it('should throe input is invalid', function() {
        assert.throw(() => findNewApartment.isLargeEnough("not an array", 60), Error, "Invalid input!");
      });
    });
  
    describe('isItAffordable', function() {
      it('should returess than or equal to the budget', function() {
        assert.equal(findNewApartment.isItAffordable(50000, 70000), "You can afford this home!");
      });
  
      it('should return "You price is greater than the budget', function() {
        assert.equal(findNewApartment.isItAffordable(70000, 50000), "You don't have enough money for this house!");
      });
  
      it('should thro input is invalid', function() {
        assert.throw(() => findNewApartment.isItAffordable(50000, "not a number"), Error, "Invalid input!");
      });
    });
  });
