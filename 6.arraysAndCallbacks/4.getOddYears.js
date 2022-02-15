function getYearsOdd(years){
    return years.filter(year => {
        if( year % 2 !== 0){
            return year;
        }
    });
}
console.log(getYearsOdd([1997, 2000, 2003, 2006, 2009, 2012]));