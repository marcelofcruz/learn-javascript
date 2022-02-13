function getPositiveTemperatures(temperatures){
    return temperatures.filter(temperature => {
        if(temperature >= 0){
            return temperature;
        }
    });
}
console.log(getPositiveTemperatures([1, -3, -2, 4, 10]));