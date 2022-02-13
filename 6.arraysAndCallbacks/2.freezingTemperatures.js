function getFreezingTemperatures(temperatures){
    return temperatures.filter(temperature => {
        if(temperature < 0){
            return temperature;
        }
    });
}
console.log(getFreezingTemperatures([1, -3, -2, 4, 10]));