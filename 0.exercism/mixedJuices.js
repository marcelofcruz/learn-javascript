const timeToMixJuice = juice => {
    let time;
    switch (juice) {
        case 'Pure Strawberry Joy':
            time = 0.5;
            break;
        case 'Energizer':
            time = 1.5;
            break;
        case 'Green Garden':
            time = 1.5;
            break;
        case 'Tropical Island':
            time = 3;
            break;
        case 'All or Nothing':
            time = 5;
            break;
        default:
            time = 2.5;
            break;
    }

    return time;
};
console.log(timeToMixJuice('Green Garden'));