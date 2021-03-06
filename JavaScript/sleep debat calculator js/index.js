const getSleepHours = day => {
    var day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 6;
            break;
        case 'wednesday':
            return 4;
            break;
        case 'thursday':
            return 9
            break;
        case 'friday':
            return 5;
            break;
        case 'saturday':
            return 8;
            break;
        case 'sunday':
            return 1;
            break;
        default: return 'Invalid day entered '
            break;
    }

}

const getActualSleepHours = () => {
    var SleepHours = getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday')
    return SleepHours;
};

const getIdealSleepHours = idealHours =>
    idealHours * 7;
;

const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours(9);

    if (actualSleepHours === idealSleepHours) {
        console.log('the user got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        var moreSleep = actualSleepHours - idealSleepHours;
        console.log('the user got the ' + moreSleep + ' hours  of more sleep.');
    } else {
        var lessSleep = idealSleepHours - actualSleepHours;
        console.log('the user got ' + lessSleep + ' hours of less sleep.');
    }
}
calculateSleepDebt();


