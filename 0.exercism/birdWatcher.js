birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

const totalBirdCount = birdsPerDay => {
    let sumBirds = 0;
    birdsPerDay.map(birdPerDay => sumBirds+= birdPerDay);
    return sumBirds;
};
console.log(totalBirdCount(birdsPerDay));

const birdsInWeek = (birdsPerDay, week) => {
    const final = week * 7;
    const initial = final - 7;
    let total = 0;
    birdsPerDay.slice(initial, final).map(birds => total += birds);
    return total;
};
console.log(birdsInWeek(birdsPerDay, 1));

const fixBirdCountLog = (birdsPerDay) => {
    for(let i = 0; i < birdsPerDay.length -1; i++){
        if (i % 2 === 0) {
            birdsPerDay[i] += 1;
        }
    }
    return birdsPerDay;
};
console.log(fixBirdCountLog(birdsPerDay));

