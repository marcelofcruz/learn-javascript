const dayRate = (ratePerHour) => {
    return ratePerHour * 8;
};

const daysInBudget = (budget, ratePerHour) => {
    return Math.floor(budget / dayRate(ratePerHour));
};

const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const getBudget = (value, discount) => {
        return value * (1 - discount);
    };

    const fullMonths = Math.floor(numDays / 22);
    const exceedingDays = numDays % (fullMonths * 22);

    return Math.ceil(
        getBudget(fullMonths * 22 * dayRate(ratePerHour), discount) + exceedingDays * dayRate(ratePerHour)   
    ); 
};
  