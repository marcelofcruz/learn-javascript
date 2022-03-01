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

const limesToCut = (wedgesNeeded, limes) => {
    let lime = 0
    let totalWedges = 0
    if(wedgesNeeded !== 0 && limes.length !== 0){
        while (totalWedges <= wedgesNeeded){
            if (lime === limes.length && totalWedges < wedgesNeeded){
                return lime;
            }
            switch (limes[lime]) {
                case 'small':
                    totalWedges+=6
                    break;
                case 'medium':
                    totalWedges+=8
                    break;
                case 'large':
                    totalWedges+=10
                    break;
                default:
                    break;
            }
           
            lime++
        }
        return lime;

    } else {
        return lime
    }
}

const remainingOrders = (timeLeft, orders) => {
    let count = 0
    let timeToMix = 0
    while (timeToMix < timeLeft){
        timeToMix += timeToMixJuice(orders[count])
        count++
    }
    
    return orders.slice(count)
}

console.log(remainingOrders(7, orders))
