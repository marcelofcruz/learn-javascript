function getYear(years, searchYear){
    return years.find(year => year === searchYear);
}
console.log(getYear([2019, 2020, 2021], 2020));