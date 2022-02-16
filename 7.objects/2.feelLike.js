function getWeather(city) {
    return `It's currently ${city.value} degrees in ${city.name}`;
}
console.log(getWeather({name: "Brasilia", value: 24})); 