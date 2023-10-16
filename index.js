// Code your solution in this file!
const returnFirstTwoDrivers = function(names) {
    return names.slice(0, 2);
  }

const returnLastTwoDrivers = function(names) {
    return names.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    };
    };

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLast) {
    if (firstOrLast === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers); 
    }
    else if (firstOrLast === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}