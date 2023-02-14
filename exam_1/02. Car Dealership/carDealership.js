class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if(!this.#validateModel(model) 
        || !this.#validateHorsepower(horsepower) 
        || !this.#validatePriceAndMileage(price)
        || !this.#validatePriceAndMileage(mileage)) {
            throw new TypeError('Invalid input!')
        }
    }

    #validateModel(value){
        return typeof value == 'string' && value != '';
    }

    #validateHorsepower(value){
        return Number.isInteger(value);
    }

    #validatePriceAndMileage(value, value2) {
        return typeof value == 'number' && value >= 0;
    }
}   