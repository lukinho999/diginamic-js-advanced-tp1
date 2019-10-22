module.exports = class Planet {
    // constructor(planet) {
    //     this = {...planet};
    // }
    constructor({name, population}) {
        this.name = name;
        this.population = population;
    }

    static countPlanetsPopulation(array){
            let sum = array.reduce((a,b)=>a+b)
        return sum;
    }
    

}