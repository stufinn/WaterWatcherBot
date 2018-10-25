
// Helper functions
var randomNumber = (max) => Math.floor(Math.random() * max);

/**
 * Takes in a date in format YYYY-MM-DD and converts it to a string
 * e.g. 2014-09-12 ----> September 12, 2014
 * @param {string} date 
 */
var dateToText = (date) => {
    let year = date.substring(0,4);
  
    let month = date.substring(5,7);
    switch(month) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
        default:
            return '*Still Ongoing*';
    }

    let day = date.substring(8,);
    return `${month} ${day}, ${year}`;
};

// Primary functions
/**
 * Returns a random community that is currently under a drinking water advisory
 * @param {array} DWAarray 
 */
const randomActive = (DWAarray) => {
    //create new array with only active DWAs
    let activeDWAs = DWAarray.filter( entry => entry["Date Revoked"] === "None" );
    let randomActiveEntry = activeDWAs[randomNumber(activeDWAs.length)];
    // date = dateToText(randomActiveEntry["Date Set"]);
    // console.log(`The community of ${randomActiveEntry.Community} has has had a boil water advisory since ${dateToText(randomActiveEntry["Date Set"])}`);  
    return(`The community of ${randomActiveEntry.Community} has been under a boil water advisory since ${dateToText(randomActiveEntry["Date Set"])}.`);
    //To add: calculate time since it started
    // 
};

const randomAny = (dataArray) => {
    let randomEntry = dataArray[randomNumber(dataArray.length)];
    var revokedDate = randomEntry["Date Revoked"];
    // if (randomEntry["Date Revoked"] === 'None') {
    //     revokedDate = 'today';
    // }
    console.log(`The community of ${randomEntry.Community} had a drinking water advisory from ${dateToText(randomEntry["Date Set"])} until ${dateToText(revokedDate)}.`);

}

module.exports = {
    randomActive,
    randomAny
};

