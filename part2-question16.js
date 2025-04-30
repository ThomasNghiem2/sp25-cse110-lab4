let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const key in statistics) {
    let firstLetter = `${key}`.substring(0,1);
    let propertyVal = `${statistics[key]}`;
    if((firstLetter == 'r') || (propertyVal % 2 == 1)) {
        console.log(propertyVal);
    }
}